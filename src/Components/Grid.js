import React from 'react';
import Cell from './Cell';
import '../Stylesheets/Grid.css';

const Grid = ({ length, theme, colors, onClick }) => {
  let cells = [];

  colors.forEach((color, cell) => {
    cells.push(
      <Cell
        length={length}
        cell={cell}
        colorValue={theme[color]}
        colorIndex={color}
        key={`cell-${cell}`} />
    );
  });

  return (
    <div id="grid-container">
      <div id="grid" onClick={onClick}>
        { cells }
      </div>
    </div>
  );
}

export default Grid;
