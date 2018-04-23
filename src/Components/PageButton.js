import React, { Component } from 'react';

//import actions
import { offset } from '../actions.js';

//import redux good goods
//import redux goodies
import { connect } from 'react-redux';

class PageButton extends Component {

  render(){
    return(
    <button onClick={()=>this.props.page(this.props.number)}>
      {this.props.number}
    </button>
    )
  }
}

function mapDispatch2Props(dispatch){
  return {
    page: function(page){
      dispatch(offset(page))
    }
  }
}

export default connect(null, mapDispatch2Props)(PageButton);
