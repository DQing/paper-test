import React from 'react';
import { Link } from 'react-router-dom'
import {Table, Popconfirm, Input, Icon, Button} from 'antd';
import './App.css'
class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: false
    };
    handleChange = (e)=> {
        this.setState({value: e.target.value})
    };
    check = ()=> {
        this.setState({editable: false})
    };
    edit = ()=> {
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
            key: 'name',
            render: (text, record)=>(
                <EditableCell value={text}
                              onChange={this.onCellChange(record.key, 'name')}/>
            )
        }, {
            title: '创建人',
            dataIndex: 'person',
            key: 'person',
        }, {
            title: '创建时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
            render: (text, record)=> {
                return (
                    this.state.dataSource.length > 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={()=> this.onDelete(record.key)}>
                            <a href="#">Delete</a>
                        </Popconfirm>
                    ) : null
                );
            }
        }];

        this.state = {
            dataSource: [{
                key: '1',
                name: '前端试卷',
                person: 'douqing',
                time: '2017-11-06'
            }, {
                key: '2',
                name: '后端试卷',
                person: 'huanglizhen',
                time: '2017-11-06'
            }, {
                key: '3',
                name: '前端试卷',
                person: 'huanglizhen',
                time: '2017-11-06'
            }],
            count: 4
        };

    }

    onDelete = function (key) {
        const dataSource = [...this.state.dataSource];
        this.setState({dataSource: dataSource.filter(item=>item.key !== key)});
    };
    onCellChange = (key, dataIndex) => {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            const target = dataSource.find(item => item.key === key);
            if (target) {
                target[dataIndex] = value;
                this.setState({dataSource});
            }
        };
    };


    handleAdd = ()=> {
        const {count, dataSource} = this.state;
        const newData = {
            key: count,
            name: `test ${count}`,
            person: `person ${count}`,
            time: new Date().toLocaleDateString()
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1

        });
    };

    render() {
        const columns = this.columns;
        return (
            <div style={{width: 400, margin: '100px auto'}}>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table dataSource={this.state.dataSource} columns={columns}/>
            </div>
        );
    }
}

export default App;

