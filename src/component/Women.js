import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WomenCard from './WomenCard'
import womenList from '../data/womenList';
import allComponents from "../component/styles/allComponents.css";

const Women = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(womenList);
    },[list])

    return (
        <div className='cards-box'>
            {list.map((el, index) => 
                <Link to={`/womDes/${el.id}`}>
                    <WomenCard key={index} item={el}/>
                </Link>
                )
            }    
        </div>
  )
}

export default Women
