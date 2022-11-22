import React from 'react';
import homeproduct from "../component/styles/homeproduct.css";

const HomeProductCard = ({ item }) => {
    const { productName, price, image } = item;

    return (
        <>

            <div className='cards'>
                <div className='image-box'>
                    <img src={image} alt='' />
                </div>
                <div className='details'>
                    <div>
                        <h5>{productName}</h5>
                        <h5>{price}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProductCard