import {  Route, NavLink, Routes,Navigate } from 'react-router-dom'
import { useContext, useState } from 'react';

import { LibraryContext } from './context/LibraryContext';
import Login from './pages/Login';
import Layout from './components/Layout'
import Register from './pages/Register';
import PrivateRoute from './utils/PrivateRoute';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {

  let { user } = useContext(LibraryContext)

  return (
    <div className={`${user ? 'bg-white' : `bg-[#6AB187]`} h-screen`}>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route element={<Layout />} >
            <Route index path='/' element={<Home />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path="/*" element={<Navigate to="/"/> }/>
          </Route>
        </Route>
        <Route path='/login' element={<Login />}/> 
        <Route path='/register' element={<Register />}/> 
      </Routes>
    </div>
  );
}

export default App;
