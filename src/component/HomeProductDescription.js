import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HomeProductList from "../data/HomeProductList";
import allComponents from "../component/styles/allComponents.css";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import axios from "axios";

const HomeProductDescription = ({list}) => {
  const params = useParams();
  const [elect, setElect] = useState({});
  
  // var navigate = useNavigate();
  useEffect(() => {
    HomeProductList.forEach((el) => {
      if (el.id == params.id) {
        setElect(el);
      }
    });
    if(list){
      setElect(list.find(product=>product._id==params.id));
    }
    console.log("nnnnnnn",elect);

  }, [elect]);

  // const AddToCart = () => {

  //   const CartItem = {
      
  //   }

  //   if(localStorage.getItem('cart')) {
  //     const localCartData = localStorage.getItem('cart');
  //   } else {
  //     const cartProducts = [];
  //     cartProducts.push();
  //     localStorage.setItem('cart', );
  //   }

  //   navigate="/cart"
  // }

  const { addItem } = useCart();

  return (
    <>
      <div className="cards-box">
        <div className="image-box">
          <img src={`http://localhost:4000/images/${elect?.picture}`} />
        </div>
        <div>
          <h4>{elect?.title}</h4>
          <h4>{elect?.price}</h4>
          <div className="link-plus">
            <Button onClick={() => addItem(elect)}>
              <i className="fas fa-cart-plus"></i>
            </Button>
          </div>
          <button className="btn-dd">buy now</button>
        </div>
      </div>
    </>
  );
};

export default HomeProductDescription;
