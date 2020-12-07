import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Rating from 'material-ui-rating';

function Product({ id, name, image, price, rating, quantity, description, category }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    quantity = 1
    dispatch({  // Send the new item added to the global data layer
      type: "ADD_TO_CART",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
        description: description,
        category: category,
      },
      id: id
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{name}</p>
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
