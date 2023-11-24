import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './components/menu';

import 'bootswatch/dist/vapor/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

