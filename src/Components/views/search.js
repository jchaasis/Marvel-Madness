import React, {Component} from 'react';

import Character from '../character.js';
class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      heroes: [],
    }
  }

  handleTyping(ev){
    //store the value of the
    this.setState({
      search: ev.target.value,
    })

  }

  handleSearch(){
    //info for
    var crypto = require('crypto');
    let ts =  new Date().getTime();
    let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
    let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8'
    let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&nameStartsWith=${this.state.search}&&apikey=${pub_key}&hash=${hash}`
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

    const heroes = this.state.heroes.map((hero, index)=> <Character key={index} details={hero} />);

    return(
      <div>
        <input type="text" placeholder="Search Heroes" onChange={ev => this.handleTyping(ev)}/>
        <input type="submit" value="Search" onClick={() =>this.handleSearch()}/>
        <h1> Character Search </h1>
        <ul>
        {heroes}
        </ul>
      </div>
    )
  }
}

export default Search;
