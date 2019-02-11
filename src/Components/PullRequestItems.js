import React, { Component } from 'react';

export class PullRequestItems extends Component {
    state = {
        userName: "Enter username",
        userEvents: [],
        userRepos: []
    }

    render() {
        const pullEvents = this.props.userEvents.filter(item => item.type === "PullRequestEvent")
        return (
            <div>
                {pullEvents.length > 0 ?
                    <h3>{pullEvents.length} Pull Request Events for User: {this.props.userName}</h3> : 
                    null
                }
                
                {pullEvents.map(item => (
                    <li key={item.id}>
                        {item.payload.pull_request.merged ? `merged: ` : `${item.payload.pull_request.state}: `}
                        <a href={item.payload.pull_request.html_url} key={item.id}>
                            {item.payload.pull_request.title}
                        </a>  
                    </li>
                ))}
            </div>
        )
    }
}