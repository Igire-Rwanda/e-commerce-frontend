
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Dashbrd from "./Dashbrd/Dashbrd";
import AdminDashboard from "./Dashbrd/AdminDashbord";
import Product from "./Dashbrd/Product";
import Cards from './component/Cards';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/product");
    setProduct(response.data.data);
  }
  if (product.length < 1) {
    fetchProducts();
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home data={product} />} />
        <Route path='/Home' element={<Home />} />
        <Route exact path="/Dashbrd" element={<Dashbrd />} />
        <Route exact path="/AdminDashbrd" element={<AdminDashboard />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;