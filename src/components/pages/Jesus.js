import React, { useState } from "react";
import YouTube from 'react-youtube';

const Jesus = () => {
    // Your Verse of the month and explanation
    const verseOfTheMonth = "Matthew 13:10-17|<br> [10] His disciples came and asked him, 'Why do you use parables when you talk to the people?' [11] He replied, 'You are permitted to understand the secrets of the Kingdom of Heaven, but others are not.  [12] To those who listen to my teaching, more understanding will be given, and they will have an abundance of knowledge. But for those who are not listening, even what little understanding they have will be taken away from them.  [13] That is why I use these parables, For they look, but they don't really see.  They hear, but they don't really listen or understand";
    const verseExplanation = "Human ears hear many sounds, but there is a deeper kind of listening that results in spiritual understanding.  When speaking in parables, Jesus was not hiding truth from sincere seekers, because those who were receptive to spiritual truth understood the illustrations.  To others they were only stories without meaning.";

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

    // Resources
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
    const [currentSlide, setCurrentSlide] = useState([0, 1]);

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
    
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

    const nextSlide = () => {
        setCurrentSlide([
            (currentSlide[1] + 1) % resources.length,
            (currentSlide[1] + 2) % resources.length
        ]);
    
        setResources(shuffle(resources)); 
    }
    
    const prevSlide = () => {
        setCurrentSlide([
            (currentSlide[0] - 1 + resources.length) % resources.length,
            (currentSlide[0]) % resources.length
        ]);
    
        setResources(shuffle(resources));
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
            <div className="resources-section">
                <div className="resources-slider">
                    {resources.map((resource, index) => {
                        if (index === currentSlide[0] || index === currentSlide[1]) {
                            return (
                                <div className="resource-slide" key={index}> 
                                    <div className="resource-card">
                                        <h3>{resource.name}</h3>
                                        <p>{resource.pastor}</p>
                                        <a href={resource.websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
                                        <a href={resource.youtubeLink} target="_blank" rel="noopener noreferrer">YouTube</a>
                                    </div>
                                </div>
                            );
                        } else { return null; }
                    })}
                    <button className="slider-left" onClick={prevSlide}><img src="/images/AboutArrow.png" alt="left arrow"/></button>
                    <button className="slider-right" onClick={nextSlide}><img src="/images/AboutArrow.png" alt="right arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Jesus;

{/* 
<div id="resourcesSection">
<h2>Resources</h2>
<div id="resourcesSlider"> 
    {currentSlide.map((slideIndex) => (
        <div className="resourceSlide"> 
            <div className="resourceCard"> 
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
*/}