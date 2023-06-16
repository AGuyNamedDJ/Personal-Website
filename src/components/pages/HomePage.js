import React from "react";
import { Link } from 'react-scroll';
import { Link as ScrollLink } from "react-scroll";

const HomePage = () => {
    return (
        <div id="homePage">
            {/* First block with picture and description */}
            <div className="block" id="block1">
                <div className="content">
                    <h1>Hello, it's me</h1>
                    <div className="titleWithDot">
                        <h2>Dalron</h2>
                    </div>
                    <p>Living to push boundaries and redefine what's "possible," I embrace challenges, explore uncharted territories, and inspire others to dream bigger.</p>
                    <Link to="block2" spy={true} smooth={true}><span className="scroll-for-more">Scroll for More</span></Link>
                </div>
                <div className="image">
                    <img src="/images/AGNDJ1.png" alt="Dalron" />
                </div>
            </div>

           {/* Second block with subtitle, big title, button on the left and text description on the right */}
            <div className="block" id="block2">
                <div className="image-container">
                    <div className="left-image image-link">
                        <h1 className="title-line">
                            <span className="top-line">Recent</span>
                            <span className="bottom-line">Projects <span className="symbol">+</span></span>
                        </h1>
                        <a href="https://github.com/AGuyNamedDJ/Health-Hive-Back-End">
                            <img src="/images/Websites/Doctor.jpeg" alt="Project 1" />
                            <div className="overlay">
                                <button className="view-project-btn">View Project</button>
                            </div>
                        </a>
                    </div>
                    <div className="right-images">
                        <div className="image-link">
                            <a href="https://github.com/AGuyNamedDJ/TradingView-Scripts-1">
                                <img src="/images/Websites/Tradingview.png" alt="Project 2" />
                                <div className="overlay">
                                    <button className="view-project-btn">View Project</button>
                                </div>
                            </a>
                        </div>
                        <div className="image-link">
                            <a href="/TTOTJS">
                                <img src="/images/Journals/1-JobSearch.jpg" alt="Project 3" />
                                <div className="overlay">
                                    <button className="view-project-btn">View Project</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third block with title and a 3 row container */}
            <div id="block3">
                <h1 className="career-title">
                    <span className="career-word">Career</span> <span className="symbol">+</span>
                </h1>

                <div class="three-row-container">
                    <div class="row">
                        <h2>Freelance</h2>
                        <a>Software Developer</a>
                        <p>Dec 2022 - Present</p>
                    </div>
                    <div class="row">
                        <h2>MMP</h2>
                        <a>Data & MR Analyst</a>
                        <p>Aug 2020 - Apr 2022</p>
                    </div>
                    <div class="row">
                        <h2>CVS Health</h2>
                        <a>Pharmacist Intern</a>
                        <p>Aug 2015 - Aug 2020</p>
                    </div>
                </div>
            </div>

            <div className="block" id="block4">
                <div className="centered-text-container">
                    <p className="contact-me">CONTACT ME</p>
                    <a className="line-link" href="https://github.com/AGuyNamedDJ" target="_blank" rel="noopener noreferrer">Github</a>
                    <a className="line-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className="line-link" href="https://www.linkedin.com/in/dalronjrobertson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="line-link" href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a className="line-link" href="https://www.youtube.com/@AGNDJGaming" target="_blank" rel="noopener noreferrer">Youtube:Gaming</a>
                    <a className="line-link" href="https://www.youtube.com/channel/UCrToDvdFWAczvBr6DJK3U5w" target="_blank" rel="noopener noreferrer">Youtube:Personal</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage;