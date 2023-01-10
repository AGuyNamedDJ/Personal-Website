import React from "react";
import { Link } from "react-router-dom";

const Memoirs = () => {

    return (
        <div>
            <div class="title">Memoirs</div>
            <br></br>
            <br></br>

            <div id="memoirs-trips">
                {/* Chicago, IL */}
                <div id="memoirs-Chicago">
                    <img src="/images/chicago-1.jpg" id="chicago-1" alt="chicago-1"></img>
                    <Link to="/memoirs/chicago" id="memoirs-link">Chicago</Link>
                    <p id="memoirs-date">`Beginning July 31, 2019 &#x2023; 5 min`</p>
                </div>

                {/* Montego Bay, Jamaica */}
                <div id="memoirs-MontegoBay">
                    <img src="/images/montegobay-1.jpg" id="montegobay-1" alt="montegobay-1"></img>
                    <Link to="/memoirs/montegobay" id="memoirs-link">Montego Bay</Link>
                    <p id="memoirs-date">`March 21, 2019 &#x2023; 2 min`</p>
                </div>

                {/* Quintana Roo, Mexico */}
                <div id="memoirs-QuintanaRoo">
                    <img src="/images/QuintanaRoo-1.jpeg" id="QuintanaRoo-1" alt="QuintanaRoo-1"></img>
                    <Link to="/memoirs/quintanaroo" id="memoirs-link">Quintana Roo</Link>
                    <p id="memoirs-date">`December 21, 2019 &#x2023; 3 min`</p>
                </div>

            </div>
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

export default Memoirs;