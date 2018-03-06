import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/reset.css';
import './Stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    length={2}
    level={2}
    theme={1} />,
  document.getElementById('root'));
registerServiceWorker();
