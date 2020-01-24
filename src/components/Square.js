import React, {Fragment, Component} from 'react';
import { connect} from 'react-redux';
import Bomb from '../Photos/bombAvatar.png';
import Flag from '../Photos/flagAvatar.png';

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 0,
      isOpen: false,
      flagged: false,
    };
  }

  handleChange(e)  {
    if (e.type === 'click' && !this.state.flagged) {
      this.setState({
        isOpen: true,
        value: this.props.value
      })
      if(this.props.value === 99) {
        this.props.dispatch({ type: 'GAME_OVER' });
        alert("Game Over better luck next time")
      }
    } else if (e.type === 'contextmenu' && !this.state.isOpen ) {
      e.preventDefault()
      if (this.state.flagged){
        this.props.dispatch({ type: 'UNFLAG_BOMB' });
      } else {
        this.props.dispatch({ type: 'FLAG_BOMB' });
      }
      if(!this.state.flagged && this.props.value === 99) {
        this.props.dispatch({ type: 'FOUND_BOMB' });
      }
      if(this.state.flagged && this.props.value === 99) {
        this.props.dispatch({ type: 'REMOVED_FLAG_FROM_BOMB' });
      }
      this.setState({
        flagged: !this.state.flagged
      })
    } 
  }

  render() {
    const value = this.props.value
    const isOpen = this.state.isOpen
    const isFlagged = this.state.flagged
    const gameOver = this.props.gameOver
    const winnerReducer = this.props.winnerReducer
    
  return(
    <Fragment>
    <button disabled={!gameOver || winnerReducer } className={ isOpen? "openSquare" : "closedSquare" } onClick={this.handleChange} 
      onContextMenu={this.handleChange} ref={this.props.squareElement}  >
      {isOpen && value === 99 ?  <img src={Bomb} alt="site logo" height={30} width={30}   /> : "" }
      {isOpen && value && value !== 99 ?  `${value}` : "" }
      {isFlagged && <img src={Flag} alt="site logo" height={30} width={30}   /> }
    </button> 
    </Fragment>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    flaggedReducer: state,
    gameReducer: state,
  }
}

export default connect(mapStateToProps)(Square)


