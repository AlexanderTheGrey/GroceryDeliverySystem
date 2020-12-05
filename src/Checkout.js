import React from "react";
import "./Checkout.css";
//import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import ProductCO from "./ProductCO";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_picture"
          src=""
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Cart</h2>

          {cart.map(item => (
            <ProductCO
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}

        </div>
      </div>

      
    </div>
  );
}

export default Checkout;
