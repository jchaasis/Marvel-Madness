import React, { Component } from 'react';

//import actions
import { offset } from '../actions.js';

//import redux good goods
//import redux goodies
import { connect } from 'react-redux';

class PageButton extends Component {

  render(){
    //differentiate between which page is active and which is not.
    // let color = this.props.pageNum === this.props.number ? {'backgroundColor': 'red'} : null;

      let classname = this.props.pageNum === this.props.number ? 'activePageButt' : 'pageButt';

    return(
    <button className={classname} onClick={()=>this.props.page(this.props.number)}>
      {this.props.number}
    </button>
    )
  }
}

function mapState2Props(state){
  return{
    pageNum: state.page,
  }
}

function mapDispatch2Props(dispatch){
  return {
    page: function(page){
      dispatch(offset(page))
    }
  }
}

export default connect(mapState2Props, mapDispatch2Props)(PageButton);
