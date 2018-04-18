import React, {Component} from 'react';

import NewsSection from '../NewsSection.js';


class Home extends Component {

  render(){
    return(
      <div id='homeBody'>
        <div id='aboutSect'>
            <h1> HOME </h1>
            <p className='homeP'>
              Welcome fellow Marvel fans! After the recent release of the Black Panther movie and the upcoming release of Infinity Wars, I decided to put together a little Marvel webpage to practice my development skills. Enjoy!
            </p>

            <h1> IPSUM </h1>
            <p className='homeP'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div>
          <NewsSection />
        </div>
      </div>
    )
  }
}

export default Home;
