import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeDecorList from '../data/HomeDecorList';
import allComponents from "../component/styles/allComponents.css";
import {Outlet} from "react-router-dom";
import HomeDecorCard from './HomeDecorCard';


const HomeDecor = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(HomeDecorList);
    },[list])

    return (
        <> 
        <div className='cards-box'>
            {list.map((el, index) => 
                <Link to={`/HomeDecorDes/${el.id}`}>
                    <HomeDecorCard key={index} item={el}/>
                </Link>
                )
                
            }    
        </div>
        </>
  )
}

export default HomeDecor
