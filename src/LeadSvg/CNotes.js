import React, { Component } from 'react';
// import { Howl, Howler } from 'howler';

// import Soundfont from 'soundfont-player';

// var sound = new Howl({
//   src: ['']
// });

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
      // Soundfont.instrument(new AudioContext(), 'steel_drums')
      //   .then(function (steel_drums) {
      //     steel_drums.play(61)
      //   })
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          c4Sh: 'red',
        }))
      }, 500);
    } else if (this.state.c4 === '#930E00') {
      // Soundfont.instrument(new AudioContext(), 'steel_drums')
      //   .then(function (steel_drums) {
      //     steel_drums.play('C4')
      //   })
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
          <text 
            transform="matrix(1 0 0 1 477 252.3555)" 
            className="note-text"
          >
            C&#9839;4
          </text>
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
          <text 
            transform="matrix(1 0 0 1 602.1226 1286.7002)" 
            className="note-text"
          >
            C4
          </text>
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
          <text 
            transform="matrix(1 0 0 1 486.4126 518.5122)" 
            className="note-text"
          >
            C&#9839;5
          </text>
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
          <text 
            transform="matrix(1 0 0 1 734.1602 1020.189)" 
            className="note-text"
          >
            C5
          </text>
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
          <text 
            transform="matrix(1 0 0 1 554.4858 699.8228)" 
            className="note-text"
          >
            C&#9839;6
          </text>
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
          <text 
            transform="matrix(1 0 0 1 759.3057 817.0781)" 
            className="note-text"
          >
            C6
          </text>
        </g>
      </>
    );
  }
};

export default CNotes;
