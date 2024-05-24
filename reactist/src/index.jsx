import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Usuarios} from './components/Usuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usuarios />
  </React.StrictMode>
);

