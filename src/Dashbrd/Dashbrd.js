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
import Retailer from "./Retailer";


import Chart from "../Dashbrd/pchart"

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
    <Chart/>
   
     
    </DashLayout>
    </>
  );
};

export default View;
