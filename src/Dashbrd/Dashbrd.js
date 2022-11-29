import React from "react";
import DashLayout from "../CDashboard/Layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from '@mui/icons-material/Settings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import Paper from '@material-ui/core/Paper';
import { Button, Card, ListItemText } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Retailer from "../Dashbrd/Retailer";

import PieChart from "../CDashboard/PieChart";
import Table from "../Dashbrd/Table";

import "../views/Dashbord/Dashboard.css";
// import Content from "../CDashboard/Content"

  

  
const items = [
  { name: "Dashboard", icon: <PeopleAltIcon sx={{color:"pink"}} />},
  { name: "Product", icon: <ProductionQuantityLimitsIcon />,path:"/product"  },
  { name: "Order", icon: <FilterFramesIcon />,path:"/order"  },
  { name: "Checkout", icon: < BusinessCenterIcon /> },
  { name: "Customer", icon: <PeopleAltIcon /> },
  { name:"setting", icon:<SettingsIcon/>}
  
];
const View = () => {
  return (
    <>
    <DashLayout siderItems={items} > 
     
   
    <Retailer /> 
      <PieChart/> 
      <h1 className="Topa">Top Categories</h1>
      <h1 className="numbr">18,345</h1>
      <h1 className="mre">Product sales</h1>
      <div className="sili">
        <h2><i class="fa-duotone fa-circle-dot" style={{color:"blue"}}></i>electricity <br></br>35%</h2>
        <h2> <i class="fa-duotone fa-circle-dot" style={{color:"red"}}></i>Decoration <br></br> 85%</h2>
        <h2><i class="fa-duotone fa-circle-dot" style={{color:"green"}}></i>Men's Clothes <br></br> 50%</h2>
      </div>
      <Table/>
    </DashLayout>
    </>
  );
};

export default View;
