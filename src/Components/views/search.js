import React, {Component} from 'react';


//import components
import Character from '../character.js';
import Pagination from '../Pagination.js'

//import that good good from redux
import { connect } from 'react-redux';

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
  handleSearch(offset){
    console.log(offset)
    //info for search
    var crypto = require('crypto');
    let ts =  new Date().getTime();
    let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
    let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8'
    let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');

    //The url can be two different things. One: the initial searched. Two: Pagination searchs
    let url = offset === undefined ?  `http://gateway.marvel.com/v1/public/characters?ts=${ts}&nameStartsWith=${this.state.search}&apikey=${pub_key}&hash=${hash}` : `http://gateway.marvel.com/v1/public/characters?ts=${ts}&nameStartsWith=${this.state.search}&offset=${offset}&apikey=${pub_key}&hash=${hash}`
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

  //when a button is clicked it changes the state and thus leads to a rerender. Use a component lifecycle method to update the state accordingly.
 // static getDerivedStateFromProps(nextProps, prevState){
 //    console.log('the new props are: ' + nextProps.page)
 //    console.log('the prev state is: ' + prevState)
 //
 //    console.log(this.props)
 //    if (nextProps.page !== prevState.page){
 //      console.log('there are some new props up in here!')
 //    }
 //  }

  componentWillReceiveProps(nextProps){
      if(this.props.page !== nextProps.page){
        this.handleSearch((nextProps.page * 20)-20)
      }
  }

  //I am having trouble with this new static method. I would think that at the very least it should log the initial sentence when it is run but I haven't been able to get anything to print out. TODO: figure out how to get this bad boy working.
  // static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log('is this thing on')
  //    if (prevState.search !== nextProps.search) {
  //      console.log('hello world from the proops')
  //      return {
  //
  //        page: nextProps.search,
  //
  //      };
  //    }
  //    // Return null to indicate no change to state.
  //    return null;
  //  }



  render(){

    //display the characters that are available
    const heroes = this.state.heroes.map((hero, index)=> <Character className='characterSnip' key={index} details={hero} />);
    //Send down the total number of pages we will need
    let pages = this.state.total > 0 ?   <Pagination pages={this.calculatePages(this.state.total)} search={()=>this.handleSearch()} /> : null;

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

function mapState2Props(state){
  return{
          page: state.page,
  }
}

export default connect(mapState2Props, null)(Search);
