import React from 'react'; 
import ReactDOM from 'react-dom'; //returns a reference to the root ReactComponent instance
import App from './App'; //importing App so that Index.js has access to display App

// ReactDOM.render - returns a reference to the root ReactComponent instance
// ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
ReactDOM.render(
  // React.StrictMode - runs checks in development mode only
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//Relying on index.html to load JS through 'root' id

// StrictMode - 
// Identifies components with unsafe lifecycles
// Warning about legacy string API usage
// Warning about deprecated findDOMNode usage
// Detecting unexpected side effects
// Detecting legacy context API
