import React from 'react';
import "./Contact.css"
import Footer from "../component/footer";

function ContactUS(){
    return(
    <>
    <div className='container2'>
    <h1 className='title'>Get In Touch with us</h1>
          <p className='text'>Ecommerce Rwanda is looking forward to assisting you in
           any query you may have about your shopping,Payment, order or Delivery,&nbsp;
          
           Returns, and Refunds.Please dont't hesitate to contact us during our working times. </p>
          
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
    <Footer />
</>
    )
}

export default ContactUS;