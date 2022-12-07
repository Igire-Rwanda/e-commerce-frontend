import React from "react";
import  image from "../assets/image/breath.png";
import Header from "../component/header";
import Footer from "../component/footer";
import Offer from "../components/offer";
import "../component/header.css";
import "../App.css"
import HomeLinks from "../component/HomeLinks";
import { Outlet } from "react-router-dom";
import HomeProduct from "../component/HomeProduct";

const Home=()=>{

    return(
        <>
            <h1 className="home-h1" style={{fontSize:"30px",color:"darkgoldenrod"}}>OUR PRODUCTS:</h1>
            <HomeProduct /> 
            <Offer/>
            <h1 className="home-h1"style={{fontSize:"30px",color:"darkgoldenrod"}}>OUR FEATURES PRODUCTS:</h1>
            <HomeProduct /> 
        </>
    )
}
export default Home;