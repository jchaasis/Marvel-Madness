import React, { Component } from 'react';

//import from withRouter
import {Link} from 'react-router-dom';

class Character extends Component {
  // constructor(props){
  //   super(props);
  //
  //   // this.state = {
  //   //   charId: "",
  //   // }
  // }

  // //capture the click so that it can be passed on in the route params to display the detailed page
  // handleClick(ev){
  //   this.setState({
  //     charId: ev.id,
  //   })
  // }
  
  render(){

    return(
      <li>
        <Link to={`/DetailedCharacter/${this.props.details.id}`}>
          <img className='characterThumb' src={this.props.details.thumbnail.path + '.' + this.props.details.thumbnail.extension} alt='tbd'/>
          <h2> {this.props.details.name} </h2>
        </Link>
      </li>
    )
  }
}

export default Character;
