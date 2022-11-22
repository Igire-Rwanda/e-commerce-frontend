import React from 'react';
import phot from './images/picture.jpg';

function Order(){
    return(
        <>
        <div className='form1'>
            <div>
                <img src={phot} />
            </div>
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

        </>
    )
}

export default Order