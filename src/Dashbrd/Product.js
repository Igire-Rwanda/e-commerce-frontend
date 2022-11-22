import * as React from 'react';
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
import { Carousel } from 'antd';
import Fashion from "../assets/image/fashion.jpg";
import Fifi from "../assets/image/fifi.jpg";
import "../views/Dashbord/Dashboard.css";
import { Button, Card, ListItemText } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Chart from "../CDashboard/Chat1"


const { Search } = Input;

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

  return (
    <>
      <DashLayout siderItems={items} >
   
    

        <Box sx={{ width: '100%', typography: 'body1',position:"relative",bottom:"22rem" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Our Product" value="1" >

                </Tab>
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" >
              <Carousel autoplay>
                {/* <div className="carouse">
                  <img src={Fashion} />
                  <img src={Fifi} />
                  <img src={Fifi} />
                  <img src={Fashion} />
                </div> */}
              </Carousel>
              <h1 className="Top">Top Product</h1>
              <input placeholder='search ....' className="searche">

              </input>
              <Button sx={{ position: "relative", left: "16rem", border: "1px solid black",
               height: "6.6vh", bottom: "1px", color: "gray",
                backgroundColor: "black" }}>Search</Button>
              <Card sx={{
                height: "25vh",
                position: "relative",
                top: "5px",
                width: "70%"

              }}>





                <div className="sold">
                  <h1>Product Name</h1>
                  <h1>Order Id</h1>
                  <h1>Price</h1>
                  <h1>Solds</h1>
                  <h1>Sales</h1>
                </div>
                <div className="names">
                  <h2>Men's Clothes</h2>
                  <h2>Women's Clothes</h2>
                  <h2>Decoration Clothes</h2>
                  <h2>MacBook Pro</h2>


                </div>
                <Button sx={{ position: "relative", top: "20px", color: "black" }}><ArrowDropDownIcon sx={{ width: "30px" }} />More Categories</Button>
                <div className="id">
                  <h2 style={{ color: "red" }}>#768986866</h2>
                  <h2 style={{ color: "green" }}>#768986866</h2>
                  <h2 style={{ color: "red" }}>#768986866</h2>
                  <h2>#768986866</h2>
                </div>
                <div className="i">
                  <h2>1890$</h2>
                  <h2>1890$</h2>
                  <h2>1890$</h2>
                  <h2>1890$</h2>
                </div>
                <div className="solde">
                  <h1>1890$</h1>
                  <h1>1890$</h1>
                  <h1>1890$</h1>
                  <h1>1890$</h1>
                </div>
                <div className="sales">
                  <h2>1890$</h2>
                  <h2>1890$</h2>
                  <h2>1890$</h2>
                  <h2>1890$</h2>
                </div>
              </Card>
            </TabPanel>
            <TabPanel value="2">
            <button className='Months' >Months</button>
            <div className="available">
        <h4>Purchace <span>2675$</span> </h4>
        <h4>Available <span>49875$</span> </h4>
        <h4>Sales Price <span>6535$</span> </h4>
        <h4>Sales<span>65474$</span> </h4>
        </div>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
        <Chart>
        </Chart>
    
      </DashLayout>
    </>
  );
}
