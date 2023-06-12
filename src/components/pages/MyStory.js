import React, { useState, useEffect } from "react";
import FlipPage from 'react-flip-page';

const MyStory = () => {
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function handleResize() {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <div className="page">

            {/* Title */}
            <div id="titleSection-template">
                <h1>My Story</h1>
            </div>

            <div className="my-story">
                <div className="book">
                    <FlipPage
                        responsive={false}
                        showHint
                        animationDuration={400}
                        width={dimensions.width * 0.75}
                        height={dimensions.height * 0.8}
                        orientation="horizontal"
                        uncutPages
                        maxAngle={90}
                        direction="rtl"
                        pageBackground="#fff"
                    >
                        <article>
                            <h2>The Beginnings</h2>
                            <p>Your text here...</p>
                        </article>
                        <article>
                            <h2>Something's Off</h2>
                            <p>Your text here...</p>
                        </article>
                        <article>
                            <h2>The Sabbatical</h2>
                            <p>Your text here...</p>
                        </article>
                        <article>
                            <h2>The Future</h2>
                            <p>Your text here...</p>
                        </article>
                    </FlipPage>
                </div>
            </div>
        </div>
    )
};

export default MyStory;
