import React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signIn.css";



const  Checkout =() => {



  return (

    <>
    <div >
      <div className='checkout-container'>
        <h2>Checkout</h2>
        <h3>Shipping address:</h3>
        <div className='text-input'>
        <TextField id="standard-basic" label="First Name" variant="standard" sx={{
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
        <TextField id="standard-basic" label="Last Name" variant="standard" sx={{
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
        <TextField id="standard-basic" label="Address" variant="standard" sx={{
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
        <TextField id="standard-basic" label="Company Name" variant="standard" sx={{
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
        <Button variant="contained"
        style={{
           
          fontSize: "12px"
          }}
        >
            <Link to="/payment" className='link-btn'>Next</Link>
        </Button>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default Checkout