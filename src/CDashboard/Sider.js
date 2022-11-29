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
import "../views/Dashbord/Dashboard.css";
import {useNavigate} from "react-router-dom"


export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={3}>
      
      <List
        sx={{
          width: "99%",
          maxWidth: 360,
          // bgcolor: ["red","yellow"],
          minHeight: ["5vh", "138vh"],
          bgcolor:"black",
         zIndex:"999",
          top:"0",
          position:"fixed",
          justifyContent:"center",  fontSize: "14px",
          fontWeight: 200
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      
      >
          <img src={Profile} alt="" class="profile"></img>
          <ListItemText primary="ElyseShop" sx={{color:"white",position:"relative",top:"8rem",left:"10rem",size:"large"}}/>
          <ListItemText primary="ElyseShop@gmail.com" sx={{color:"white",position:"relative",top:"8rem",left:"8rem"}}/>
        {props?.items?.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index && true}
            onClick={() => {
              setSelectedIndex(index)
              navigate (item.path);
            }}
            
           sx={{position:"relative",top:"10rem",padding:"2rem" , fontSize: "14px",
           fontWeight: 200}}>
            <ListItemIcon sx={{color:"white"}}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} sx={{color:"white",gap:"2rem", fontSize: "14px",
            fontWeight: 200,}} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
