import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './header';
import axios from 'axios';
import addproduct from './addproduct.css';

const AddProduct = (props) => {
    const [items, setItems] = useState({ title: "", price: "", description: "", image: "",off:""})
    const [image, setImage] = useState("");
    const changeItem = (e) => {
        setItems({ ...items, [e.target.name]: e.target.value })
    }

    const addItem = async () => {
        props.setData([...props.data, items])
        setItems({ title: "", price: "", description: "", image: "",off:"" })

    }
    const changeImage = (e) => {
        setImage(e.target.files[0]);

    }


    return (
        <>
            <section>

                <div className='form-container'>
                    <div className='form'><br></br>
                        <h2>ADDING NEW ITEM</h2>
                        <div className='formm'>
                            <label>PRODUCT NAME:</label>
                            <input value={items.title} onChange={changeItem} type="text" name="title" />
                            <label >DESCRIPTION:</label>
                            <input value={items.description} onChange={changeItem} type="number" name="description" />
                            
                            <label >PRICE:</label>
                            <input value={items.price} onChange={changeItem} type="number" name="price" />
                            <input onChange={changeImage} type="file" name="image" />
                            <input className='off' value={items.off} onChange={changeItem} type="text" name="off" />
                            <button onClick={addItem} type="submit">ADD PRODUCT</button><br></br>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default AddProduct 