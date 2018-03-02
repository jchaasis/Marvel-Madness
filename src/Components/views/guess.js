import React, {Component} from 'react';

class Guess extends Component {
  constructor(props){
    super(props)

    this.state = {
      characters: [],
      character: false,
      guessed:[],
      blanks: '',

    }
  }
  //TODO:
  //revised gameplan: I am unable to figure out how the IDs are assigned to each character so it doesnt make sense to create a random number then check to see if there is a matching character with that ID. Instead:
  // 1. pick a random letter in the alphabet
  // 2. retrieve the max amount (100) of characters that can be pulled from the api at once whose name begins with that letter.
  // 3. store those 100 in an array and then pick a random character from that sample
  //the downside to this is that we won't have access to all 8,000 plus characters

  //when the play buttton is clicked, retrieve a character
  retrieveCharacters(){
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
       ).then(()=>
          this.selectRandomCharacter(this.state.characters)
        )
  }

  //select a character randomly from the retrieved sample
  selectRandomCharacter(characters){
    //shortened for use below
    let sample = this.state.characters
    // the max to be used when finding a random integer for the index of thge random character
    let maxIndex = sample.length

    //0 will always be the min
    let randIndex = Math.floor(Math.random() * (maxIndex - 0) + 0)
    //return a random character from the array of characters
    this.setState({
      character: sample[randIndex],
    });
  }

  //handle the typing when a letter is submitted
  handleGuesses(ev){

    let guess = ev.target.value;

    ev.target.value = '';

    this.setState({
      guessed: this.state.guessed.concat([guess]),
    })
  }

  render(){

  //shortened for use below
  const character = this.state.character.name;
  const letters = this.state.guessed;
  //to be filled in after the play button is clicked
  let name = null;
  let pic = null;
  let input = null;

  //turn the name into blanks
  function blankifyName(name){
    let re = /[a-zA-Z]/g;
    return name.replace(re, '_').split('').join(' ')
  }

  //when a character is found, display their image, name, and the input box.
  if (this.state.character != false){
    //
    let character = this.state.character;
    //****this is setting up blanks every render
    let playableName = blankifyName(character.name);
    //use this one to update as guesses are made
    //***each render it is being replaced with a new set of blanks
    let changingName = playableName;
    //thumbnail source
    let imgURL = character.thumbnail.path + '.' + character.thumbnail.extension;

    //loop through the guessed array and if a letter matches one in the name, show replace the blank with that letter
    for (let i = 0; i<this.state.guessed.length; i++){
      for (let j = 0; j<character.name.length; j++){
        if (this.state.guessed[i] === character.name[j]){
          console.log(changingName)

            changingName.charAt(j).replace(letters[i])
        }
      }
    }

    //generate a img tag for the character picture
    pic = <img className='characterThumb' src={imgURL} alt='tbd'/>

    //display the changing name
    name = <h3>{changingName}</h3>
    input = <input type="text" maxLength="1" onChange={ev=>this.handleGuesses(ev)}/>
  }

  //loop through the guessed array and if a letter matches one in the name, show replace the blank with that letter
  // for (let i = 0; i<letters.length; i++){
  //   for (let j = 0; j<character.length; j++){
  //     if (letters[i] === character[j]){
  //       console.log('its a match on 128')
  //         // changingName.charAt(j) == letters[i]
  //     }
  //   }
  // }

    console.log(this.state.character)

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
        <div>
        {pic}
        {name}
        {input}
        </div>
        <input type="submit" value="Play" onClick={()=>this.retrieveCharacters()}/>
      </div>
    )
  }
}

export default Guess;
