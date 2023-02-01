import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ItemDetails from "./ItemDetails";

const Details = () => {
  const ctx = useSelector((state) => state.products.data);
  const param = useParams().pId;

  const product = ctx.filter((p) => p.id == param);


  return (
    <div>
      {product?.map((e) => (
        <ItemDetails
          image={e.image}
          description={e.description}
          price={e.price}
          title={e.title}
          rating={e.rating}
          category={e.category}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default Details;
