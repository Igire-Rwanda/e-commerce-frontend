import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import allComponents from "../component/styles/allComponents.css";
import {Outlet} from "react-router-dom";
import ToysCard from './ToysCard';
import ToysList from '../data/ToysList';


const BabyToys = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(ToysList);
    },[list])

    return (
        <> 
        <div className='cards-box'>
            {list.map((el, index) => 
                <Link to={`/ToysDes/${el.id}`}>
                    <ToysCard key={index} item={el}/>
                </Link>
                )
                
            }    
        </div>
        </>
  )
}

export default BabyToys
