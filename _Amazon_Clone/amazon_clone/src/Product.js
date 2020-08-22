import React from 'react';
import './Product.css';

function Product({ id, title, price, imgURL, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">${price}</p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(
                                (_) => (
                                    <span>&#9733;</span>
                                ))
                    }
                </div>
            </div>

            <img
                className="product__image"
                src={imgURL}
                alt=""
            />
            <button onClick={() => { }}>Add to cart</button>
        </div>
    )
}

export default Product
