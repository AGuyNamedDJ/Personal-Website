import React from "react";

const Photography = () => {

    return (
        <div>
            <div class="title">Gallery</div>
            <div>
                <img src="/images/photo-1.jpg" id="photo-1"></img>
                <p>"How the composer thrills, when softly glides</p>
                <img src="/images/photo-8.jpg" id="photo-8"></img>
                <img src="/images/photo-3.jpg" id="photo-3"></img>
                <img src="/images/photo-5.jpg" id="photo-5"></img>
                <img src="/images/photo-2.jpg" id="photo-2"></img>
            </div>
            <div>
                <img src="/images/photo-4.jpg" id="photo-4"></img>
                <img src="/images/photo-6.jpg" id="photo-6"></img>
                <img src="/images/photo-7.jpeg" id="photo-7"></img>
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

export default Photography;