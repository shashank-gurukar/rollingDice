import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    num: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  render() {
    const { num, nums } = this.props;
    return (
      <div>
        <i className={`Die fa-solid fa-dice-${num[nums]} ${this.props.rolling ? 'rolling' : ''}`}></i>

      </div>
    );
  }
}

export default Die;
