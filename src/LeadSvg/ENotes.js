import React, { Component } from 'react';

class ENotes extends Component {
  state = {
    e4: 'yellow',
    e4F: 'yellow',
    e5: 'yellow',
    e5F: 'yellow',
    e6: 'yellow',
    e6F: 'yellow',
    stroke: 'black'
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.e4 === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e4: 'yellow',
        }))
      }, 500);
    } else if (this.state.e4F === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e4F: 'yellow',
        }))
      }, 500);
    } else if (this.state.e5 === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e5: 'yellow',
        }))
      }, 500);
    } else if (this.state.e5F === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e5F: 'yellow',
        }))
      }, 500);
    } else if (this.state.e6 === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e6: 'yellow',
        }))
      }, 500);
    } else if (this.state.e6F === '#D8D800') {
      this.turnOff = setTimeout(() => {
        this.setState(() => ({
          e6F: 'yellow',
        }))
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.turnOff);
  }
  playNote = (note) => {
    console.log('in ENotes', note);

    this.setState({
      [note]: '#D8D800'
    })
  }
  render() {
    return (
      <>
        {/* E NOTES */}
        <g id="e4">
          <ellipse
            transform="matrix(0.9269 -0.3754 0.3754 0.9269 -96.9854 498.2941)"
            style={{ fill: this.state.e4, stroke: this.state.stroke }}
            cx="1230.407"
            cy="498.066"
            rx="144.284"
            ry="111.421" 
            onClick={() => this.playNote('e4')}
          />
          <text 
            transform="matrix(1 0 0 1 1204.7637 518.1304)" 
            className="note-text"
          >
            E4
          </text>
        </g>
        <g id="e4F">
          <ellipse
            transform="matrix(0.1815 -0.9834 0.9834 0.1815 -477.9086 696.9604)"
            style={{ fill: this.state.e4F, stroke: this.state.stroke }}
            cx="179.723"
            cy="635.569"
            rx="119.153"
            ry="152.941"
            onClick={() => this.playNote('e4F')}
          />
          <text 
            transform="matrix(1 0 0 1 132.1367 662.1494)" 
            className="note-text"
          >
            E&#9837;4
          </text>
        </g>
        <g id="e5">
          <ellipse
            transform="matrix(0.7724 -0.6351 0.6351 0.7724 -103.6233 724.3026)"
            style={{ fill: this.state.e5, stroke: this.state.stroke }}
            cx="958.792"
            cy="506.735"
            rx="92.613"
            ry="66.307"
            onClick={() => this.playNote('e5')}
          />
          <text 
            transform="matrix(1 0 0 1 926.3613 532.2759)" 
            className="note-text"
          >
            E5
          </text>
        </g>
        <g id="e5F">
          <ellipse
            transform="matrix(0.9865 -0.1638 0.1638 0.9865 -122.6176 80.4116)"
            style={{ fill: this.state.e5F, stroke: this.state.stroke }}
            cx="426.224"
            cy="783.632"
            rx="95.385"
            ry="68.307"
            onClick={() => this.playNote('e5F')}
          />
          <text 
            transform="matrix(1 0 0 1 383.4116 806.0781)" 
            className="note-text"
          >
            E&#9837;5
          </text>
        </g>
        <g id="e6">
          <ellipse
            style={{ fill: this.state.e6, stroke: this.state.stroke }}
            cx="712"
            cy="598.5"
            rx="52.5"
            ry="51"
            onClick={() => this.playNote('e6')}
          />
          <text 
            transform="matrix(1 0 0 1 683.3599 619.2402)" 
            className="note-text"
          >
            E6
          </text>
        </g>
        <g id="e6F">
          <circle
            style={{ fill: this.state.e6F, stroke: this.state.stroke }}
            cx="654"
            cy="806"
            r="52.5"
            onClick={() => this.playNote('e6F')}
          />
          <text 
            transform="matrix(1 0 0 1 610.6685 826.9692)" 
            className="note-text"
          >
            E&#9837;6
          </text>
        </g>
      </>
    );
  }
};

export default ENotes;
