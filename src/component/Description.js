import React from 'react'
import  './Newitem.css'
import img from "../assets/image/online.GIF"
function Description(){
  return (
    <div className="container">
<div className="homepc">

<img src={img} alt="" />

</div>

<form className='form-container'>
                              <h3>DESCRIPTION</h3>
                    
                        <label className="label">Name</label>
                        <input  type="text" placeholder="title" name="title"  />
                        
                        
                        <label className="label">Description:</label>
                        <input  type="text" placeholder="description" name="description" /> 
                    
                        
                        <label className="label" >Product Name:</label>
                       <input type="text" placeholder="product name"   name="product name"/>  
                       
                       
                       <label className="label">Product picture:</label>                
                        <input    type="file" placeholder="product picture" name="image"/> <br></br>
                        
                        

                      <button   type="submit">ADD NEW ITEM</button>
    
     
      </form>
    </div>
  );
}

export default Description;
