import React from 'react';
import '../Stylesheets/Title.css';

const Title = ({ text }) => {
  text = text.replace(/ /g, "\u00a0");

  return (
    <h1 id="title">
      { text }
    </h1>
  );
}

export default Title;
