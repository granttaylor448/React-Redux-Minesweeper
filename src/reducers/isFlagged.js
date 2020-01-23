const flaggedReducer = (state = 40, action) =>{
  switch (action.type){
    case "FLAG_BOMB":
      return state - 1;
    case "UNFLAG_BOMB":
      return state + 1
    default:
      return state;
  }
}
 
export default flaggedReducer;