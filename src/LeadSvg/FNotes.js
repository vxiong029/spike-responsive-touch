import React, { Component } from 'react';

class FNotes extends Component {
  state = {
    f4Sh: 'green',
    f4: 'green',
    f5Sh: 'green',
    f5: 'green',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.f4Sh === '#224900') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          f4Sh: 'green',
        }))
      }, 500);
    } else if (this.state.f4 === '#224900') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          f4: 'green',
        }))
      }, 500);
    } else if (this.state.f5Sh === '#224900') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          f5Sh: 'green',
        }))
      }, 500);
    } else if (this.state.f5 === '#224900') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          f5: 'green',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playNote = (note) => {
    console.log('in cNotes', note);

    this.setState({
      [note]: '#224900'
    })
  }
  render() {
    return (
      <>
        {/* F NOTES */}
        <g id="f4Sh">
          <ellipse
            transform="matrix(0.2695 -0.963 0.963 0.2695 442.9022 930.2535)"
            style={{ fill: this.state.f4Sh, stroke: this.state.stroke }}
            cx="834.636"
            cy="173.184"
            rx="143.707"
            ry="110.209"
            onClick={() => this.playNote('f4Sh')}
          />
        </g>
        <g id="f4">
          <ellipse
            transform="matrix(0.6584 -0.7526 0.7526 0.6584 -733.6282 650.6843)"
            style={{ fill: this.state.f4, stroke: this.state.stroke }}
            cx="350.073"
            cy="1133.613"
            rx="144.589"
            ry="111.309"
            onClick={() => this.playNote('f4')}
          />
        </g>
        <g id="f5Sh">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -61.0825 118.5256)"
            style={{ fill: this.state.f5Sh, stroke: this.state.stroke }}
            cx="688.075"
            cy="429.604"
            rx="61.378"
            ry="86.213"
            onClick={() => this.playNote('f5Sh')}
          />
        </g>
        <g id="f5">
          <ellipse
            transform="matrix(0.3962 -0.9181 0.9181 0.3962 -541.6311 1145.6666)"
            style={{ fill: this.state.f5, stroke: this.state.stroke }}
            cx="600.311"
            cy="984.672"
            rx="89.688"
            ry="62.346"
            onClick={() => this.playNote('f5')}
          />
        </g>
      </>
    );
  }
};

export default FNotes;
