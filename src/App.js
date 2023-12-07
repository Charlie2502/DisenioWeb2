import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PaymentForm, {} from './components/usuarios';
import Stores from './components/stores';
import { Stores_Manage } from './components/stores_manage';
import { Users_Manage } from './components/users_manage';
import Login from './components/login';
import Billing, {} from './components/billing';

function App() {
  return (
    <Router>
        <div className='content'>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/stores' element={<Stores />}/>
                <Route path='/stores-manage' element={<Stores_Manage />}/>
                <Route path='/users_manage' element={<Users_Manage />}/>
                <Route path='/billing_admin' element={<Billing />}/>
                <Route path='/payment_form' element={<PaymentForm />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;

