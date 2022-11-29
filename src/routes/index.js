import React from "react";

import { Routes, Route } from "react-router-dom";
import HomeLayout from "../component/Homelayout";
import Dashboard from "../views/Dashbord/Dashboard";
import Dashlayout from "../component/admin/DashLayout";
import Dashbrd from "../Dashbrd/Dashbrd";
<<<<<<< HEAD
const index = () => {
  return (
    <>
      {/* <HomeLayout> */}
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Dashlayout" element={<Dashlayout />} />
        <Route exact path="/Dashbrd" element={<Dashbrd />} />
      </Routes>
      {/* </HomeLayout> */}
    </>
  );
=======
import ContactUs from "../components/ContactUs"
const index=() =>{
    return (
   <>
       <HomeLayout>
        <Routes>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/Dashlayout" element={<Dashlayout/>}/>
        <Route exact path="/Dashbrd" element={<Dashbrd/>}/>
        </Routes> 
        </HomeLayout>   
      
 </>
    );
>>>>>>> responsiveness
};
export default index;
