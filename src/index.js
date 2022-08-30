import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { InitialDataContext } from './InitialDataContext';
import reportWebVitals from './reportWebVitals';

// hydrate takes pre-rendered HTML that we're going to get from the server and adds React to it
// Despite of we're getting an HTML from the server, we still want to behave and rerender like ReactApp
ReactDOM.hydrate(
  <React.StrictMode>
    <InitialDataContext
      value={(window && window.preloadedData) || { _data: {} }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InitialDataContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
