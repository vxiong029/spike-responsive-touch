import React, {Component} from 'react';

// const style = {
//   fill: 'red',
// }

class CircleTwo extends Component {
  state = {
    color: 'red'
  }
  clickCircleTwo = () => {
    console.log('in circle two');
    this.setState({
      color: 'purple'
    })
  }
  render() {
    return (
      <circle
        cx={150}
        cy={-300}
        r={50}
        style={{ fill: this.state.color }}
        onClick={this.clickCircleTwo}
      />
    );
  }
};

export default CircleTwo;
