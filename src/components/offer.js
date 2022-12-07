import React from 'react';
// import purses from './images/orange purse.PNG';
import './offer.css';
import purses from "../assets/image/purse.jpg"


function Offer() {
    return (
        <>
            <div className='cont'>
                <div className='info'>Get Offer Up To 50% 
                <div className="line"></div>
                </div>
                <img src={purses} className="pus"/>
                
            </div>
     
        </>
    )
}
export default Offer