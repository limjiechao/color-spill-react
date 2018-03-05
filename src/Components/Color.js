import React from 'react';
import './Color.css'

const Color = ({ colorIndex, colorValue }) => {
  const classNameString = `circle ${colorValue}`
  return (
    <div
      className={classNameString}
      color={colorIndex} >
    </div>
  );
}

export default Color;
