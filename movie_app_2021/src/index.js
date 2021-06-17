import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';

// <App /> - Component : return HTML

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('potato')
);

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('test')
);
