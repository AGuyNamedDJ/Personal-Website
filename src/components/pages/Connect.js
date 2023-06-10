import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const socials = [
    { id: 1, icon: <faGithub />, link: 'https://github.com/DJRobertson95' },
    { id: 2, icon: <faInstagram />, link: 'https://www.instagram.com/aguynameddj/' },
    { id: 3, icon: <faLinkedinIn />, link: 'https://www.linkedin.com/in/dalronjrobertson/' },
    { id: 4, icon: <faTwitter />, link: 'https://twitter.com/AGuyNamedDJ_' },
    { id: 5, icon: <faYoutube />, link: 'https://www.youtube.com/channel/UCrToDvdFWAczvBr6DJK3U5w' },
    { id: 6, icon: <faYoutube />, link: 'https://www.youtube.com/@AGNDJGaming' },
];

const Connect = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % socials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Social Media</h1>
            <div className="carousel-container">
                <a href="https://github.com/DJRobertson95" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.instagram.com/aguynameddj/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/dalronjrobertson/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://twitter.com/AGuyNamedDJ_" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.youtube.com/channel/UCrToDvdFWAczvBr6DJK3U5w" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.youtube.com/@AGNDJGaming" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
            </div>
        </div>
    );
};


export default Connect;