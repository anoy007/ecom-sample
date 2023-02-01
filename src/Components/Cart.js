import React, {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router";

const Cart = () => {
  const ctx = useSelector((state) => state.cart);
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("cart")));
  const dispatch = useDispatch();
  const history = useHistory();
  const storedItem = items  ? items[0]?.items : [];
  const storedTotalAmount = items ? items[0].totalAmount : 0;
  const totalAmount = ctx.totalAmount
    ? `$${ctx.totalAmount.toFixed(2)}`
    : `$${storedTotalAmount.toFixed(2)}`;
  const cartItem = (
    <ul className="cart-item">
      {ctx.items.length
        ? ctx?.items?.map((e) => (
            <li className="items">
              <span>{e.title}</span>
              <p>
                {e.price}
                {`x${e.amount}`}
              </p>
            </li>
          ))
        : storedItem?.map((p) => (
            <li className="items">
              <p>{p.title}</p>
              <p>
                {p.price}
                {`x${p.amount}`}
              </p>
            </li>
          ))}
    </ul>
  );

  const backHandler = () => {
    history.push("/products");
  };

  const finalHandler = () => {
    history.push("/mycart/payment");
  };
  return (
    <div className="cart-main">
      <div>{cartItem}</div>
      <div className="total">
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        {ctx.items.length || storedItem.length ? (
          <Button className="button--alt" onClick={finalHandler}>
            Checkout
          </Button>
        ) : null}
        <Button className="button--alt" onClick={backHandler}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Cart;
