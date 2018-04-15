import React, {Component} from 'react'

import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props){
    super(props)

    this.state=({
      scrolled: false,
      yPos: 0,
    })
  }

  handleScroll(){
    if(this.state.scrolled === false){
      //store the y position so that when it is 0, we do not show the nav Bar
      //when it is greater than 0, we show the bar.
      let lastY;
      window.addEventListener('scroll', ()=> {
        this.setState({
          scrolled: true,
          yPos: window.scrollY,
        })
      });
    }
  }

  render(){
    //goal: the nav bar appears once the user scrolls.
    this.handleScroll()

    //set the styles
    let visible = this.state.yPos > 200 ? `0px` : `-100px`;
    // let movement = this.state.yPos > 200 ? 'drop-in' : 'pull-up'

    let styles = {
      'top': visible,
      // 'animation': movement,
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
