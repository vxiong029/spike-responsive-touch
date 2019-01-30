import React, { Component } from 'react';

class CNotes extends Component {
  state = {
    c4Sh: 'red',
    c4: 'red',
    c5Sh: 'red',
    c5: 'red',
    c6Sh: 'red',
    c6: 'red',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    // when the state is updated, 
    // a timeout is triggered to switch it back off
    if (this.state.c4Sh === '#930E00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c4Sh: 'red',
        }))
      }, 500);
    } else if (this.state.c4 === '#930E00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c4: 'red',
        }))
      }, 500);
    } else if (this.state.c5Sh === '#930E00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c5Sh: 'red',
        }))
      }, 500);
    } else if (this.state.c5 === '#930E00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c5: 'red',
        }))
      }, 500);
    } else if (this.state.c6Sh === '#930E00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c6Sh: 'red',
        }))
      }, 500);
    } else if (this.state.c6 === '#930E00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c6: 'red',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    // we set the timeout to this.turnOff so that we can
    // clean it up when the component is unmounted.
    clearTimeout(this.turnOff);
  }
  playNote = (note) => {
    console.log('in CNotes', note);

    this.setState({
      [note]: '#930E00'
    })
  }
  render() {
    return (
      <>
        {/* C NOTES */}
        <g id="c4Sh">
          <ellipse
            transform="matrix(0.9374 -0.3482 0.3482 0.9374 -43.9603 199.5367)"
            style={{ fill: this.state.c4Sh, stroke: this.state.stroke }}
            cx="533.207"
            cy="222.083"
            rx="123.312"
            ry="160.529"
            onClick={() => this.playNote('c4Sh')}
          />
        </g>
        <g id="c4">
          <ellipse
            transform="matrix(0.1611 -0.9869 0.9869 0.1611 -700.8986 1681.4668)"
            style={{ fill: this.state.c4, stroke: this.state.stroke }}
            cx="638.686"
            cy="1253.042"
            rx="160.529"
            ry="123.312"
            onClick={() => this.playNote('c4')}
          />
        </g>
        <g id="c5Sh">
          <ellipse
            transform="matrix(0.7732 -0.6342 0.6342 0.7732 -194.8556 450.9876)"
            style={{ fill: this.state.c5Sh, stroke: this.state.stroke }}
            cx="533.07"
            cy="497.909"
            rx="71.879"
            ry="103.233"
            onClick={() => this.playNote('c5Sh')}
          />
        </g>
        <g id="c5">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -153.9281 139.4177)"
            style={{ fill: this.state.c5, stroke: this.state.stroke }}
            cx="768.32"
            cy="1002.969"
            rx="74.869"
            ry="106.963"
            onClick={() => this.playNote('c5')}
          />
        </g>
        <g id="c6Sh">
          <ellipse
            style={{ fill: this.state.c6Sh, stroke: this.state.stroke }}
            cx="602.5"
            cy="679.5"
            rx="55"
            ry="56"
            onClick={() => this.playNote('c6Sh')}
          />
        </g>
        <g id="c6">
          <ellipse
            style={{ fill: this.state.c6, stroke: this.state.stroke }}
            cx="794.5"
            cy="798.5"
            rx="55"
            ry="56"
            onClick={() => this.playNote('c6')}
          />
        </g>
      </>
    );
  }
};

export default CNotes;
