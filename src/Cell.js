import React, { Component } from 'react';
// import './Cell.css';
import PropTypes from 'prop-types'

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRevealed: false, 
      value: -1 | 0 | 1, 
      isFlagged: false, 
      xCoord: 0, 
      yCoord: 0
    }
    this.revealValue = this.revealValue.bind(this); 
  }

  revealValue(){
    // function that will do a depth first search to find if the one clicked on is a bomb
    // and check for the next door neighboor values
  }
  render() {
    return <div className='Cell'><p>This is a cell</p></div>;
  }
}
Cell.defaultProps = {
  isRevealed: false, 
  value: 0, 
  isFlagged: false, 
  xCoord: 0, 
  yCoord: 0
}
Cell.propTypes = {
  isRevealed: PropTypes.bool, 
  value: PropTypes.number, 
  isFlagged: PropTypes.bool,
  xCoord: PropTypes.number, 
  yCoord: PropTypes.number
}

export default Cell;