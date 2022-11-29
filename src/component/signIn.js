import React from "react";
import "./signIn.css";
import onlineshopping from "../images/pic-project.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";






const SignIn = () => {

  const [user, setUser] = useState({});


  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const loginSave = async () => {

    try{
    const response = axios.post("http://localhost:4000/users/login", user);
      alert(response.data.message)
    } catch (error){
      alert(error.response.data.message)
    }
  }

  return (
    <div className="signup-container">
      <div>
        {/* <img src={onlineshopping} alt="" id="picture" /> */}
      </div>
      <div className="container3">
        <div className="log-details">
          <h2 className="loginHeader">Login</h2>
          <div className="text-input">
            <TextField jsx={{ fontSize: "large" }} id="standard-basic" label="Enter Your E-Mail:" variant="standard" name="email"
              defaultValue={user.email}
              onChange={changeInput}
              sx={{
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
          <div className="text-input">
            <TextField id="standard-basic" label="Enter Your Password:" variant="standard" name="password"
              defaultValue={user.password}
              onChange={changeInput}
              sx={{
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
          <div className="btn">
            <Button  onClick={loginSave}
              style={{
                // borderRadius: 35,
                backgroundColor: "darkgoldenrod",

                // padding: "15px 30px",
                fontSize: "18px"
              }}
              variant="contained"
            >
              Login
            </Button>
          </div>
          <div className="signUppar">
            <p>Don't have an account?<Link to="signUp">Sign Up</Link></p>
          </div>



          {/* <div>
          <div className="usempas">
            <h2 className="login">Login</h2>
            
            <div>
              <p className="para">Email:</p>
              <input
                type="email"
                placeholder="Email address"
                className="box1"
                name="email"
                defaultValue={user.email}
                onChange={changeInput}
              />
            </div>
            <div>
              <p className="para">Password:</p>
              <input type="password"
               placeholder="Password" 
               className="box1"
               name="password"
               defaultValue={user.password} 
               onChange={changeInput} />

              <p className="par">forgot password?</p>
             
            </div>
            <button className="log-btn" type="submit" onClick={loginSave}>LOGIN</button>
            <Button variant="contained">Contained</Button>
          </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default SignIn;
