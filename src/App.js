import React, { Component } from 'react';
// import CircleOne from './CircleOne';

// import logo from './logo.svg';
import './App.css';
import LeadSvg from './LeadSvg/LeadSvg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CircleOne /> */}
        <h1>Tenor Drum</h1>
        <LeadSvg />
      </div>
    );
  }
}

export default App;
