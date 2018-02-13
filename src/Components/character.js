import React, { Component } from 'react';

class Character extends Component {
  constructor(props){
    super(props);
  }
  render(){

    return(
      <li>
        <h2> {this.props.details.name} </h2>
      </li>
    )
  }
}

export default Character;
