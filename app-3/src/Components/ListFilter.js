import React, { Component } from 'react';

export default class ListFilter extends Component {
    constructor() {
        super();

        this.state = { 
            filterString: '', 
            movies: [
            'Harry Potter Series', 
            'So I Married an Ax Murder',
            'Indiana Jones and the Temple of Doom',
            'Better off Dead'
            ],
         }
    };

    handleChange(filter) {
        this.setState({ filterString: filter });
    }

    render() { 
      let moviesToDisplay = this.state.movies
        .filter((element, index) => {
            return element.includes(this.state.filterString);
        })
        .map((element, index) => {
            return <h2 key={index}>{element}</h2>;
        });
      return ( 
        <div className='App'>
            <input onChange={e => this.handleChange(e.target.value)} type="text" />
            {moviesToDisplay}
        </div>
         )
    }
}