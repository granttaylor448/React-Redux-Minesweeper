import React, {Component, Fragment} from "react";
import Square from './Square'
import { connect } from 'react-redux';
import {generateBoardForPlay} from '../hooks/gameHooks'
import {Scoreboard} from './Scoreboard'


class Board extends Component {
  constructor(props) {
    super(props);
    this.resetGame = this.resetGame.bind(this);
    this.state = {
      gameBoard: generateBoardForPlay(), 
    }
  }
  
  renderSquare(i, index) {
    return (
      <Square 
        dispatch={this.props.dispatch} 
        gameOver = {this.props.gameOver}
        winnerReducer = {this.props.winnerReducer}
        value={i}
        key={index}
      />
    );
  }

  resetGame()  {
    this.props.dispatch({ type: 'NEW_REDUX' });
    this.setState(state => ({
      gameBoard: generateBoardForPlay(),
    }));
    window.location.reload(false)
  }

 

  componentDidMount() {
    
    this.timerID = setInterval(() => {
      this.props.dispatch({
        type : 'INCREMENT_TIMER'
      })
   }, 1000 )
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    
  }

  componentDidUpdate() {
    if (this.props.Countdown > 300 && this.timerID) {
      clearInterval(this.timerID);
      this.props.dispatch({ type: 'CLEAR_TIMER' });
      this.props.dispatch({ type: 'GAME_OVER' });
      alert("You took too long! Game Over!")
    }
    if (this.props.count >= 40 && this.props.flagsRemaining === 0){
      this.props.dispatch({ type: 'CLEAR_COUNTER' });
      this.props.dispatch({ type: 'WINNER' });
      alert("You found all the bombs Congratulations!")
    }
    if(this.props.winnerReducer){
      clearInterval(this.timerID);
    }
    

  }


  render() {
    
    const column1= this.state.gameBoard[0].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column2= this.state.gameBoard[1].map((x, index) => {
      return this.renderSquare(x, index)
    });
    const column3= this.state.gameBoard[2].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column4= this.state.gameBoard[3].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column5= this.state.gameBoard[4].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column6= this.state.gameBoard[5].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column7= this.state.gameBoard[6].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column8= this.state.gameBoard[7].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column9= this.state.gameBoard[8].map((x, index) => {
      return this.renderSquare(x, index)
    }); 
    const column10= this.state.gameBoard[9].map((x, index) => {
      return this.renderSquare(x, index)
    });  
    const column11= this.state.gameBoard[10].map((x, index) => {
      return this.renderSquare(x, index)
    });
    const column12= this.state.gameBoard[11].map((x, index) => {
      return this.renderSquare(x, index)
    });
    const column13= this.state.gameBoard[12].map((x, index) => {
      return this.renderSquare(x, index)
    });
    const column14= this.state.gameBoard[13].map((x, index) => {
      return this.renderSquare(x, index)
    });
    const column15= this.state.gameBoard[14].map((x, index) => {
      return this.renderSquare(x, index)
    });
    const column16= this.state.gameBoard[15].map((x, index) => {
      return this.renderSquare(x, index)
    });
    return (
      <Fragment> 
        <Scoreboard Countdown={this.props.Countdown} dispatch={this.props.dispatch} resetGame={this.resetGame} flagsRemaining={this.props.flagsRemaining} gameOver={this.props.gameOver} rootReducer={this.props.rootReducer} winnerReducer={this.props.winnerReducer} />
        <div className="border-row-top">
          {column1}
        </div>
        <div className="border-row">
          {column2}
        </div>
        <div className="border-row">
          {column3}
        </div>
        <div className="border-row">
          {column4}
        </div>
        <div className="border-row">
        {column5}
        </div>
        <div className="border-row">
          {column6}
        </div>
        <div className="border-row">
          {column7}
        </div>
        <div className="border-row">
          {column8}
        </div>
        <div className="border-row">
          {column9}
        </div>
        <div className="border-row">
          {column10}
        </div>
        <div className="border-row">
          {column11}
        </div>
        <div className="border-row">
          {column12}
        </div>
        <div className="border-row">
          {column13}
        </div>
        <div className="border-row">
          {column14}
        </div>
        <div className="border-row">
          {column15}
        </div>
        <div className="border-row-bottom">
        {column16}
        </div>      
      </Fragment> 
      )
  }
} 

const mapStateToProps = (state) => {
  return {
    flaggedReducer: state,
    gameReducer: state,
  }
}
export default connect(mapStateToProps)(Board)
