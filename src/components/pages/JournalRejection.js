import React from "react";
import { Link } from "react-router-dom";

const JournalRejection = () => {

    return (
        <div>
            {/* Job Search Rejection */}
            <div class="title">Job Search Rejection</div>
            <br></br>
            <br></br>
            <p id="journal-date-detail">`Jan 10, 2022 &#x2023; 2 min`</p>

            {/* Image */}
            <img src="/images/journal-1.jpeg" id="journal-rejection-detail"></img>
            <br></br>
            <br></br>

            <p id="journal-text-detail">Since Graduating from one of the Top Bootcamps over a month ago, I have submitted over 200 applications to entry and associate software engineering roles. Every morning, my emails are flooded with rejection notices.</p>
            <p id="journal-text-detail">To all of the recent grads, I'm here with you. I've never felt this in my previous field. I've never been consistently rejected before. I've always gotten the interview. But for now I'll keep trying.</p>
            <p id="journal-text-detail">I've also decided to make a new full stack website every 4-5 days. I'm going to keep adding to my tech stack. And I'm going to make it! God brought me to tech so I know I'll get the role I want soon.</p>

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

export default JournalRejection;