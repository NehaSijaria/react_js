import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './Greeting';
import BookList from './BookList'

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);

