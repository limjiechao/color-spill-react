import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = ({ selectedLength, selectedTheme, colors }) => {
  const cells = [];

  colors.forEach((color, cell) => {
    cells.push(
      <Cell
        length={selectedLength}
        cell={cell}
        color={selectedTheme[color]}
        key={`cell-${cell}`} />
    );
  });

  return (
    <div id="grid">
      { cells }
    </div>
  );
}

export default Grid;
