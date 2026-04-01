import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  './app.scss'
import reportWebVitals from './reportWebVitals';
import { Ismobileprovider } from './utiles/Ismobilecontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <Ismobileprovider>
        <App />

  </Ismobileprovider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
