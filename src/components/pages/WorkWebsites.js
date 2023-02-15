import React from "react";
import { Link } from "react-router-dom";

const WorkWebsites = () => {

    return (
        <div>
            <div class="title">Websites</div>

            <div className="website-list">
                {/* Health Hive */}

                {/* Car-Haven */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/carhaven.png" alt="Website Preview 1"/>
                    </div>
                    <div className="website-description">
                        <p>Car Haven is a full-stack web application for luxury car enthusiasts. It includes a database of manufacturers, models, and unique features for specific cars. Built using React.js, Node.js, and Tailwind CSS, it offers a visually stunning user interface and a seamless user experience for browsing and searching for luxury cars.</p>
                        <div className="website-links">
                            <a href="https://carhaven.netlify.app" target="_blank" id="link">Car-Haven.com</a>
                            <a href="https://github.com/DJRobertson95/Car-Haven-Back" target="_blank" id="link">Github Back-End</a>
                            <a href="https://github.com/DJRobertson95/Car-Haven-Front" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Dal-Recipe */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/Dal-Recipe.png" alt="Website Preview 3"/>
                    </div>
                    <div className="website-description">
                        <p>Developed a full-stack web application for a recipe website, utilizing React, Node.js, and PostgreSQL. Implemented CRUD functionality for various recipes and departments, as well as search and navigation features. Utilized useState, useEffect, and useContext hooks to manage the application's state and implemented routing using React Router. Incorporated responsive design using CSS. The project provides an easy to use platform for users to search and find recipes they are interested in.</p>
                        <div className="website-links">
                            <a href="https://carhaven.netlify.app" target="_blank" id="link">Dal-Recipe.com</a>
                            <a href="https://github.com/DJRobertson95/Dal-Recipe-Back" target="_blank" id="link">Github Back-End</a>
                            <a href="https://github.com/DJRobertson95/Dal-Recipe-Front" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Capstone The Sweet Spot */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/SweetSpot.png" alt="Website Preview 3"/>
                    </div>
                    <div className="website-description">
                        <p>The Sweet Spot is a full-stack e-commerce website offering a wide variety of baked goods and candy. The website features a user-friendly interface with access to multiple categories of products, and users can create accounts to store items in their cart and view purchase history. Admins can manage product information, including adding, editing, and removing products. Built with React, Node.js, and PostgreSQL, The Sweet Spot was developed with agile methodology, providing an efficient and streamlined platform for buying baked goods and candy.</p>
                        <div className="website-links">
                            <a href="https://carhaven.netlify.app" target="_blank" id="link">TheSweetSpot.com</a>
                            <a href="https://github.com/The-Sweet-Spot/CandyBackEnd" target="_blank" id="link">Github Back-End</a>
                            <a href="https://github.com/The-Sweet-Spot/CandyFrontEnd" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>


                {/* Fitness Trackr */}


                {/* Juicebox */}


                {/* Stranger's Things */}


                {/* Hacker's News */}


                {/* Puppy Bowl */}


                {/* Connect Four */}


                {/* Real Estate Clicker Game */}
            


                
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

export default WorkWebsites;