import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }   
    }
  
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    type="text" 
                    placeholder={this.state.userName}
                    onChange={this.props.handleInput} 
                />
                <button>Submit</button>
            </form>
        )
    }
}
export default LoginForm;

