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

    //if there are none, make sure to show a message 
    //saying that there are no recent pull request events 
    // <h3>Error: {this.props.userName} has 0 Pull Request Events</h3>

    // visual indicator: open, closed or merged
    // -- payload.pull_request.state === open
    // -- payload.pull-request.head.base.merged === true

    render() {
        const pullEvents = this.props.userEvents.filter(item => item.type === "PullRequestEvent")
        return (
            <div>
                {pullEvents.length > 0 ?
                    <h3>{pullEvents.length} Pull Request Events for User: {this.props.userName}</h3> : 
                    null}
                
                {pullEvents.map(item => (
                    <li key={item.id}>
                        {item.payload.pull_request.state}---
                        <a href={item.payload.pull_request.html_url} key={item.id}>
                            {item.payload.pull_request.title}
                        </a>  
                    </li>
                ))}
            </div>
        )
    }
}

export default PullRequestItems;
