import React from "react";
import { Col, Row, Container } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { cartAction } from "../Redux/CartSlice";
import "./ItemDetails.css";
import ItemForm from "./ItemForm";

const ItemDetails = (props) => {
  const { image, price, description, title, rating, category,id } = props;
  const dispatch = useDispatch()
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
  };
  
  return (
    <Container>
      <Col className="main-details">
        <Row className="main-image">
          <img src={image} alt={title} />
        </Row>
        <Row className="main-description">
          <ul className="main-list">
            <li>
              <ReactStars
                size={24}
                activeColor="#ffd700"
                value={rating.rate}
                classNames="item-rating"
                edit={false}
              />
              {rating.count} reviews
            </li>
            <li>
              <h2>{title}</h2>
            </li>
            <li>
              <h4>{category}</h4>
            </li>
            <li>
              <h3>{price} $</h3>
            </li>
            <li>
              <ItemForm className={"details-btn"} onAddItem={addHandler}/>
            </li>
          </ul>
        </Row>
      </Col>
      <div className="item-desc">
        <Col>
          <h2>DESCRIPTION</h2>
        </Col>
        <Col>
          <p>{description}</p>
        </Col>
      </div>
    </Container>
  );
};

export default ItemDetails;
