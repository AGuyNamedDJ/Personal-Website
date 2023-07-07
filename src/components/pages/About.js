import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Mac1 from "../animations/Mac1.json";
import Create from "../animations/Create.json";
import Book1 from "../animations/Book1.json";

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Book1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

// Placeholders for image sources
const imgSources = [
    '/images/Chi2/Img1.jpeg', '/images/Chi2/Img2.JPG',
    '/images/Chi2/Img3.jpg','/images/Chi2/Img4.jpeg',
    '/images/Chi2/Img5.JPG','/images/Chi2/Img6.jpg',
    '/images/Chi2/Img7.jpeg','/images/Chi2/Img8.jpg',
    '/images/Chi2/Img9.jpeg','/images/Chi2/Img10.jpg',
    '/images/Chi2/Img11.JPG','/images/Chi2/Img12.jpeg',
    '/images/Chi2/Img13.jpeg','/images/Chi2/Img14.jpeg',
    '/images/Chi2/Img15.jpg','/images/Chi2/Img16.JPG',
    '/images/Chi2/Img17.jpeg','/images/Chi2/Img18.jpeg',
    '/images/Chi2/Img19.jpeg','/images/Chi2/Img20.jpeg'
]; 

// Shuffle Images
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const About = () => {
    const [shuffledImages, setShuffledImages] = useState(shuffle([...imgSources]));
    const [currentPage, setCurrentPage] = useState(0);

    // Function to navigate to the next page
    const nextPage = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, Math.floor(shuffledImages.length / 9)));
    };

    // Function to navigate to the previous page
    const prevPage = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 0));
    };

    return(
        <div id="aboutPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>About</h1>
            </div>

            {/* Intro Section */}
            <div id="introSection" className="section-about">
                <div id="about-text">
                    <p id="indented-paragraph">Welcome! I'm Dalron J. Robertson, a 27-year-old father, Christian, and passionate enthusiast of life's endless possibilities. My interests are wide and varied, straddling the domains of software development, finance, music, and technology. My academic journey began with music, transitioned into life sciences, and finally, found its calling in the realm of technology. This unique blend of experiences informs my perspective, infusing creativity and problem-solving into all I do. When I'm not immersed in work, I explore the arts, admire architectural wonders, and unwind with boating adventures. I also enjoy delving into culinary experiences and basking in the tranquility of nature. Join me as I navigate this extraordinary journey of life, continually exploring, growing, and pushing boundaries.</p>
                </div>
                    <div id="image-container" style={{position: "relative"}}>
                        <img src="/images/AGNDJ1.png" alt="Dalron" id="about-image" />
                    </div>
            </div>

            {/* Story Section */}
            <div id="storySection" className="section-about">
                <Link to="/about/mystory">- Read My Story -</Link>
            </div>

            {/* Creation Section */}
            <div id="creationSection" className="section-about">
                <div className="creation-content" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className="creation-text">
                        <p>The act of creation lies at the heart of all my endeavors, serving as the core that underpins each project I undertake. My creativity extends across diverse platforms and mediums, encompassing ventures such as creating and editing content for YouTube, solving complex problems through the development of innovative software solutions, and engaging in the artistic interweaving of sounds and instruments to create new pieces of music. The energy of my creative spirit permeates every aspect of my work, casting an aura that fuels my passion and motivates me to push the boundaries of what is conventionally possible.</p>
                    </div>

                    <div id="creation-animation">
                        <Lottie animationData={Book1} style={{ height: '40vh', width: '40vw' }} loop autoplay />
                    </div>

                    <div className="creation-text">
                        <p>As the pages of my life's book continue to turn, the ember of passion for pioneering innovative business concepts within me is only growing stronger and brighter. With an observant eye I identify unique opportunities with out-of-the-box thinking, I am always prepared to challenge the status quo. My creativity is not confined within traditional parameters but rather expands into the realm of entrepreneurial endeavors. This allows me to integrate a unique blend of imagination, strategy, and pragmatism into my ventures, transforming ideas into tangible realities that hold the potential to disrupt markets and pioneer novel paradigms.</p>
                    </div>
                </div>
            </div>

            {/* Personal Interests Section */}
            <div id="personalInterestsSection" className="section-about">
                <h2>Personal Interests</h2>
                <p>From culinary arts to arts to boating life, my personal interests span a wide range. Here's just a snippet into my world of relaxation.</p>
                <div id="slideshow-controls">
                    <button className="control-button" onClick={prevPage} disabled={currentPage === 0}>
                    <img class="prev-button" src="/images/AboutArrow.png" alt="Previous" />
                    </button>
                    <div id="slideshow">
                        {shuffledImages.slice(currentPage*9, currentPage*9+9).map((imgSrc, index) => 
                        <div key={index} className="slideshow-img-container">
                            <img src={imgSrc} alt={`Slideshow ${index+1}`} className="slideshow-img" />
                        </div>
                        )}
                    </div>
                    <button className="control-button" onClick={nextPage} disabled={currentPage === Math.floor(shuffledImages.length / 9)}>
                        <img src="/images/AboutArrow.png" alt="Next" />
                    </button>
                </div>
            </div>
        </div>
    )
};
export default About;