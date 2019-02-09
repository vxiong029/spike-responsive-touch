import React, { Component } from 'react';

class ANotes extends Component {
  state = {
    a4: 'blue',
    a5: 'blue',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.a4 === '#00157C') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          a4: 'blue',
        }))
      }, 500);
    } else if (this.state.a5 === '#00157C') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          a5: 'blue',
        }))
      }, 500);
    } 
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playNote = (note) => {
    console.log('in ANotes', note);

    this.setState({
      [note]: '#00157C'
    })
  }
  render() {
    return (
      <>
        {/* A NOTES */}
        <g id="a4">
          <ellipse
            transform="matrix(0.1738 -0.9848 0.9848 0.1738 291.1827 1898.2921)"
            style={{ fill: this.state.a4, stroke: this.state.stroke }}
            cx="1276.916"
            cy="775.61"
            rx="100.021"
            ry="131.926"
            onClick={() => this.playNote('a4')}
          />
          <text 
            transform="matrix(1 0 0 1 1240.9463 792.9326)" 
            className="note-text"
          >
            A4
          </text>
        </g>
        <g id="a5">
          <circle
            style={{ fill: this.state.a5, stroke: this.state.stroke }}
            cx="1034"
            cy="650"
            r="61.5"
            onClick={() => this.playNote('a5')}
          />
          <text 
            transform="matrix(1 0 0 1 999.8164 668.6768)" 
            className="note-text"
          >
            A5
          </text>
        </g>
      </>
    );
  }
};

export default ANotes;
