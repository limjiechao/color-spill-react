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
      oldFillColor,
      title: 'COLOR SPILL!',
      gameWillContinue: true
    }

    this.fill = this.fill.bind(this);
    this.deductMoves = this.deductMoves.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setOldFillColor = this.setOldFillColor.bind(this);
    this.isGridFilled = this.isGridFilled.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.restartSequence = this.restartSequence.bind(this);
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

  isGridFilled(model) {
    return model.isGridFilled();
  }

  hasMovesLeft(remainingMoves) {
  	return remainingMoves !== 0 ? true : false;
  }

  doesGameContinue(model, remainingMoves) {
    let hasMoves = this.hasMovesLeft(remainingMoves);
    let gridFilled = this.isGridFilled(model);

    // Four Possibilities:

    // 1. Has moves and grid not filled => continue
    if (hasMoves && gridFilled === false) {
      this.setState({
        gameWillContinue: true
      });
    }

    // 2. No moves and grid not filled => stop and lost
    if (!hasMoves && !gridFilled) {
      this.setState({
        title: 'GAME OVER!',
        gameWillContinue: false
      });
    }

    // 3. Has moves and grid filled => stop and win
    // 4. No moves and grid filled => stop and win
    if (gridFilled) {
      this.setState({
        title: 'YOU DID IT!',
        gameWillContinue: false
      });
    }
  }

  onClick(event) {
    let target = event.target.attributes.color
    let { model, remainingMoves, oldFillColor } = this.state;
    
    if (remainingMoves === 0) {
      return;
    }

    if (target !== undefined) {
      let colorClicked = Number(target.value);

      if (colorClicked !== oldFillColor) {
        this.fill(colorClicked);
        this.setOldFillColor(colorClicked);
        this.deductMoves();
        this.doesGameContinue(model, remainingMoves - 1);
      }
    }
  }

  restartGame() {
    let { length, level, theme } = this.state;
    let moves = difficulty.level[level][length];
    let model = new Model(length);
    let oldFillColor = model.getOldFillColor();

    this.setState({
      length,
      level,
      theme,
      model,
      totalMoves: moves,
      remainingMoves: moves,
      oldFillColor,
      title: 'COLOR SPILL!',
      gameWillContinue: true
    });
  }

  restartSequence() {
    let splashInterval = null;

		const startSplashSequence = () => {
      this.restartGame();
			splashInterval = setTimeout(startSplashSequence, 75);
		}

		const stopSplashSequence = () => {
			clearTimeout(splashInterval);
		}

		const splashSequence = () => {
			stopSplashSequence();
			startSplashSequence();
			setTimeout(function() {
				stopSplashSequence();
			}, 1200);
		}

		splashSequence();
  }

  render() {
    let { remainingMoves, totalMoves, model, theme, title } = this.state;

    return (
      <div id="app">
        <Title
          text={title} />
        <Bar
          remainingMoves={remainingMoves}
          totalMoves={totalMoves}
          restartGame={this.restartSequence} />
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
