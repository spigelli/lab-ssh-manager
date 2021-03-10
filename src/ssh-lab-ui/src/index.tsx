import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import "@webcomponents/custom-elements/custom-elements.min.js";
//import "@clr/icons/clr-icons.min.css";
//import "@clr/icons/clr-icons-lite.min.js";
import "@clr/ui/clr-ui.min.css"
import "@clr/icons/shapes/technology-shapes.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
