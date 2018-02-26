import React, {Component} from 'react'

//import Components
import Character from './character.js';

class Characters extends Component {
  constructor(props){
    super(props);

    this.state = {
      heroes: [],
    };
  }

  componentWillMount(){
    var crypto = require('crypto');
    let ts =  new Date().getTime();
    let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
    let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8'
    let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${pub_key}&hash=${hash}`
    fetch(url)
       .then(resp => resp.json())
       .then(response =>
         // console.log(response)
         this.setState({
           heroes: response.data.results,
         })
       );
  }

  render(){

    let characters = this.state.heroes.map( (hero,index) => <Character key={index} details={hero}/>)

    console.log(this.state.heroes)
    return(
      <ul id='charList'>
        {characters}
      </ul>
    )
  }

}

export default Characters;
