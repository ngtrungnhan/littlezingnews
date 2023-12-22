import React, { Component } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import HeaderComponent from "./../../Header/index";

const Product = () => {
  let { data } = useParams();

  return (
    <>
      <div className="bookDetail">
        <h1>Day la trang chi tiet cua {data} </h1>
      </div>
    </>
  );
};
export default Product;
