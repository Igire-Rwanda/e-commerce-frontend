import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeProductCard from './HomeProductCard'
import HomeProductList from '../data/HomeProductList';
import allComponents from "../component/styles/allComponents.css";
import {Outlet} from "react-router-dom";
import axios from 'axios';


const HomeProduct = (props) => {
console.log(props)
    return (
        <> 
        <div className='cards-box'>
            {props?.list?.map((el, index) => 
                <Link to={`/HomeProductDes/${el._id}`}>
                    <HomeProductCard key={index} item={el}/>
                </Link>
                )
                
            }    
        </div>
        </>
  )
}

export default HomeProduct
