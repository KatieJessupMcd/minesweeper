import React, { Component } from 'react';
// import './Board.css';
import Cell from './Cell';
import PropTypes from 'prop-types';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridWidth: 10,
      gridHeight: 8,
      grid: [[]],
      bombsRemaining: 12
    };
    this.placeMines = this.placeMinds.bind(this);
  }

  placeMines() {
    // randomly assign bomb coordinates
    // increment touching cells
    // 1st click is always empty
  }
  render() {
    return (
      <div className="Board">
        <h2>This is the Board</h2>
        <Cell />
      </div>
    );
  }
}

Board.defaultProps = {
  gridWidth: 10,
  gridHeight: 8,
  grid: [[]],
  bombsRemaining: 12
};
Board.propTypes = {
  gridWidth: PropTypes.number,
  gridHeight: PropTypes.number,
  grid: PropTypes.array,
  bombsRemaining: PropTypes.number
};

export default Board;
