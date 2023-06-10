import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Coding from "../animations/Coding.json";

const slidesData = [
    { id: 1, content: 'GitHub', link: 'https://github.com/DJRobertson95', username: 'DJRobertson95', img: Coding },
    // Other slides data...
];

const Slide = ({content, link, username, img}) => (
    <div className="slide">
        <div className="slide-content">
            <h2>{content}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">{username}</a>
        </div>
        <div className="slide-image">
            <Lottie animationData={img} style={{ height: 400, width: 400 }} />
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

            {/* Social Media */}
            <div id="socialSection" className="section">
                {slidesData.map((slide, index) => (
                <Slide 
                content={slide.content}
                link={slide.link}
                username={slide.username}
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
