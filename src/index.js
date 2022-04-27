
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"
/**
* app index file
*
* @param render the app
*
* @return rendered app
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
