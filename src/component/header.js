import React, { useState } from "react";
import "./header.css";
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import order from "../assets/order.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Logo from "../assets/log-removebg-preview.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Icon } from "@mui/material";
import HeaderTwo from "./headerTwo";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "47rem",
    height: "40px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      width: "",
      border: "1px solid black",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "110%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
  }));
  // const [MobileMenu,setMobileMenu]=useState(false)
  return (
    <>
      <>
        <section className="Head">
          <div className="header-container d-flex">
            <div className="right row RText">
              <label>Theme FQ's</label>
              <label>Need helps</label>
              <span></span>
              <label htmlFor="">EN</label>
              <span></span>
              <label htmlFor="">USD</label>
            </div>
            <div>
              <label>Home</label>
              <label>Shipping</label>
              <label>ContactUs</label>
            </div>
            <div className="left row phone">
              <i className="fa fa-phone"></i>
              <label>+250785214483</label>
              <i className="fa fa-envelope"></i>
              <label className="eco">xxx@gmail.com</label>
            </div>
          </div>
        </section>
      </>
      {/* ---------------------Navbar-------------- */}
      <header className="header-header">
        <div className="navbar">
          <div className="Logo-img">
            <Link to="/">
              {" "}
              <img src={Logo} alt=""></img>{" "}
            </Link>
          </div>
          <section className="Search">
            <Search action="https://www.google.com/search" method="get">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                // placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                name="q"
              />
              <button className="header-search-btn">Search</button>
            </Search>
          </section>
          <div className="header-icon">
            <a href="/login">
              {/* <img src={user}></img> */}
              <h4>Login</h4>
            </a>
            <a href="#">
              {/* <img src={cart}></img> */}
              <h4>Cart</h4>
            </a>
          </div>
        </div>

        <>
          {/* <IconContext.Provider value={{ color: "rgba(156, 14, 62, 0.808)" }}>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <a href="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </a>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li Key={index} className={item.cName}>
                      <a href={item.path}>
                        <span>{item.title}</span>
                      </a>
                    </li>
                  
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider> */}
        </>
      </header>
    </>
  );
};
export default Header;
