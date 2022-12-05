import React from "react";
import DashLayout from "../CDashboard/Layout";
import SettingsIcon from '@mui/icons-material/Settings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


import UploadPic from "../component/UploadPic";
import Select from "../component/Select"
const items = [
    { name: "Dashboard", icon: <PeopleAltIcon sx={{color:"pink"}} />,path:"/Dashboard"},
    { name: "Product", icon: <ProductionQuantityLimitsIcon />,path:"/product"  },
    { name: "Order", icon: <FilterFramesIcon />,path:"/Order"  },
    {name:"Add New Product", icon:<AddIcon/>,path:"/AddNewProduct"},
    { name: "Checkout", icon: < BusinessCenterIcon /> },
    { name: "Customer", icon: <PeopleAltIcon /> },
    { name:"setting", icon:<SettingsIcon/>}
    
    
  ];
const AddnewProduct=()=>{
    return(
        <DashLayout siderItems={items} >
         <div >
      <div className='checkout-container'style={{position:"relative",bottom:"25rem",width:"50%"}}>
        <h2>Add New Product</h2>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Title" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Price" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Description" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <Select />
        
        <div className='text-input'>
        <TextField id="standard-basic" label="Quantity" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        </div>
        <div className='text-input'>
        <TextField id="standard-basic" label="Product Picture" variant="standard" sx={{
                                    width: { sm: 200, md: 300 },
                                    "& .MuiFormLabel-root": {
                                        fontSize: "15px"
                                    },
                                    "& .MuiFormLabel-root.Mui-focused": {
                                        color: 'primary.main'
                                    },
                                    "& .MuiInputBase-root": {
                                        height: 30
                                    }
                                }} />
        <UploadPic />                        
        </div>

        <div className='text-input'>
        <Button variant="contained"
        style={{
           
          fontSize: "12px"
          }}
        >
        Add A New Product
        </Button>
        </div>
        
        </div>
    </div>
        </DashLayout>
    );
};

export default AddnewProduct;