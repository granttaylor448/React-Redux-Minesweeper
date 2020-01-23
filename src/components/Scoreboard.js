import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Flag from '../Photos/flagAvatar.png';
import Clock from '../Photos/clockIcon.png';
import GameOver from '../Photos/game-over-skull.png';
import Trophy from '../Photos/winner.png'


export class Scoreboard extends Component {

  render() {
    return (
      <Fragment>
        <div className="scoreboard">
          {this.props.winnerReducer && <>
          <button onClick={this.props.resetGame}>
            Play Again?
          </button>
          <div>
            <img src={Trophy} alt="site logo" height={60} width={60}/> 
          </div> </> } 
          {!this.props.gameOver && <button onClick={this.props.resetGame}>
            Play Again?
          </button>}
          <div className="gameover-alert">
            {!this.props.gameOver && <img src={GameOver} alt="site logo" height={60} width={60}/> }
          </div>
          <div>
            <img src={Flag} alt="site logo" height={30} width={30}/> 
            {this.props.flagsRemaining}
          </div>
          <div>
            <img src={Clock} alt="site logo" height={30} width={30}/> 
            {this.props.Countdown}
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  
}


export default connect(mapStateToProps)(Scoreboard)
