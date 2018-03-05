import React from 'react';
import Cell from './Cell'
import './Grid.css';

const cells = () => {
  // return <Cell color={themes.colors[]} length={} cell={} key={}/>
}

const Grid = () => {
  return (
    <div id="grid">
      { cells }
    </div>
  );
}

export default Grid;
