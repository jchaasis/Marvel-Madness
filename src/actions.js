
//store the character details
export function getChar(character){
  return{
    type:'GETCHAR',
    payload: character
  }
}

export function guess(letter){
  return{
    type:'GUESS',
    payload:letter
  }
}

export function offset(page){
  return{
    type:'PAGE',
    payload: page,
  }
}
