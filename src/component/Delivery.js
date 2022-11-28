import React from 'react';
import './styles/delievry.css';


function Delivery(){
    return(
        <>
        <div>
            <div className='locdeopph'>
                <div className='loc'>
                    <p className='loca'>location:</p> <p className='kac'>kacyiru</p>
                <input type='text' placeholder='new Location' className='nl-box'/>
                </div>
                <div className='Delivery'>
                    <div>
                        <select placeholder='DeLivery options'>
                            <option>Self-pickup</option>
                            <option>Retail Delivery</option>
                        </select>
                    </div>
                </div>
                <div className='PN'>
                <input type='text' placeholder='Phone Number' className='l-box'/>
                </div>
                <button className='netx'>Next</button>
            </div>      
        </div>
        </>
    )
}
export default Delivery