import React, { Component } from 'react';
// Game
import Model from './Game/Model';
import dimensions from './Game/Dimensions';
import themes from './Game/themes';
import difficulty from './Game/difficulty';
// Components
import Title from './Components/Title';
import Bar from './Components/Bar';
import Grid from './Components/Grid';
import Picker from './Components/Picker';
// Stylesheet
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLength: props.selectedLength,
      selectedDifficulty: props.selectedTheme,
      selectedTheme: props.selectedDifficulty,
      model: new Model(props.selectedLength),
    }
    console.log(this.state)
  }
  render() {
    return (
      <div id="app">
        <Title />
        <Bar />
        <Grid
          selectedLength={this.state.model.length}
          selectedTheme={themes.colors[this.state.selectedTheme]}
          colors={this.state.model.colors} />
        <Picker />
      </div>
    );
  }
}

export default App;
