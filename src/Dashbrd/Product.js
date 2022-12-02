import * as React from 'react';
import  { useState } from 'react';
import DashLayout from "../CDashboard/Layout";
import SettingsIcon from '@mui/icons-material/Settings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Retailer from './Retailer';
import Retailer1 from './Retailer1';

import Graph from "../Dashbrd/graph";



import { Button } from "@mui/material";




const items = [
  { name: "Dashboard", icon: <PeopleAltIcon sx={{ color: "pink" }} />, path: "/Dashbrd" },
  { name: "Product", icon: <ProductionQuantityLimitsIcon />, path: "/product" },
  { name: "Order", icon: <FilterFramesIcon /> },
  { name: "Checkout", icon: < BusinessCenterIcon /> },
  { name: "Customer", icon: <PeopleAltIcon /> },
  { name: "setting", icon: <SettingsIcon /> }

];





export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const onSearch = (value: string) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <DashLayout siderItems={items} >
   
    

        <Box sx={{ width: '100%', typography: 'body1',position:"relative",bottom:"22rem" }}>
        <button  className='rounded-md ml-[80rem] bg-amber-700 w-[180px] p-2 h-[5vh] animate-bounce text-white text-xl'>Add new product</button>

          <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Stock" value="1" >

                </Tab>
                <Tab label="Order" value="2" />
                <Tab label="Total Sales" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" >   
            <Retailer/>     
            </TabPanel>
            <TabPanel value="2">
           <Retailer1/>
           < Graph/>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
          
        </Box>
       
    
      </DashLayout>
    </>
  );
}
