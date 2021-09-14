import React, { useState } from 'react';
import './index.css';
import '../dashboard/home.css';
import { Link } from "react-router-dom";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ClearIcon from '@material-ui/icons/Clear';

const Navbar = () => {
    const [isMobile, setisMobile] = useState(false);

    return (

        <div>
            <nav className="navbar">
                <h2 className="logo">Budding Business</h2>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                >
                    <Link to="/" className={isMobile ? "link-mobile" : "link"}>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className={isMobile ? "link-mobile" : "link"}>
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact" className={isMobile ? "link-mobile" : "link"}>
                        <li>Contact Us</li>
                    </Link>
                    <Link to="/login" className={isMobile ? "link-button-mobile" : "link-button"}>
                        <li className="is-mobile-color">Login</li>
                    </Link>
                    <Link to="/signup" className={isMobile ? "link-button-mobile" : "link-button"}>
                        <li className="is-mobile-color">Sign Up</li>
                    </Link>
                    <div className="dropdown ">
                        <button className={isMobile ? "link-button-mobile" : "link-button"}>Dropdown</button>
                        <div className="dropdown-content">
                            <a href="google.com">Link 1</a>
                            <a href="google.com">Link 2</a>
                            <a href="google.com">Link 3</a>
                        </div>
                    </div>
                </ul>
                <button className="mobile-menu-icon">{isMobile ? <ClearIcon onClick={() => setisMobile(false)} /> : <MenuOpenIcon onClick={() => setisMobile(true)} />}</button>
            </nav>
        </div>
    )
}

export default Navbar;
