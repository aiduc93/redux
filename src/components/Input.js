import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        }
    };

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <input
                type='text'
                placeholder={this.props.placeholder}
                autoFocus='true'
                value={this.state.value}
                onChange= {this.handleChange}
            />
        );
    }
}