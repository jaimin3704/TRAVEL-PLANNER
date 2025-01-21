import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use ReactDOM.createRoot to render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Get root element and create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
