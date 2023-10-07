import React, { Component } from 'react';
import Die from './Die';
import './Dies.css';

class RollDice extends Component {
  state = { num1: 1, num2: 1, rolling: false };

  rand = () => {
    this.setState((prevState) => ({
      num1: Math.floor(Math.random() * 6),
      num2: Math.floor(Math.random() * 6),
      rolling: true,
    }));

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='Dies'>
        <div className='Roll-container'>
          <Die nums={this.state.num1} rolling={this.state.rolling} />
          <Die nums={this.state.num2} rolling={this.state.rolling} />
          <Die nums={this.state.num2} rolling={this.state.rolling} />
          <Die nums={this.state.num2} rolling={this.state.rolling} />
        </div>

        <button onClick={this.rand} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling!' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
