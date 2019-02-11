import React, { Component } from 'react';

class PullRequestItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "Enter username",
            userEvents: [],
            userRepos: []
        }
    }

    //Each of the pull requests should display the title
    // of the pull request as a link, and link to that pull request.
    // payload.pull_request.title
    //payload.pull_request.html_url
    render() {
        const pullEvents = this.props.userEvents.filter(item => item.type === "PullRequestEvent")
        return (
            <div>
                <h3>Pull Request Events for User: {this.props.userName}</h3>
                {pullEvents.map(item => (
                    <a href={item.payload.pull_request.html_url}>
                        <li key={item.id}>
                            {item.payload.pull_request.title}
                        </li>
                    </a>
                ))}
            </div>
        )
    }
}

export default PullRequestItems;
