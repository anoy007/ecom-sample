import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import { productActions } from "../Redux/ProductsSlice";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (data) {
        setData(data);
        setLoading(false);
        dispatch(productActions.addProducts(data));
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className="main">
      <div className="list">
        {loading ? <h3 className="align">Loading...</h3> : null}
        {data?.map((e) => (
          <ProductItem
            key={e.id}
            image={e.image}
            description={e.description}
            price={e.price}
            rate={e.rating}
            title={e.title}
            category={e.category}
            id={e.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
