import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
        <div id="footer-left">
            <Link to="/contact">
                <img src="/images/message-icon.png" alt="description of image" />
            </Link>
        </div>
        <div id="footer-center">
            <Link to="/about">Dalron J. Robertson © 2023</Link>
            <Link to="/privacy">Privacy & Legal</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div id="footer-right">
            <button onClick={() => window.scrollTo(0, 0)}>
                <img src="/images/back-icon.png" alt="Back to Top" />
            </button>
        </div>
    </div>
  );
};

export default Footer;
