import React from "react";
import { Link } from "react-router-dom";

const WorkCV = () => {

    return (
        <div id="workcv">
            <div class="title">Curriculum Vitae</div>

            {/* Technical Skills */}
            <div>
                <p id="sub-title">Technical Skills: </p>

                <p id="work-technical-skills-title">Proficient</p>
                <p>Javascript | Node.js | PostgreSQL | React.js | Express.js | Git | HTML | CSS | AJAX | DOM | Framework LTC | DocuTrack</p>

                <p id="work-technical-skills-title">Knowledgable: </p>
                <p>Python | Java | C | Flask | AWS</p>
            </div>
            <br></br>

            {/* Development Projects */}
            <div>
                <p id="sub-title">Development Projects:</p>

                {/* Personal Website */}
                <p id="sub-sub-title">Personal Website | Lead Developer | Continuous</p>
                <a href="https://dalronjrobertson.netlify.app/" target="_blank" id="sub-sub-title-link">dalronjrobertson.netlify.app/</a>

                <p id="cv-description">My personal website showcasing skills and experiences as a software engineer. Includes information about my background, education, and projects.</p>
                <li>A living, growing webpage</li>
                <li>An accumulation of all my creative work</li>
                <br></br>

                {/* The Sweet Spot */}
                <p id="sub-sub-title">Capstone, The Sweet Spot | Co-Developer | Nov 2022 - Dec 2022 </p>
                <a href="https://thesweetspot.netlify.app/" target="_blank" id="sub-sub-title-link">thesweetspot.netlify.app/</a>

                <p id="cv-description">An e-commerce website selling bakeries and candy developed with an agile team of 4 students developers.</p>
                <li>Collaboration and Planning</li>
                    <ul>Held daily stand-ups, kept a planning board, and used pull requests to modify the code base on code reviews with the project manager</ul>
                <li>User Functionality</li>
                    <ul>Access and view all products from multiple categories</ul>
                    <ul>View individual product details, add them to cart, edit and removal, and check out</ul>
                    <ul>Create accounts across multiple devices for persistent carts and view purchase history</ul>
                    <ul>Admins can validate data to ensure reliability and view user information</ul>
                    <ul>Admins have full rights to make backend request to add, edit, and remove products</ul>
                <br></br>

                {/* Fitness Trackr */}
                <p id="sub-sub-title">FitnessTrackr | Co-Developer | Nov 2022</p>
                <a href="https://fitnesstrackr.onrender.com" target="_blank" id="sub-sub-title-link">fitnesstrackr.onrender.com</a>

                <p id="cv-description">A Front-End Fitness App using React.js to fetch data from a created API developed with a student developers.</p>
                <li>React.js Components and Hooks and Client-Side API Code</li>
                    <ul>Correctly handled user interaction and state components</ul>
                    <ul>Used useEffect to fetch data in the correct components while establishing inside code for potential async calls</ul>
                    <ul>Wrote async functions using try/catch to make API calls</ul>
                    <ul>Set correct headers and bodies for use by API, including the logged in user</ul>
                <li>Allows users to</li>
                    <ul>Login and build fitness routines from a list of activities</ul>
                    <ul>Have control over the public/private nature of their routines</ul>
                <br></br>

                {/* Juicebox */}
                <p id="sub-sub-title">Juicebox | Lead Developer | Nov 2022</p>
                <a href="https://juicebox-kz62.onrender.com/" target="_blank" id="sub-sub-title-link">juicebox-kz62.onrender.com/</a>

                <p id="cv-description">A Back-End with a Database and Web server with a custom API showcasing knowledge of PostgreSQL and Node</p>
                <li>Basic PostgreSQL commands and Database creation</li>
                    <ul>Primary and Foreign keys</ul>
                    <ul>Inserted, Retrieved, and Updated data in the database and connected the database using PG</ul>
                <li>Built a web server that responds to client request and returns values from the database</li>
                    <ul>Provide HTTP Endpoints and Methods (GET/POST/PATCH/DELETE) and Body Parsing</ul>
                    <ul>Parameterized routes and subroutes</ul>
                    <ul>Implemented user authentication via JSON Web Tokens</ul>
                <li>Made a Server with static and dynamic routing using route parameters routes</li>
                <br></br>

                {/* Stranger's Things */}
                <p id="sub-sub-title">Strangers Things | Lead Developer | Oct 2022 - Nov 2022</p>
                <a href="shopstrangersthings.netlify.app/" target="_blank" id="sub-sub-title-link">shopstrangersthings.netlify.app/</a>

                <p id="cv-description">A React-based single-page application showcasing how CRUD can improve fetching and user authentication via JSON Web Tokens. (JWT)</p>
                <li>AJAX Basics</li>
                    <ul>Usage of HTTP Methods (GET/POST/PATCH/DELETE) and Body Parsing</ul>
                    <ul>Handled asynchronous coding for request</ul>
                    <ul>Usage of try/catch blocks within async functions</ul>
                    <ul>Updated the DOM with results of data request</ul>
                <li>Front-End Basics</li>
                    <ul>Well developed React Components</ul>
                    <ul>Proper usage of props to share data and functions between components</ul>
                    <ul>Proper usage of event listeners and state and effects</ul>
                    <ul>Well implemented routers (React Router)</ul>
                <br></br>


                {/* Hacker News */}
                <p id="sub-sub-title">Hacker News | Lead Developer | Oct 2022</p>
                <a href="https://hackernews-7fqr.onrender.com/" target="_blank" id="sub-sub-title-link">hackernews-7fqr.onrender.com/</a>

                <p id="cv-description">A consumer-focused Node application showcasing knowledge of Express.js features.</p>
                <li>Non-persistent Server-Side Data Storage</li>
                <li>Made a Server with static and dynamic routing using route parameters routes</li>
                <li>Logged Middleware and Streamlining</li>
                <li>HTML Document String Refactor</li>
                <li>Tagged Template Literals and Date Formatting</li>
                <br></br>


                {/* Puppy Bowl */}
                <p id="sub-sub-title">Puppy Bowl | Lead Developer | Oct 2022 </p>
                <a href="https://chicagopuppybowl22.netlify.app/" target="_blank" id="sub-sub-title-link">chicagopuppybowl22.netlify.app/</a>

                <p id="cv-description">A React-based single-page application showcasing focused on coding the front end by using a pre-existing API.</p>
                <li>Created functional React Components, include state management, JSX code blocks, and hook usage</li>
                <li>Fetched data from API, set it to state, and rendered the state onto the website</li>

                <br></br>

                {/* Connect Four */}
                <p id="sub-sub-title">Connect Four | Lead Developer | Sep 2022</p>
                <a href="https://connect4our.netlify.app/" target="_blank" id="sub-sub-title-link">connect4our.netlify.app/</a>

                <p id="cv-description">An interactive arcade game built, during a class hackathon, showcasing development of a good user experience through a clean interface.</p>
                <li>Organized and coherent flow, cleanly written, and aesthetically pleasing user interface (UI)</li>
                <li>Expressive variable, function, and class names with no unused functions or variables</li>
                <br></br>

                {/* Real Estate Clicker Game */}
                <p id="sub-sub-title">Connect Four | Lead Developer | Sep 2022</p>
                <a href="https://realestateclickergame.netlify.app/" target="_blank" id="sub-sub-title-link">realestateclickergame.netlify.app/</a>

                <p id="cv-description">An online clicker game showcasing knowledge of Javascript and the DOM with HTML/CSS.</p>
                <li>DOM Manipulation, including template and rendering, element queries, event listeners, and the update state to render state process</li>
                <li>Best CSS practices including flexboxes, grids, and proper cascading</li>
                <li>Usage of basic and complex data types, like arrays and objects</li>
                <br></br>


            </div>            
            <br></br>
            <br></br>

            {/* Experience */}
            <div>
                <p id="sub-title">Experience: </p>

                <p id="work-title">Self-Employed</p>
                <br></br>
                <p id="work-jobs">Equities and Derivatives Analyst | Feb 2020</p>
                <il> ● Generate and execute trade ideas using capital across range of advanced equity and options strategies </il>
                <il>● Designed, back-tested, and validated a variety of trading systems based on long-term, moderate, and short-term approaches to price vitality. Furthermore, with the inclusion of credit signals, pricing volume signals, and underlying asset risk range distribution </il>
                <il>● Expand technical factor investing models to include investment style definitions which statistically explain traditional market, quality, value, momentum, and securities demand equilibrium conditions and returns </il>
                <il>● Analyze optimal leverage levels for given market conditions to maintain compliance with strict risk controls and capital requirements for different trading strategies across equities and options markets </il>

                <p id="work-technical-skills-title">Knowledgable: </p>
                <p>Python | Java | C | Flask | AWS</p>
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
                    <p class="footer-websites">GITHUB INSTAGRAM LINKEDIN </p>
                    <p class="footer-websites-bottom"> CODEWARS EMAIL</p>
                </div>
            </footer>
        </div>
    )
};

export default WorkCV;