import React from 'react';
import Color from './Color'
import './Palette.css'

const Palette = ({ selectedTheme, onClick }) => {
  const colors = Object.entries(selectedTheme).map(([index, color]) => {
    return (
      <Color
        colorIndex={index}
        colorValue={color}
        key={`color-${index}`}/>
    );
  });
  return (
    <div id="palette" onClick={onClick}>
      { colors }
    </div>
  );
}

export default Palette;
