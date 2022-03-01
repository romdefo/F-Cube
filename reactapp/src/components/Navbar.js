import React, {useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../stylesheets/Nav.css'
import '../stylesheets/Buttons.css'


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
                        <li className="nav-item">
                            <img
                            src="./images/egdo_logo.png"
                            className="nav-logo"
                            alt="Logo."
                            />
                        </li>
                    )}
                    
                    {navList.map(nav => {
                        return (
                            <li className="nav-item"> 
                                <Link 
                                    activeClass="active"
                                    to={nav}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={toggleNav}
                                    >
                                        {nav}
                                </Link>
                            </li>
                            )
                        })
                    }
                    <li className="nav-item">
                        <button className="act">J'agis</button>   
                    </li>
                </ul>       
           )}
           <FontAwesomeIcon className="btn" icon={faBars} onClick={toggleNav}/>

      </nav>
    );
}