import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../StateManager/features/cartSlice';
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, imgURL, price, rating, quantity }) {
    const dispatch = useDispatch();

    const removeFromShoppingCart = () => {
        dispatch(removeProductFromCart(id));
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
                                (_, index) => (
                                    <span key={index}>&#9733;</span>
                                ))
                    }
                </div>
                <div className="checkouProduct__quantity__wrapper">
                    <button className="checkouProduct__quantity__buttons" onClick={() => { dispatch(addProductToCart({ id })) }}>-</button>
                    <input className="checkouProduct__quantity__input" type="text" value={quantity} readOnly id="quantity" name="quantity" />
                    <button className="checkouProduct__quantity__buttons" onClick={() => { dispatch(addProductToCart({ id })) }}>+</button>
                </div>
                <button className="checkouProduct__remove__product" onClick={removeFromShoppingCart}>Remove from shopping cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
