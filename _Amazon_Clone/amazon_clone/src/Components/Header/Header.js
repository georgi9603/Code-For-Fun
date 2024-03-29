import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import BasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { actionTypes } from '../../StateManager/actions/actionTypes';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { shoppingCart, user } = useSelector(state => state.shoppingCart)


    const logout = () => {
        if (user) {
            dispatch({
                type: actionTypes.CLEAR_CART,
                shoppingCart: []
            });
            auth.signOut();
            history.push("/login")
        }
    }

    return (
        <nav className="header">
            <div className="header__left">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className="header__center">
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__right">
                {user
                    ? <Link to={"/login"} className="header__link">
                        <div onClick={logout} className="header__option">
                            <span className="header__optionLineOne">
                                Hello {user?.email}
                            </span>
                            <span className="header__optionLineTwo">
                                Sign Out
                            </span>
                        </div>
                    </Link>
                    :
                    <Link to="/Login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineTwo">
                                Sign In
                            </span>
                        </div>
                    </Link>
                }
                <Link to="/register" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">
                            Sign up
                        </span>
                    </div>

                </Link>
                <Link to="/Checkout" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Cart
                        </span>
                    </div>
                </Link>
                <Link to="/Checkout" className="header__link">
                    <div className="header__optionBasket">
                        <BasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {shoppingCart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
