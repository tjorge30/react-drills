import React, { Component } from 'react';

export default class UserInputs extends Component {
    
    constructor() {
      super();

        this.state = { 
          textInput: ''
        }
    };

    handelChange(val) {
        this.setState({ textInput: val })
    };

    render() { 
        return ( 
            <div>
                <h1>Type Some Text</h1> 
                <p>to see what happens</p>
                <input className='inputBox' onChange={ (e) => this.handelChange(e.target.value) }></input>
                <p> { this.state.textInput } </p>
            </div>
        )
    }
    
}
