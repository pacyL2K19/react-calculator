import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const Calculator = () => (
  <App />
);

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);
