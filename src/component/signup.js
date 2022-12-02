import React from "react";
import "./signIn.css";
import onlineshopping from "../images/pic-project.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const navigate = useNavigate(); 
    const {register,handleSubmit,formState:{errors}} = useForm();
    console.log(errors);

    const [user, setUser] = useState({
        names: "",
        email: "",
        password: "",
        companyName: "",
        telephoneNumber: "",
        address: "",
    });

    const clearInputs = () => {
        setUser({
            names: "",
            email: "",
            password: "",
            companyName: "",
            telephoneNumber: "",
            address: ""
        })
    }

    const [error, setError] = useState("");

    const changeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const signupSave = async (e) => {
        e.preventDefault();

        if(!user.names) {
            setError("Name is required, Please enter your name");
        } else if (!user.email) { 
            setError("Email is required, Please enter your email");
            return;
        } else if (!user.password) { 
            setError("Password is required, Please enter your password");
            return;
        } else if (!user.companyName) { 
            setError("Company is required, Please enter your company");
            return;
        } else if (!user.telephoneNumber) { 
            setError("Telephone is required, Please enter your telephone");
            return;
        } else if (!user.address) { 
            setError("Address is required, Please enter your address");
            return;
        } else {
            setError("");
            console.log(user);
            axios.post("http://localhost:4000/users", user)
            .then(response=>{
                if (response.data.message !== 'Error') {
                    console.log(response.data);
                    clearInputs();
                    navigate("/login");
                } else {
                    setError("Failed to save.   ");    
                }
            })
            .catch(err=>{
                setError(err);
            })
        }
    }

    return (
        <>
            <div className="signup-container" onSubmit={handleSubmit(()=>{
            })}>
                <div className="container3">
                    <h2 className="loginHeader">Sign Up</h2> 
                    <div>
                    {error &&
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            // width: '100%', 
                        }}>
                        <span className="error-message"
                            style={{
                                border: '1px solid red',
                                color: 'red',
                                textAlign: 'center',
                                width: '80%',
                                marginLeft: "0p x !Important",
                                fontFamily: "roboto",
                                padding: "0.7rem",
                            }}>
                            {error}
                        </span>
                    </div>
                    }
                        <div className="text-input">
                                <TextField id="standard-basic" label="Enter Your Names:" {...register("names",{required:"Please Enter your Names"})} defaultValue={user.names} onChange={changeInput} variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }}
                                />
                        </div>
                        <div className="text-input">
                            <TextField id="standard-basic" label="Enter Your Email:" name="email"
                                defaultValue={user.email}
                                onChange={changeInput}
                                variant="standard" sx={{
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
                                }}
                            />
                        </div>
                        <div className="text-input">
                            <TextField id="standard-basic" label="Enter Your Password:" name="password" defaultValue={user.password} onChange={changeInput} variant="standard"
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
                            <TextField id="standard-basic" label="Enter Your companyName:"
                                name="companyName"
                                defaultValue={user.companyName}
                                onChange={changeInput} variant="standard"
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
                            <TextField id="standard-basic" label="Enter Your Phone_Number:" name="telephoneNumber"
                                defaultValue={user.telephoneNumber}
                                onChange={changeInput} variant="standard"
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
                            <TextField id="standard-basic" label="Enter Your Address:" variant="standard" name="address"
                                defaultValue={user.address}
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
                            <Button onClick={signupSave}
                                style={{
                                    // borderRadius: 35,
                                    backgroundColor: "darkgoldenrod",

                                    // padding: "15px 30px",
                                    fontSize: "18px"
                                }}
                                variant="contained"
                            >
                            Sign Up
                            </Button>
                        </div>
                        <div className="signUppar">
                            <p >Already have an account?<Link to="/login" className="par-links">Sign In</Link></p>
                        </div>
                        {/* <div className="usempas">
                        <h2 className="login">SignUp</h2>
                        <p className="para">Names:</p>
                        <input type="text" placeholder="Enter your name" className="box1" name="names" defaultValue={user.names} onChange={changeInput} />

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

                            <input type="password" placeholder="Password" className="box1" name="password" defaultValue={user.password} onChange={changeInput} />

                            <div>
                                <p className="para">Company Name:</p>
                                <input
                                    type="text"
                                    placeholder="CompanyName"
                                    className="box1"
                                    name="companyName"
                                    defaultValue={user.companyName}
                                    onChange={changeInput} 
                                />
                            </div>
                            <div>
                                <p className="para">Telephone Number:</p>
                                <input
                                    type="number"
                                    placeholder="Enter your telephone number"
                                    className="box1"
                                    name="telephoneNumber"
                                    defaultValue={user.telephoneNumber}
                                    onChange={changeInput} 
                                />
                            </div>
                            <div>
                                <p className="para">Address:</p>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="box1"
                                    name="address"
                                    defaultValue={user.address}
                                    onChange={changeInput} 
                                />
                            </div>
                        </div>
                        <button className="log-btn" onClick={signupSave}>SIGNUP</button>
                        <div>
                            <p className="signUppar" type="submit" >Already have an account?<Link to="login">Sign In</Link></p>
                        </div>

                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;
