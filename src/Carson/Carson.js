import React, { Component } from 'react';
import '../App.css';
const map = require('./map.jpg')

class Carson extends Component {

    render() {
        let screenLog = document.querySelector('#screen-log');
        document.addEventListener('click', logKey);

        function logKey(e) {
            if (e.screenX > 440 && e.screenX < 510 && e.screenY > 200 && e.screenY < 270) {
                console.log(`Hit Blue`);
            } else if(e.screenX > 485 && e.screenX < 555 && e.screenY > 335 && e.screenY < 400){
                console.log('Hit Green');
            } else if(e.screenX > 345 && e.screenX < 410 && e.screenY > 295 && e.screenY < 365){
                console.log('Hit Red');
            } else{
                return null;
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
