import React from 'react';
import {Link} from 'react-router-dom'
import {Table, Popconfirm, Input, Icon, Button, message} from 'antd';
import '../css/App.css'

class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: false
    };
    handleChange = (e) => {
        this.setState({value: e.target.value})
    };
    check = () => {
        let that = this;
        this.setState({editable: false});
        let id = that.props.id;
        let value = that.state.value;
        console.log(value);
        fetch('./api/update', {
            method: 'put',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf8"
            },
            body: JSON.stringify({
                id, name: value
            })
        })
            .then(function (response) {
                response.json().then(json => {
                    that.setState({dataSource: json.data});
                    console.log(json.data);
                    console.log('更新成功');
                });
            }).catch(function () {
            console.log('出错了');
        })

    };
    edit = () => {
        this.setState({editable: true});
    };

    render() {
        const {value, editable} = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input value={value}
                                   onChange={this.handleChange}
                                   onPressEnter={this.check}/>
                            <Icon type='check'
                                  className="editable-cell-icon-check"
                                  onClick={this.check}/>
                        </div> :
                        <div className="editable-cell-text-wrapper">
                            <Link to="/paper">{value || ' '}</Link>
                            <Icon type='edit'
                                  className="editable-cell-icon"
                                  onClick={this.edit}/>
                        </div>
                }
            </div>
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.columns = [{
            title: '名称',
            dataIndex: 'name',
            render: (text, record) => (
                <EditableCell value={text} id={record.id}
                              onChange={this.onCellChange(record.id, 'name')}/>
            )
        }, {
            title: '创建人',
            dataIndex: 'creator',
        }, {
            title: '创建时间',
            dataIndex: 'createTime',
        }, {
            title: '操作',
            dataIndex: 'option',
            render: (text, record) => {
                return (
                    this.state.dataSource.length > 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.id)}>
                            <a href="#">Delete</a>
                        </Popconfirm>
                    ) : null
                );
            }
        }];

        this.state = {
            dataSource: [],
            count: 4
        };

    }

    componentWillMount = function () {
        let that = this;
        fetch('./api/getPaperList', {
            method: 'get',
        })
            .then(function (response) {
                response.json().then(json => {
                    that.setState({dataSource: json.result});
                });
            }).catch(function () {
            console.log('出错了');
        })
    };
    onDelete = function (id) {
        const dataSource = [...this.state.dataSource];
        this.setState({dataSource: dataSource.filter(item => item.id !== id)});
        fetch(`./api/delete/${id}`, {
            method: 'delete',
        })
            .then(function (response) {
                response.json().then(json => {
                    message.info(json.result);
                });
            }).catch(function () {
            console.log('出错了');
        })
    };
    onCellChange = (key, dataIndex) => {

        return (value) => {
            const dataSource = [...this.state.dataSource];
            const target = dataSource.find(item => item.id === key);
            if (target) {
                target[dataIndex] = value;
                this.setState({dataSource});
            }

        };

    };


    handleAdd = () => {
        const {count, dataSource} = this.state;
        const newData = {
            name: `test ${count}`,
            creator: `person ${count}`,
            createTime: new Date().toLocaleDateString()
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1

        });

        fetch('./api/save', {
            method: 'post',
            body: JSON.stringify(newData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf8"
            }
        })
            .then(function (response) {
                response.json().then(json => {
                    message.info(json.result);
                    console.log(json);
                });
            }).catch(function () {
            console.log('出错了');
        })
    };


    render() {
        const columns = this.columns;
        return (
            <div style={{width: 800, margin: '100px auto'}}>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table dataSource={this.state.dataSource} columns={columns}/>

            </div>
        );
    }
}

export default App;

