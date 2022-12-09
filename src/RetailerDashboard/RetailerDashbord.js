import React from "react";
import DashLayout from "../CDashboard/Layout";
import Chart from "../CDashboard/chart";

import TableRetailer  from "../RetailerDashboard/TableRetailer"
import TableOrder from "../RetailerDashboard/TableOrder"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
const items = [
  
  { name: "Purchase Products",icon:< ShoppingCartIcon/>, path:"/Purchase" },
  { name: "Orders", icon: <LocalShippingOutlinedIcon/>,path:"/orders" },
];
const View = () => {
  return (
    
    <DashLayout siderItems={items}>
      <TableRetailer />
      <TableOrder/>
    </DashLayout>
  );
}; 

export default View;
