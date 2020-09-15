import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from '@material-ui/core'

import './Header.css';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt=""
            />
            <div className="header__center">
                <input type="text"></input>
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
