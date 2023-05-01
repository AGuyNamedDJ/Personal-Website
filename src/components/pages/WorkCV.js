import React from "react";
import { Link } from "react-router-dom";

const WorkCV = () => {

    return (
        <div id="workcv">
            <div class="title">Curriculum Vitae</div>

            {/* Technical Skills */}
            <div>
                <p class="sub-title">Technical Skills: </p>

                <p id="work-technical-skills-title">Proficient</p>
                <p id="work-cv-text">Javascript | Node.js | PostgreSQL | React.js | Express.js | PineScript | Git | HTML | CSS | AJAX | DOM | Framework LTC | DocuTrack</p>

                <p id="work-technical-skills-title">Knowledgable: </p>
                <p id="work-cv-text">Python | Java | C | Flask | Tailwind CSS | AWS</p>
            </div>
            <br></br>

            {/* Development Projects */}
            <div>
                <p class="sub-title">Development Projects:</p>

                {/* TradingView Strategies & Indicators #1  (Open Source) */}
                <p id="dev-title">TradingView Strategies & Indicators #1 | Open Source | May 2023 - Current</p>
                <a href="https://github.com/DJRobertson95/TradingView-Scripts-1" target="_blank" id="sub-sub-title-link">Github Repository</a>

                <p id="cv-description">Developed open-source TradingView strategies and indicators using Pine Script, catering to retail and institutional traders, enhancing decision-making in various financial markets.</p>
                <li id="work-cv-text">Developed custom trading strategies & indicators using PineScript for the TradingView platform</li>
                <li id="work-cv-text"> Implemented algorithms to generate buy & sell signals based on technical analysis techniques.</li>
                <li id="work-cv-text"> Optimized input parameters to improve performance across timeframes & different financial instruments.</li>
                <br></br>

                {/* Personal Website */}
                
                <p id="dev-title">Personal Website | Lead Developer | Continuous</p>
                <a href="https://dalronjrobertson.netlify.app/" target="_blank" id="sub-sub-title-link">dalronjrobertson.netlify.app/</a>

                <p id="cv-description">Designed and developed a personal website showcasing my software engineering skills and experience, featuring a comprehensive portfolio of professional projects, education and personal interests, including a personal journal and photography collection.</p>
                <li id="work-cv-text">A living, growing webpage</li>
                <li id="work-cv-text">An accumulation of all my professional education and skills, highlighting my growing technical expertise</li>
                <br></br>

                {/* Health Hive */}
                <p id="dev-title">Health Hive | Back-End Developer | Feb 2022 - Current</p>
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

                {/* Dal-Recipe */}
                <p id="dev-title">Dal-Recipe | Full Stack Developer | Nov 2022 - Dec 2022 </p>
                <a href="https://dal-recipe.netlify.app" target="_blank" id="sub-sub-title-link">dal-recipe.netlify.app</a>

                <p id="cv-description">"A Full-Stack web application for a recipe website, utilizing React, Node.js, and PostgreSQL. Implemented CRUD functionality for various recipes and departments, as well as search and navigation features. Utilized useState, useEffect, and useContext hooks to manage the application's state and implemented routing using React Router. Incorporated responsive design using CSS. The project provides an easy to use platform for users to search and find recipes they are interested in"</p>
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
                <li id="work-cv-text"> Allows users to</li>
                    <ul id="work-cv-text">Login and build fitness routines from a list of activities</ul>
                    <ul id="work-cv-text">Have control over the public/private nature of their routines</ul>
                <br></br>

                {/* Juicebox */}
                <p id="dev-title">Juicebox | Lead Developer | Nov 2022</p>
                <a href="https://juicebox-kz62.onrender.com/" target="_blank" id="sub-sub-title-link">juicebox-kz62.onrender.com/</a>

                <p id="cv-description">A Back-End with a Database and Web server with a custom API showcasing knowledge of PostgreSQL and Node</p>
                <li id="work-cv-text">Basic PostgreSQL commands and Database creation</li>
                    <ul id="work-cv-text">Primary and Foreign keys</ul>
                    <ul id="work-cv-text">Inserted, Retrieved, and Updated data in the database and connected the database using PG</ul>
                <li id="work-cv-text">Built a web server that responds to client request and returns values from the database</li>
                    <ul id="work-cv-text">Provide HTTP Endpoints and Methods (GET/POST/PATCH/DELETE) and Body Parsing</ul>
                    <ul id="work-cv-text">Parameterized routes and subroutes</ul>
                    <ul id="work-cv-text">Implemented user authentication via JSON Web Tokens</ul>
                <li id="work-cv-text">Made a Server with static and dynamic routing using route parameters routes</li>
                <br></br>

                {/* Stranger's Things */}
                <p id="dev-title">Strangers Things | Lead Developer | Oct 2022 - Nov 2022</p>
                <a href="https://shopstrangersthings.netlify.app" target="_blank" id="sub-sub-title-link">shopstrangersthings.netlify.app/</a>

                <p id="cv-description">A React-based single-page application showcasing how CRUD can improve fetching and user authentication via JSON Web Tokens. (JWT)</p>
                <li id="work-cv-text">AJAX Basics</li>
                    <ul id="work-cv-text">Usage of HTTP Methods (GET/POST/PATCH/DELETE) and Body Parsing</ul>
                    <ul id="work-cv-text">Handled asynchronous coding for request</ul>
                    <ul id="work-cv-text">Usage of try/catch blocks within async functions</ul>
                    <ul id="work-cv-text">Updated the DOM with results of data request</ul>
                <li id="work-cv-text">Front-End Basics</li>
                    <ul id="work-cv-text">Well developed React Components</ul>
                    <ul id="work-cv-text">Proper usage of props to share data and functions between components</ul>
                    <ul id="work-cv-text">Proper usage of event listeners and state and effects</ul>
                    <ul id="work-cv-text">Well implemented routers (React Router)</ul>
                <br></br>


                {/* Hacker News */}
                <p id="dev-title">Hacker News | Lead Developer | Oct 2022</p>
                <a href="https://hackernews-7fqr.onrender.com/" target="_blank" id="sub-sub-title-link">hackernews-7fqr.onrender.com/</a>

                <p id="cv-description">A consumer-focused Node application showcasing knowledge of Express.js features.</p>
                <li id="work-cv-text">Non-persistent Server-Side Data Storage</li>
                <li id="work-cv-text">Made a Server with static and dynamic routing using route parameters routes</li>
                <li id="work-cv-text">Logged Middleware and Streamlining</li>
                <li id="work-cv-text">HTML Document String Refactor</li>
                <li id="work-cv-text">Tagged Template Literals and Date Formatting</li>
                <br></br>


                {/* Puppy Bowl */}
                <p id="dev-title">Puppy Bowl | Lead Developer | Oct 2022 </p>
                <a href="https://chicagopuppybowl22.netlify.app/" target="_blank" id="sub-sub-title-link">chicagopuppybowl22.netlify.app/</a>

                <p id="cv-description">A React-based single-page application showcasing focused on coding the front end by using a pre-existing API.</p>
                <li id="work-cv-text">Created functional React Components, include state management, JSX code blocks, and hook usage</li>
                <li id="work-cv-text">Fetched data from API, set it to state, and rendered the state onto the website</li>

                <br></br>

                {/* Connect Four */}
                <p id="dev-title">Connect Four | Lead Developer | Sep 2022</p>
                <a href="https://connect4our.netlify.app/" target="_blank" id="sub-sub-title-link">connect4our.netlify.app/</a>

                <p id="cv-description">An interactive arcade game built, during a class hackathon, showcasing development of a good user experience through a clean interface.</p>
                <li id="work-cv-text">Organized and coherent flow, cleanly written, and aesthetically pleasing user interface (UI)</li>
                <li id="work-cv-text">Expressive variable, function, and class names with no unused functions or variables</li>
                <br></br>

                {/* Real Estate Clicker Game */}
                <p id="dev-title">Real Estate Clicker | Lead Developer | Sep 2022</p>
                <a href="https://realestateclickergame.netlify.app/" target="_blank" id="sub-sub-title-link">realestateclickergame.netlify.app/</a>

                <p id="cv-description">An online clicker game showcasing knowledge of Javascript and the DOM with HTML/CSS.</p>
                <li id="work-cv-text">DOM Manipulation, including template and rendering, element queries, event listeners, and the update state to render state process</li>
                <li id="work-cv-text">Best CSS practices including flexboxes, grids, and proper cascading</li>
                <li id="work-cv-text">Usage of basic and complex data types, like arrays and objects</li>
                <br></br>


            </div>            
            <br></br>
            <br></br>

            {/* Experience */}
            <div>
                <p class="sub-title">Experience: </p>
                
                {/* Equities */}
                <p id="work-title">Equities and Derivatives Analyst | Feb 2020 -</p>
                <br></br>
                <p id="work-jobs">Self-Employed</p>
                <ul id="work-description">
                    <ul>● Generate and execute trade ideas using capital across range of advanced equity and options strategies </ul>
                    <ul>● Designed, back-tested, and validated a variety of trading systems based on long-term, moderate, andshort-term approaches to price vitality. Furthermore, with the inclusion of credit signals, pricing volume signals, and underlying asset risk range distribution </ul>
                    <ul>● Expand technical factor investing models to include investment style definitions which statistically explain traditional market, quality, value, momentum, and securities demand equilibrium conditions and returns </ul>
                    <ul>● Analyze optimal leverage levels for given market conditions to maintain compliance with strict risk controls and capital requirements for different trading strategies across equities and options markets </ul>
                </ul>
                <br></br>

                {/* MMP */}
                <p id="work-title">Data and Medical Records Analyst | Jan 2021 - Apr 2022</p>
                <br></br>
                <p id="work-jobs">Medication Management Partners</p>
                <ul id="work-description">
                    <ul>● Data entry into Framework LTC and DocuTrack systems </ul>
                    <ul>● Prepared and executed cycle-fill (auto-fill) processes / fills </ul>
                    <ul>● Created and managed records for over 100 facilities</ul>
                    <ul>● Managed employee training for new hires, over a period of 3 months offering continuous guidance and mentorship on best practice while providing constructive feedback </ul>
                    <ul>● eMR support</ul>
                    <ul>● Adjudicated insurance claims and troubleshot rejected claims</ul>
                    <ul>● Adjudicated electronic prescription claims</ul>
                    <ul>● Uploaded and/or printed medical record</ul>
                    <ul>● Profile-only data entry Interpreting and entering of prescription orders</ul>
                    <ul>● Completed and/or followed-up on prior authorization form</ul>
                    <ul>● Performed prospective drug utilization reviews</ul>
                    <ul>● Investigated and solved community and/or resident issue</ul>
                    <ul>● Efficiently worked both independently and as part of a cross-functional team</ul>
                </ul>
                <br></br>

                {/* MMP */}
                <p id="work-title">Dispensing and Toting Technician | Aug 2022 - Jan 2021</p>
                <br></br>
                <p id="work-jobs">Medication Management Partners</p>
                <ul id="work-description">
                    <ul>● Operated automated dispensing machine and verification machinery </ul>
                    <ul>● Manual dispensing and packaging of prescriptions </ul>
                    <ul>● Toted and / or packaged orders for shipping</ul>
                    <ul>● Created and managed records for over 100 facilities</ul>
                    <ul>● Received inventory</ul>
                    <ul>● Prepared / applied correct shipping label, based on community, route, etc</ul>
                    <ul>● Investigated and solved community and/or resident issue</ul>
                    <ul>● Efficiently worked both independently and as part of a cross-functional team</ul>
                </ul>
                <br></br>

                {/* CVS */}
                <p id="work-title">Pharmacist Intern | Jul 2019 - Aug 2020</p>
                <br></br>
                <p id="work-jobs">CVS Health</p>
                <ul id="work-description">
                    <ul>● Answered customer questions via telephone and in-person </ul>
                    <ul>● Preparation of medications for patients </ul>
                    <ul>● Accurately tracked inventory levels within the pharmacy</ul>
                    <ul>● Contacted insurance carriers as needed to resolve issues with orders</ul>
                    <ul>● Received and verified the prescriptions</ul>
                    <ul>● Monitored for drug interactions, therapy duplications</ul>
                    <ul>● Conducted health and wellness screenings</ul>
                    <ul>● Kept records and do other administrative tasks</ul>
                    <ul>● Understood and followed applicable Federal and State laws (e.g., HIPAA), regulations (e.g., OSHA), and standards</ul>
                    <ul>● Practiced and developed duties performed by pharmacists when applicable and according to law</ul>
                </ul>
                <br></br>

                {/* CVS */}
                <p id="work-title">Pharmacy Technician | Jul 2015 - Jul 2019</p>
                <br></br>
                <p id="work-jobs">CVS Health</p>
                <ul id="work-description">
                    <ul>● Prepared medications for patients </ul>
                    <ul>● Maintained inventory </ul>
                    <ul>● Accurately track inventory levels within the pharmacy</ul>
                    <ul>● Contact insurance carriers as needed to resolve issues with orders</ul>
                    <ul>● Process prescription orders for customers and collect payment</ul>
                    <ul>● Answer customer questions via telephone and in-person</ul>
                    <ul>● Operate the cash register and ring up customer purchases</ul>
                </ul>
                <br></br>

            {/* Certifications */}
            <div>
                <p class="sub-title">Certifications: </p>

                {/* HarvardX */}
                <div>
                    <p id="sub-sub-title">Harvard X - Intro to Computer Science CS50</p>

                    <ul id="work-certs">●  In Progress</ul>
                    <ul id="work-certs">●  Harvard University</ul>
                </div>

                {/* Genesis Plus */}
                <div>
                    <p id="sub-sub-title">Genesis Plus Trading Academy</p>

                    <ul id="work-certs">● Completed September 2022</ul>
                    <ul id="work-certs">● VJKXXL053</ul>
                </div>

                {/* CDL */}
                <div>
                    <p id="sub-sub-title">Commercial Driver’s License - Class A</p>

                    <ul id="work-certs">● Issued Mar 2021</ul>
                    <ul id="work-certs">● Issued by the State of Illinois</ul>
                </div>

                {/* AHA */}
                <div>
                    <p id="sub-sub-title">Standard – CPR / AED / First-Aid Certification Course</p>

                    <ul id="work-certs">● Jan 2020 - Jan 2024</ul>
                    <ul id="work-certs">● American Heart Association</ul>
                </div>

                {/* NHA */}
                <div>
                    <p id="sub-sub-title">National Healthcareer Association (NHA) - Certified Pharmacy Technician (CPhT)</p>

                    <ul id="work-certs">● Jan 2016 - Jan 2024</ul>
                    <ul id="work-certs">● T5RR4DP2</ul>
                </div>

                {/* PTCB */}
                <div>
                    <p id="sub-sub-title">Pharmacy Technician Certification Board (PTCB) - Certified Pharmacy Technician (CPhT)</p>

                    <ul id="work-certs">● Mar 2016 - Apr 2022</ul>
                    <ul id="work-certs">● 30067565</ul>
                </div>
            </div>
            <br></br>

            {/* Licensure */}
            <div>
                <p class="sub-title">Licensure: </p>

                {/* Illinois */}
                <div>
                    <p id="sub-sub-title">Illinois Board of Pharmacy - 049.566668</p>

                    <ul id="work-certs">●  July 2019 - Apr 2024</ul>
                </div>

                {/* Mississippi */}
                <div>
                    <p id="sub-sub-title">Mississippi Board of Pharmacy - PT216601</p>

                    <ul id="work-certs">● July 2015 - Apr 2020</ul>
                </div>
            </div>
            <br></br>
            

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


            {/* Clership/Rotations */}
            <div>
                <p class="sub-title">Clerkship/Rotations: </p>

                {/* Drexler Pharmacy */}
                <div>
                    <p id="sub-sub-title">Drexler Pharmacy | Aug 2021 - Dec 2021</p>

                    <ul id="work-certs">● Preceptor: Dr. Tijuana Dixon, PharmD</ul>
                    <ul id="work-certs">● Pharmacy Practice II Experience (IIPE’S) P2</ul>
                    <ul id="work-certs">● Chicago, IL</ul>
                    <ul id="work-certs">● "Conferred"</ul>
                </div>

                {/* Harbour Light Hospice */}
                <div>
                    <p id="sub-sub-title">Harbour Light Hospice | Jan 2020 - Mar 2020</p>

                    <ul id="work-certs">● Preceptor: Larisa Calvanese</ul>
                    <ul id="work-certs">● Pharmacy Practice I Experience (IIPE’S) P1</ul>
                    <ul id="work-certs">● Winfield, IL</ul>
                    <ul id="work-certs">● "Conferred"</ul>
                </div>

                {/* Walgreens */}
                <div>
                    <p id="sub-sub-title">Walgreens Pharmacy | Sep 2019 - Dec 2019</p>

                    <ul id="work-certs">● Preceptor: Dr. Tujan Almasri, PharmD</ul>
                    <ul id="work-certs">● Pharmacy Practice I Experience (IIPE’S) P1</ul>
                    <ul id="work-certs">● Orland Park, IL</ul>
                    <ul id="work-certs">● "Conferred"</ul>
                </div>
            </div>
            <br></br>

            {/* Professional Organizations */}
            <div>
                <p class="sub-title">Professional Organizations: </p>

                {/* SnPHA */}
                <div>
                    <p id="sub-sub-title">Student National Pharmaceutical Association - (SnPHA)</p>
                    <ul id="work-certs">● Sep 2019 - Aug 2022</ul>
                </div>

                {/* APHA */}
                <div>
                    <p id="sub-sub-title">American Pharmacist Association Academy of Student Pharmacists - (APhA - ASA)</p>
                    <ul id="work-certs">● Sep 2019 - Aug 2021</ul>
                </div>
            </div>
            <br></br>

            {/* Presentations */}
            <div>
                <p class="sub-title">Presentations: </p>

                {/* The Sweet Spot */}
                <div>
                    <p id="sub-sub-title">"The Sweet Spot” | December 2022</p>
                    <ul id="work-certs">● Capstone Project</ul>
                    <ul id="work-certs">● University of Illinois through Fullstack Academy</ul>
                </div>

                {/* “Factors Affecting the Mortality Rates of African American Patients w/ COVID-19 vs the Mortality Rates in All COVID-19 Patients” */}
                <div>
                    <p id="sub-sub-title">"Factors Affecting the Mortality Rates of African American Patients w/ COVID-19 vs the Mortality Rates in All COVID-19 Patients” | April 2020</p>
                    <ul id="work-certs">● Professional Practice II</ul>
                    <ul id="work-certs">● Chicago State University</ul>
                </div>

                {/* “Austin Anonymous Drive (AAD) Initiative Proposal” */}
                <div>
                    <p id="sub-sub-title">“Austin Anonymous Drive (AAD) Initiative Proposal” | April 2020</p>
                    <ul id="work-certs">● Research Methods and Pharmacoepidemiology</ul>
                    <ul id="work-certs">● Chicago State University</ul>
                </div>

                {/* "Hereditary Hemochromatosis” */}
                <div>
                    <p id="sub-sub-title">"Hereditary Hemochromatosis” | Nov 2019 </p>
                    <ul id="work-certs">● Pharmaceutical Biochemistry I</ul>
                    <ul id="work-certs">● Chicago State University</ul>
                </div>

                {/* “Culture of Patient Safety”  */}
                <div>
                    <p id="sub-sub-title">"Culture of Patient Safety” | Sept 2019</p>
                    <ul id="work-certs">● Pharmacy Health Care Systems</ul>
                    <ul id="work-certs">● Chicago State University</ul>
                </div>

                {/* “Tuberactinomycins” */}
                <div>
                    <p id="sub-sub-title">“Tuberactinomycins” | Dec 2018</p>
                    <ul id="work-certs">● Molecular Machines of Health and Disease</ul>
                    <ul id="work-certs">● Mississippi College</ul>
                </div>

                {/* “Glycolysis”  */}
                <div>
                    <p id="sub-sub-title">“Glycolysis” | December 2018</p>
                    <ul id="work-certs">● Biochemistry: Macromolecules</ul>
                    <ul id="work-certs">● Mississippi College</ul>
                </div>
            </div>
            <br></br>

            {/* Community Service */}
            <div>
                <p class="sub-title">Community Service: </p>

                {/* Hot Chocolate Run */}
                <div>
                    <p id="sub-sub-title">Hot Chocolate 15K/5K Run</p>
                    <ul id="work-certs">● Volunteer</ul>
                    <ul id="work-certs">● Chicago, IL</ul>
                </div>

                {/* Chicago Heart Walk */}
                <div>
                    <p id="sub-sub-title">Chicago Heart Walk 2019</p>
                    <ul id="work-certs">● Volunteer</ul>
                    <ul id="work-certs">● Chicago, IL</ul>
                </div>

                {/* UMMC */}
                <div>
                    <p id="sub-sub-title">University of Mississippi Medical Center - Supervisor: Marsha Burton</p>
                    <ul id="work-certs">● Volunteer</ul>
                    <ul id="work-certs">● Jackson, MS</ul>
                </div>
            </div>
            <br></br>

            {/* References */}
            <div>
                <p class="sub-title">References: </p>

                {/* Victor Allen */}
                <div>
                    <p id="sub-sub-title">Dr. Victor Allen, PharmD | Former Colleague</p>
                    <ul id="work-certs">● Jackson State University</ul>
                </div>

                {/* Ariel Castex */}
                <div>
                    <p id="sub-sub-title">Dr. Ariel Castex-Defresne, PharmD | Former Supervisor</p>
                    <ul id="work-certs">● CVS Health</ul>
                </div>

                {/* Herny Clay */}
                <div>
                    <p id="sub-sub-title">Henry C. Clay III, J.M.C., Esq | Mentor</p>
                    <ul id="work-certs">● City of Jackson Municipal Court Judge and Assistant Attorney General, State of Mississippi</ul>
                </div>

                {/* Stephen Cook */}
                <div>
                    <p id="sub-sub-title">Rev, Dr. Stephen T. Cook | Mentor</p>
                    <ul id="work-certs">● District Superintendent of the Mississippi Annual Conference of the United Methodist Church</ul>
                </div>

                {/* Veleka Grady */}
                <div>
                    <p id="sub-sub-title">Dr. Veleka Grady, PharmD | Former Supervisor</p>
                    <ul id="work-certs">● CVS Health</ul>
                </div>

                {/* Dewey Handy */}
                <div>
                    <p id="sub-sub-title">Dr. Dewey Handy, OD | Mentor</p>
                    <ul id="work-certs">● Handy Eye Care</ul>
                </div>

                {/* Jasmine Kinnard */}
                <div>
                    <p id="sub-sub-title">Dr. Jasmine Kinnard, PharmD | Former Supervisor</p>
                    <ul id="work-certs">● CVS Health</ul>
                </div>

                {/* Elle Oshiro */}
                <div>
                    <p id="sub-sub-title">Elle Oshiro | Former Teacher</p>
                    <ul id="work-certs">● Fullstack Academy</ul>
                    <ul id="work-certs">● New York, NY</ul>
                </div>

                {/* Jeremy Rogers */}
                <div>
                    <p id="sub-sub-title">Jeremy Rogers | Former Mentor</p>
                    <ul id="work-certs">● Fullstack Academy</ul>
                    <ul id="work-certs">● New York, NY</ul>
                </div>

                {/* Matt Yard */}
                <div>
                    <p id="sub-sub-title">Matt Yard | Former Mentor</p>
                    <ul id="work-certs">● Fullstack Academy</ul>
                    <ul id="work-certs">● New York, NY</ul>
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

export default WorkCV;