import React, { Component } from 'react';
// Game
import Model from './Game/Model';
import themes from './Game/themes';
// import dimensions from './Game/Dimensions';
// import difficulty from './Game/difficulty';
// Components
import Title from './Components/Title';
import Bar from './Components/Bar';
import Grid from './Components/Grid';
import Palette from './Components/Palette';
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
    this.onCellClick = this.onCellClick.bind(this);
    this.fill = this.fill.bind(this);
  }

  fill(color) {
    this.state.model.fill(color);
    console.log(this.state.model.filled);
  }

  onCellClick(event) {
    let colorClicked = Number(event.target.attributes.color.value);
    this.fill(colorClicked);
  }

  render() {
    return (
      <div id="app">
        <Title />
        <Bar />
        <Grid
          selectedLength={this.state.model.length}
          selectedTheme={themes.colors[this.state.selectedTheme]}
          colors={this.state.model.colors}
          onCellClick={this.onCellClick} />
        <Palette
          selectedTheme={themes.colors[this.state.selectedTheme]}/>
      </div>
    );
  }
}

export default App;
