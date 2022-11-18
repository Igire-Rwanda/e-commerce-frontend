import React from "react";
import image from "../assets/image/breath.png";
import Header from "../component/header";
import Footer from "../component/footer";
import "../component/header.css";
import "../App.css";
import Shopproduct from "../component/Shopproduct";
import home from './home.css';


const Home = (props) => {

    return (
        <>
            <h1>OUR PRODUCTS</h1>
            <Shopproduct data={props.data} />

            <h1 >Featured Products</h1>
            <Shopproduct data={props.data} />
            <Footer />
        </>
    )
}
export default Home;
