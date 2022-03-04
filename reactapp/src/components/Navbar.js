import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Linked from '@mui/material/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/Nav.css'
import '../stylesheets/Buttons.css'
import '../stylesheets/App.css'

export default function Navbar(props) {

    //Toggle menu and responsive
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    // List Items
    let navList = props.nav;

    // Render
    return (
        <nav className="nav" id="navbar">
            {(toggleMenu || screenWidth > 500) && (
                <ul className="nav-items">
                    {!toggleMenu && (
                        <li >
                            <img
                                src="./images/egdo_logo.png"
                                className="nav-logo"
                                alt="Logo."
                            />
                        </li>
                    )}

                    {navList.map(nav => {
                        return (
                            <li >
                                <Link
                                    // activeClass="active"
                                    to={nav}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={toggleNav}
                                    className="nav-item"
                                >
                                    {nav}
                                </Link>
                            </li>
                        )
                    })
                    }
                    <li className="nav-item">
                        <Linked
                            href='/j-agis'
                            component='button'
                            variant='body2'
                            className="act-button">
                            J'agis
                        </Linked>
                    </li >
                </ul >
            )
            }
            <FontAwesomeIcon className="menu-btn" icon={faBars} onClick={toggleNav} />

        </nav >
    );
}