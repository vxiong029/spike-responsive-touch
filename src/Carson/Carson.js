import React, { Component } from 'react';
import '../App.css';
const map = require('./map.jpg')

class Carson extends Component {

    render() {
        let screenLog = document.querySelector('#screen-log');
        document.addEventListener('click', logKey);

        function logKey(e) {
            if (e.screenX > 440 && e.screenX < 510 && e.screenY > 200 && e.screenY < 270) {
                console.log(`Hit blue`);
            }
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
