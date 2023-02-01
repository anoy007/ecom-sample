import React, { useEffect} from "react";
import { Card } from "reactstrap";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemForm from "./ItemForm";
import { cartAction } from "../Redux/CartSlice";


const ProductItem = (props) => {
  const { title, price, category, image, id } = props;
 
  
  // const storedItem = storage ? storage[0].items : [];
  const dispatch = useDispatch();
  const ctx = useSelector((state) => state.cart);

  const addHandler = (amount) => {
      dispatch(
        // saving item in redux
        cartAction.addItem({
          id,
          title,
          price,
          amount,
        })
      );
    }
 


  useEffect(() => {
    let arr = [];
    if(ctx.items.length > 0){
    arr.push(ctx);
    localStorage.setItem("cart", JSON.stringify(arr));
    }
  },[ctx]);

  return (
    <>
      <Card className="item">
        <Link to={`/products/${id}`}>
          <div className="item-details">
            <img src={image} alt={title} width={50} height={50} />
            <p>{price}$</p>
            <h3>{category}</h3>
          </div>
        </Link>
        <ItemForm onAddItem={addHandler} />
      </Card>
    </>
  );
};

export default ProductItem;
