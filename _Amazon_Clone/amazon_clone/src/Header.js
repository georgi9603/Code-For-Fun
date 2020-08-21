import React from 'react'
import amazon from './icons/amaz.png';
import SearchIcon from '@material-ui/icons/Search'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={amazon}></img>
            </div>
            <div className="header__center">
                <SearchIcon />
                <input></input>
            </div>
            <div className="header__right">
                <div className="header__greeting">

                </div>
                <div className="header__signout">

                </div>
                <div className="header__amount">

                </div>
                <div className="header__basket">

                </div>
            </div>
        </div>
    )
}

export default Header
