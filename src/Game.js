import React, { Component } from 'react';
import Board from './Board';
// import './Game.css';

class Game extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="Game">
        <h1>This is the MineSweeper Game</h1>
        <Board />
      </div>
    );
  }
}

export default Game;
