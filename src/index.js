import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    length={2}
    difficulty={2}
    theme={1} />,
  document.getElementById('root'));
registerServiceWorker();
