import React, { Component } from 'react';
import CircleTwo from './CircleTwo';
import CircleThree from './CircleThree';

// const style = {
//   fill: 'blue',
// }

const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

class CircleOne extends Component {
  state = {
    color: 'blue',
    stroke: 'none'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.color === 'yellow' && this.state.stroke === 'black') {
      // when the state is updated (turned yellow), 
      // a timeout is triggered to switch it back off
      this.turnOffYellowTimeout = setTimeout(() => {
        this.setState(() => ({ 
          color: 'blue',
          stroke: 'none'
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    // we set the timeout to this.turnOffYellowTimeout so that we can
    // clean it up when the component is unmounted.
    clearTimeout(this.turnOffYellowTimeout);
  }
  clickCircleOne = () => {
    console.log('in circle one');

    this.setState({
      color: 'yellow',
      stroke: 'black'
    });
  }
  render() {
    return (
      <svg
        id="base-circle"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
      >
        <circle
          cx={10}
          cy={-500}
          r={50}
          style={{ fill: this.state.color, stroke: this.state.stroke }}
          onClick={this.clickCircleOne}
        />
        <text 
          textAnchor="middle" 
          x="10" 
          y="-500"
          onClick={this.clickCircleOne}
        >
          Circle One
        </text>
        <CircleTwo />
        <CircleThree />
      </svg>
    );
  }
};

export default CircleOne;
