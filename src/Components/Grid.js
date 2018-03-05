import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = ({ selectedLength, selectedTheme, colors, onCellClick }) => {
  const cells = [];

  colors.forEach((color, cell, onCellClick) => {
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
    <div id="grid" onClick={onCellClick}>
      { cells }
    </div>
  );
}

export default Grid;
