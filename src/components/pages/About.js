import React from "react";

const About = () => {

    return (
        <div>
            <div id="about">
                <h2 id="about-text">Dalron J.</h2>
                <img src="/images/djr.jpg" alt="dj" id="about-page-image"></img>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <footer id="footer">
                <p id="footer-top-text">Stay connected with me here.</p>
                <p id="footer-top-text">SUBMIT</p>
                
            </footer>
            <br></br>
            
            <footer id="footer-one-container">
                <div>
                    &copy; 2023 Dalron J. Robertson.  All Rights Reserved.
                </div>
                <div id="footer-websites-container">
                    <p class="footer-websites">GITHUB INSTAGRAM LINKEDIN </p>
                    <p class="footer-websites-bottom"> CODEWARS EMAIL</p>
                </div>
            </footer>
        </div>

    )
};

export default About;