import React, { Component } from 'react';
import '../Stylesheets/Bar.css'

class Bar extends Component {
  render() {
    return (
      <div id="bar">
        <img src="options.svg" id="options" alt="options button" className="button"/>
        <span id="moves">30 / 30</span>
        <img src="restart.svg" id="restart" alt="restart button" className="button"/>
      </div>
    );
  }
}

export default Bar;
