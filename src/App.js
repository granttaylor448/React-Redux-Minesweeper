import React from 'react';
import './App.css';
import {useSelector, useDispatch } from 'react-redux';
import Board from "./components/Board";

function App(props) {
  const count = useSelector( state => state.counterReducer);
  const Countdown = useSelector( state => state.clockReducer);
  const flagsRemaining = useSelector( state => state.flaggedReducer);
  const gameOver = useSelector( state => state.gameReducer);
  const rootReducer = useSelector( state => state.rootReducer);
  const winnerReducer = useSelector( state => state.winnerReducer);
  const dispatch = useDispatch();

  
  
    
  return ( 
    // <React.Fragment>
    <div className="App">
      {/* <h1> MINESWEEPER!</h1>
      <p> You have 500 seconds to find 40 hidden bombs</p> */}
    
      <Board  dispatch={dispatch} flagsRemaining={flagsRemaining} gameOver={gameOver} winnerReducer={winnerReducer} Countdown={Countdown}  rootReducer={rootReducer} count={count}  />
    
    </div>
    // </React.Fragment>
  );
}

export default App;
