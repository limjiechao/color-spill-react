import React from 'react';
import Color from './Color'
import './Palette.css'

const Palette = ({ selectedTheme }) => {
  const colors = Object.entries(selectedTheme).map(([index, color]) => {
    return (
      <Color
        colorIndex={index}
        colorValue={color}
        key={`color-${index}`}/>
    );
  });
  return (
    <div id="palette">
      { colors }
    </div>
  );
}

export default Palette;
