import React from 'react';
import '../Styles/componentsStyles/product/product.scss';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../StateManager/features/cartSlice'

function Product({ id, title, price, imgURL, rating }) {
    const dispatch = useDispatch();

    const addToShoppingCart = () => {
        dispatch(addProductToCart({
            id,
            title,
            price,
            imgURL,
            rating,
        }))
    };
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(
                                (_, index) => (
                                    <span key={index}>&#9733;</span>
                                ))
                    }
                </div>
            </div>

            <img
                className="product__image"
                src={imgURL}
                alt=""
            />
            <button onClick={addToShoppingCart}>Add to cart</button>
        </div>
    )
}

export default Product
