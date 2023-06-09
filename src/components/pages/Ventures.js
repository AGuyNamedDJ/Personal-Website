import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Ventures = () => {
    const imageRef1 = useRef();
    const imageRef2 = useRef();
    const [imagePos1, setImagePos1] = useState(0);
    const [imagePos2, setImagePos2] = useState(0);

    useEffect(() => {
        const scrollImage = () => {
            setImagePos1(prev => (prev - 1 < -imageRef1.current.clientHeight) ? 0 : prev - 1);
            setImagePos2(prev => (prev - 1 < -imageRef2.current.clientHeight) ? 0 : prev - 1);
            requestAnimationFrame(scrollImage);
        }
        
        scrollImage();
    }, []);

    return(
        <div className="ventures">
            {/* Block 1 */}
            <div id="ventures-1">
                <p className ="ventures-1-title">Ventures</p>
            </div>

            {/* Block 2 */}
            <div id="ventures-2" className="ventures-2-container">
                <div className="ventures-2-text">
                    <h2 className="ventures-2-title">This is my<br /><span>Purpose<span className="dot"></span></span></h2>
                    <p>I am deeply committed to serving as a powerful catalyst for metamorphic change within underrepresented communities. With interests spanning real estate, technology, life sciences, retail and service sectors., my passion is not defined by the pursuit of wealth rather the relentless drive to spur change. My objective is to invigorate, catalyze, and uplift. I am here to unlock opportunities, to debunk impossibilities, and to inspire. Aspirations of wealth are secondary to the success of those I serve. This is a long-term mission - a journey for profound advancement.</p>
                </div>
                <div className="ventures-2-image">
                    <img src="/images/chicago-skyline.jpg" alt="Descriptive Image Text" />
                </div>
            </div>

            {/* Block 3 */}
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

            {/* Block 4 */}
            <div id="ventures-4" className="ventures-4">

                {/* Left Container */}
                <div className="ventures-4-text">
                    <h2 className="ventures-4-title">Real Estate</h2>
                    <p className="ventures-4-description">These architectural marvels offer a glimpse into the inner workings of my mind, where the realms of possibilities are shattered. Immerse yourself in the tapestry of inspiration woven within each image, a testament to my unyielding passion for redefining and reshaping the very fabric of this transformative industry.</p>
                    <Link to="/ventures/realestate" className="learn-more-2">Learn More</Link>
                </div>

                {/* Middle Container */}
                <div className="ventures-4-middle" style={{position: "relative", overflow: "hidden"}}>
                    <motion.div className="ventures-4-image-1" 
                        style={{position: "absolute", top: imagePos1}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img ref={imageRef1} src="/images/chi-Image/chi1.jpg" alt="Descriptive Image Text 1" />
                    </motion.div>

                    {/* Duplicate image for infinite scroll effect */}
                    <motion.div className="ventures-4-image-1" 
                        style={{position: "absolute", top: imagePos1 + imageRef1.current?.clientHeight}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img ref={imageRef1} src="/images/chi-Image/chi1.jpg" alt="Descriptive Image Text 1" />
                    </motion.div>

                    {/* Your other components */}
                </div>

                {/* Right Container */}
                <div className="ventures-4-right" style={{position: "relative", overflow: "hidden"}}>
                    <motion.div className="ventures-4-image-2" 
                        style={{position: "absolute", top: imagePos2}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img ref={imageRef2} src="/images/chi-Image/chi2.jpg" alt="Descriptive Image Text 2" />
                    </motion.div>

                    {/* Duplicate image for infinite scroll effect */}
                    <motion.div className="ventures-4-image-2" 
                        style={{position: "absolute", top: imagePos2 + imageRef2.current?.clientHeight}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img ref={imageRef2} src="/images/chi-Image/chi2.jpg" alt="Descriptive Image Text 2" />
                    </motion.div>

                    {/* Your other components */}
                </div>
            </div>
        </div>
    )
};

export default Ventures;