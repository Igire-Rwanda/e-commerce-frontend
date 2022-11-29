import React from "react";
import "./signIn.css";
import onlineshopping from "../images/pic-project.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { fontSize } from "@mui/system";
import { useForm } from "react-hook-form";
 


const SignUp = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    console.log(errors)


    const [user, setUser] = useState({});


    const changeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const signupSave = async () => {
        axios.post("http://localhost:4000/users", user);

    }
    return (
        <>
            <div className="signup-container" onSubmit={handleSubmit(()=>{

            })}>
                <div>
                    {/* <img src={onlineshopping} alt="" id="picture" /> */}
                </div>
                <div className="container3">
                    <h2 className="loginHeader">Sign Up</h2>
                    <div>
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
                            
                                <Link to="login">Sign Up</Link>
                            </Button>
                        </div>
                        <div className="signUppar">
                            <p >Already have an account?<Link to="/login">Sign In</Link></p>
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
