import React, {Component} from 'react'

import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props){
    super(props)

    this.state=({
      scrolled: false,
    })
  }

  handleScroll(){
    if(this.state.scrolled === false){
      window.addEventListener('scroll', ()=> {

        this.setState({
          scrolled: true,
        })

      });
    }
  }

  render(){
    //goal: the nav bar appears once the user scrolls.
    this.handleScroll()

    //set the styles
    let visible = this.state.scrolled === true ? 'visible' : 'hidden';

    let styles = {
      'visibility': visible,

    }

    return(
      <div id='navContainer' style={styles}>
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
