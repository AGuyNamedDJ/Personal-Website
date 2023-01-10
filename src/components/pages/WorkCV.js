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
                    <ul>● Held daily stand-ups, kept a planning board, and used pull requests to modify the code base on code reviews with the project manager</ul>
                <li>User Functionality</li>
            </div>            
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
                    <p class="footer-websites">GITHUB INSTAGRAM LINKEDIN </p>
                    <p class="footer-websites-bottom"> CODEWARS EMAIL</p>
                </div>
            </footer>
        </div>
    )
};

export default WorkCV;