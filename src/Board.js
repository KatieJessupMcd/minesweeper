import React, { Component } from 'react';
// import './Board.css';
import Cell from './Cell'; 

class Board extends Component {
  static defaultProps = {};
  render() {
    return <div className='Board'>
    <h2>This is the Board</h2>
    <Cell />
    </div>;
  }
}

export default Board;