import React from 'react';
import './Product.css';

function Product({ title, price, imgURL, rating }) {
    return (
        <div className="product">
            <h1 className="product__title">{title}</h1>
            <h2 className="product__price">{price}</h2>
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
