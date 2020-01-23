import counterReducer from './counter';
import flaggedReducer from './isFlagged';
import clockReducer from './clockReducer';
import gameReducer from './gameReducer';
import winnerReducer from './winnerReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counterReducer,
  flaggedReducer,
  clockReducer,
  gameReducer,
  winnerReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'NEW_REDUX') {
    state = undefined
  }

  return allReducers(state, action)
}

export default rootReducer;


 