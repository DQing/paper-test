import '../css/Paper.css';
import React from 'react';
import {Layout, Button, Radio, Input, Col, Card} from 'antd';

const {Header, Content, Footer} = Layout;
const RadioGroup = Radio.Group;

export default class PaperInfoPage extends React.Component {
    constructor() {
        super();
        this.state = {
            choiceQuiz: [{
                id: 1,
                description: "请选择下列说法正确的一项",
                optionOne: "A",
                optionTwo: "B",
                optionThree: "C",
                optionFour: "D",
                type: "choice"
            }, {
                id: 2,
                description: "请选择下列说法正确的一项",
                optionOne: "A",
                optionTwo: "B",
                optionThree: "C",
                optionFour: "D",
                type: "choice"
            }],
            blankQuiz: [{
                id: 1,
                description: "js的全称",
                type: "blank"
            }, {
                id: 2,
                description: "js的全称",
                type: "blank"
            }]
        }
    }

    // componentDidMount() {
    //     this.props.getPaperName(parseInt(this.props.match.params.id));
    // }

    render() {
        return <Layout>
            <Header>
                <h1 className="header">{this.props.name}</h1>
            </Header>
            <Content style={{padding: '20px 0', background: "white"}}>
                {this.state.choiceQuiz.length > 0 ? <ChoiceQuiz choiceQuiz={this.state.choiceQuiz}/> : ""}
                {this.state.blankQuiz.length > 0 ? <BlankQuiz blankQuiz={this.state.blankQuiz}/> : ""}
            </Content>
            <Footer style={{background: "white"}}>
                <Button type="primary">提交</Button>
            </Footer>
        </Layout>;
    }
};

class ChoiceQuiz extends React.Component {
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return <div>
            <Col className="gutter-row" span={22} offset={1}>
                <Card className="tws-card" noHovering title="一、选择题">
                    {this.props.choiceQuiz.map((c, i) => {
                        return <div key={i} style={{margin: "10px 0"}}>
                            <h3>{i + 1}、{c.description}</h3>
                            <RadioGroup onChange={this.onChange}>
                                <Radio value="A">{c.optionOne}</Radio>
                                <Radio value="B">{c.optionTwo}</Radio>
                                <Radio value="C">{c.optionThree}</Radio>
                                <Radio value="D">{c.optionFour}</Radio>
                            </RadioGroup>
                        </div>
                    })}    </Card>
            </Col>

        </div>
    }
}

class BlankQuiz extends React.Component {

    render() {
        const {TextArea} = Input;
        return <div>
            <Col className="gutter-row" span={22} offset={1}>
                <Card className="tws-card" noHovering title="二、填空题">
                    {this.props.blankQuiz.map((b, i) => {
                        return <div key={i} style={{margin: "10px 0"}}>
                            <h3>{i + 1}、{b.description}</h3>
                            <TextArea rows={4}/>
                        </div>
                    })}
                </Card>
            </Col>
        </div>
    }
}