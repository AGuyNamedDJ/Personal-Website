import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Coding1 from "../animations/Coding1.json";
import Gaming from "../animations/Gaming.json";
import iPhone from "../animations/iPhone.json";
import iPhone1 from "../animations/iPhone1.json";
import { InlineWidget } from 'react-calendly';
import Macbook2 from "../animations/Macbook2.json";
import Youtube from "../animations/Youtube.json";
import axios from 'axios';
import YouTube from 'react-youtube';

let initialSlidesData = [
    { 
        id: 1, 
        content: 'GitHub', 
        link: 'https://github.com/DJRobertson95', 
        username: '@AGuyNamedDJ', 
        description: 'My playground for code, where every line tells a story. An open canvas where innovation takes form, collaboration fuels progress, and ideas come to life.',
        img: Coding1 
    },
    {
        id: 2, 
        content: 'YouTube', 
        link: 'https://www.youtube.com/@AGNDJ', 
        username: 'A Guy Named DJ', 
        description: 'Exploring digital frontiers, one game at a time. A destination for thrilling adventures, strategic battles, and unique narratives. Every video, a new world waiting to be discovered.',
        img: Youtube
    },
    { 
        id: 3, 
        content: 'Instagram', 
        link: 'https://www.instagram.com/aguynameddj/', 
        username: '@AGuyNamedDJ', 
        description: 'My curated collection of life moments. Here, creativity bridges the gap between cultures and languages, showcasing the world through a different lens.',
        img: iPhone
    },
    { 
        id: 4, 
        content: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/dalronjrobertson/', 
        username: 'Dalron J. Robertson', 
        description: 'My professional journey articulated through achievements, experiences, and connections. A hub where insights meet aspirations, fostering growth and fostering collaborations.',
        img: Macbook2
    },
    {
        id: 5, 
        content: 'YouTube', 
        link: 'https://www.youtube.com/channel/UCDUahDaIaCmrWOTA90Qr34Q', 
        username: 'AGNDJ Gaming', 
        description: 'Exploring digital frontiers, one game at a time. A destination for thrilling adventures, strategic battles, and unique narratives. Every video, a new world waiting to be discovered.',
        img: Gaming
    },
    { 
        id: 6, 
        content: 'Twitter', 
        link: 'https://twitter.com/AGuyNamedDJ_', 
        username: '@AGuyNamedDJ_', 
        description: 'My personal news ticker, a source of real-time insights, and a platform for engaging with a global audience. Where I share thoughts, track trends, and connect with influencers and innovators.',
        img: iPhone1
    },
];

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '2rem',
    },
    slide: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        transition: 'opacity 1s ease-in-out',
    },
    activeSlide: {
        opacity: 1,
        transition: 'opacity 1s ease-in-out',
    },
    slideContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '5vw',
    },
    slideDescription: {
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
};


// Slide component
const Slide = ({content, link, username, description, img, active}) => (
    <div className={`slide ${active ? 'active' : ''}`}> 
        <div className="slide-content" style={styles.slideContent}>
            <h2><span className="underline">{content}</span></h2>
            <a href={link} target="_blank" rel="noopener noreferrer">{username}</a>
            <p style={styles.slideDescription}>{description}</p>
        </div>
        <div className="slide-image">
            {img && <Lottie animationData={img} style={{ height: '40vh', width: '40vw' }} loop autoplay />}
        </div>
    </div>
);

// // YoutubeSlide component
// const YoutubeSlide = ({content, link, username, description, videoId, active}) => (
//     <div className={`slide ${active ? 'active' : ''}`} style={styles.slide}> 
//         <div className="slide-content" style={{ paddingRight: '5vw' }}>
//             <h2><span className="underline">{content}</span></h2>
//             <a href={link} target="_blank" rel="noopener noreferrer">{username}</a>
//             <p>{description}</p>
//         </div>
//         <div className="slide-image">
//             <YouTube videoId={videoId} opts={{
//                 height: '40vh',
//                 width: '40vw',
//                 playerVars: {
//                     autoplay: 1,
//                     mute: 1, // mute the video
//                 },
//             }} style={{opacity: 1}} /> {/* set opacity to 1 */}
//         </div>
//     </div>
// );


// async function getLatestYoutubeVideo() {
//     try {
//         const response = await axios.get(
//             `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
//         );
//         if (response.data.items.length > 0) {
//             console.log(response.data.items[0]);
//             return response.data.items[0];
//         }
//     } catch (error) {
//         console.error(error);
//     }
//     return null;
// }


const Connect = () => {
    const [current, setCurrent] = useState(0);
    const [slidesData, setSlidesData] = useState(initialSlidesData);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % slidesData.length);
        }, 5000);
    
    
        // getLatestYoutubeVideo().then(video => {
        //     if (video) {
        //         setSlidesData(prevSlidesData => [
        //             ...prevSlidesData,
        //             {
        //                 id: prevSlidesData.length + 1,
        //                 content: 'YouTube',  
        //                 link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        //                 username: video.snippet.channelTitle,
        //                 description: video.snippet.description,
        //                 img: null, 
        //                 videoId: video.id.videoId  
        //             }
        //         ]);
        //     }
        // });
    
        return () => clearInterval(interval);
    }, [current, slidesData.length]); 

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
   
    return (
        <div className="page">

            {/* Title */}
            <div id="titleSection">
                <h1>Connect</h1>
            </div>

            <div id="social-title">
                <div className="social-media-title">
                    <h2>Social Media</h2>
                </div>
            </div>

            {/* Social Media */}
            <div id="socialSection" className="section" style={styles.container}>
                {slidesData.map((slide, index) => (
                    <Slide 
                    content={slide.content}
                    link={slide.link}
                    username={slide.username}
                    description={slide.description}
                    img={slide.img}
                    active={current === index} // Set the 'active' class conditionally
                    key={slide.id} />
                ))}
            </div>

            {/* Schedule Meeting */}
            <div id="meetingSection" className="section" style={{ height: '50vh' }}> {/* Adjust the height here */}
                <h2 className="underline-calendly" style={{ textAlign: 'center' }}>Schedule a Meeting</h2>
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/dalronjrobertson?background_color=000000&text_color=cec9c9&primary_color=c2b19c"
                    style={{ minWidth: '50vw', height: '50vh' }} // adjust these values as needed
                ></div>
            </div>

            {/* Email */}
            <div id="emailSection" className="email-section">
                <div id="emailContentSection" className="email-content-section">
                    <div className="email-content-container">
                        <h2 className="contact-me">Contact Me</h2>
                        <p className="form-instructions">Fill out the form below to send me a message.</p>
                        <form name="contact" method="POST" data-netlify="true" className="contact-form">
                            <input type="text" id="contactNameInput" name="name" placeholder="Enter your name" required className="input-field"/>
                            <input type="email" id="contactEmailInput" name="email" placeholder="Enter your email address" required className="input-field"/>
                            <textarea id="contactMessageInput" name="message" placeholder="Enter your message" required className="message-field"></textarea>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
