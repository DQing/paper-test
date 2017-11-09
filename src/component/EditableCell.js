import React from 'react';
import {Table, Input, Icon, Button, Popconfirm, Row, Col} from 'antd';
import {Link} from 'react-router-dom';

export default class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: false,
        id: this.props.id
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({value});
    }
    check = () => {
        this.setState({editable: false});
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit = () => {
        this.setState({editable: true});
    }

    render() {
        const {value, editable} = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            <Link to={`/Paper/${this.state.id}`}>{value || ' '}</Link>
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}