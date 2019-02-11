import React, { Component } from 'react';

export class LoginForm extends Component {
    state = {}   
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter username"
                    onChange={this.props.handleInput} 
                />
                <button>Submit</button>
            </form>
        )
    }
}