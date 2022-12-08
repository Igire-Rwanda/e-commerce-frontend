import React, { useContext, useEffect } from "react";
import "./signIn.css";
import onlineshopping from "../images/pic-project.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import {SuccessMessageContext} from '../App';

const SignIn = () => {
  const navigate = useNavigate();
  const successMessage = useContext(SuccessMessageContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const clearInputs = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(()=> {
    setSuccess(successMessage);
  },[]);

  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginSave = async (e) => {
    e.preventDefault();

    if (!user.email) {
      setError("Email is required,Please enter your email");
    } else if (!user.password) {
      setError("Password is required,Please Enter your Password");
      return;
    } else {
      setError("");
      console.log(user);
      axios
        .post("http://localhost:4000/users/login", user)
        .then((response) => {
          if (response.data.message != "Error") {
            console.log(response.data);
            clearInputs();
            navigate("/Dashbrd");
          } else {
            setError("Failed to Save.");
          }
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  setTimeout(setSuccess({
    message: '',
    visible: false
  }), 5000);

  return (
    <div className="signup-container">
      <div>{/* <img src={onlineshopping} alt="" id="picture" /> */}</div>
      <div className="container3">
        <div className="log-details">
          <h2 className="loginHeader">Signin</h2>
          {success.visible && (
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // width: '100%',
            }}
          >
            <span
              className="error-message"
              style={{
                border: "1px solid green",
                color: "green",
                textAlign: "center",
                width: "80%",
                marginLeft: "0p x !Important",
                fontFamily: "roboto",
                padding: "0.7rem",
              }}
            >
              {success.message}
            </span>
          </div>
          )}
          
          {error && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // width: '100%',
              }}
            >
              <span
                className="error-message"
                style={{
                  border: "1px solid red",
                  color: "red",
                  textAlign: "center",
                  width: "80%",
                  marginLeft: "0p x !Important",
                  fontFamily: "roboto",
                  padding: "0.7rem",
                }}
              >
                {error}
              </span>
            </div>
          )}
          <div className="text-input">
            <TextField
              jsx={{ fontSize: "large" }}
              id="standard-basic"
              label="Enter Your E-Mail:"
              variant="standard"
              name="email"
              defaultValue={user.email}
              onChange={changeInput}
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiFormLabel-root": {
                  fontSize: "15px",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  height: 30,
                },
              }}
            />
          </div>
          <div className="text-input">
            <TextField
              id="standard-basic"
              label="Enter Your Password:"
              variant="standard"
              name="password"
              defaultValue={user.password}
              onChange={changeInput}
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiFormLabel-root": {
                  fontSize: "15px",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  height: 30,
                },
              }}
            />
          </div>
          <div className="btn">
            <Button
              onClick={loginSave}
              style={{
                // borderRadius: 35,
                backgroundColor: "darkgoldenrod",

                // padding: "15px 30px",
                fontSize: "18px",
              }}
              variant="contained"
            >
              <Link to="/Dashbrd" className="back-link">
                Login
              </Link>
            </Button>
          </div>
          <div className="signUppar">
            <p>
              Don't have an account?
              <Link to="/signUp" className="par-links">
                Sign Up
              </Link>
            </p>
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
};

export default SignIn;
