import React, { Component } from 'react';

import './App.css';

//import comoponents
import Character from './Components/character.js';
import Characters from './Components/Characters.js';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      heroes: '',
    };
  }

  //
  // componentWillMount(){
  //   var crypto = require('crypto');
  //   let ts =  new Date().getTime();
  //   let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
  //   let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8'
  //   let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');
  //   let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${pub_key}&hash=${hash}`
  //   fetch(url)
  //      .then(resp => resp.json())
  //      .then(response =>
  //        // console.log(response)
  //        this.setState({
  //          heroes: response,
  //        })
  //      );
  //
  // }
  render() {

    console.log(this.state.heroes)
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div>
          <Characters/>
        </div>


      </div>
    );
  }
}

export default App;
