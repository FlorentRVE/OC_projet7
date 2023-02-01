import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './css/global.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans notre div root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
