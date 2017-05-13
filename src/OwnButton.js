import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class OwnButton extends Component {
    render() {
        return (
            <Button bsStyle={this.props.style} onClick={this.props.clickevent}>{this.props.name}</Button>
        )
    }
}

export default OwnButton;