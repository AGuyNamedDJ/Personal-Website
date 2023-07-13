import React, { useState } from "react";
import YouTube from 'react-youtube';

const Jesus = () => {
    // Your Verse of the month and explanation
    const verseOfTheMonth = "Matthew 28:19-20|<br> 19. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, 20. teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.";
    const verseExplanation = "The Great Commission emphasizes the responsibility of believers to spread the teachings of Jesus. Jesus assures his followers of his continual presence and support.";

    // Your YouTube video IDs
    const initialYoutubeVideos = ["I-yW-nrSSJg", "wVjgMKFS114", "K7r09B95zC0"];

    // State for YouTube video slides
    const [youtubeVideos, setYoutubeVideos] = useState(initialYoutubeVideos);

    const nextVideo = () => {
        setYoutubeVideos(prevVideos => {
            const first = prevVideos[0];
            const rest = prevVideos.slice(1);
            return [...rest, first];
        });
    }
    
    const prevVideo = () => {
        setYoutubeVideos(prevVideos => {
            const last = prevVideos[prevVideos.length - 1];
            const rest = prevVideos.slice(0, -1);
            return [last, ...rest];
        });
    }


    // Your resources
    const resources = [
        {
            name: "Revelation Church: LA", 
            pastor: "Prophet Lovy Elias", 
            websiteLink: "https://www.revelationchurchla.org", 
            youtubeLink: "https://www.youtube.com/@ProphetLovy"
        },
        {
            name: "The Potter's House", 
            pastor: "Bishop T.D. Jakes", 
            websiteLink: "https://www.thepottershouse.org", 
            youtubeLink: "https://www.youtube.com/@TDJakesOfficial"
        },
        {
            name: "Elevation Church", 
            pastor: "Pastor Steven Furtick", 
            websiteLink: "https://elevationchurch.org", 
            youtubeLink: "https://www.youtube.com/@elevationchurch"
        },
        {
            name: "Elevation Worship", 
            pastor: "Pastor Steven Furtick", 
            websiteLink: "https://elevationchurch.org", 
            youtubeLink: "https://www.youtube.com/@elevationworship"
        },
        {
            name: "Sarah Jakes Roberts", 
            pastor: null, 
            websiteLink: "https://sarahjakesroberts.com", 
            youtubeLink: "https://www.youtube.com/@SarahJakesRoberts"
        },
        {
            name: "ONE LA", 
            pastor: "Pastors Touré & Sarah Roberts", 
            websiteLink: "https://one.online", 
            youtubeLink: "https://www.youtube.com/@ToureRoberts"
        },
        {
            name: "Social Dallas", 
            pastor: "Pastors Robert & Taylor Madu", 
            websiteLink: "https://socialdallas.online", 
            youtubeLink: "https://www.youtube.com/@SocialDallas"
        },
        {
            name: "Bible Project", 
            pastor: null, 
            websiteLink: "https://bibleproject.com", 
            youtubeLink: "https://www.youtube.com/@bibleproject"
        },
    ];

    // State for resource slides
    const [currentSlide, setCurrentSlide] = useState([0, 1]); // This holds two indices now

    const nextSlide = () => {
        setCurrentSlide([
            (currentSlide[1] + 1) % resources.length,
            (currentSlide[1] + 2) % resources.length
        ]);
    }

    const prevSlide = () => {
        setCurrentSlide([
            (currentSlide[0] - 1 + resources.length) % resources.length,
            (currentSlide[0]) % resources.length
        ]);
    }


    return (
        <div id="JesusPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Jesus</h1>
            </div>

            {/* Verse of the Month */}
            <div id="verseSection">
                <h2>Verse of the Month</h2>
                <p dangerouslySetInnerHTML={{ __html: verseOfTheMonth }}></p>
                <br />
                <p>{verseExplanation}</p>
            </div>

            {/* YouTube Videos */}
            <div class="containeryr">
                <h2 id="youtube-vr">Video Resources</h2>
            </div>

            <div id="youtubeSection">
                <div id="youtubeSlider">
                    {youtubeVideos.map((videoID, idx) => (
                        <div className={idx === Math.floor(youtubeVideos.length / 2) ? "videoSlide main" : "videoSlide"}>
                            <iframe src={`https://www.youtube.com/embed/${videoID}`} frameborder="0" allowfullscreen></iframe>
                        </div>
                    ))}
                </div>
                <button id="slideLeft" onClick={prevVideo}><img src="/images/AboutArrow.png" alt="left arrow"/></button>
                <button id="slideRight" onClick={nextVideo}><img src="/images/AboutArrow.png" alt="right arrow"/></button>
            </div>

            {/* Guided By Grace Link */}
            <div id="playlistLink">
                <a href="https://studio.youtube.com/playlist/PLKczMAL9dQo-s2GiQvdE-sP7f0KiTalxo/videos" target="_blank" rel="noopener noreferrer">- View Playlist -</a>
            </div>

            {/* Resources */}
            <div id="resourcesSection"> {/* Section */}
                <h2>Resources</h2>
                <div id="resourcesSlider"> {/* Slider */}
                    {currentSlide.map((slideIndex) => (
                        <div className="resourceSlide"> 
                            <div className="resourceCard"> {/* Card */}
                                <h3>{resources[slideIndex].name}</h3>
                                <p>{resources[slideIndex].pastor}</p>
                                <a href={resources[slideIndex].websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
                                <a href={resources[slideIndex].youtubeLink} target="_blank" rel="noopener noreferrer">YouTube</a>
                            </div>
                        </div>
                    ))}
                </div>
                <button id="slideLeft" onClick={prevSlide}><img src="/images/AboutArrow.png" alt="left arrow"/></button>
                <button id="slideRight" onClick={nextSlide}><img src="/images/AboutArrow.png" alt="right arrow"/></button>
            </div>
        </div>
    );
};

export default Jesus;