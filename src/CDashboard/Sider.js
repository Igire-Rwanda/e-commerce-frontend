// import * as React from 'react';
// import { Box, Grid } from "@mui/material";
// import Header from '../component/header';
// import Sider from 'antd/lib/layout/Sider';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import Profile from "../assets/image/Profile.jpg"
// import "../views/Dashbord/Dashboard.css";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// // import { FaProductHunt } from "@fortawesome/free-solid-svg-icons";
// import {faCog} from "@fortawesome/free-solid-svg-icons";
// import MailIcon from '@mui/icons-material/Mail';
// import ListItem from '@mui/material/ListItem';
// import Typography from '@mui/material/Typography';
// import { FaProductHunt, FaUmbrella } from 'react-icons/fa';

// const Dashboard =()=>{
//     return(
// <>
//       <img src={Profile} alt="" class="profile"></img>
// <List

//      class="Dash">
//       <h1 class="headings">elyseShop</h1><span></span>
//       <h1 class="shop">elyseshop@gmail.com</h1>
//       <div class="desh">

//       <ListItemButton 
      
//        selected={true}>
//         <ListItemIcon>
//           <FontAwesomeIcon icon={faUser}class="send"  />
//         </ListItemIcon>
//         <ListItemText primary="Dashboard"   sx={{fontSize:"100px",color:'pink'}} />
//       </ListItemButton>
//       <ListItemButton 
      
//       >
//         <ListItemIcon>
//           <FontAwesomeIcon icon={faUser}class="send"  />
//         </ListItemIcon>
//         <ListItemText
//                     primary="Product"
                    
//                   />
//       </ListItemButton>
//       <ListItemButton 
      
//       >
//         <ListItemIcon>
//           <FontAwesomeIcon icon={faUser}class="send"  />
//         </ListItemIcon>
//         <ListItemText
//                     primary="Order"
                    
//                   />
//       </ListItemButton>
//       <ListItemButton 
      
//       >
//         <ListItemIcon>
//           <FontAwesomeIcon icon={faUser}class="send"  />
//         </ListItemIcon>
//         <ListItemText
//                     primary="Checkout"
                    
//                   />
//       </ListItemButton>
//       <ListItemButton 
      
//       >
//         <ListItemIcon>
//           <FontAwesomeIcon icon={faUser}class="send"  />
//         </ListItemIcon>
//         <ListItemText
//                     primary="Customer"
                    
//                   />
//       </ListItemButton>
//           <ListItemButton>
//         <ListItemIcon>
//           <FontAwesomeIcon icon={faCog}class="snd"  />
//         </ListItemIcon>
//         <ListItemText primary="setting" class="wf" />
        
//       </ListItemButton>
      
//         </div>
        
//     </List>
    
//     </>
    
//   );
// };
// export default Dashboard;

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemIcon, Paper } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Profile from "../assets/image/Profile.jpg"
import "../views/Dashbord/Dashboard.css"

export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={3}>
      
      <List
        sx={{
          width: "100%",
          maxWidth: 300,
          // bgcolor: ["red","yellow"],
          minHeight: ["5vh", "100vh"],
          bgcolor:"black"
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Dashboard
          </ListSubheader>
        }
      >
        <img src={Profile} alt="" class="profile"></img><span></span>
        {props?.items?.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index && true}
            onClick={() => setSelectedIndex(index)}
          >
            <ListItemIcon sx={{color:"white"}}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} sx={{color:"white"}} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}