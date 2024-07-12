import React, { useState } from "react";
import YouTube from 'react-youtube';

const Jesus = () => {
    // Your Verse of the month and explanation
    const verseOfTheMonth = "Ezekiel 37:1-10 |<br> [1] The hand of the Lord was upon me, and He brought me out by the Spirit of the Lord and set me down in the middle of the valley; and it was full of bones. [2] He caused me to pass among them round about, and behold, there were very many on the surface of the valley; and lo, they were very dry. [3] He said to me, 'Son of man, can these bones live?' And I answered, 'O Lord God, You know.' [4] Again He said to me, 'Prophesy over these bones and say to them, 'O dry bones, hear the word of the Lord.' [5] Thus says the Lord God to these bones, 'Behold, I will cause breath to enter you that you may come to life. [6] I will put sinews on you, make flesh grow back on you, cover you with skin and put breath in you that you may come alive; and you will know that I am the Lord.' <br> <br> [7] So I prophesied as I was commanded; and as I prophesied, there was a noise, and behold, a rattling; and the bones came together, bone to its bone. [8] And I looked, and behold, sinews were on them, and flesh grew and skin covered them; but there was no breath in them. [9] Then He said to me, 'Prophesy to the breath, prophesy, son of man, and say to the breath, 'Thus says the Lord God, 'Come from the four winds, O breath, and breathe on these slain, that they come to life.' [10] So I prophesied as He commanded me, and the breath came into them, and they came to life and stood on their feet, an exceedingly great army.";
    const verseExplanation = "Explanation: In this passage, God is teaching Ezekiel to prophesy. He shows Ezekiel a valley full of dry bones, which can remind us of times when we see brokenness or feel like nothing is going right in our lives. Despite how hopeless it looked, Ezekiel spoke God's words to the bones as he was told. The bones came together, and life was restored to them. This story shows us that no matter how impossible things may seem, speaking and trusting in God's word can bring change and new life to any situation.";

    // Your YouTube video IDs
    const initialYoutubeVideos = ["gSXORzogoTM", "kk6-KQoFHqY", "d7zIhZlenXU"];

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
            name: "Newlife Southeast", 
            pastor: "Pastor John F. Hannah", 
            websiteLink: "https://www.newlifesoutheast.org", 
            youtubeLink: "https://www.youtube.com/c/PastorHannah"
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

            {/* Verse of the Season */}
            <div id="verseSection">
                <h2>Verse of the Season</h2>
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