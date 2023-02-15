import React from "react";
import { Link } from "react-router-dom";

const Journal = () => {

    return (
        <div>
            <div class="title">Journal</div>
            <br></br>
            <br></br>

            <div id="memoirs-trips">
                {/* Journal 2 */}
                <div>
                    <img src="/images/journal-2.jpg" id="journal-rejection"></img>
                    {/* <div id="journal-text">Coping w/ Job Search Rejection</div> */}
                    <Link to="/journal/ai" id="journal-text">AI: Unlocking Potential</Link>
                    <p id="journal-date">`Feb 15, 2023 &#x2023; 4 min`</p>
                </div>

                {/* Journal 1 */}
                <div>
                    <img src="/images/journal-1.jpeg" id="journal-rejection"></img>
                    {/* <div id="journal-text">Coping w/ Job Search Rejection</div> */}
                    <Link to="/journal/rejection" id="journal-text">Coping w/ Job Search Rejection</Link>
                    <p id="journal-date">`Jan 10, 2023 &#x2023; 2 min`</p>
                </div>
            </div>

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
                    <p className="footer-websites">
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

export default Journal;