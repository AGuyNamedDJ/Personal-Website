//all links go here to make a SPA application
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({context}) => {
    return (
        <nav id="navbar">
            <Link to="/" id="navbar-text">Home</Link>
            <Link to="/about" id="navbar-text">ABOUT</Link>
            <Link to="/projects" id="navbar-text">PROJECTS</Link>
            <Link to="/ventures" id="navbar-text">VENTURES</Link>
            <Link to="/credentials" id="navbar-text">CREDENTIALS</Link>
            <Link to="/connect" id="navbar-text">CONNECT</Link>
        </nav>
    )
};

export default Navbar;


