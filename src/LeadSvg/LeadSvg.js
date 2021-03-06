import React, { Component } from 'react';
import CNotes from './CNotes';
import FNotes from './FNotes';
import BNotes from './BNotes';
import ENotes from './ENotes';
import ANotes from './ANotes';
import DNotes from './DNotes';
import GNotes from './GNotes';

// const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

class LeadSvg extends Component {
  state = {
    baseColor: '#F7E8AC',
    baseStroke: 'black',
    stroke: 'none',
  }
  render() {
    return (
      <svg
        id="lead-svg"
        x="0px"
        y="0px"
        viewBox="0 0 1440 1438"
      >
        {/* BASE LAYER */}
        <g id="Layer_2">
          <ellipse
            style={{ fill: this.state.baseColor, stroke: this.state.baseStroke }}
            cx="720"
            cy="720.75"
            rx="707.5"
            ry="710.25"
          />
        </g>
        <CNotes />
        <FNotes />
        <BNotes />
        <ENotes />
        <ANotes />
        <DNotes />
        <GNotes />
      </svg>
    );
  }
};

export default LeadSvg;
