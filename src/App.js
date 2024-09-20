import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import NoPage from './pages/Nopg/Nopage';
import MyState from './context/data/MyState';
import Login from './pages/registeration/Login';
import Signup from './pages/registeration/Signup';
import ProductInfo from './pages/productinfo/ProductInfo';
import AddProduct from './pages/Admin/pages/AddProduct';
import UpdateProduct from './pages/Admin/pages/UpdateProduct';


function App() {
  return (
  <MyState>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo />} /> 
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='updateproduct' element={<UpdateProduct/>}/>
      </Routes>
    </Router>
  </MyState>
   
       
   
    
  )
}

export default App