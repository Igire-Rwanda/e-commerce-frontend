// import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Home from "./views/Home";
// import Dashbrd from "./Dashbrd/Dashbrd";
// import AdminDashboard from "./Dashbrd/AdminDashbord";
// import Product from "./Dashbrd/Product";
// import Order from "./Dashbrd/oder";
import React from 'react';
// import { Link } from 'react-router-dom';
import purses from './images/orange purse.PNG';
import './App.css';
import ContactUs from "./components/ContactUs.js";


function App(){
  return(
    <>
    <div className='container'>
            <div className='info'>Get Offer Up To 50% </div>
            <div className='line'></div>
            <div className='imag'>
             <img src={purses} id='img'alt="" />
            </div>
    </div>
    // <ContactUs/>
  
    </>
  )
}
export default App;













{/* <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route  path='/Home' element={<Home/>}/>
<Route exact path="/Dashbrd" element={<Dashbrd/>}/>
<Route exact path="/AdminDashbrd" element={<AdminDashboard/>}/>
<Route exact path="/product" element={<Product/>}/>
<Route exact path="/order" element={<Order/>}/>
</Routes>
</BrowserRouter> */}