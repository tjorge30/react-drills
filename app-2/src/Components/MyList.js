import React, { Component } from 'react';

export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            movie1: 'Harry Potter Series',
            movie2: 'So I Married an Ax Murder',
            movie3: 'Indiana Jones and the Temple of Doom',
            movie4: 'Better off Dead'
         }
    }
    render() { 
        return ( 
            <div>
                <ul>
                    <li>{ this.state.movie1 }</li>
                    <li>{ this.state.movie2 }</li>
                    <li>{ this.state.movie3 }</li>
                    <li>{ this.state.movie4 }</li>
                </ul>
            </div>
         );
    }
}
 