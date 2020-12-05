import React from 'react';
import './ProductCO.css'
import { useStateValue } from "./StateProvider";
import Rating from 'material-ui-rating';

function ProductCO({ id, image, title, price, rating, quantity, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className='product-co'>
            <img className='product-co_image' src={image} />

            <div className='product-co_info'>
                <p className='product-co_title'>{title}</p>
                <p className="product-co_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-co_rating">
                    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                </div>
                <p className='product-co_quantity'>
                <small>Qty: </small>
                    <strong>{quantity}</strong>
                </p>
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default ProductCO
