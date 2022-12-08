import React from 'react';
import homeproduct from "../component/styles/homeproduct.css";

const HomeProductCard = ({ item }) => {
    const { title, price,  picture } = item;

    return (
        <>
            <div className='cards'>
                <div className='image-box'>
                    <img src={`http://localhost:4000/images/${picture}`} alt='image' />
                </div>
                <div className='details'>
                    <div>
                        <h5>{title}</h5>
                        <h5>{price}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProductCard