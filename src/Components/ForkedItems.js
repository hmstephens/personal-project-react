import React, { Component } from 'react';

class ForkedItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userEvents: [], 
            userRepos: []
        }
    }

    //Each of the forked repos should display 
    //the name of that repo as a link, and link 
    //to the base repo.
    //
    //if there are none, make sure to show a message 
    //saying that there are no recent pull request events 
    // <h3>Error: {this.props.userName} has 0 Forked Repositories</h3>
    render() {
        const forkEvents = this.props.userRepos.filter(item => item.fork)
        return (
            <div>
                {forkEvents.length > 0 ?
                    <h3>{forkEvents.length} Forked Repositories for User: {this.props.userName}</h3> : null}
                {forkEvents.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </div>
        )
    }
}

export default ForkedItems;
