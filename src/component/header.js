import React, { useState } from "react";
import "./header.css";
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import order from "../assets/order.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Logo from "../assets/image/Logo2.jpeg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Icon } from "@mui/material";
import HeaderTwo from "./headerTwo";
import { useCart } from "react-use-cart";
import ContactUS from "../components/ContactUs";
const Header = () => {
  const { isEmpty, totalItems } = useCart();
  const [show, setshow] = useState(true);

  const [warning, setwarning] = useState(false);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 30,
    width: "47rem",
    height: "40px",
    [theme.breakpoints.up("sm")]: {
      width: "",
      border: "1px solid black",
      right: "14rem",
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
    marginRight: "8rem",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4.7)})`,
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
              <label style={{ fontSize: "16px" }}>Welcome</label>
              <label style={{ fontSize: "16px" }}>Need helps</label>
              <span></span>
              <label htmlFor="" style={{ fontSize: "16px" }}>
                EN
              </label>
              <span></span>
              <label htmlFor="">USD</label>
            </div>
            <div style={{ color: "white" }}>
              <label style={{ fontSize: "16px" }}>Home</label>
              <label style={{ fontSize: "16px" }}>Shipping</label>
              {/* <label>ContactUs</label> */}
              <Link to="/ContactUS" style={{ fontSize: "16px" }}>
                Contact Us
              </Link>
            </div>
            <Link to="/About" style={{ fontSize: "16px" }}>
              AboutUs
            </Link>
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
              <img src={user}></img>
              <h4>Login</h4>
            </a>
            <a href="/cart">
              <img src={cart}></img>
              {!isEmpty && (
                <span
                  style={{ position: "relative", left: "-21px", top: "-18px" }}
                >
                  {totalItems}
                </span>
              )}
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
