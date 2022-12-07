import React from "react";
import './shipping.css'

export default function Shipping(){
    return(
        <div className="order">
            <div className="header">
                <h1 className="sum">Order Summary</h1>
            </div>
            <div className="delivery">
                <p className="list">
                    Product Name<div className="productName1"></div>
                <button className="btn">change</button>
                </p>
                <p className="list">
                    Location:<div className="productName2"></div>
                    <button className="btn">change</button>
                    </p>
                <p className="list">
                    Total price:<div className="productName3"></div>
                    </p>
                <p className="list">
                    Payment Mode:<div className="productName4"></div>
                    </p>
                <p className="list">
                    Tel phone:<div className="productName5"></div>
                    <button className="btn">Order</button>
                    </p>
            </div>

        </div>
    )
}