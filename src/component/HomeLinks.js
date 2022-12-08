import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
// import photo from "../images/cart-image.JPG";
import Home from "../views/Home";
import HomeProductCard from "./HomeProductCard";
import Header from "../component/header";
import Footer from "./footer";
import "../component/styles/homelinks.css";
import dress from "../picture/dress2.jpg";
import dress13 from "../picture/dress13.jpg";
import dress11 from "../picture/dress11.jpg";
import dress14 from "../picture/dress14.jpg";
import {Card} from "antd";
import "../components/homepage.css"

const HomeLinks = () => {
  const params = useParams();
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  const [cart, setcart] = useState([]);
  const [show, setshow] = useState(true);

  const [warning, setwarning] = useState(false);
  return (
    <>
      <Header />
      <div className="Box-container">
        <div className="links-container">
          <div>
            <ul className="links-list">
              <button>
                {" "}
                <li className="btn">
                  <a href="/" className="link">
                    All Categories:
                  </a>
                </li>
              </button>
              <li className="alink">
                <Link to="electronics" className="link">
                  Electonics
                </Link>
                <span className="angle-right-icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li className="alink">
                <Link to="decor" className="link">
                  Home Decorations
                </Link>
                <span className="angle-right-icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li className="alink">
                <Link to="men" className="link">
                  Men's Clothing
                </Link>
                <span className="angle-right-icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li className="alink">
                <Link to="women" className="link">
                  Women's Clothing
                </Link>
                <span className="angle-right-icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li className="alink">
                <Link to="baby" className="link">
                  Baby Toys
                </Link>
                <span className="angle-right-icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </li>
              <li className="alink">
                <Link to="sports" className="link">
                  Sports
                </Link>
                <span className="angle-right-icon">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </li>

              {showMoreCategories && (
                <>
                  <li className="alink">
                    <Link to="electronics" className="link">
                      Beauty&Cosmetics
                    </Link>
                    <span className="angle-right-icon">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                  </li>
                  <li className="alink">
                    <Link to="decor" className="link">
                      Lights&Lighting
                    </Link>
                    <span className="angle-right-icon">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                  </li>
                  <li className="alink">
                    <Link to="men" className="link">
                      Home Textiles
                    </Link>
                    <span className="angle-right-icon">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                  </li>
                  <li className="alink">
                    <Link to="women" className="link">
                      Women's Clothing
                    </Link>
                    <span className="angle-right-icon">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                  </li>
                  <li className="alink">
                    <Link to="baby" className="link">
                      Baby Toys
                    </Link>
                    <span className="angle-right-icon">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                  </li>
                  <li className="alink">
                    <Link to="sports" className="link">
                      Sports
                    </Link>
                    <span className="angle-right-icon">
                      <i class="fa-solid fa-angle-right"></i>
                    </span>
                  </li>
                </>
              )}
              <button>
                {" "}
                <li
                  className="more-button"
                  onClick={() => setShowMoreCategories(!showMoreCategories)}
                >
                  See More:


                </li>
                
            </button>
            <Card className="c1">
            <img src={dress} 
            div style={{ width:"90%" , marginTop:"10px", marginRight:"100%"}}/>
            <p width="20rem">dresss</p>
            <h5>20000</h5>
            </Card>

            <Card className="c2">
           <img src={dress14} 
            div style={{ width:"90%", marginTop:"10px", marginLeft:"20px", marginBottom:"70px"}}/>
            <p width="20rem">dress</p>
            <h5>350000</h5>
            </Card>

            <Card className="c3">
            <img src={dress13} 
            div style={{ width:"80%", marginTop:"60px", marginLeft:"50px", marginBottom:"100px", position:"relative", bottom:"1rem"}}/>
            <p width="20rem">dress</p>
            <h5>30000</h5>
            </Card>
            
            <Card className="c4">
            <img src={dress11} 
            div style={{ width:"80%", marginTop:"80px", marginLeft:"50px", marginBottom:"10px", position:"relative", bottom:"14rem"}}/>
            <p width="20rem">dress</p>
            <h5>25000</h5>
            </Card>


            </ul>
          </div>

          <div style={{ width: "70%" }}>
            {window.location.pathname === "/" ? (
              <>
                {" "}
                <div className="cart-image"></div> <Home />
              </>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
};
export default HomeLinks;
