import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LoginForm extends Component {
  state = {
    userName: ''
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={this.props.handleInput}
        />
        <Link to="/submitted-username">
          <button>Submit</button>
        </Link>
      </form>
    );
  }
}
