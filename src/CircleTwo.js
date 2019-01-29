import React, { Component } from 'react';

// const style = {
//   fill: 'red',
// }

class CircleTwo extends Component {
  state = {
    color: 'red',
    stroke: 'none'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.color === 'purple' && this.state.stroke === 'black') {
      // when the state is updated (turned purple), 
      // a timeout is triggered to switch it back off
      this.turnOffPurpleTimeout = setTimeout(() => {
        this.setState(() => ({ 
          color: 'red',
          stroke: 'none'
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    // we set the timeout to this.turnOffPurpleTimeout so that we can
    // clean it up when the component is unmounted.
    clearTimeout(this.turnOffPurpleTimeout);
  }
  clickCircleTwo = () => {
    console.log('in circle two');

    this.setState({
      color: 'purple',
      stroke: 'black'
    })
  }
  render() {
    return (
      <>
        <circle
          cx={150}
          cy={-300}
          r={50}
          style={{ fill: this.state.color, stroke: this.state.stroke }}
          onClick={this.clickCircleTwo}
        />
        <text 
          textAnchor="middle" 
          x="150" 
          y="-300"
          onClick={this.clickCircleTwo}
        >
          Circle Two
        </text>
      </>
    );
  }
};

export default CircleTwo;
