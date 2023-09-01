import React from "react";
import { Row } from 'antd';
import GlaxyUltra from "./GlaxyUltra";

 







export const Home = ({cartItems, setCartItems,searchTerm}) => {
  return (
    <div className="image-grid">
      <h4>Result</h4>
  
      <div className="grid">
        <GlaxyUltra cartItems={cartItems} setCartItems={setCartItems} searchTerm={searchTerm}/>
      </div>
    </div>
  );
};



// 