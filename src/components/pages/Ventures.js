import React from "react";
import { Link } from 'react-router-dom';

const Ventures = () => {
    return(
        <div className="ventures">
            <div id="ventures-1">
                <p className ="ventures-1-title">Ventures</p>
            </div>

            <div id="ventures-2" className="ventures-2-container">
                <div className="ventures-2-text">
                    <h2 className="ventures-2-title">This is my<br /><span>Purpose<span class="dot"></span></span></h2>
                    <p>I am deeply committed to serving as a powerful catalyst for metamorphic change within underrepresented communities. With interests spanning real estate, technology, life sciences, retail and service sectors., my passion is not defined by the pursuit of wealth rather the relentless drive to spur change. My objective is to invigorate, catalyze, and uplift. I am here to unlock opportunities, to debunk impossibilities, and to inspire. Aspirations of wealth are secondary to the success of those I serve. This is a long-term mission - a journey for profound advancement.</p>
                </div>
                <div className="ventures-2-image">
                    <img src="/images/chicago-skyline.jpg" alt="Descriptive Image Text" />
                </div>
            </div>

            <div id="ventures-3" className="ventures-3-container">
                <div className="ventures-3-text">
                    <h2 className="ventures-3-title">Business</h2>
                    <h2 className="ventures-3-title">Private Equity &</h2>
                    <h2 className="ventures-3-title">Venture Capital</h2>
                    <Link to="/business" className="learn-more">Learn More</Link>
                </div>
                <div className="ventures-3-description">
                    <p>My entrepreneurial journey spans various sectors, each venture conceived with the drive to innovate, uplift, and inspire change. This collective pursuit is not simply about creating successful businesses; it's about fostering a culture of innovation and resilience that spans beyond the walls of each enterprise. Click on 'Learn More' to dive deeper into the individual journeys of these ventures.</p>
                </div>
            </div>

        </div>
    )
};

export default Ventures;