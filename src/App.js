import React, { Component } from 'react';

import './App.css';

//import comoponents
import Character from './Components/character.js';
import Characters from './Components/Characters.js';
import NavBar from './Components/Nav.js'
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      heroes: '',
    };
  }

  render() {

    console.log(this.state.heroes)
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <NavBar/>

        <div>
          <Characters/>
        </div>


      </div>
    );
  }
}

export default App;
