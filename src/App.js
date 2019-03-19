import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginForm } from './Components/LoginForm';
import { ForkedListItems } from './Components/ForkedListItems';
import { PullListItems } from './Components/PullListItems';

class App extends Component {
  state = {
    userName: ''
  };

  handleInput = e => {
    this.setState({ userName: e.target.value });
    console.log(this.state.userName);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route
            path="/"
            render={props => (
              <LoginForm
                {...props}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route
            path="/submitted-username"
            render={props => (
              <PullListItems {...props} userName={this.state.userName} />
            )}
          />
          <Route
            path="/submitted-username"
            render={props => (
              <ForkedListItems {...props} userName={this.state.userName} />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
