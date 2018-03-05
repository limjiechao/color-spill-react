import React from 'react';
import '../App.css'
import './Cell.css';

const Cell = ( { length, cell, color } ) => {
  const classNameString = `cell-${length} ${color}`;
  return (
    <div className={classNameString}></div>
  );
}

export default Cell;
