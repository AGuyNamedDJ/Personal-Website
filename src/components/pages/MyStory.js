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
                        <div className="bookTitle">Example Name</div>
                        <h2>The Beginnings</h2>
                        <div>
                            <br></br>
                            <p>I can't even blieevis happeniamus in interor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsuerdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consit amet. </p>
                            <br></br>
                            <p>I can't even blieevis happeniamit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsuerdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipisamet. </p>
                            <br></br>
                            <p>I can'etur adipiscimus in interdum ipsum, sit amet. Lorem imet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsuerdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, um dolor sit ame amet. </p>
                        </div>
                        <div className="bookFooter">Page 1</div>
                    </article>
                    <article>
                        <h2>Something's Off</h2>
                        <div>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="bookFooter">Page 2</div>
                    </article>
                    <article>
                        <h2>The Sabbatical</h2>
                        <div>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="bookFooter">Page 3</div>
                    </article>
                    <article>
                        <h2>The Future</h2>
                        <div>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="bookFooter">Page 4</div>
                    </article>
                    </FlipPage>
                </div>
            </div>
        </div>
    )
};

export default MyStory;
