
//store the character details
export function getChar(character){
  return{
    type:'GETCHAR',
    payload: character,
  }
}
