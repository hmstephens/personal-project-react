import React, { Component } from 'react';

export class ForkedItems extends Component {
    state = {
        userName: '',
        userEvents: [], 
        userRepos: []
        }

    render() {
        const forkEvents = this.props.userRepos.filter(item => item.fork);

        return (
            <div>
                {forkEvents.length > 0 ?
                    <h3>{forkEvents.length} Forked Repositories for User: {this.props.userName}</h3> : 
                    null
                }

                {forkEvents.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </div>
        )
    }
}