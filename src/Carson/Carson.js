import React, { Component } from 'react';
import '../App.css';
const map = require('./map.jpg')

class Carson extends Component {
    
  render() {
    let screenLog = document.querySelector('#screen-log');
    document.addEventListener('click', logKey);
    
    function logKey(e) {
      console.log(`
        Screen X/Y: ${e.screenX}, ${e.screenY}
        Client X/Y: ${e.clientX}, ${e.clientY}`);
    }
    
    return (
      <div>
          <img src={map} />
          <p>Your coordinates are:</p>
          <p id="screen-log"></p>
      </div>
    );
  }
}

export default Carson;
