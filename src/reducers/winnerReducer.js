const winnerReducer = (state = false, action) => {
  switch(action.type) {
    case "WINNER":
      return !state
    default:
      return state;
  }
}

export default winnerReducer;