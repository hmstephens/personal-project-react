import React, { Component } from 'react';

export class ForkedListItems extends Component {
  state = {
    userRepos: []
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userName}/repos`)
      .then(results => results.json())
      .then(results => {
        this.setState({ userRepos: results });
      })
      .catch(err => alert('Please enter a valid username.'));
  }

  render() {
    const forkedRepos = this.state.userRepos.filter(item => item.fork);
    return (
      <div>
        {forkedRepos.length > 0 ? (
          <h3>{forkedRepos.length} Forked Repositories</h3>
        ) : null}

        {forkedRepos.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    );
  }
}
