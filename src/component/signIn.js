import React from "react";
import "./signIn.css";
import onlineshopping from "../images/cart-image.JPG";

function SignIn() {
  return (
    <div className="container1">
      <div>
        <img src={onlineshopping} alt="" id="picture" />
      </div>
      ;.
      <div className="container3">
        <div>
          <div className="usempas">
            <h2 className="login">Login</h2>
            <p className="para">Name:</p>
            <input type="text" placeholder="Enter your name" className="box1" />

            <div>
              <p className="para">Email:</p>
              <input
                type="email"
                placeholder="Email address"
                className="box1"
              />
            </div>
            <div>
              <p className="para">Password:</p>

              <input type="password" placeholder="Password" className="box1" />
              <p className="par">forgot password?</p>
            </div>
            <button className="log-btn">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
