import React, {Component} from 'react';

//import components
import Character from '../character.js';
import Pagination from '../Pagination.js'
class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      heroes: [],
      total: 0,
    }
  }

  handleTyping(ev){
    //store the value of the
    this.setState({
      search: ev.target.value,
    })
  }

  //search the marvel universe for characters starting with the designated letters
  handleSearch(){
    //info for search
    var crypto = require('crypto');
    let ts =  new Date().getTime();
    let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
    let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8'
    let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&nameStartsWith=${this.state.search}&&apikey=${pub_key}&hash=${hash}`
    fetch(url)
       .then(resp => resp.json())
       .then(response =>

         this.setState({
           heroes: response.data.results,
           total: response.data.total,
         })

       );
  }


    //Goal: handle pagination
    //When a search is executed where the results are greater than 20, we need to create a pagination appearance. Since the API limits the call total to 100, we will need to make seperate calls when a user trys to move to the next page.
      //To do this, we will need to use the offset query parameter.
      //

    //Goal: figure out the number of pages that will be needed.

  calculatePages(num){
    return(Math.ceil(num/20))
  }

  render(){
    //display the characters that are available
    const heroes = this.state.heroes.map((hero, index)=> <Character key={index} details={hero} />);
    //Send down the total number of pages we will need
    let pages = this.state.total > 0 ?   <Pagination pages={this.calculatePages(this.state.total)} /> : null;

    return(
      <div>
        <input type="text" placeholder="Search Heroes" onChange={ev => this.handleTyping(ev)}/>
        <input type="submit" value="Search" onClick={() =>this.handleSearch()}/>
        <h1> Character Search </h1>
        <ul id='searchedChars'>
          {heroes}
        </ul>
        {pages}
      </div>
    )
  }
}

export default Search;
