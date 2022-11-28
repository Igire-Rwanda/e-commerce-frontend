import react from "react";
import './Signup.css';
import Forms from "./Forms";
import img from "../assets/image/commerce.jpg"
function Signup() {
return (
	
	<div className="group" >
	<div className="Picture">
	<img src={img} alt="" />
	</div>
	<div className="signup">
	<div className="Signup-card">
	<Forms/>
	</div>
	</div>
	</div>
	
	
);
}

export default Signup;
