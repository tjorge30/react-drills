import React, { Component } from 'react';

class Image extends Component {
    
    render() { 
        return ( 
            <div>
                <img src={ this.props.url }></img>
                <h1>ERROR 404</h1>
            </div>
         );
    }
}
 
export default Image;