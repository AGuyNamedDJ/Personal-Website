import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Ventures = () => {
    const [imageIndex1, setImageIndex1] = useState(0);
    const [imageIndex2, setImageIndex2] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const carouselRef = useRef(null);

    const images1 = [
        "/images/chi-Image/chi1.jpg",
        "/images/chi-Image/chi3.jpg",
        "/images/chi-Image/chi5.jpg",
        "/images/chi-Image/chi7.jpg",
        "/images/chi-Image/chi9.png",
        "/images/chi-Image/chi11.jpg",
        "/images/chi-Image/chi13.jpg",
    ];

    const images2 = [
        "/images/chi-Image/chi2.jpg",
        "/images/chi-Image/chi4.jpg",
        "/images/chi-Image/chi6.jpg",
        "/images/chi-Image/chi8.jpg",
        "/images/chi-Image/chi10.png",
        "/images/chi-Image/chi12.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex1((prev) => (prev + 1) % images1.length);
            setImageIndex2((prev) => (prev + 1) % images2.length);
        }, 3000); // change images every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            if (currentScrollY > lastScrollY) {
                // scrolling down
                setImageIndex1((prev) => (prev + 1) % images1.length);
                setImageIndex2((prev) => (prev + 1) % images2.length);
            } else if (currentScrollY < lastScrollY) {
                // scrolling up
                setImageIndex1((prev) => (prev - 1 + images1.length) % images1.length);
                setImageIndex2((prev) => (prev - 1 + images2.length) % images2.length);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                <div className="ventures-4-middle">
                    <motion.img
                        key={images1[imageIndex1]}
                        src={images1[imageIndex1]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        alt={`Descriptive Image Text ${imageIndex1 * 2 + 1}`}
                    />
                </div>

                {/* Right Container */}
                <div className="ventures-4-right">
                    <motion.img
                        key={images2[imageIndex2]}
                        src={images2[imageIndex2]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        alt={`Descriptive Image Text ${imageIndex2 * 2 + 2}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Ventures;