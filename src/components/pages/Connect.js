import React, { useState, useEffect } from 'react';

const slidesData = [
    { id: 1, content: 'GitHub', link: 'https://github.com/DJRobertson95', username: 'DJRobertson95', img: 'https://assets7.lottiefiles.com/packages/lf20_jjsrh4we.json' },
    // Other slides data...
];

const Slide = ({content, link, username, img}) => (
    <div className="slide">
        <div className="slide-content">
            <h2>{content}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">{username}</a>
        </div>
        <img src={img} alt={content} className="slide-image" />
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
          <div id="titleSection">
            <h1>Connect</h1>
          </div>
          <div id="socialSection" className="section">
            {slidesData.map((slide, index) => (
              <Slide 
                content={slide.content}
                link={slide.link}
                username={slide.username}
                key={slide.id}
                className={current === index ? 'active' : ''}
              />
            ))}
          </div>
          <div id="emailSection" className="section">
            {/* email content goes here */}
          </div>
          <div id="scheduleSection" className="section">
            {/* schedule content goes here */}
          </div>
        </div>
      );
    };
export default Connect;
