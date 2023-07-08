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
                    <h2>Software Development.</h2>
                    <p>Witness the alchemy of ideas transformed into digital reality. This is the culmination of my innovative journey in software development, a curated showcase of technological ingenuity.</p>
                    {/* Link to Project */}
                    <Link to="/projects/websites" className="learn-more">Learn More</Link>
                </div>

                {/* Trading Section */}
                <div className="project-section" id="tradingSection">
                    <h2>Derivative / Hedge Trading.</h2>
                    <p>Embark on a journey into the nuanced world of trading. Explore my approaches, witness calculated risks in action, and gain insights from my real-time market maneuvers. Below you'll find the most recent video from my YouTube channel, providing a tangible window into my trading practices and thought processes.</p>

                    {/* Video of Trading  */}
                    <iframe
                        id="tradingVideo"
                        src="https://www.youtube.com/embed/fOP7sZgJgE8?autoplay=1&mute=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    
                    {/* Link to YouTube playlist */}
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        <a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_jGUHtmMZ8LVgS5NuV-ruq"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="learn-more-link">Learn More
                        </a>
                    </p>
                </div>

                {/* Writing Section */}
                <div className="project-section" id="writingSection">
                    <h2>Literary Works.</h2>
                    <p>Immerse in the realm of expression where I pour my thoughts, experiences, and imaginations into words. Venture through my journal entries, which are glimpses into my perspectives and learnings. Or, lose yourself in the vivid realms I construct within my book series. The canvas of writing awaits below, each image a gateway to a different narrative journey.</p>

                    {/* Link to Writing Pages */}
                    <div className="image-links">
                        <Link to="/projects/journals" className="image-link">
                            <img src="/images/Writings/Journal.webp" alt="Journal entries" />
                            <div className="overlay">
                            <p className="label">View Journals</p>
                            </div>
                        </Link>
                        <Link to="/projects/books" className="image-link">
                            <img src="/images/Writings/Book.JPG" alt="Book series" />
                            <div className="overlay">
                            <p className="label">View Books</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Projects;