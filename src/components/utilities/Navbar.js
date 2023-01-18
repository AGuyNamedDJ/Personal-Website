//all links go here to make a SPA application
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({context}) => {
    return (
        <nav id="navbar">
            <Link to="/" id="navbar-text">ABOUT</Link>
            <Link to="/memoirs" id="navbar-text">MEMOIRS</Link>
            <Link to="/photography" id="navbar-text">PHOTOGRAPHY</Link>
            <Link to="/work" id="navbar-text">WORK</Link>
            <Link to="/journal" id="navbar-text">JOURNAL</Link>
        </nav>
    )
};

export default Navbar;

// Notes
    // the homepage will be the about page
    // i want a drop down for the about page
