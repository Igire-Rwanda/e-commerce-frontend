import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <>
    
    <div className="message-container">
        <span className='span-message'>Thank you for shopping with us!! your order has been successfully sent, we will reach to you soon</span>
    
    
    <Button
              style={{
                // borderRadius: 35,
                backgroundColor: "darkgoldenrod",

                // padding: "15px 30px",
                fontSize: "18px",
                height:"40px"
              }}
              variant="contained"
            >
              <Link to="/" className="back-link">
                Back To Home
              </Link>
    </Button>
    </div> 
  </>
  
  )
}

export default Message

