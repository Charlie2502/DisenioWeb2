import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PaymentForm from './components/payment';
import Stores from './components/admin/stores';
import { Users_Manage } from './components/admin/users_manage';
import Billing from './components/admin/billing';

import StoresClient from './components/client/storesClient';
import User_Orders from './components/client/user_Orders';
import ProfileBuyer from './components/client/profileBuyer';

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
                <Route path='/admin/users_manage' element={<Users_Manage />}/>
                <Route path='/admin/billing_admin' element={<Billing />}/>
                <Route path='/buyer/payment_form' element={<PaymentForm />}/>
                <Route path='/buyer/stores' element={<StoresClient />}/>
                <Route path='/buyer/user_orders' element={<User_Orders/>}/>
                <Route path='/buyer/my_profile' element={<ProfileBuyer />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;

