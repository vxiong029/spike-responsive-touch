import React, { Component } from 'react';
import './App.css';

// const style = {
//   fill: 'green',
// }

class CircleThree extends Component {
  state = {
    color: 'green',
    stroke: 'none'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.color === 'orange' && this.state.stroke === 'black') {
      // when the state is updated (turned orange), 
      // a timeout is triggered to switch it back off
      this.turnOffOrangeTimeout = setTimeout(() => {
        this.setState(() => ({ 
          color: 'green',
          stroke: 'none' 
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    // we set the timeout to this.turnOffOrangeTimeout so that we can
    // clean it up when the component is unmounted.
    clearTimeout(this.turnOffOrangeTimeout);
  }
  clickCircleThree = () => {
    console.log('in circle three');

    this.setState({
      color: 'orange',
      stroke: 'black'
    })
  }
  render() {
    return (
      <>
        <circle
          cx={-150}
          cy={-300}
          r={50}
          style={{ fill: this.state.color, stroke: this.state.stroke }}
          onClick={this.clickCircleThree}
        />
        <text 
          textAnchor="middle" 
          x="-150" 
          y="-300"
          onClick={this.clickCircleThree}
        >
          3
        </text>
      </>
    );
  }
};

export default CircleThree;