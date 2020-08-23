import { Checkbox } from '@material-ui/core';
import React from 'react';
import { useStateValue } from './StateProvider';
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function SubTotal() {
    const [{ shoppingCart }, dispatch] = useStateValue();

    const getShoppingCartTotal = () => {

    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({shoppingCart.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(shoppingCart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
