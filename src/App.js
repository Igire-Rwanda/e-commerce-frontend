import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Dashbrd from "./Dashbrd/Dashbrd";
import AdminDashboard from "./Dashbrd/AdminDashbord";
import Product from "./Dashbrd/Product";
import Header from "./component/head";
import Order from "./Dashbrd/oder";
import HomeLinks from "./component/HomeLinks";
import Electronics from "./component/Electronics";
import Decorations from "./component/HomeDecor";
import Men from "./component/Men";
import Women from "./component/Women";
import Baby from "./component/BabyToys";
import Sports from "./component/Sports";
import Description from "./component/Description";
import WomenDescription from "./component/WomenDescription";
import SportsDescription from "./component/SportsDescription";
import HomeProduct from "./component/HomeProduct";
import HomeProductDesription from "./component/HomeProductDescription";
import HomeDecorDescription from "./component/HomeDecorDescription";
import ToysDescription from "./component/ToysDescription";
import More from "./component/More";
import Cosmetics from "./component/Cosmetics";
import Lights from "./component/Lights";
import Textiles from "./component/Textiles";
import SignIn from "./component/signIn";
import SignUp from "./component/SignUp";
import Checkout from "./component/Checkout";
import Payment from "./component/Payment";
import Summary from "./component/Summary";
import AddNewProduct from "./component/AddNewProduct";


function App() {
  return (
    <>
      {/* <MyShop />    */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeLinks />}>
            <Route path="electronics" element={<Electronics />} />
            <Route path="decor" element={<Decorations />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="baby" element={<Baby />} />
            <Route path="sports" element={<Sports />} />
            <Route path="HomeProduct" element={<HomeProduct />} />
            <Route path="moreCat" element={<More />} />
            <Route path="cosmetics" element={<Cosmetics />} />
            <Route path="lights" element={<Lights />} />
            <Route path="textiles" element={<Textiles />} />

            <Route path="prod/:id" element={<Description />} />
            <Route path="womDes/:id" element={<WomenDescription />} />
            <Route path="sportsDes/:id" element={<SportsDescription />} />
            <Route
              path="HomeProductDes/:id"
              element={<HomeProductDesription />}
            />
            <Route path="HomeDecorDes/:id" element={<HomeDecorDescription />} />
            <Route path="ToysDes/:id" element={<ToysDescription />} />  
          </Route>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/payment' element={<Payment />}/>
            <Route path='/summary' element={<Summary />}/>
            <Route path='/addNew' element={<AddNewProduct />}/>


        
         
          <Route exact path="/Dashbrd" element={<Dashbrd />} />
          <Route exact path="/AdminDashbrd" element={<AdminDashboard />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/order" element={<Order />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
