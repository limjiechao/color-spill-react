import React, { Component } from 'react';
import Title from './Components/Title'
import Bar from './Components/Bar'
import Grid from './Components/Grid'
import Picker from './Components/Picker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Title />
        <Bar />
        <Grid />
        <Picker />
      </div>
    );
  }
}

export default App;
