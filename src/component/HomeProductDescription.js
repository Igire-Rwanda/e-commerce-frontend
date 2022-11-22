import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeProductList from '../data/HomeProductList';
import allComponents from "../component/styles/allComponents.css";


const HomeProductDescription = () => {
    const params = useParams();
    const [elect, setElect] = useState({});

    useEffect(() => {
        HomeProductList.forEach(el => {
            if (el.id == params.id) {
                setElect(el);
            }
        })
    }, [elect])

    return (
        <>
            <div className='cards-box'>
                <div className='image-box'>
                <img src={`http://localhost:3000/${elect.image}`} />
                </div>
                <div>
                    <h4>{elect.productName}</h4>
                    <h4>{elect.price}</h4>
                    <div className='link-plus'>
                        <i className='fas fa-cart-plus'></i>
                    </div>
                    <button className='btn-dd'>buy now</button>
                    
                </div>
            </div>
        </>
    )
}

export default HomeProductDescription