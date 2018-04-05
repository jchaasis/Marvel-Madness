import React, {Component} from 'react';

//redux goodies
import { connect } from 'react-redux';

class Game extends Component{
  constructor(props){
    super(props)

    this.state=({
      guessed: [],
      started: false,
      blanks:'',
    })
  }
  //***this still needs to be corrected

  //accept guesses as they are submitted. after each guess, check with the name and see if the letter is present in the name
  handleGuesses(ev){
    let character = this.props.character.name;
    let letters = this.state.guessed;

    let guess = ev.target.value;
    //this works for now but will need to be fixed so that the input box emptys after a letter is typed in.
    ev.target.value = '';
    //if a guess has not been made yet, set the state of the blanks
    if (this.state.started === false){
      this.setState({
        guessed: this.state.guessed.concat([guess]),
        blanks: this.blankifyName(this.props.character.name),
        started: true,
      })

      for (let i = 0; i<this.state.guessed.length; i++){
        for (let j = 0; j<this.props.character.name.length; j++){
          if (this.state.guessed[i] === this.props.character.name[j]){

            console.log(`match on ${this.state.guessed[i]}`)

            this.setState({
              guessed: this.state.guessed.concat([guess]),
            })
          }
        }
      }

    } else if (this.state.started === true) {

      for (let i = 0; i<this.state.guessed.length; i++){
        for (let j = 0; j<character.length; j++){
          if (this.state.guessed[i] === character[j]){

            console.log(this.state.guessed)
            console.log(`match on ${this.state.guessed[i]}`)
            this.setState({
              guessed: this.state.guessed.concat([guess]),
            })
          }
        }
      }
    }
    // this.setState({
    //   guessed: this.state.guessed.concat([guess]),
    //   started: true,
    // })
  }

  blankifyName(name){
    console.log(name)
   let re = /[a-zA-Z]/g;
   return name.replace(re, '_').split('').join(' ')
 }

  // componentDidMount(){
  //   console.log(this.props.character)
  //   this.setState({
  //     blanks: this.blankifyName(this.props.character.name)
  //   })
  // }



  render(){
    console.log(this.state)
    console.log(this.props.character)

    //shortened for use below
    const character = this.props.character;
    const letters = this.state.guessed;
    // //to be filled in after the play button is clicked
    // let name = ;
    // let pic = null;
    // let input = null;

    //turn the name into blanks
    //  blankifyName(name){
    //   let re = /[a-zA-Z]/g;
    //   return name.replace(re, '_').split('').join(' ')
    // }

    //when a character is found, display their image, name, and the input box.
    let imgURL;
    if (this.props.character !== undefined){
      let character1 = this.props.character.character;
      console.log(character1)
      //****this is setting up blanks every render
      console.log(character1.name)
      let playableName = this.blankifyName(character1.name);
      console.log(playableName)
      //use this one to update as guesses are made
      //***each render it is being replaced with a new set of blanks
      let changingName = playableName;
      // thumbnail source
      imgURL = character1.thumbnail.path + '.' + character1.thumbnail.extension;
    }
      //loop through the guessed array and if a letter matches one in the name, show replace the blank with that letter
      // for (let i = 0; i<this.state.guessed.length; i++){
      //   for (let j = 0; j<character.length; j++){
      //     if (this.state.guessed[i] === character[j]){
      //       console.log(changingName)
      //       console.log(this.state.guessed)
      //
      //         changingName.charAt(j).replace(letters[i])
      //     }
      //   }
      // }

      // //generate a img tag for the character picture
      // let pic = <img className='characterThumb' src={imgURL} alt='tbd'/>
      //
      // //display the changing name
      // let name = <h3>{changingName}</h3>
      // let input = <input type="text" maxLength="1" onChange={ev=>this.handleGuesses(ev)}/>

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
          <h3>{this.state.blanks}</h3>
          <input type="text" maxLength="1" onChange={ev=>this.handleGuesses(ev)}/>
        </div>
      </div>
    )
  }
}

function mapState2Props(state){
    console.log(state)
    return{
      character: state,
    }
}

export default connect(mapState2Props, null)(Game);
