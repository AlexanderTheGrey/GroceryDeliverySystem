import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import ProductCO from "./ProductCO";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from './Axios';
import { database } from "./FirebaseDeployment";

function Payment() {
    const [{ cart, cartQuantity, cartTotal, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();     // Stripe for API and elements for API interaction
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);  // Hooks for payment status
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${cartTotal * 100}`
            });
            setClientSecret(response.data.clientSecret) // API call to get Client Private Key from Stripe
        }

        getClientSecret();
    }, [cart])

    console.log('THE SECSSSSSSSSSSSSSSSSRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {  // This runs upon submitting payment
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment( // Process Stripe payment
            clientSecret,
            {payment_method: {
                card: elements.getElement(CardElement)}, // This is where the Client Private Key is obtained
        }).then(({ paymentIntent }) => {
            console.log('THE SECSSSSSSSSSSSSSSSSRET IS >>>', clientSecret)

            console.log('THE PAYMENT ID IS >>>', paymentIntent.id)

            console.log("CART", cart)

            database                // Push that order to our NoSQL database
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  cart: cart,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created,
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')  // Go to the orders page. We should go to a "Thank you for you order" page.
        })

    }

    const handleChange = event => {     // Error handling
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='Payment'>
            <div className='PaymentBox'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{cartQuantity} items</Link>
                        )
                </h1>

                <div className='PaymentGroup'>
                    <div className='PaymentName'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='PaymentAddress'>
                        <p>{user?.email}</p>
                        <p>872 Mape Dr</p>
                        <p>San Antonio, Texas</p>
                        <p>78249</p>
                    </div>
                </div>

                <div className='PaymentGroup'>
                    <div className='PaymentName'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='PaymentItems'>
                        {cart.map(item => (
                            <ProductCO
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity} // We don't push anything up to the data layer here,
                                rating={item.rating}     // so no need to have everything from cart.
                            />
                        ))}
                    </div>
                </div>
            
                <div className='PaymentGroup'>
                    <div className="PaymentName">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="PaymentDetails">

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='PaymentPriceBox'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={cartTotal}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Place your order"}</span>
                                    </button>
                                </div>

                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
