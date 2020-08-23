import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ shoppingCart }] = useStateValue();
    return (
        <div className="checkout">
            <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
            {shoppingCart?.length === 0 ? (
                <div>
                    <h2>Your shopping cart is empty!</h2>
                    <p>You have no products added into your shopping cart. To purchase one go home page and click "Add to cart" next to the product.</p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping cart</h2>
                        {shoppingCart?.map(product => {
                            return <CheckoutProduct key={product.id} id={product.id} title={product.title} imgURL={product.imgURL} price={product.price} rating={product.rating} />
                        })}
                    </div>
                )}
        </div>
    )
}

export default Checkout
