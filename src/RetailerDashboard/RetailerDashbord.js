import React from "react";
import DashLayout from "../CDashboard/Layout";
import Chart from "../CDashboard/chart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
const items = [
  
  { name: "Purchase Products",icon:< ShoppingCartIcon/>  },
  { name: "Orders", icon: <LocalShippingOutlinedIcon/> },
];
const View = () => {
  return (
    <DashLayout siderItems={items}>
       <Chart/>
    </DashLayout>
  );
};

export default View;
