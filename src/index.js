// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Remova ou comente esta linha, se não precisar do arquivo index.css
// import './styles/index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
