import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeProductCard from './HomeProductCard'
import HomeProductList from '../data/HomeProductList';
import allComponents from "../component/styles/allComponents.css";
import {Outlet} from "react-router-dom";


const HomeProduct = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(HomeProductList);
    },[list])

    return (
        <> 
        <div className='cards-box'>
            {list.map((el, index) => 
                <Link to={`/HomeProductDes/${el.id}`}>
                    <HomeProductCard key={index} item={el}/>
                </Link>
                )
                
            }    
        </div>
        </>
  )
}

export default HomeProduct
