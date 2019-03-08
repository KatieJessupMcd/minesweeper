import React, { Component } from 'react';
import Board from './Board';
// import './Game.css';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      highScore: 0,
      difficulty: 1,
      isStarted: false,
      isOver: false
    };
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.reset = this.reset.bind(this);
  }

  startGame() {
    // sets isStarted to true
  }
  endGame() {
    // sets isOver to true
  }
  reset() {
    // resets isStarted and isOver to false
  }
  render() {
    return (
      <div className="Game">
        <h1>This is the MineSweeper Game</h1>
        <Board />
      </div>
    );
  }
}

Game.defaultProps = {
  time: 0,
  highScore: 0,
  difficulty: 1,
  isStarted: false,
  isOver: false
};
Game.propTypes = {
  time: PropTypes.number,
  highScore: PropTypes.number,
  difficulty: PropTypes.number,
  isStarted: PropTypes.bool,
  isOver: PropTypes.bool
};

export default Game;
