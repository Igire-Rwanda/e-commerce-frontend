import React from "react";
import DashLayout from "../CDashboard/Layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Chart from "../CDashboard/chart"

const items = [
  { name: "Dashboard", icon: <InboxIcon /> },
  { name: "Client", icon: <InboxIcon /> },
  { name: "Retailer", icon: <InboxIcon /> },
  { name: "Product", icon: <InboxIcon /> },
];
const View = () => {
  return (
    <DashLayout siderItems={items}>
       <Chart/>
    </DashLayout>
  );
};

export default View;
