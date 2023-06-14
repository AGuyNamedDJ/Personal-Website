import React from "react";
import { Link } from 'react-scroll'

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
                    <div className="left-image">
                    <h1 className="title-line">Recent<br />Projects</h1>
                        <a href="project1-link"><img src="/images/Websites/Dalrecipe.png" alt="Project 1" /></a>
                    </div>
                    <div className="right-image">
                        <a href="project2-link"><img src="/images/Websites/Tradingview.png" alt="Project 2" /></a>
                        <a href="project3-link"><img src="/images/Journals/1-JobSearch.jpg" alt="Project 3" /></a>
                    </div>
                </div>
            </div>

            {/* Third block with title and a 3 row container */}
            <div className="block">
                <h1>Third Block Title</h1>
                <div className="three-row-container">
                    <div className="row">Row 1</div>
                    <div className="row">Row 2</div>
                    <div className="row">Row 3</div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;
