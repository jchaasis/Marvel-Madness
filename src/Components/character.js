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
    //set the background of the div as tne image provided for the character
    let styles = {
      'backgroundImage': `url(${this.props.details.thumbnail.path + '.' + this.props.details.thumbnail.extension})`,
  
    }

    return(
      <li className='characterSnip' style={styles}>
        <Link to={`/DetailedCharacter/${this.props.details.id}`}>
          <h2 className='characterName'> {this.props.details.name} </h2>

        </Link>
      </li>
    )
  }
}

export default Character;
