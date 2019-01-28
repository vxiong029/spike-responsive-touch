import React, { Component } from 'react';
import logo from './logo.svg';
import Carson from './Carson/Carson';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p id="screen-log"></p>
      <Carson />
      </div>
    );
  }
}

export default App;
