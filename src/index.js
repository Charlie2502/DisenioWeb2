import React from 'react';
import ReactDOM from 'react-dom/client';
import PaymentForm, {} from './components/usuarios';
import Stores from './components/stores';
import { Stores_Manage } from './components/stores_manage';
import { Users_Manage } from './components/users_manage';
import Login from './components/login';

import 'bootswatch/dist/minty/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaymentForm />
  </React.StrictMode>
);