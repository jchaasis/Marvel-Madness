import {createStore} from 'redux';

function reducer(state, action){
  console.log(action)

  //update the current character which is being guessed
  if (action.type === 'GETCHAR'){
    return {
      character: action.payload,
      letters: state.letters,
      page: state.page,
    }
  }

  //add letters to the guessed array
  if (action.type === 'GUESS'){
    return{
      character: state.character,
      letters: state.letters.concat([action.payload]),
      page: state.page,
    }
  }

  if (action.type === 'PAGE'){
    console.log('the current page is ' + action.payload)
    return{
      character: state.character,
      letters: state.letters,
      page: action.payload,
    }
  }

  return state;
}


export default createStore(reducer, {
character: undefined,
letters: [],
page: 0,
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
