import React, { Component } from 'react';
// import './Cell.css';

class Cell extends Component {
  static defaultProps = {};
  render() {
    return <div className='Cell'><p>This is a cell</p></div>;
  }
}

export default Cell;