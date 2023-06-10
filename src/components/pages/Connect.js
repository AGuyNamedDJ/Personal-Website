import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Coding from "../animations/Coding.json";
import Coding1 from "../animations/Coding1.json";
import Macbook from "../animations/Macbook.json";

const slidesData = [
    { 
      id: 1, 
      content: 'GitHub', 
      link: 'https://github.com/DJRobertson95', 
      username: '@AGuyNamedDJ', 
      description: 'A playground for code, where every line tells a story. An open canvas where innovation takes form, collaboration fuels progress, and ideas come to life.',
      img: Coding1 
    },
];

const Slide = ({content, link, username, description, img}) => (
    <div className="slide">
        <div className="slide-content" style={{ paddingRight: '5vw' }}>
        <h2><span className="underline">{content}</span></h2>

            <a href={link} target="_blank" rel="noopener noreferrer">{username}</a>
            <p>{description}</p>
        </div>
        <div className="slide-image">
            <Lottie animationData={img} style={{ height: '40vh', width: '40vw' }} loop autoplay />
        </div>
    </div>
);



const Connect = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % slidesData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="page">

            {/* Title */}
            <div id="titleSection">
                <h1>Connect</h1>
            </div>

            <div id="social-title">
                <div className="underline">
                    <h2>Social Media</h2>
                </div>
            </div>

            {/* Social Media */}
            <div id="socialSection" className="section">
                {slidesData.map((slide, index) => (
                <Slide 
                content={slide.content}
                link={slide.link}
                username={slide.username}
                description={slide.description}
                img={slide.img}
                key={slide.id}
                className={current === index ? 'active' : ''}/>
                ))}
            </div>

            {/* Schedule Meeting */}
            <div id="scheduleSection" className="section">
                {/* schedule content goes here */}
            </div>

            {/* Email */}
            <div id="emailSection" className="section">
                {/* email content goes here */}
            </div>
        </div>
      );
    };

export default Connect;
