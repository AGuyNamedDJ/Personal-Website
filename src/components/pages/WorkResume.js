import React from "react";
import { Link } from "react-router-dom";

const WorkResume = () => {

    return (
        <div id="workcv">
            <div className="title">Resume</div>

            {/* Technical Skills */}
            <div>
                <p className="sub-title">Technical Skills: </p>

                <p id="work-technical-skills-title">Proficient</p>
                <p id="work-cv-text"> Javascript | Node.js | PostgreSQL | React.js | Express.js | PineScript | Git | HTML | CSS | AJAX | DOM | Framework LTC | DocuTrack</p>

                <p id="work-technical-skills-title">Knowledgable: </p>
                <p id="work-cv-text">Python | Java | C | Flask | AWS</p>
            </div>
            <br></br>

            {/* Development Projects */}
            <div>
                <p className="sub-title">Development Projects:</p>
                <p id="work-cv-text">As of Jan 2023, I have deployed 15 Front-End or Back-End projects. View any of my above links to view them all.</p>

                {/* TradingView Strategies & Indicators #1  (Open Source) */}
                <p id="dev-title">TradingView Strategies & Indicators #1 | Open Source | May 2023 - Current</p>
                <a href="https://github.com/DJRobertson95/TradingView-Scripts-1" target="_blank" id="sub-sub-title-link">Github Repository</a>

                <p id="cv-description">Developed open-source TradingView strategies and indicators using Pine Script, catering to retail and institutional traders, enhancing decision-making in various financial markets.</p>
                <li id="work-cv-text">Developed custom trading strategies & indicators using PineScript for the TradingView platform</li>
                <li id="work-cv-text"> Implemented algorithms to generate buy & sell signals based on technical analysis techniques.</li>
                <li id="work-cv-text"> Optimized input parameters to improve performance across timeframes & different financial instruments.</li>
                <br></br>

                {/* Health Hive */}
                <p id="dev-title">Health Hive | Back-End Developer | Feb 2023 - Current</p>
                <a href="https://github.com/DJRobertson95/Health-Hive-Back-End" target="_blank" id="sub-sub-title-link">Github Repository</a>

                <p id="cv-description">A Full-Stack Web App using Node.js, Express.js, and PostgreSQL to store and manage patient health records. Implemented RESTful API endpoints for CRUD operations on patient, staff, and treatment plan data</p>
                <li id="work-cv-text">Designed and developed a PostgreSQL database with over 10,000 lines of code to store and maintain patient data</li>
                <li id="work-cv-text"> Implemented secure user authentication and authorization using bcrypt and JWT</li>
                <li id="work-cv-text"> Developed middleware for input validation and error handling to ensure the reliability and safety of user input</li>
                <li id="work-cv-text"> Optimized API endpoints for performance and efficiency</li>
                <br></br>

                {/* Car-Haven */}
                <p id="dev-title">Car-Haven | Full Stack Developer | Jan 2023 - Jan 2023 </p>
                <a href="https://carhaven.netlify.app/" target="_blank" id="sub-sub-title-link">carhaven.netlify.app/</a>

                <p id="cv-description">A Full Stack personal website that provides car exotic car service & repair solutions.</p>
                <li id="work-cv-text">User Functionality</li>
                    <ul id="work-cv-text">Access and view all services and parts offered by the company</ul>
                    <ul id="work-cv-text">Created API routes to handle CRUD operations for vehicle and service data</ul>
                    <ul id="work-cv-text">Made a Server with static & dynamic routing using route parameters routes</ul>
                    <ul id="work-cv-text">Created an extensive vehicle database using postgreSQL</ul>
                    <ul id="work-cv-text">Implemented error handling and logging to ensure a smooth user experience.</ul>
                <li id="work-cv-text">Built a web server that responds to client request & returns values from the database</li>
                    <ul id="work-cv-text">Provide HTTP Endpoints & Methods (GET/POST/PATCH/DELETE) & Body Parsing</ul>
                    <ul id="work-cv-text">Parameterized routes & subroutes</ul>
                <br></br>

                {/* The Sweet Spot */}
                <p id="dev-title">Capstone, The Sweet Spot | Co-Developer | Nov 2022 - Dec 2022 </p>
                <a href="https://thesweetspot.netlify.app/" target="_blank" id="sub-sub-title-link">thesweetspot.netlify.app/</a>

                <p id="cv-description">A Full-Stack E-Commerce website selling bakeries and candy developed with an agile team of 4 students developers.</p>
                <li id="work-cv-text">Collaboration and Planning</li>
                    <ul id="work-cv-text">Held daily stand-ups, kept a planning board, and used pull requests to modify the code base on code reviews with the project manager</ul>
                <li id="work-cv-text">User Functionality</li>
                    <ul id="work-cv-text">Access and view all products from multiple categories</ul>
                    <ul id="work-cv-text">View individual product details, add them to cart, edit and removal, and check out</ul>
                    <ul id="work-cv-text">Create accounts across multiple devices for persistent carts and view purchase history</ul>
                    <ul id="work-cv-text">Admins can validate data to ensure reliability and view user information</ul>
                    <ul id="work-cv-text">Admins have full rights to make backend request to add, edit, and remove products</ul>
                <br></br>

                {/* Fitness Trackr */}
                <p id="dev-title">FitnessTrackr | Co-Developer | Nov 2022</p>
                <a href="https://usefitnesstrackr.netlify.app" target="_blank" id="sub-sub-title-link">usefitnesstrackr.netlify.app</a>

                <p id="cv-description">A Front-End Fitness App using React.js to fetch data from a created API developed with a student developers.</p>
                <li id="work-cv-text">React.js Components and Hooks and Client-Side API Code</li>
                    <ul id="work-cv-text">Correctly handled user interaction and state components</ul>
                    <ul id="work-cv-text">Used useEffect to fetch data in the correct components while establishing inside code for potential async calls</ul>
                    <ul id="work-cv-text">Wrote async functions using try/catch to make API calls</ul>
                    <ul id="work-cv-text">Set correct headers and bodies for use by API, including the logged in user</ul>
                <li id="work-cv-text">Allows users to</li>
                    <ul id="work-cv-text">Login and build fitness routines from a list of activities</ul>
                    <ul id="work-cv-text">Have control over the public/private nature of their routines</ul>
            </div>            

            {/* Experience */}
            <div>
                <p className="sub-title">Experience: </p>

                {/* MMP */}
                <p id="work-title">Data and Medical Records Analyst | Jan 2021 - Apr 2022</p>
                <br></br>
                <p id="work-jobs">Medication Management Partners</p>
                <ul id="work-description">
                    <ul >● Created and managed records for over 100 facilities</ul>
                    <ul>● Adjudicated insurance claims and troubleshot rejected claims</ul>
                    <ul>● Adjudicated electronic prescription claims</ul>
                    <ul>● Facilitated electronic medical administration record support</ul>
                    <ul>● Managed employee training for new hires, over a period of 3 months offering continuous guidance and mentorship on best practices while providing constructive feedback</ul>
                    <ul>● Performed prospective drug utilization reviews</ul>
                </ul>

                {/* MMP */}
                <p id="work-title">Dispensing and Toting Technician | Aug 2022 - Jan 2021</p>
                <br></br>
                <p id="work-jobs">Medication Management Partners</p>
                <br></br>
                <br></br>

                {/* CVS */}
                <p id="work-title">Pharmacist Intern | Jul 2019 - Aug 2020</p>
                <br></br>
                <p id="work-jobs">CVS Health</p>
                <br></br>
                <br></br>

                {/* CVS */}
                <p id="work-title">Pharmacy Technician | Jul 2015 - Jul 2019</p>
                <br></br>
                <p id="work-jobs">CVS Health</p>
       

            {/* Education */}
            <div>
                <p className="sub-title">Education: </p>

                {/* Fullstack */}
                <div>
                    <p id="sub-sub-title">University of Illinois, through Fullstack Academy - Software Engineering Certificate</p>

                    <ul id="work-certs">● Full-time, Immersive Full Stack Web Development Program</ul>
                    <ul id="work-certs">● Graduated Dec 2022</ul>
                </div>

                {/* CSU */}
                <div>
                    <p id="sub-sub-title">Chicago State University - 55 Credits towards Doctor of Pharmacy</p>

                    <ul id="work-certs">● Aug 2019 - Dec 2021</ul>
                </div>

                {/* MC */}
                <div>
                    <p id="sub-sub-title">Mississippi College - 24 Credits towards Masters of Biology, Medical Sciences</p>

                    <ul id="work-certs">● Aug 2018 - July 2019</ul>
                </div>

                {/* JSU */}
                <div>
                    <p id="sub-sub-title">Jackson State University - Bachelors of Science</p>

                    <ul id="work-certs">● Biology Pre-medicine/Pre-Pharmacy</ul>
                    <ul id="work-certs">● Graduated Dec 2018</ul>
                </div>
            </div>
            <br></br>

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

export default WorkResume;