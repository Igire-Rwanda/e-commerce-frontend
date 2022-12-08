import React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signIn.css";
import UploadPic from "./UploadPic";
import Select from "./Select"



const  AddNewProduct =() => {



  return (

    <>
    <div >
      <div className='checkout-container '>
        <h2 >Add New Product</h2>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Title" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Price" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Description" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <Select />
        <div className='text-input'>
        <TextField id="standard-basic" label="Quantity" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        
        <UploadPic />                        
      

        <div className='text-input'>
        <Button variant="contained"
        style={{
           
          fontSize: "12px"
          }}
        >
        Add A New Product
        </Button>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default AddNewProduct