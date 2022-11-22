import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ElCard from './ElCard'
import electronicList from '../data/electro';
import allComponents from "../component/styles/allComponents.css";


const Electronics = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(electronicList);
    },[list])

    return (
        <div className='cards-box'>
            {list.map((el, index) => 
                <Link to={`/prod/${el.id}`}>
                    <ElCard key={index} item={el}/>
                </Link>
                )
            }    
        </div>
  )
}

export default Electronics
