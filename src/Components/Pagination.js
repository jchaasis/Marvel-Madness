import React, { Component } from 'react';

//import Components
import PageButton from './PageButton.js'

class Pagination extends Component {
  constructor(props){
    super(props)

    this.state=({
      counter: 0,
    })
  }

  render(){


    console.log(this.props.pages)
    return(
      <div>

        <h1>{this.props.pages}</h1>

      </div>
    )
  }
}

export default Pagination;
