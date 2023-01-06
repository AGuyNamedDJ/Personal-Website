//all links go here to make a SPA application
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({context}) => {
    return (
        <nav id="navbar">
            <Link to="/" id="navbar-text">Home</Link>
        </nav>
    )
};

export default Navbar;