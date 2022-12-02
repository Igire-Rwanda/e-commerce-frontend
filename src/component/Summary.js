import React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signIn.css";



const  Summary =() => {



  return (

    <>
    <div>
    <div className='checkout-container'>
        <h2>Checkout</h2>
        <h3>Order Summary:</h3>
        <div className='text-input'>
        <TextField id="standard-basic" label="Please enter your number for Momo Pay" variant="standard" sx={{
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
                                }}/>
        </div>
        <div className='text-input'>
        <TextField id="standard-basic" label="Name on card" variant="standard" sx={{
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
        <TextField id="standard-basic" label="card number" variant="standard" sx={{
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
        <TextField id="standard-basic" label="Expiry date" variant="standard" sx={{
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
        
        <div className='next-btn'>
          
        <Button variant="contained" 
            style={{
           
            fontSize: "12px"
                                }}>
         <Link to="/checkout" className='back-link'>back</Link>
            </Button>
            </div>

            <div  className='next-btn'>
  
        <Button variant="contained"
        style={{
           
          fontSize: "12px"
          }}>
            <Link to="/summary" className='link-btn'>Next</Link>
        </Button>
        </div>
        </div>
        

    </div>
    </>
  )
}

export default Summary
