import React from 'react';
import '../Stylesheets/Bar.css'

const Bar = ({ remainingMoves, totalMoves }) => {
  return (
    <div id="bar">
      <img src="options.svg" id="options" alt="options button" className="button"/>
      <span id="moves">
        { remainingMoves } / { totalMoves }
      </span>
      <img src="restart.svg" id="restart" alt="restart button" className="button"/>
    </div>
  );
}

export default Bar;
