import React from "react";
import { Link } from "react-router-dom";

const WorkResume = () => {

    return (
        <div id="workcv">
            <div class="title">Resume</div>

            {/* Technical Skills */}
            <div>
                <p class="sub-title">Technical Skills: </p>

                <p id="work-technical-skills-title">Proficient</p>
                <p>Javascript | Node.js | PostgreSQL | React.js | Express.js | Git | HTML | CSS | AJAX | DOM | Framework LTC | DocuTrack</p>

                <p id="work-technical-skills-title">Knowledgable: </p>
                <p>Python | Java | C | Flask | AWS</p>
            </div>
            <br></br>

            {/* Development Projects */}
            <div>
                <p className="sub-title">Development Projects:</p>
                <p>As of Jan 2023, I have deployed 12 Front-End or Back-End projects. View any of my above links to view them all.</p>

                {/* The Sweet Spot */}
                <p id="dev-title">Capstone, The Sweet Spot | Co-Developer | Nov 2022 - Dec 2022 </p>
                <a href="https://thesweetspot.netlify.app/" target="_blank" id="sub-sub-title-link">thesweetspot.netlify.app/</a>

                <p id="cv-description">A Full-Stack E-Commerce website selling bakeries and candy developed with an agile team of 4 students developers.</p>
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
                <p id="dev-title">FitnessTrackr | Co-Developer | Nov 2022</p>
                <a href="https://usefitnesstrackr.netlify.app" target="_blank" id="sub-sub-title-link">usefitnesstrackr.netlify.app</a>

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
                <p id="dev-title">Juicebox | Lead Developer | Nov 2022</p>
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
            </div>            

            {/* Experience */}
            <div>
                <p class="sub-title">Experience: </p>

                {/* MMP */}
                <p id="work-title">Data and Medical Records Analyst | Jan 2021 - Apr 2022</p>
                <br></br>
                <p id="work-jobs">Medication Management Partners</p>
                <ul id="work-description">
                    <ul>● Created and managed records for over 100 facilities</ul>
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
                <p class="sub-title">Education: </p>

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

export default WorkResume;