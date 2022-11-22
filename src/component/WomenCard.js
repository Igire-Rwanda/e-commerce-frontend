import React from 'react';
// import card from "../component/styles/cards.css";

const WomenCard =({item}) => {
    const {productName,price,image} =item;

    return (
        <section>
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
        </section>
    )
}

export default WomenCard