import React, {Component} from 'react';

//redux goodies
import { connect } from 'react-redux';
//import actions
import { guess } from '../actions.js'

class Game extends Component{
  constructor(props){
    super(props)

    this.state=({
      guessed: [],
      started: false,
      blanks:'',
      strikes: 8,
    })
  }
  //***this still needs to be corrected

  //accept guesses as they are submitted. after each guess, check with the name and see if the letter is present in the name
  handleGuesses(ev){

    // //the guessing has begun
    // this.setState({
    //   started: true,
    // })
    //shortened for use below
    let character = this.props.character.name;
    let letters = this.props.letters;
    let guess = ev.target.value;

    //when the textbox is cleared return so that the empty string isnt evalutated or pushed to the letters
    if (guess === ''){
      return
    }
    //clear the textbox after a value is entered
    function clear(foo){
      foo = ''
    }

    setTimeout(clear(ev.target.value), 3000)

    //only push the guess values that include letters not backspaces
    if (guess !== ''){
      this.props.guess(guess)
    }

    //create a regex constructor to combine the letters and check to see if theletters are in the name.
    let re = new RegExp(guess, 'g')

      //if they are present, check to see how many times the letter shows up.
      //if just once, simply take that index and switch it out.
      //if more than once, iterate through to replace multiple

    //test for presence
    let present = re.test(character)

    //if the letter isn't present, deduct from strikes
    if (present === false){
      this.setState({
        strikes: this.state.strikes - 1,
      })
    }

    //test for quantity
    let quantity;
    if (present === true){
      quantity = character.match(re).length
    }

    //if the letter only shows up once
    if (present === true && quantity === 1){
      let index = character.search(re);
      console.log(index + ' is the index')
      //grab the current blanks
      let updateBlanks = this.state.blanks.split(' ')

      console.log(updateBlanks)
      //update the specific index
      // updateBlanks.charAt(index).replace(guess)
      updateBlanks[index] = guess;

      let returnedBlanks = updateBlanks.join(' ')
      console.log(returnedBlanks + ' is the new copy')
      //update the state
      this.setState({
        blanks: returnedBlanks,
      })

      return
    }
    //if the letter appears more than once, figure out the index of each and store it. then replace each blank with that letter
    if (present === true && quantity > 1){
      let data;
      //store the indices
      let indices = []

      while(data = re.exec(character)){
        indices.push(data.index)
      }

      //now that we know where each matching character sits, we need to loop through the indices array to get each index and plug it into the corresponding blank.

      //grab the current blanks
      let updateBlanks = this.state.blanks.split(' ')
      console.log(updateBlanks)

      for (let i = 0; i<indices.length; i++){
        updateBlanks[indices[i]] = guess;
      }
      let returnedBlanks = updateBlanks.join(' ')
      console.log(returnedBlanks + ' is the new copy')

      //update the state with the new version of blanks
      this.setState({
        blanks: returnedBlanks,
      })

      console.log(indices)
    }

  }

  blankifyName(name){
   let re = /[a-zA-Z]/g;
   return name.replace(re, '_').split('').join(' ')
 }

 componentDidMount(){
   //the game portion has mounted so switch the started status
   if (this.state.started === false){
     this.setState({
       started: true,
       blanks: this.blankifyName(this.props.char)
     });
   }
 }

  // componentWillUpdate(){
  //   if (this.state.started === false && this.props.character !== undefined){
  //     console.log('componenet updated')
  //     this.setState({
  //       blanks: this.blankifyName(this.props.character.name)
  //     })
  //   }
  // }

  render(){
    console.log(this.props.character)

    //shortened for use below
    const letters = this.state.guessed;
    // //to be filled in after the play button is clicked
    // let name = ;
    // let pic = null;
    // let input = null;

    //when a character is found, display their image, name, and the input box.
    let imgURL;
    let changingName;

    let attempts = this.state.started === true ? <h1> {this.state.strikes} </h1> : null;
    // if (this.state.started === true){
    //   changingName = this.state.blanks;
    // }
    if (this.props.character !== undefined){
      let character1 = this.props.character;
      //****this is setting up blanks every render
      //use this one to update as guesses are made
      //***each render it is being replaced with a new set of blanks

      changingName = this.state.started === true ? this.state.blanks : this.blankifyName(character1.name)
      // changingName = this.blankifyName(character1.name);
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

    return(
      <div>
        <div>
          {attempts}
          <img className='characterThumb' src={imgURL} alt='tbd'/>
          <h3>{this.state.blanks}</h3>
          <input type="text" maxLength="1" onChange={ev=>this.handleGuesses(ev)}/>
        </div>
      </div>
    )
  }
}
function mapDispatch2Props(dispatch){
  return{
    guess: function(letter){
      dispatch(guess(letter))
    }
  }
}
function mapState2Props(state){
    return{
      character: state.character,
      letters: state.letters
    }
}

export default connect(mapState2Props, mapDispatch2Props)(Game);
