import React from 'react'
import { useStateValue } from './StateProvider'
import { actionTypes } from '../StateManager/actions/actionTypes';
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, imgURL, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    const removeFromShoppingCart = () => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={imgURL}
                alt=""
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(
                                (_) => (
                                    <span>&#9733;</span>
                                ))
                    }
                </div>
                <button onClick={removeFromShoppingCart}>Remove from shopping cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
