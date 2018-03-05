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
    this.onClick = this.onClick.bind(this);
    this.fill = this.fill.bind(this);
  }

  fill(color) {
    this.state.model.fill(color);
  }

  onClick(event) {
    let target = event.target.attributes.color
    if (target !== undefined) {
      let colorClicked = Number(target.value);
      this.fill(colorClicked);
      this.setState({});
    }
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
          onClick={this.onClick} />
        <Palette
          selectedTheme={themes.colors[this.state.selectedTheme]}
          onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
