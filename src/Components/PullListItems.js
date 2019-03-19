import React, { Component } from 'react';

export class PullListItems extends Component {
  state = {
    pullRequestEvents: []
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userName}/events`)
      .then(results => results.json())
      .then(results => {
        this.setState({ pullRequestEvents: results });
      })
      .catch(err => alert('Please enter a valid username.'));
  }

  render() {
    const pullEvents = this.state.pullRequestEvents.filter(
      item => item.type === 'PullRequestEvent'
    );
    return (
      <div>
        {pullEvents.length > 0 ? (
          <h3>{pullEvents.length} Pull Request Events</h3>
        ) : null}

        {pullEvents.map(item => (
          <li key={item.id}>
            {item.payload.pull_request.merged
              ? `merged: `
              : `${item.payload.pull_request.state}: `}
            <a href={item.payload.pull_request.html_url} key={item.id}>
              {item.payload.pull_request.title}
            </a>
          </li>
        ))}
      </div>
    );
  }
}
