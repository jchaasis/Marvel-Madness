import {createStore} from 'redux';

function reducer(state, action){
  console.log(action)
  console.log(state);

  //update the current character which is being guessed
  if (action.type === 'GETCHAR'){
    return {
      character: action.payload.name,
    }
  }


  return state;
}

export default createStore(reducer, {
  character: '',
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
