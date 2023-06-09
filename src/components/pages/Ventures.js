import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


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
                    <h3 className="ventures-3-subtitle">Dream Incubation:</h3>
                    <h2 className="ventures-3-title">Business</h2>
                    <h2 className="ventures-3-title">Private Equity &</h2>
                    <h2 className="ventures-3-title">Venture Capital</h2>
                    <Link to="/ventures/business" className="learn-more">Learn More</Link>
                </div>
                <div className="ventures-3-description">
                    <p>My commitment is to serve as a launchpad for dreamers, and doers. Through providing quality spaces, resources, education, and support, I aim to empower individuals and uplift entire communities. Success is not measured in profits, but in the number of dreams ignited, businesses launched, and lives transformed. This journey is all about debunking the myth of the word "impossible". Welcome to our collective pursuit of progress and empowerment.</p>
                </div>
            </div>

            <div id="ventures-4" className="ventures-4">
                <div className="ventures-4-text">
                    <h2 className="ventures-4-title">Real Estate</h2>
                    <p className="ventures-4-description">These architectural marvels offer a glimpse into the inner workings of my mind, where the realms of possibilities are shattered. Immerse yourself in the tapestry of inspiration woven within each image, a testament to my unyielding passion for redefiningand reshaping the very fabric of this transofmrative industry.</p>
                    <Link to="/ventures/realestate" className="learn-more-2">Learn More</Link>
                </div>
                <div className="ventures-4-middle">
                    <div className="ventures-4-image-1">
                        <img src="/images/chi-Image/chi1.jpg" alt="Descriptive Image Text 1" />
                    </div>
                     {/* Add more images here as needed */}
                </div>
                <div className="ventures-4-right">
                    <div className="ventures-4-image-2">
                        <img src="/images/chi-Image/chi2.jpg" alt="Descriptive Image Text 2" />
                    </div>
                {/* Add more images here as needed */}
                </div>
            </div>
        </div>
    )
};

export default Ventures;