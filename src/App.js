import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PaymentForm from './components/payment';
import Stores from './components/admin/stores';
import { Stores_Manage } from './components/admin/stores_manage';
import { Users_Manage } from './components/admin/users_manage';
import Billing from './components/admin/billing';

import StoresClient from './components/client/storesClient';
import {} from './components/client/profileBuyer';

import Login from './components/login';
import Landing_Page from './components/landing_page';

function App() {
  return (
    <Router>
        <div className='content'>
            <Routes>
                <Route path='/' element={<Landing_Page />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/admin/stores' element={<Stores />}/>
                <Route path='/admin/stores-manage' element={<Stores_Manage />}/>
                <Route path='/admin/users_manage' element={<Users_Manage />}/>
                <Route path='/admin/billing_admin' element={<Billing />}/>
                <Route path='/payment_form' element={<PaymentForm />}/>
                <Route path='/buyer/stores' element={<StoresClient />}/>
                <Route path='/buyer/stores_buy' element={<Billing />}/>
                <Route path='/buyer/my_profile' element={<Billing />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;

