import React, { Component } from 'react';

class ANotes extends Component {
  state = {
    d4: 'orange',
    d5: 'orange',
    d6: 'orange',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.d4 === '#EA7A00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          d4: 'orange',
        }))
      }, 500);
    } else if (this.state.d5 === '#EA7A00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          d5: 'orange',
        }))
      }, 500);
    } else if (this.state.d6 === '#EA7A00') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          d6: 'orange',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playNote = (note) => {
    console.log('in DNotes', note);

    this.setState({
      [note]: '#EA7A00'
    })
  }
  render() {
    return (
      <>
        {/* D NOTES */}
        <g id="d4">
          <ellipse
            transform="matrix(0.5854 -0.8107 0.8107 0.5854 -349.8704 1374.5067)"
            style={{ fill: this.state.d4, stroke: this.state.stroke }}
            cx="1169.05"
            cy="1029.355"
            rx="120.239"
            ry="151.596"
            onClick={() => this.playNote('d4')}
          />
          <text 
            transform="matrix(1 0 0 1 1140.6904 1061.0615)" 
            className="note-text"
          >
            D4
          </text>
        </g>
        <g id="d5">
          <ellipse
            transform="matrix(0.2741 -0.9617 0.9617 0.2741 -52.7768 1526.6034)"
            style={{ fill: this.state.d5, stroke: this.state.stroke }}
            cx="984.855"
            cy="798.262"
            rx="71.247"
            ry="100.371"
            onClick={() => this.playNote('d5')}
          />
          <text 
            transform="matrix(1 0 0 1 951.1436 823.9507)" 
            className="note-text"
          >
            D5
          </text>
        </g>
        <g id="d6">
          <circle
            style={{ fill: this.state.d6, stroke: this.state.stroke }}
            cx="834"
            cy="662"
            r="54.5"
            onClick={() => this.playNote('d6')}
          />
          <text 
            transform="matrix(1 0 0 1 799.9971 682.3135)" 
            className="note-text"
          >
            D6
          </text>
        </g>
      </>
    );
  }
};

export default ANotes;
