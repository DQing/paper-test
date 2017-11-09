import React from 'react';
import {Table, Button, Popconfirm, message} from 'antd';
import '../css/App.css';
import EditableCell from './EditableCell';

export default class PaperList extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '试卷名称',
            dataIndex: 'name',
            width: '30%',
            render: (text, record) => {
                return < EditableCell
                    value={text}
                    id={record.id}
                    onChange={this.onCellChange(record.id, 'name')}
                />
            }
            ,
        }, {
            title: '创建时间',
            dataIndex: 'createTime',
        }, {
            title: '创建者',
            dataIndex: 'creator',
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    this.props.paperList.length >= 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.id)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error_msg) {
            message.info(newProps.error_msg);
        }
    }

    componentDidMount() {
        this.props.getPaperList();
    }

    onCellChange = (id, dataIndex) => {
        return (value) => {
            this.props.cellChange(id, value);
        };
    }
    onDelete = (id) => {
        this.props.onDelete(id);
    }

    handleAdd = () => {
        this.props.onAdd();
    }

    render() {
        const {paperList} = this.props;
        const columns = this.columns;
        return (
            <div style={{width: 800, margin: '60px auto'}}>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={paperList} columns={columns}/>

            </div>
        );
    }
}
