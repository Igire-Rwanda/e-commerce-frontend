import React from 'react';
// import purses from './images/orange purse.PNG';
import './offer.css';


function Offer() {
    return (
        <>
            <div className='cont'>
                <div className='info'>Get Offer Up To 50% </div>
                {/* <div className='line'></div> */}
                <div className='imag'>
                    {/* <img src={purses} id='img' alt="" /> */}
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
export default Offer