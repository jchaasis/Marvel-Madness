import {createStore} from 'redux';

function reducer(state, action){
  console.log(action)

  //update the current character which is being guessed
  if (action.type === 'GETCHAR'){
    return {
      character: action.payload,
      letters: state.letters
    }
  }

  //add letters to the guessed array
  if (action.type === 'GUESS'){
    return{
      character: state.character,
      letters: state.letters.concat([action.payload])
    }
  }

  return state;
}


export default createStore(reducer, {
character: undefined,
letters: [],
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
