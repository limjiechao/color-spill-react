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
import './Stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let { length, level, theme } = props

    let moves = difficulty.level[level][length];
    let model = new Model(length);
    let oldFillColor = model.getOldFillColor();

    this.state = {
      length,
      level,
      theme,
      model,
      totalMoves: moves,
      remainingMoves: moves,
      oldFillColor
    }

    this.onClick = this.onClick.bind(this);
    this.fill = this.fill.bind(this);
    this.deductMoves = this.deductMoves.bind(this);
  }

  fill(color) {
    let { model } = this.state;
    model.fill(color);
    this.setState({
      model
    })
  }

  deductMoves() {
    let { remainingMoves } = this.state;
    remainingMoves -= 1;
    this.setState({
      remainingMoves
    });
  }

  setOldFillColor(oldFillColor) {
    this.setState({
      oldFillColor
    });
  }

  onClick(event) {
    let target = event.target.attributes.color
    let { remainingMoves, oldFillColor } = this.state;

    if (target !== undefined) {
      let colorClicked = Number(target.value);
      
      if (colorClicked !== oldFillColor) {
        this.deductMoves();
        this.fill(colorClicked);
        this.setOldFillColor(colorClicked);
      }
    }
  }

  render() {
    let { remainingMoves, totalMoves, model, theme } = this.state;

    return (
      <div id="app">
        <Title />
        <Bar
          remainingMoves={remainingMoves}
          totalMoves={totalMoves} />
        <Grid
          length={model.length}
          theme={themes.colors[theme]}
          colors={model.colors}
          onClick={this.onClick} />
        <Palette
          theme={themes.colors[theme]}
          onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
