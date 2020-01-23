const gameReducer = (state = true, action) => {
  switch(action.type) {
    case "GAME_OVER":
      return !state
    default:
      return state;
  }
}

export default gameReducer;