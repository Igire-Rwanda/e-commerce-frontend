import React from "react";

import {Routes,Route} from 'react-router-dom';
import HomeLayout from "../component/Homelayout";
import Dashboard from "../views/Dashbord/Dashboard";
import Dashlayout from "../component/admin/DashLayout";
import Dashbrd from "../Dashbrd/Dashbrd";
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
};
export default index;