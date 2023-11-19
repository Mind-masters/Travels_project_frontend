import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BuaashContext } from './contextAPI/shopContext/BuaashContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <BuaashContext.Provider value={{ serverReady: true }}>
      <App />
    </BuaashContext.Provider>
  </BrowserRouter>
);
