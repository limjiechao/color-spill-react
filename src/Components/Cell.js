import React from 'react';
import '../Stylesheets/Cell.css';

const Cell = ( { length, cell, colorValue, colorIndex } ) => {
  const classNameString = `cell-${length} ${colorValue}`;
  return (
    <div
      className={classNameString}
      color={`${colorIndex}`}>
    </div>
  );
}

export default Cell;
