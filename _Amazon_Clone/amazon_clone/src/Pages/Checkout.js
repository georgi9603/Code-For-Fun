import React from 'react';
import SubTotal from '../Components/SubTotal';
import { useStateValue } from '../Components/StateProvider';
import CheckoutProduct from '../Components/CheckoutProduct';
import './Checkout.css';
import OrderCheckout from './OrderCheckout';

function Checkout() {
    const [{ shoppingCart }] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
            <div className="checkout__content">
                {shoppingCart?.length === 0 ? (
                    <div>
                        <h2>Your shopping cart is empty!</h2>
                        <p>You have no products added into your shopping cart. To purchase one go home page and click "Add to cart" next to the product.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping cart</h2>
                            {shoppingCart?.map(product => {
                                return <CheckoutProduct id={product.id} title={product.title} imgURL={product.imgURL} price={product.price} rating={product.rating} />
                            })}
                        </div>
                    )}
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
