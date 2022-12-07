import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./signIn.css";

const currencies = [
  {
    value: "MOMO",
    label: "MOMO pay",
  },
  {
    value: "MasterCard",
    label: "Mastercard",
  },
  {
    value: "VISA Card",
    label: "VISA",
  },
];
const amount = 300000;

const Payment = () => {
  const [currency, setCurrency] = React.useState("MOMO");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <div className="shipping-container">
        <div className="checkout-container">
          <h2>Checkout</h2>
          <h3>Payment Method:</h3>
          <div className="text-input">
            <TextField
              id="standard-select-currency-native"
              select
              label="Select payment mode"
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="standard"
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiFormLabel-root": {
                  fontSize: "20px",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  height: 30,
                },
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>

          <div className="text-input" style={{ marginTop: "70px" }}>
            <label style={{ marginRight: "20px" }}>
              Total amount to be paid
            </label>
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>{amount}</Button>
            </Box>
          </div>

          <div
            className="text-input"
            style={{ marginTop: "60px", marginLeft: "150px" }}
          >
            <Button
              variant="contained"
              style={{
            
                backgroundColor: "darkgoldenrod",
    
                fontSize: "12px",
              }}
            >
              <Link to="/checkout" className="back-link">
                back
              </Link>
            </Button>

            <Button
              variant="contained"
              style={{
            
                backgroundColor: "darkgoldenrod",
    
                fontSize: "12px",
              }}
            >
              
              <Link to="/summary" className="link-btn">
                Next
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
