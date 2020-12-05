import React from "react";
import "./Checkout.css";
import ProceedToCheckout from "./ProceedToCheckout";
import { useStateValue } from "./StateProvider";
import ProductCO from "./ProductCO";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_items">
        <img
          className="checkout_picture"
          src=""
          alt=""
        />

        <div>
          <h1 className="checkout_name">Shopping Cart</h1>

          {cart.map(item => (
            <ProductCO
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}

        </div>
      </div>

      <div className="checkout_proceed">
        <ProceedToCheckout />
      </div>
    </div>
  );
}

export default Checkout;
