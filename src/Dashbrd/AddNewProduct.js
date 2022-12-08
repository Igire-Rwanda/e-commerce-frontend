import React, { useState } from 'react';


import axios from 'axios';

const AddNewProduct = (props) => {

  const [newPro, setNewPro] = useState({ title: "", price: "", image: "", description: "" });
  const [exiPro, SetExiPro] = useState();
  const [image, SetImage] = useState("");


  const changePro = (e) => {
    setNewPro({ ...newPro, [e.target.name]: e.target.value })
  }

  const addPro = async () => {

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", newPro.title);
    formData.append("price", newPro.price);
    formData.append("description", newPro.description);
    await axios.post("http://localhost:4000/products", formData);
    // props.setData([...props.data, newPro]);
    setNewPro({ title: "", price: "", image: "", description: "" });

  }
  const changeItem = (e) => {
    SetImage(e.target.files[0]);
  }
 
  return (
    <>
      <div className='form-container'>

        <div className='form'>
          <h1>Add new product:</h1>
          <div>
            <label>Title:</label>
          </div>
          <div>
            <input type="text" name="title" value={newPro.title} onChange={changePro} placeholder="Enter product title:" /><br></br>
          </div>
          <div>
            <label className="form-label">Price:</label>
          </div>
          <div>
            <input type="text" name="price" value={newPro.price} onChange={changePro} placeholder="Enter product price:" /><br></br>
          </div>
          <div>
            <label>Description:</label>
          </div>
          <div>
            <input type="text" name="description" value={newPro.description} onChange={changePro} placeholder="Enter product description:" /><br></br>
          </div>
          <div>
            <label className="form-label">Image:</label>
          </div>
          <div>
            <input type="file" name="image" onChange={changeItem} /><br></br>
          </div>
          <button type="submit" className='form-button' onClick={addPro} >Add new product</button>
        </div>




      </div>
    </>
  )
}

export default AddNewProduct