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
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/FitnessTrackr.png" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>The Front-End Fitness App is a React-based fitness application with a custom API. Developed by a student team, the app includes React components and hooks, handles user interaction, and manages state components. It users to create custom fitness routines from a list of activities, control the privacy of their routines, and login using their credentials. The API code includes headers and bodies for API calls, including the logged-in user, making it an efficient and streamlined solution for building and managing custom fitness routines.</p>
                        <div className="website-links">
                            <a href="https://usefitnesstrackr.netlify.app" target="_blank" id="link">FitnessTrackr.com</a>
                            <a href="https://github.com/Tori-Dalron-Team/FitnessTrackr." target="_blank" id="link">Github Back-End</a>
                            <a href="https://github.com/Tori-Dalron-Team/FitnessTrackrFrontend" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Juicebox */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/PostgreSQL.svg" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>The Back-End with a Database and Web Server is a custom API built with PostgreSQL and Node.js. The app includes HTTP endpoints and methods, body parsing, parameterized routes, and user authentication via JSON Web Tokens. The API allows for inserting, retrieving, and updating data in the database and features a web server that responds to client requests, making it an efficient solution for building custom APIs.</p>
                        <div className="website-links">
                            <a href="https://github.com/DJRobertson95/JuiceBox" target="_blank" id="link">Github Back-End</a>
                        </div>
                    </div>
                </div>

                {/* Stranger's Things */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/StrangersThings.png" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>The React-based single-page app showcases CRUD, fetching, and JWT authentication. It includes AJAX basics, HTTP methods, body parsing, async coding, and React components with proper usage of props, event listeners, state, and effects. Additionally, the app has well-implemented routers using React Router, making it an efficient solution for demonstrating these features with React.</p>
                        <div className="website-links">
                            <a href="https://shopstrangersthings.netlify.app" target="_blank" id="link">ShopStrangersThings.com</a>
                            <a href="https://github.com/DJRobertson95/Strangers-Things-2" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Hacker's News */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/WizardNews.png" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>The consumer-focused Node app features non-persistent server-side data storage, static and dynamic routing, middleware logging and streamlining, and HTML document string refactor. The app also includes tagged template literals and date formatting, making it an efficient solution for showcasing knowledge of Express.js features.</p>
                        <div className="website-links">
                            <a href="https://hackernews-7fqr.onrender.com" target="_blank" id="link">HackerNews.com</a>
                            <a href="https://github.com/DJRobertson95/Hacker-News" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Puppy Bowl */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/PuppyBowl.png" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>Puppy Bowl is a React-based single-page app that uses a pre-existing API to fetch data, manage state, and render data onto the website. The app features functional React components with hooks and JSX code blocks, providing an efficient and streamlined front-end solution for displaying puppy-related data.</p>
                        <div className="website-links">
                            <a href="https://chicagopuppybowl22.netlify.app" target="_blank" id="link">ChicagoPuppyBowl22.com</a>
                            <a href="https://github.com/DJRobertson95/Puppy-Bowl" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Connect Four */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/Connect4our.png" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>The interactive arcade game is an excellent example of a well-designed user experience. Developed during a class hackathon, it features a clean and aesthetically pleasing interface with an organized and coherent flow. The game includes expressive variable, function, and class names with no unused functions or variables, ensuring that the game code is streamlined and efficient. Overall, the interactive arcade game is a successful example of how a well-designed interface and good naming conventions can contribute to the success of an application.</p>
                        <div className="website-links">
                            <a href="https://connect4our.netlify.app" target="_blank" id="link">Connect4our.com</a>
                            <a href="https://github.com/DJRobertson95/Connect-Four" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
                </div>

                {/* Real Estate Clicker Game */}
                <div className="website-item">
                    <div className="website-image">
                        <img src="/images/RealEstateClicker.png" alt="Website Preview 4"/>
                    </div>
                    <div className="website-description">
                        <p>The interactive arcade game is an excellent example of a well-designed user experience. Developed during a class hackathon, it features a clean and aesthetically pleasing interface with an organized and coherent flow. The game includes expressive variable, function, and class names with no unused functions or variables, ensuring that the game code is streamlined and efficient. Overall, the interactive arcade game is a successful example of how a well-designed interface and good naming conventions can contribute to the success of an application.</p>
                        <div className="website-links">
                            <a href="https://realestateclickergame.netlify.app" target="_blank" id="link">RealEstateClickerGame.com</a>
                            <a href="https://github.com/DJRobertson95/Real-Estate-Clicker-Game" target="_blank" id="link">Github Front-End</a>
                        </div>
                    </div>
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