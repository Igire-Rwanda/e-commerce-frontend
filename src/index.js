import React from "react";
import  ReactDOM from "react-dom";
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import App from "./App";
import { CartProvider} from 'react-use-cart'
ReactDOM.render(

<ThemeProvider>
    <CartProvider>
    <App/>
    </CartProvider>

</ThemeProvider>



,document.querySelector("#root"));
