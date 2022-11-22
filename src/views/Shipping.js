import React from "react"
import "./Shipping.css";

const Shipping = () => {

    return (
        <>
    

        <form action="#" method="POST">
            <div className="form-Shipping">
        <h1> Shipping Info</h1>
    
          
            
              <div className="name">
                <label>Name:</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div>
                <label>Email:</label>
                <input type="text"/>
              </div>

              <div className="country">
                <label>Country:</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>Rwanda</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Kenya</option>
                  <option>USA</option>
                </select>
              </div>

              <div className="address">
                <label>Street address:</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div>
                <label  className="block text-sm font-medium text-gray-700">City</label>
                <input type="text"  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div className="form">
                <label className="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" />
              </div>
              <div>
                <label>Payment Mode:</label>
                <input type="text"/>
              </div>
        
          
          <div className="btn">
            <button type="submit">Submit</button>
          </div>

         

        
          </div>


    </form>

        </>



    )



}




export default Shipping