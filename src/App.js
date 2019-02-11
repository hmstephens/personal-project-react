import React, { Component } from 'react';
import { LoginForm } from './Components/LoginForm';
import { PullRequestItems } from './Components/PullRequestItems';
import { ForkedItems } from './Components/ForkedItems';

class App extends Component {
    state = {
      userName: '',
      userEvents: [],
      userRepos: []
    }

  handleInput = (e) => {
    this.setState({ userName: e.target.value });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://api.github.com/users/${this.state.userName}/events`)
          .then(results => results.json())
          .then(results => {
              this.setState({ userEvents: results })
          })
      fetch(`https://api.github.com/users/${this.state.userName}/repos`)
          .then(results => results.json())
          .then(results => {
              this.setState({ userRepos: results })
          })
}

  render() {
    return (
      <div>
          <LoginForm 
            handleInput={this.handleInput} 
            handleSubmit={this.handleSubmit} 
          />
          <ul>
            <PullRequestItems 
              userEvents={this.state.userEvents}
              userName={this.state.userName}
            />
          </ul>
          <ul>
            <ForkedItems 
              userRepos={this.state.userRepos}
              userEvents={this.state.userEvents}
              userName={this.state.userName}
            />
          </ul>
      </div>
    );
  }
}

export default App;