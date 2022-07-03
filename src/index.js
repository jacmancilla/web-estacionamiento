import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import './index.css';
import Router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>
);
