import '../css/Paper.css';
import React from 'react';
import {Layout, Button, Radio, Input, Col, Card} from 'antd';

const {Header, Content, Footer} = Layout;
const RadioGroup = Radio.Group;

export default class Paper extends React.Component {


    onSubmit() {

        this.props.onSubmit();
    }

    render() {
        return <Layout style={{margin: '100px 200px'}}>
            <Content>
                {this.state.blankQuiz.length > 0 ? <BlankQuiz blankQuiz={this.props.paper}/> : ""}
            </Content>
            <Footer>
                <Button type="primary" onClick={this.onSubmit}>提交</Button>
            </Footer>
        </Layout>
    }
};

class BlankQuiz extends React.Component {

    onTextChange(e) {
        const value = e.target.value;
        console.log('value===', value);
    }

    render() {
        const {TextArea} = Input;
        return <div>
            <Col className="gutter-row" span={22} offset={1}>
                <Card className="tws-card" noHovering title="填空题">
                    {this.props.blankQuiz.map((b, i) => {
                        return <div key={i} style={{margin: "10px 0"}}>
                            <h3>{i + 1}、{b.description}</h3>
                            <TextArea onChange={this.onTextChange} rows={4}/>
                        </div>
                    })}
                </Card>
            </Col>
        </div>
    }
}