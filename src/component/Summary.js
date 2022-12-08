import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signIn.css";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Box from "@mui/material/Box";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Summary = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const amount = 300000;
  const products = "electronic divices and shoes";
  const modeofpay = "momo";
  const address = "Kacyiru";

  function Delivery() {
    // alert(
    //   "Thank you for shopping with us!! your order has been successfully sent, we will reach to you soon "
    // );
  }
  return (
    <>
      <div className="shipping-container" >
        <div className="checkout-container">
          <h2>Order Summary:</h2>
          <div
            className="text-input"
            style={{ marginTop: "50px", marginLeft: "30px" }}
          >
            <label style={{ marginRight: "20px", fontSize: "20px" }}>
              Client name
            </label>
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>Hakorimana</Button>
            </Box>
          </div>
          <div
            className="text-input"
            style={{ marginTop: "50px", marginLeft: "30px" }}
          >
            <label style={{ marginRight: "20px", fontSize: "20px" }}>
              Ordered products
            </label>
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>{products}</Button>
            </Box>
          </div>
          <div
            className="text-input"
            style={{ marginTop: "50px", marginLeft: "30px" }}
          >
            <label style={{ marginRight: "20px", fontSize: "20px" }}>
              Delivery address
            </label>
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>{address}</Button>
            </Box>
          </div>
          <div
            className="text-input"
            style={{ marginTop: "50px", marginLeft: "30px" }}
          >
            <label style={{ marginRight: "20px", fontSize: "20px" }}>
              Total amount paid
            </label>
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>{amount}</Button>
            </Box>
          </div>
          <div
            className="text-input"
            style={{ marginTop: "50px", marginLeft: "30px" }}
          >
            <label style={{ marginRight: "20px", fontSize: "20px" }}>
              Payment mode
            </label>
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>{modeofpay}</Button>
            </Box>
          </div>

          <div className="next-btn" style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              style={{
            
                backgroundColor: "darkgoldenrod",
    
                fontSize: "12px",
              }}
            >
              <Link to="/checkout" className="link-btn">
                Back
              </Link>
            </Button>
            <Button
              variant="contained"
              style={{
            
                backgroundColor: "darkgoldenrod",
    
                fontSize: "12px",
              }}
              onClick={Delivery}
            >
              <div>
      <Button onClick={handleOpen} className="back-link">Ok</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Thank you for shopping with us!!! your order has been successfully sent, we will reach to you soon. 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button>
              <Link to="/" >OK</Link>
              </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
