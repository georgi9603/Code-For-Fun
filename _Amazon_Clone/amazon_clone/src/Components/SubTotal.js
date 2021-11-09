import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../StateManager/selectors/selectors';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../Styles/componentsStyles/subTotal/subTotal.scss';

function SubTotal() {
    const { shoppingCart } = useSelector(state => state.shoppingCart);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({shoppingCart.length}) : {shoppingCart.length === 1 ? "product" : "products"} <strong>{value}</strong>
                        </p>
                        {getBasketTotal(shoppingCart) >= 1000 &&
                            <small className="subtotal__gift">
                                <input checked readOnly type="checkbox" /> This order is with free shipping.
                            </small>
                        }
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(shoppingCart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Link to="/ordercheckout">
                <button>Proceed to Checkout</button>
            </Link>
        </div>
    )
}

export default SubTotal
