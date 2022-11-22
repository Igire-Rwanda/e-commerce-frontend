import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function Header() {
  const [active, setActive] = useState("links");
  const navToggle = () => {
    active === "links" ? setActive("links nav_active") : setActive("links");
  };
  let theEnd = 0,
    nav = document.getElementById("nav");

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
      nav.style.top = "-70px";
    } else {
      nav.style.top = "0";
    }
    theEnd = scrollTop;
  });

  return (
    <Navbar className="nav">
      <header className="header">
        <div>
          <div className="logo">
            <h1>Logo</h1>
          </div>
        </div>

        <div className={active}>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Shipping</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>
                <Button variant="outline-dark">Sign up</Button>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>
                <Button variant="outline-dark">Login</Button>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>
                <Button variant="outline-dark">
                  <BiCart size="2rem" />
                  Cart
                </Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="phone" onClick={navToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    </Navbar>
  );
}
export default Header;
