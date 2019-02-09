import React, { Component } from 'react';

class GNotes extends Component {
  state = {
    g4: '#A9D7E4',
    g4Sh: '#A9D7E4',
    g5: '#A9D7E4',
    g5Sh: '#A9D7E4',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.g4 === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g4: '#A9D7E4',
        }))
      }, 500);
    } else if (this.state.g4Sh === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g4Sh: '#A9D7E4',
        }))
      }, 500);
    } else if (this.state.g5 === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g5: '#A9D7E4',
        }))
      }, 500);
    } else if (this.state.g5Sh === '#23A9C9') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          g5Sh: '#A9D7E4',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playNote = (note) => {
    console.log('in GNotes', note);

    this.setState({
      [note]: '#23A9C9'
    })
  }
  render() {
    return (
      <>
        {/* G NOTES  */}
        <g id="g4">
          <ellipse
            transform="matrix(0.9498 -0.313 0.313 0.9498 -336.5971 356.7783)"
            style={{ fill: this.state.g4, stroke: this.state.stroke }}
            cx="942.939"
            cy="1226.77"
            rx="105.142"
            ry="138.12"
            onClick={() => this.playNote('g4')}
          />
          <text 
            transform="matrix(1 0 0 1 904.3438 1247.9365)" 
            className="note-text"
          >
            G4
          </text>
        </g>
        <g id="g4Sh">
          <ellipse
            transform="matrix(0.6284 -0.7779 0.7779 0.6284 -182.2244 359.0121)"
            style={{ fill: this.state.g4Sh, stroke: this.state.stroke }}
            cx="284.677"
            cy="370.246"
            rx="106.013"
            ry="137.298"
            onClick={() => this.playNote('g4Sh')}
          />
          <text 
            transform="matrix(1 0 0 1 235.7378 401.5112)" 
            className="note-text"
          >
            G&#9839;4
          </text>
        </g>
        <g id="g5">
          <ellipse
            transform="matrix(0.7424 -0.6699 0.6699 0.7424 -395.6221 859.191)"
            style={{ fill: this.state.g5, stroke: this.state.stroke }}
            cx="919.497"
            cy="944.07"
            rx="57.816"
            ry="84.637"
            onClick={() => this.playNote('g5')}
          />
          <text 
            transform="matrix(1 0 0 1 880.9434 965.9702)" 
            className="note-text"
          >
            G5
          </text>
        </g>
        <g id="g5Sh">
          <ellipse
            transform="matrix(0.3593 -0.9332 0.9332 0.3593 -313.0156 797.0468)"
            style={{ fill: this.state.g5Sh, stroke: this.state.stroke }}
            cx="424"
            cy="626.5"
            rx="55.845"
            ry="80.365"
            onClick={() => this.playNote('g5Sh')}
          />
          <text 
            transform="matrix(1 0 0 1 376.7754 649.2583)" 
            className="note-text"
          >
            G&#9839;5
          </text>
        </g> 
      </>
    );
  }
};

export default GNotes;
