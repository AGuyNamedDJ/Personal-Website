import React from "react";
import { Link } from 'react-router-dom';

const Projects = () => {
    return(
        <div id="Page" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Projects</h1>
            </div>

            <div id="projectsPage">
                {/* Coding Section */}
                <div className="project-section" id="codingSection">
                    <h2>Coding. Beyond.</h2>
                    <p>Witness the alchemy of ideas transformed into digital reality. This is the culmination of my innovative journey in software development, a curated showcase of technological ingenuity.</p>
                    {/* Link to Project */}
                    <Link to="/projects/websites" className="learn-more">Learn More</Link>
                </div>

                {/* Trading Section */}
                <div className="project-section" id="tradingSection">
                    <h2>Trading. Beyond boundaries.</h2>
                    <p>Embark on a journey into the nuanced world of trading. Explore my strategic approaches, witness calculated risks in action, and gain insights from my real-time market maneuvers. Below you'll find the most recent video from my YouTube channel, providing a tangible window into my trading practices and thought processes.</p>

                    {/* Video of Trading  */}
                    <iframe 
                        id="tradingVideo"
                        src="https://www.youtube.com/embed/-5_NiRTS2nE?autoplay=1&mute=1" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                {/* Writing Section */}
                <div className="project-section" id="writingSection">
                    <h2>Writing. Beyond boundaries imagined.</h2>
                    <p>Dive into a realm where thoughts and emotions take form, a display of my creative endeavors in writing. Each piece is a part of me, unfettered and expressed freely.</p>
                    {/* Link to Writing Page */}
                    <Link to="/writing" className="learn-more">Learn More</Link>
                </div>
            </div>
        </div>
    )
};
export default Projects;