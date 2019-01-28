import React, {Component} from 'react';
import CircleTwo from './CircleTwo';
import CircleThree from './CircleThree';

// const style = {
//   fill: 'blue',
// }

const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

class CircleOne extends Component {
  state = {
    color: 'blue'
  }
  clickCircleOne = () => {
    console.log('in circle one');
    this.setState({
      color: 'yellow'
    })
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
          style={{ fill: this.state.color }}
          onClick={this.clickCircleOne}
        />
        <CircleTwo />
        <CircleThree />
      </svg>
    );
  }
};

export default CircleOne;
