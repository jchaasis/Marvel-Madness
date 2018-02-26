import React, { Component } from 'react';

class DetailedCharacter extends Component {
  constructor(props){
    super(props)

    this.state = {
      character: [],
    }
  }

  //to get the route param once it is up there
   // const rp = this.props.match.params.id;

   componentWillMount(){
     var crypto = require('crypto');
     let ts =  new Date().getTime();
     let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
     let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8'
     let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');
     let charId = this.props.match.params.id;
     let url = `http://gateway.marvel.com/v1/public/characters/${charId}?ts=${ts}&apikey=${pub_key}&hash=${hash}`
     fetch(url)
        .then(resp => resp.json())
        .then(response =>
          // console.log(response)
          this.setState({
            character: response.data.results,
          })
        );
   }

  render(){
    console.log(this.state.character)
    // console.log(this.state.character[0].name)

    return(
      <li>

        <h3> {this.state.character.name} </h3>

        <h2> Description: </h2>
          <p> {this.state.character.description}</p>

      </li>
    )
  }
}

export default DetailedCharacter;
