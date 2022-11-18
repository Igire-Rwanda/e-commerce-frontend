import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./views/Home";
import Dashbrd from "./Dashbrd/Dashbrd";
import AdminDashboard from "./Dashbrd/AdminDashbord";
import Product from "./Dashbrd/Product";
import Order from "./Dashbrd/oder";
import Header from "./component/header";
function App(){
  return(
    

    <>
<BrowserRouter>

<Routes>
<Route exact path='/' element={<Home/>}/>
<Route  path='/Home' element={<Home/>}/>
<Route exact path="/Dashbrd" element={<Dashbrd/>}/>
<Route exact path="/AdminDashbrd" element={<AdminDashboard/>}/>
<Route exact path="/product" element={<Product/>}/>
<Route exact path="/order" element={<Order/>}/>
</Routes>
</BrowserRouter>
</>
  )
}
export default App;