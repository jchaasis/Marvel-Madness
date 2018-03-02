import React, {Component} from 'react';

class Game extends Component{
  constructor(props){
    super(props)

    this.state=({
      guessed: [],
    })
  }

  handleGuesses(ev){

    let guess = ev.target.value;

    ev.target.value = '';

    this.setState({
      guessed: this.state.guessed.concat([guess]),
    })
  }

  render(){
    //shortened for use below
    const character = this.props.character.name;
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

      //
      let character1 = this.props.character;
      //****this is setting up blanks every render
      let playableName = blankifyName(character1.name);
      //use this one to update as guesses are made
      //***each render it is being replaced with a new set of blanks
      let changingName = playableName;
      //thumbnail source
      let imgURL = character1.thumbnail.path + '.' + character1.thumbnail.extension;

      //loop through the guessed array and if a letter matches one in the name, show replace the blank with that letter
      for (let i = 0; i<this.state.guessed.length; i++){
        for (let j = 0; j<character.length; j++){
          if (this.state.guessed[i] === character[j]){
            console.log(changingName)
            console.log(this.state.guessed)

              changingName.charAt(j).replace(letters[i])
          }
        }
      }

      //generate a img tag for the character picture
      pic = <img className='characterThumb' src={imgURL} alt='tbd'/>

      //display the changing name
      name = <h3>{changingName}</h3>
      input = <input type="text" maxLength="1" onChange={ev=>this.handleGuesses(ev)}/>

    //loop through the guessed array and if a letter matches one in the name, show replace the blank with that letter
    // for (let i = 0; i<letters.length; i++){
    //   for (let j = 0; j<character.length; j++){
    //     if (letters[i] === character[j]){
    //       console.log('its a match on 128')
    //         // changingName.charAt(j) == letters[i]
    //     }
    //   }
    // }

      console.log(this.props.character)
    return(
      <div>
      <div>

      <img className='characterThumb' src={imgURL} alt='tbd'/>
      <h3>{changingName}</h3>
      <input type="text" maxLength="1" onChange={ev=>this.handleGuesses(ev)}/>
      </div>

      </div>
    )
  }
}

export default Game;
