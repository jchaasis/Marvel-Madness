import React, { Component } from 'react';

class DetailedCharacter extends Component {
  constructor(props){
    super(props)

    this.state = {
      character: '',
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
            //since the data comes back as an array with one object, store the first element
            character: response.data.results[0],
          })
        );
   }

  render(){
    //shortened for use below
      let character = this.state.character;
    //image source url
      let picSrc = character != '' ? character.thumbnail.path + '.' + character.thumbnail.extension : null

    return(
      <li>

        <h2> {character.name} </h2>

        <img className='characterThumb' src={picSrc} alt='tbd'/>

        <h3> Description: </h3><p> {character.description}</p>

      </li>
    )
  }
}

export default DetailedCharacter;
