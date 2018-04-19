import React, { Component } from 'react';

class PageButton extends Component {

  render(){
    return(
    <button>
      {this.props.number}
    </button>
    )
  }
}

export default PageButton;
