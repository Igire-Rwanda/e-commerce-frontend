// import React from "react";
// import Header from "./component/header";

// import Footer from "./component/footer";
// import "./App.css"
// import { Route } from "react-router-dom";
// import Dashboard from "./views/Dashbord/Dashboard";
// import Home from "./views/Home";
// const App=()=>{
//     return( 
//       <>
        
     
//         <Header/>
//         <Home></Home>
//         <Footer/>
//         </>
//     );   
// };

// export default App;

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./views/Home";
import Dashbrd from "./Dashbrd/Dashbrd";
import AdminDashboard from "./Dashbrd/AdminDashbord";
import Product from "./Dashbrd/Product";
import Description from './component/Description';
function App(){
  return(
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route  path='/Home' element={<Home/>}/>
<Route exact path="/Dashbrd" element={<Dashbrd/>}/>
<Route exact path="/AdminDashbrd" element={<AdminDashboard/>}/>
<Route exact path="/product" element={<Product/>}/>
<Route exact path="/Description" element={<Description/>}/>

</Routes>
</BrowserRouter>
  )
}
export default App;