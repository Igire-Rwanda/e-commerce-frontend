import React from 'react'
import "./Newitem.css"
import image from '../assets/image/e-commerce.jpg'


function Description() {
  return (
    <div className='container'>
        <div className='homepc'>
      <img src={image} alt="" />
        </div>
        <div className='form-container'>
       <h2>Description</h2>
       <label className='label'>Product Name:</label>
       <input type="text" placeholder="product name"/>

       <label className='label'>Description:</label>
       <input type="text" placeholder='product description' />

       

       <label className='label'>Price:</label>
       <input type="number" placeholder='enter price' />

       <label className='label'>Quantity:</label>
       <input type="text" placeholder='quantity' />
       <label className='label'>Product picture:</label>
       <input type="file" placeholder='enter product picture' />

       <button  type="submit" >ADD NEW ITEM</button>
        </div>
      
    </div>
  )
}

export default Description
