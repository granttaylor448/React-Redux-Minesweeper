const counterReducer = (state = 0, action) =>{
  switch (action.type){
    case "FOUND_BOMB":
      return state + 1;
    case "REMOVED_FLAG_FROM_BOMB":
      return state -1
    case "CLEAR_COUNTER":
      return state = 0
    default:
      return state;
  }
}
 
export default counterReducer;