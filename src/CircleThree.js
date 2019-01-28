import React, {Component} from 'react';
import './App.css';

// const style = {
//   fill: 'green',
// }

class CircleThree extends Component {
  state = {
    color: 'green'
  }
  clickCircleThree = () => {
    console.log('in circle three');
    this.setState({
      color: 'orange'
    })
  }
  render() {
    return (
      <circle
        cx={-150}
        cy={-300}
        r={50}
        style={{ fill: this.state.color }}
        onClick={this.clickCircleThree}
      />
    );
  }
};

export default CircleThree;