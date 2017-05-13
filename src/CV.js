import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import OwnButton from './OwnButton';
import './CV.css';

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            inputValue: "",
            bulletList: [],
        };
        this.updateInputValue = this.updateInputValue.bind(this);
        this.addToList = this.addToList.bind(this);
        this.wipeList = this.wipeList.bind(this);
    }

    render() {

        const input = <input className="form-control" value={this.state.inputValue} onChange={this.updateInputValue} />;

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={8}>
                            {input}
                        </Col>
                        <Col xs={2}>
                            <OwnButton name="Add to list" style="primary" clickevent={this.addToList} />
                        </Col>
                        <Col xs={2}>
                            <OwnButton name="Wipe list" style="danger" clickevent={this.wipeList} />
                        </Col>
                    </Row>
                </Grid>
                <h1>Current input: {this.state.inputValue}</h1>
                <h1>Hello, {this.props.name}</h1>
                <h1>Current time is {this.state.date.toLocaleTimeString()}.</h1>
                {this.state.bulletList.map((item, index) => (
                    <li className="listitem" key={index}>{item}</li>
                ))}
            </div>
        )
    }

    wipeList() {
        this.setState({
            bulletList: []
        });
    }
    addToList(evt) {
        let newList = this.state.bulletList;
        newList.push(this.state.inputValue);
        this.setState({
            bulletList: newList,
        });
    }
    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

export default CV;