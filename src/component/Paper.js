import React from 'react';
import {Radio, Button, Input} from 'antd';
import '../css/paper.css';
class Paper extends React.Component {
    handleSubmit = ()=> {

    };

    render() {
        return (
            <div className="paper">
                <BaseQuiz/>
                <FillBlankQuiz/>
                <Button className="editable-add-btn" onClick={this.handleSubmit}>Submit</Button>

            </div>
        )
    }
}

class BaseQuiz extends React.Component {
    render() {
        return (
            <div className="baseQuiz">

                <h2>选择题</h2>
                <div className="quiz">
                    <h3>1.UML与软件工程的关系是：</h3>
                    <p>
                        <Radio>(A)UML就是软件工程</Radio>
                    </p>
                    <p>
                        <Radio>(B)UML参与到软件工程中软件开发过程的几个阶段</Radio>
                    </p>
                    <p>
                        <Radio>(C)UML与软件工程无关</Radio>
                    </p>
                    <p>
                        <Radio>(D)UML是软件工程的一部分</Radio>
                    </p>
                </div>
                <div className="quiz">
                    <h3>2.UML与软件工程的关系是：</h3>
                    <p>
                        <Radio>(A)UML就是软件工程</Radio>
                    </p>
                    <p>
                        <Radio>(B)UML参与到软件工程中软件开发过程的几个阶段</Radio>
                    </p>
                    <p>
                        <Radio>(C)UML与软件工程无关</Radio>
                    </p>
                    <p>
                        <Radio>(D)UML是软件工程的一部分</Radio>
                    </p>
                </div>

            </div>
        )
    }
}
class FillBlankQuiz extends React.Component {
    render() {
        return (
            <div>
                <h2>填空题</h2>
                <div className="quiz">
                    <p>1.UML的中文全称是：</p>
                    <Input/>
                </div>
                <div className="quiz">
                    <p>2.对象最突出的特征是：</p>
                    <Input/>
                </div>
            </div>
        )
    }

}


export default Paper;