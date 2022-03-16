import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './Greeting'

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById('root')
);

