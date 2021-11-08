import React from 'react'
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../StateManager/features/cartSlice';
import '../Styles/componentsStyles/checkoutProduct/checkoutProduct.scss';

function CheckoutProduct({ id, title, imgURL, price, rating }) {
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
                <button onClick={removeFromShoppingCart}>Remove from shopping cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
