import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Dashbrd from "./Dashbrd/Dashbrd";
import AdminDashboard from "./Dashbrd/AdminDashbord";
import Product from "./Dashbrd/Product";
import Header from "./component/head";
import Order from "./Dashbrd/oder";
import HomeLinks from "./component/HomeLinks";
import Electronics from "./component/Electronics";
import Decorations from "./component/Decorations";
import Men from "./component/Men.Js";
import Women from "./component/Women";
import Baby from "./component/BabyToys";
import Sports from "./component/Sports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route exact path="/Dashbrd" element={<Dashbrd />} />
        <Route exact path="/AdminDashbrd" element={<AdminDashboard />} /> */}
        <Route path="/products" element={<Product />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/link-lists" element={<HomeLinks />} />
        <Route exact path="/electronics" element={<Electronics />} />
        <Route exact path="/decor" element={<Decorations />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/baby" element={<Baby />} />
        <Route exact path="/headertwo" element={<Header />} />
        <Route exact path="/sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
