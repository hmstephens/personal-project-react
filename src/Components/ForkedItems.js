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
    render() {
        const forkEvents = this.props.userRepos.filter(item => item.fork)
        return (
            <div>
                <h3>Forked Repositories for User: {this.props.userName}</h3>
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
