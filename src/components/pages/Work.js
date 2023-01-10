import React from "react";
import { Link, NavLink } from "react-router-dom";

const Work = () => {

    return (
        <div>
            <div class="title">Portfolio</div>
            <div id="">

                {/* CV */}
                <div id="portfolio">
                    <p>Browse my CV</p>
                    <Link to="/work/cv" id="link">Browse Here</Link>
                </div>

                {/* Resume */}
                <div id="portfolio">
                    <p>Browse my Resume</p>
                    <Link to="/work/resume" id="link">Browse Here</Link>
                </div>

                {/* Websites */}
                <div id="portfolio">
                    <p>Browse my Websites</p>
                    <Link to="/work/websites" id="link">Browse Here</Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* End of Page */}
            <footer id="footer">
                <p id="footer-top-text">Stay connected with me here.</p>
                <p id="footer-top-text">dalronj.robertson@gmail.com</p>
                
            </footer>
            <br></br>
            
            <footer id="footer-one-container">
                <div>
                    &copy; 2023 Dalron J. Robertson.  All Rights Reserved.
                </div>
                <div id="footer-websites-container">
                    <p class="footer-websites">
                        <a href="https://github.com/DJRobertson95" target="_blank" id="link"> GITHUB |</a>
                        <a href="https://www.instagram.com/aguynameddj/" target="_blank" id="link"> INSTAGRAM |</a>
                        <a href="https://www.linkedin.com/in/dalronjrobertson/" target="_blank" id="link"> LINKEDIN |</a>
                        <a href="https://www.codewars.com/users/DJRobertson95" target="_blank" id="link"> CODEWARS |</a>
                        <a href="mailto:dalronj.robertson@gmail.com?subject=Email Subject&body=Email Body" id="link"> EMAIL</a>
                    </p>
                </div>
            </footer>
        </div>
    )
};

export default Work;