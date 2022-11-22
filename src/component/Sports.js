import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SportsCard from './SportsCard'
import sportsList from '../data/sportsList';
import allComponents from "../component/styles/allComponents.css";

const Sports = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(sportsList);
    },[list])

    return (
        <div className='cards-box'>
            {list.map((el, index) => 
                <Link to={`/sportsDes/${el.id}`}>
                    <SportsCard key={index} item={el}/>
                </Link>
                )
            }    
        </div>
  )
}

export default Sports
