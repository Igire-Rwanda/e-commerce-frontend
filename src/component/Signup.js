import react from "react";
import './Signup.css';
import Forms from "./Forms";
import img from "../assets/image/onlines.PNG"
function Signup() {
return (
	
	<div className="group" >
	<div className="Picture">
	<img src={img} alt="" />
	</div>
	<div className="Signup">
	<Forms/>
	</div>
	</div>
	
	
);
}

export default Signup;
