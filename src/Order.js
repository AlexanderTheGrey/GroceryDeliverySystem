import React from 'react'
import './Order.css'
import moment from "moment";
import ProductCO from "./ProductCO";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    return (
        <div className='Order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="OrderID">
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map(item => ( // This is the cart data from the database
                <ProductCO
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    quantity={item.quantity}
                    description={item.description}
                    category={item.category}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="OrderTotal">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
