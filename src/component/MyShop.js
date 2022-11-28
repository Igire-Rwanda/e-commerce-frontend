import React from 'react';
import list from "./Electronics";
import ElCard from './ElCard';

const MyShop =() => {
  return (
    <section>
        {
            list.map((item) =>(
                <ElCard item={item} />
            ))
        }
    </section>
  )
}

export default MyShop