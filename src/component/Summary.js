import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signIn.css";

import Box from "@mui/material/Box";
const Summary = () => {
  const amount = 300000;
  const products = "electronic divices and shoes";
  const modeofpay = "momo";
  const address = "Kacyiru";

  function Delivery() {
    alert(
      "Thank you!! your request has been successfully send, we reach tou you soon "
    );
  }
  return (
    <>
      <div>
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
                fontSize: "12px",
                padding: "10px 40px",
                marginTop: "20px",
                marginRight: "40px",
              }}
            >
              <Link to="/checkout" className="link-btn">
                Back
              </Link>
            </Button>
            <Button
              variant="contained"
              style={{
                fontSize: "12px",
                padding: "10px 40px",
                marginTop: "20px",
              }}
              onClick={Delivery}
            >
              <Link to="/" className="link-btn">
                OK
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
