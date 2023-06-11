import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Coding1 from "../animations/Coding1.json";
import axios from 'axios';
import YouTube from 'react-youtube';

const API_KEY = 'AIzaSyDVj3lrXsiU3hVjskSOC-kYlmVaJc6VjlM';
const CHANNEL_ID = 'UCDUahDaIaCmrWOTA90Qr34Q';

let slidesData = [
    { 
        id: 1, 
        content: 'GitHub', 
        link: 'https://github.com/DJRobertson95', 
        username: '@AGuyNamedDJ', 
        description: 'A playground for code, where every line tells a story. An open canvas where innovation takes form, collaboration fuels progress, and ideas come to life.',
        img: Coding1 
    },
    {
        id: 2, 
        content: 'YouTube', 
        link: 'https://www.youtube.com', 
        username: 'AGNDJ Gaming', 
        img: null, 
        description: 'A realm of visual storytelling, where ideas are brought to life in motion. An eclectic collection of insights, adventures, and moments captured on film.'
    },
    { 
        id: 3, 
        content: 'Instagram', 
        link: 'https://www.instagram.com/aguynameddj/', 
        username: '@AGuyNamedDJ', 
        description: 'Instagram.'
    },
    { 
        id: 4, 
        content: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/dalronjrobertson/', 
        username: 'DalronJRobertson', 
        description: 'LinkedIn.'
    },
    { 
        id: 5, 
        content: 'Twitter', 
        link: 'https://twitter.com/AGuyNamedDJ_', 
        username: '@AGuyNamedDJ_', 
        description: 'Twitter.'
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

const YoutubeSlide = ({content, link, username, description, videoId}) => (
    <div className="slide">
        <div className="slide-content" style={{ paddingRight: '5vw' }}>
            <h2><span className="underline">{content}</span></h2>
            <a href={link} target="_blank" rel="noopener noreferrer">{username}</a>
            <p>{description}</p>
        </div>
        <div className="slide-image">
            <YouTube videoId={videoId} opts={{
                height: '40vh',
                width: '40vw',
                playerVars: {
                    autoplay: 1,
                },
            }} />
        </div>
    </div>
);

async function getLatestYoutubeVideo() {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDVj3lrXsiU3hVjskSOC-kYlmVaJc6VjlM&channelId=UCDUahDaIaCmrWOTA90Qr34Q&part=snippet,id&order=date&maxResults=1`
        );
        if (response.data.items.length > 0) {
            return response.data.items[0];
        }
    } catch (error) {
        console.error(error);
    }
    return null;
}

const Connect = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % slidesData.length);
        }, 3000);
        
        getLatestYoutubeVideo().then(video => {
            if (video) {
                setSlidesData(prevSlidesData => [
                    ...prevSlidesData,
                    {
                        id: prevSlidesData.length + 1,
                        content: video.snippet.title,
                        link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
                        username: '@YourYoutubeUsername',
                        description: video.snippet.description,
                        img: video.snippet.thumbnails.high.url
                    }
                ]);
            }
        });
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
                {slidesData.map((slide, index) => {
                    if (slide.content === 'YouTube') {
                        return <YoutubeSlide 
                            content={slide.content}
                            link={slide.link}
                            username={slide.username}
                            description={slide.description}
                            videoId={slide.videoId} // use videoId here
                            key={slide.id}
                            className={current === index ? 'active' : ''}/>;
                    } else {
                        return <Slide 
                            content={slide.content}
                            link={slide.link}
                            username={slide.username}
                            description={slide.description}
                            img={slide.img}
                            key={slide.id}
                            className={current === index ? 'active' : ''}/>;
                    }
                })}
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
