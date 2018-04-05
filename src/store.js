import {createStore} from 'redux';

function reducer(state, action){
  console.log(action)

  //update the current character which is being guessed
  if (action.type === 'GETCHAR'){
    return {
      character: action.payload,
    }
  }
}


export default createStore(reducer, {
character: {name:'initial'},
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
