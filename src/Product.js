import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Rating from 'material-ui-rating';

function Product({ id, title, image, price, rating }) {
  const [{ Cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // Send new item added to the global data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
