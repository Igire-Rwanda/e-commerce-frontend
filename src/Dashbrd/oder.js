import * as React  from 'react';
import DashLayout from "../CDashboard/Layout";
import SettingsIcon from '@mui/icons-material/Settings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import { FormControl,InputLabel,Box,TextField ,Button, Typography,OutlinedInput } from "@mui/material"
import { width } from "@mui/system"




const items = [
  { name: "Dashboard", icon: <PeopleAltIcon sx={{ color: "pink" }} />, path: "/Dashbrd" },
  { name: "Product", icon: <ProductionQuantityLimitsIcon />, path: "/product" },
  { name: "Order", icon: <FilterFramesIcon />, path: "/order" },
  { name: "Checkout", icon: < BusinessCenterIcon /> },
  { name: "Customer", icon: <PeopleAltIcon /> },
  { name: "setting", icon: <SettingsIcon /> }

];







const Order=()=>{
  return (
    <>
      <DashLayout siderItems={items} >
      <Box
        component="form"
        sx={{
          marginLeft:"90px",
          position:"relative",
          bottom:"20rem"
        }}
      >
        <Typography variant="h4" component="h5" sx={{
          textAlign:"center",
         
        }}>Order Form</Typography>
         <FormControl fullWidth sx={{ m: 1 ,width:"40%"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Category</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Amount"
            width="30%"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width:"40%"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Product name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Amount"
            width="30%"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width:"40%"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Amount"
            width="30%"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width:"40%"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Amount"
            width="30%"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width:"40%"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Product id</InputLabel>
          <OutlinedInput
          id="outlined-adornment-amount"
          label="Amount"
          width="30%"
          />


        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width:"40%"}}>
          <InputLabel htmlFor="outlined-adornment-amount">Payment method</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Amount"
            width="30%"
          />
        </FormControl>

        <Button
        sx={{
          marginLeft:"30%",
          width:"20%",
          marginTop: "20px",
          background:"black"
        }}
         variant="contained"
        >Send</Button>
      </Box>
      </DashLayout>
      </>
  )
}
export default Order;