import React from "react";
import "./ProceedToCheckout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function ProceedToCheckout() {
  const history = useHistory();
  const [{ cart, cartTotal }, dispatch] = useStateValue();

  console.log("SDFSDFSDFSDFSF", cartTotal.toFixed(2))

  return (
    <div className="proceedToCheckout">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            ProceedToCheckout ({cart.cartQuantity} items): <strong>{value}</strong>
            </p>
            <small className="proceedToCheckout_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={cartTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={h => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default ProceedToCheckout;
