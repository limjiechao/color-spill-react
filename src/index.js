import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    selectedLength={2}
    selectedDifficulty={1}
    selectedTheme={1} />,
  document.getElementById('root'));
registerServiceWorker();
