import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import electronics from '../data/electro';
import allComponents from "../component/styles/allComponents.css";
import { Button } from "react-bootstrap";
import { useCart } from 'react-use-cart';
import Item from 'antd/lib/list/Item';

const Description = ({item}) => {
    const params = useParams();
    const [elect, setElect] = useState({});

    useEffect(() => {
        electronics.forEach(el => {
            if (el.id == params.id) {
                setElect(el);
            }
        })
    }, [elect])
    const { addItem }= useCart();

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
                    <Button onClick={() =>addItem(elect)}> <i className='fas fa-cart-plus'></i></Button>  
                    </div>
                    <button className='btn-dd'>buy now</button>
                    
                </div>
            </div>
        </>
    )
}

export default Description