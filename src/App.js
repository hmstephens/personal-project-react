import React, { Component } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import PullRequestItems from './Components/PullRequestItems';
import ForkedItems from './Components/ForkedItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: "Enter username",
      userEvents: [],
      userRepos: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event) {
    const userInput = event.target.value;
    this.setState({ userName: userInput });
  }

  handleSubmit(event) {
      event.preventDefault();
      fetch(`https://api.github.com/users/${this.state.userName}/events`)
          .then(results => results.json())
          .then(results => {
              this.setState({ userEvents: results })
              console.log(results)
          })
      fetch(`https://api.github.com/users/${this.state.userName}/repos`)
          .then(results => results.json())
          .then(results => {
              this.setState({ userRepos: results })
              console.log(results)
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
