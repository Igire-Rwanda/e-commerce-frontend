import React from "react";
import { ThemeProvider } from "react-bootstrap";
import ReactDOM from "react-dom";
import { CartProvider } from "react-use-cart";
import "./index.css"
import App from "./App";

ReactDOM.render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
