import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = ({ selectedLength, selectedTheme, colors, onClick }) => {
  let cells = [];

  colors.forEach((color, cell) => {
    cells.push(
      <Cell
        length={selectedLength}
        cell={cell}
        colorValue={selectedTheme[color]}
        colorIndex={color}
        key={`cell-${cell}`} />
    );
  });

  return (
    <div id="grid" onClick={onClick}>
      { cells }
    </div>
  );
}

export default Grid;
