import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
    return(
        <div id="Page" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Site Map</h1>
            </div>

            {/* About */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>About</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <Link to="/about">DJR</Link>
                        <Link to="/about/mystory">My Story</Link>
                        <Link to="/about#personalInterestsSection">Personal Interest</Link>
                    </div>
                    <div className="site-map-2">

                    </div>
                    <div className="site-map-3">

                    </div>
                </div>
            </div>

            {/* Projects */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Projects</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <div className="site-map-subtitle">Software Development</div>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_jGUHtmMZ8LVgS5NuV-ruq">Derivative/Hedge Trading</a>
                        <Link className="site-map-link" to="/projects#writingSection">Literary Works</Link>
                        <br></br>
                        <div className="site-map-subtitle">Websites</div>
                        <Link className="site-map-link" to="/personalwebsite">Personal Website</Link>
                        <Link className="site-map-link" to="/tradingview">Trading View Strategies</Link>
                        <Link className="site-map-link" to="/healthhive">Health Hive</Link>
                        <Link className="site-map-link" to="/carhaven">Car Haven</Link>
                        <Link className="site-map-link" to="/dalrecipe">Dal-Recipe</Link>
                        <Link className="site-map-link" to="/sweetspot">The Sweet Spot</Link>
                        <Link className="site-map-link" to="/fitnesstrackr">Fitness Trackr</Link>
                        <Link className="site-map-link" to="/juicebox">Juicebox</Link>
                        <Link className="site-map-link" to="/strangersthings">Stranger's Things</Link>
                        <Link className="site-map-link" to="/hackersnews">Hacker's News</Link>
                        <Link className="site-map-link" to="/puppybowl">Puppy Bowl</Link>
                        <Link className="site-map-link" to="/connect4">Connect 4</Link>
                        <Link className="site-map-link" to="/realestateclicker">Real Estate Clicker</Link>
                    </div>

                    <div className="site-map-2">
                        <div className="site-map-subtitle">Books</div>
                        <p>Circuit Breakers: One</p>
                        <br></br>
                        <div className="site-map-subtitle">YouTube</div>
                        <p>AGNDJ</p>
                        <p>AGNDJ: Gaming</p>
                        <p>Behind The Lens</p>
                        <p>God's Grace</p>
                        <p>Life Upgraded</p>
                        <p>Music Spaces</p>
                        <p>Reflections and Revelations</p>
                        <p>The Dreamer's Desk</p>
                        <p>Tech Savvy</p>
                        <p>Trading Markets</p>
                    </div>
                    
                    <div className="site-map-3">
                        <div className="site-map-subtitle">Journals</div>
                        <p>A Busy Week</p>
                        <p>Digital Harmony</p>
                        <p>Evidence of Light</p>
                        <p>Love's Purpose</p>
                        <p>New Aged Branding</p>
                        <p>The Tunnel</p>
                    </div>
                </div>
            </div>

            {/* Ventures */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Ventures</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <p>Business</p>
                        <p>Purpose</p>
                        <p>Real Estate</p>
                    </div>
                    <div className="site-map-2">

                    </div>
                    <div className="site-map-3">

                    </div>
                </div>
            </div>

            {/* Credentials */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Credentials</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <div className="site-map-subtitle">Curriculum Vitae</div>
                        <p>Download CV</p>
                        <p>View CV</p>
                    </div>
                    <div className="site-map-2">
                        <div className="site-map-subtitle">Resume</div>
                        <p>Download Resume</p>
                        <p>View Resume</p>
                    </div>
                    <div className="site-map-3">
                        <div className="site-map-subtitle">Certifications</div>
                        <p>View Certifications</p>
                        <br></br>
                        <div className="site-map-subtitle">Notoriety</div>
                        <p>View Notoriety</p>
                    </div>
                </div>
            </div>
            {/* Connect */}

            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Connect</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <div className="site-map-subtitle">Social Media</div>
                        <p>Github</p>
                        <p>Instagram</p>
                        <p>Linkedin</p>
                        <p>Threads</p>
                        <p>Twitter</p>
                        <p>Youtube: Gaming Channel</p>
                        <p>Youtube: Main Channel</p>
                    </div>
                    <div className="site-map-2">
                        <div className="site-map-subtitle">Contact</div>
                        <p>Schedule a Meeting</p>
                        <p>Contact Me</p>

                    </div>
                    <div className="site-map-3">

                    </div>
                </div>
            </div>





        </div>
    )
};

export default SiteMap;