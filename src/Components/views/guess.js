import React, {Component} from 'react';

class Guess extends Component {
  constructor(props){
    super(props)

    this.state = {
      characters: [],
    }
  }
  //TODO:
  //revised gameplan: I am unable to figure out how the IDs are assigned to each character so it doesnt make sense to create a random number then check to see if there is a matching character with that ID. Instead:
  // 1. pick a random letter in the alphabet
  // 2. retrieve the max amount (100) of characters that can be pulled from the api at once whose name begins with that letter.
  // 3. store those 100 in an array and then pick a random character from that sample
  //the downside to this is that we won't have access to all 8,000 plus characters



  //when the play buttton is clicked, retrieve a character
  retrieveCharacter(){
    //function that will generate random letter which will be used to grab a sample of characgters
    function randomLetter(){
      let letters = 'abcdefghijklmnopqrstuvwxyz'
      let randNum = Math.random() * (25 - 0) + 0;
      return letters.charAt(randNum)
    }

    //used to create the hash
    var crypto = require('crypto');
    let ts =  new Date().getTime();
    let pub_key = 'f31ade9cd87b1035aadb2c59197a80f1';
    //I'm supposed to keep this one private so sshhhhh, keep it a secret!
    let priv_key = 'd0a850f093335bd68134ea33a7d2b9e15b4307a8';
    let hash = crypto.createHash('md5').update(ts + priv_key + pub_key).digest('hex');
    let charId = this.props.match.params.id;
    //call the random letter function in the url, this time whenever the play button is clicked, the it will choose a new random letter
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&nameStartsWith=${randomLetter()}&limit=100&apikey=${pub_key}&hash=${hash}`

    //request the characters that begin with the designated random letter
    fetch(url)
       .then(resp => resp.json())
       .then(response =>
         this.setState({
           characters: response.data.results,
         })
       );


    //
    // fetch(url)
    //    .then(resp => resp.json())
    //    .then(response =>
    //      console.log(response)
    //      this.setState({
    //        //since the data comes back as an array with one object, store the first element
    //        characters: response.data.results[0],
    //      })
    //    );
  }
  //be sure that the character has an image
  //display the character image and the blanks

  render(){
    console.log(this.state.characters)
    return(
      <div>
        <h1> Character Guess </h1>

        <div id="instructions">
          <p>
          So you think you know your Marvel characters? Then take a whack at the hang man style guessing game.
          </p>
          <ol>
            <li> You will be shown the image of a character along with the blanks to represent the letters in his/her/its name
            </li>
            <li> You will be given 8 attempts to guess the characters name </li>
            <li> Choosing to take a hint will count as one of your attempts
            </li>
          </ol>

        </div>
        <input type="submit" value="Play" onClick={()=>this.retrieveCharacter()}/>
      </div>
    )
  }
}

export default Guess;
