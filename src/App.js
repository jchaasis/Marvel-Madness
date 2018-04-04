import React, { Component } from 'react';

import './App.css';

//import router
import { Switch, Route, withRouter } from 'react-router-dom';

// //import redux goodies
// import { connect } from 'react-redux';

//import comoponents
import NavBar from './Components/Nav.js';

//import views
import home from './Components/views/home.js';
import search from './Components/views/search.js';
import guess from './Components/views/guess.js';
import DetailedChar from './Components/views/DetailedChar.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <NavBar/>

        <div>

        </div>
        <main>
          <Switch>
              <Route path='/DetailedCharacter/:id' component={DetailedChar}/>
              <Route path='/search' component={search}/>
              <Route path='/guess' component={guess}/>
              <Route path='/' component={home}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
