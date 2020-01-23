function clockReducer(state, action){
  if(typeof state === 'undefined'){
    return 0;
  };
  if(action.type === 'INCREMENT_TIMER'){
    return state + 1;
  }
  if(action.type === 'CLEAR_TIMER'){
    return 0;
  }
  return state;
}
export default clockReducer;