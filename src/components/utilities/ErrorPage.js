import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ErrorPage = () => {

    return (
        <div className="content">
            <Navbar />
            <div id="error-page">
                <img src="/images/peterg.webp" alt="peterg" id="error-page-image"/>
                <h2 id="error-page-text-1">Uh-oh! Something went wrong.</h2>
                <h2 id="error-page-text-2">Our servers are experiencing issues, but rest assured, our team is on it.</h2>
                <h2 id="error-page-text-2">Thank you for your patience!</h2>
            </div>
            <Footer />
        </div>
    )
};

export default ErrorPage;