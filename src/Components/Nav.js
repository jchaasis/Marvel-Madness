import React, {Component} from 'react'

import {Link} from 'react-router-dom';

class NavBar extends Component {

  render(){
    return(
      <div>
        <ul id='navBar'>
          <Link to={'/'}>
            <li> Home </li>
          </Link>
          <Link to={'/search'}>
            <li> Hero Search </li>
          </Link>
          <Link to={'/guess'}>
            <li> Hero Guess </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default NavBar;
