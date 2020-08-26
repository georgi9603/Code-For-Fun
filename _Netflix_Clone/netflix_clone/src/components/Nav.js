import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100
                ? setShow(true)
                : setShow(false)
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    function slideToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className={`nav ${show && 'nav_showBlackHeader'}`}>
            <img
                className="nav__logo"
                onClick={slideToTop}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/300px-Netflix_2014_logo.svg.png"
                alt="Netflix logo"
            />
            <img
                className="nav__profileLogo"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="User logo"
            />
        </div>
    )
}

export default Nav
