// Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // importing styling
import App from './components/App'; // importing App component


const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
