import React from "react";
import mtnfooter from "../assets/image/mtn.png";
import visafooter from "../assets/image/visa.png";
import masterfooter from "../assets/image/mastercard.jpg";
import logfooter from "../assets/image/log.PNG";
import "./footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
    <div className="footer">
      <div className="footer-container">
        <div className="logo-column">
          <img src={logfooter} alt="logo footer" className="log-img" />
          <br></br>
        </div>
        <div className="contactus-column">
          <h3 className="footer-title" style={{ fontSize: "20px" }}>
            Contact-us
          </h3>
          <br></br>
          <p>Kigali Rwanda</p>
          <p>
            <a href="tel:+250-785-322-071" style={{ fontSize: "20px" }}>
              tel:+250-784-792-020
            </a>
          </p>
          <p>
            <a href="mailto:webmaste@example.com" style={{ fontSize: "20px" }}>
              info@retaliersshop.com
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              Street No. 12m Kigali 12,
            </a>
          </p>
        </div>
        <div className="account-column">
          <h3 className="footer-title" style={{ fontSize: "20px" }}>
            My Account
          </h3>
          <br></br>
          <p>
            <a href="login" style={{ fontSize: "20px" }}>
              Login
            </a>
          </p>
          <p>
            <a href="signup" style={{ fontSize: "20px" }}>
              Sign up
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              My Cart
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              About_us
            </a>
          </p>
        </div>
        <div className="company-column">
          <h3 className="footer-title" style={{ fontSize: "20px" }}>
            Shop
          </h3>
          <br></br>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              About_Us{" "}
            </a>
          </p>
          <p>
            <a href="" style={{ fontSize: "20px" }}>
              Retailers
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              partners
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              Orders
            </a>
          </p>
        </div>
        <div className="company-column">
          <h3 className="footer-title" style={{ fontSize: "20px" }}>
            Terms and Condition
          </h3>
          <br></br>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              Policies
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              Help center
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
              privacy
            </a>
          </p>
          <p>
            <a href="#" style={{ fontSize: "20px" }}>
             Any Support
            </a>
          </p>
        </div>

        {/* <div className="logo-footer">
            
            </div> */}
      </div>
      <div className="footer-logo">
        <h2>We Accept:</h2>

        <div className="logo-img-container">
          <img src={mtnfooter} alt="logo footer" className="logo-img" />
          <img src={visafooter} alt="logo footer" className="logo-img" />
          <img src={masterfooter} alt="logo footer" className="logo-img" />
        </div>
      </div>
     
    </div>
    <h6 style={{ fontSize: "20px" }}>
        copyright &copy;{year} Retailers Shop,Inc.All Rights Resrved{""}
      </h6>
    </>
  );
};
export default Footer;
