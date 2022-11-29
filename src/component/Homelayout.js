import React from "react";
import Header from "./header";
import Footer from "./footer";
const HomeLayout = ({children})=>{
    return(
        <>
        <Header/>
        <div style={{ minHeight:"70vh"}}>{children}</div>
        <Footer/>
        </>
    );
};
export default HomeLayout;