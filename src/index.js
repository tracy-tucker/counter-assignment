import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Counter />
      <Counter />
      <Counter />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
