import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import BasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ shoppingCart }] = useStateValue();

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
                <Link to="/Login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Georgi
                        </span>
                        <span className="header__optionLineTwo">
                            Sign In
                        </span>
                    </div>
                </Link>
                <div className="header__amount">
                    <Link to="/Login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Returns
                            </span>
                            <span className="header__optionLineTwo">
                                & Orders
                        </span>
                        </div>
                    </Link>
                </div>
                <div className="header__yourprime">
                    <Link to="/Login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Your
                            </span>
                            <span className="header__optionLineTwo">
                                Prime
                        </span>
                        </div>
                    </Link>
                </div>
                <div className="header__basket">
                    <Link to="/Checkout" className="header__link">
                        <div className="header__optionBasket">
                            <BasketIcon />
                            <span className="header__optionLineTwo header__basketCount">
                                {shoppingCart?.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
