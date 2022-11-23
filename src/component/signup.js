import react from "react";
import "./signup.css";
import Forms from "../component/form";
import img from "../assets/image/picture.jpg";
function Signup() {
  return (
    <div className="group">
      <div className="Picture">
        <img src={img} alt="" />
      </div>
      <div className="signup">
        <div className="Signup-card">
          <Forms />
        </div>
      </div>
    </div>
  );
}

export default Signup;
