import React, {Component} from 'react';

import NewsSection from '../NewsSection.js';


class Home extends Component {

  render(){
    return(
      <div id='homeBody'>
        <div>
            <p>
              Welcome fellow Marvel fans! After the recent release of the Black Panther movie and the upcoming release of Infinity Wars, I decided to put together a little Marvel webpage to practice my development skills. Enjoy!
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
