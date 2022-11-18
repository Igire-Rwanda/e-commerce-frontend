import React from 'react';
import cards from './cards.css';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cardft = ({ item }) => {

    const { price, image,off } = item;

    return (

        <section>

            < div className='cards'>
                <div className='image-box'>
                    <h4>{off}</h4>
                    <img src={`http://localhost:5000/static/${image}`} alt="image" />
                </div>
                <div className='details'>

                    <h4>{price}RWF</h4>
                    <h4>order</h4>
                    <span className='link-plus'><i className="fas fa-cart-plus"></i> </span>
                </div>

            </div>
        </section>
    )
}

export default Cardft