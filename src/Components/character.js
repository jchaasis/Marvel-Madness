import React, { Component } from 'react';

class Character extends Component {
  constructor(props){
    super(props);
  }
  render(){

    return(
      <li>
        <img className='characterThumb' src={this.props.details.thumbnail.path + '.' + this.props.details.thumbnail.extension} alt='tbd'/>
        <h2> {this.props.details.name} </h2>
      </li>
    )
  }
}

export default Character;
