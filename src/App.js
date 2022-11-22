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
    {/* <div className='form1'>
      <div className='holder'>
        <div className='fname'>
          <p className='tit'>Name</p>
          <input type='text' placeholder='Enter your name' id='namee'></input>
        </div>
        <div className='lname'>
          <p className='tit'>Shipping Address</p>
          <input type='text' placeholder='shipping address' id='namee'></input>
        </div>
        <div className='mail'>
          <p className='tit'>Total Amount</p>
          <input type='text' placeholder='total amount' id='namee'></input>
        </div>
        </div>
        </div>
     */}
     </>
  )
}
export default App;












{/* <div className='container2'>
      <h1 className='title'>Get In Touch with us</h1>
            <p className='text'>Ecommerce Rwanda is looking forward to assisting you in any query you may have about your shopping,Payment, order or Delivery, Returns, and Refunds.Please dont't hesitate to contact us during our working times. </p>
      </div> 
      <div className='form'>
        <div className='fname'>
          <p className='title2'>FirstName</p>
          <input type='text' placeholder='Enter your FirstName' id='name'></input>
        </div>
        <div className='lname'>
          <p className='title2'>LastName</p>
          <input type='text' placeholder='Enter your LastName' id='name'></input>
        </div>
        <div className='mail'>
          <p className='title2'>Email</p>
          <input type='text' placeholder='Enter your Email' id='name'></input>
        </div>
        <div className='msg'>
          <p className='title2'>Message</p>
          <input type='text' placeholder='' id='mesg'></input>
        </div>
        <button className='send'>Send</button>
      </div>
   */}










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