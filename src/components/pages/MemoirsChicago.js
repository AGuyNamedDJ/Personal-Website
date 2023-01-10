import React from "react";

const MemoirsChicago = () => {

    return (
        <div>
            <h2 class="title">Chicago</h2>

            <div id="detailed-container">

                {/* Beginning Poetry */}
                <img src="/images/chicago-2.jpeg" alt="SundaysOnState" id="SundaysOnState" />


                {/* Quality of Life */}
                <p class="detailed-text">"A symphony of steel and brick, a city pulsing with energy and diversity, where the skyscrapers kiss the sky and the windy streets are filled with possibility."</p>

                <img src="/images/chicago-5.jpeg" id="Shade"></img>
                <p class="detailed-text">"Cubs and Sox, deep dish pie, Hot dogs with all the fixin's. Lively streets, music and art, Chi-Town's spirit never dimmin'."</p>



                {/* Foodie Scene */}
                <p class="detailed-text"></p>

              
                {/* Activities & Events */}
              
                <p class="detailed-text"></p>


                {/* Diversity */}
                <p class="detailed-text"></p>

              
                {/* Architecture */}
                <p class="detailed-text"></p>

                
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

export default MemoirsChicago;