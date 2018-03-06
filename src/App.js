import React, { Component } from 'react';
// Game
import Model from './Game/Model';
import themes from './Game/themes';
import difficulty from './Game/difficulty';
// import dimensions from './Game/Dimensions';
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
      length: props.length,
      difficulty: props.difficulty,
      theme: props.theme,
      model: new Model(props.length),
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
          length={this.state.model.length}
          theme={themes.colors[this.state.theme]}
          colors={this.state.model.colors}
          onClick={this.onClick} />
        <Palette
          theme={themes.colors[this.state.theme]}
          onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
