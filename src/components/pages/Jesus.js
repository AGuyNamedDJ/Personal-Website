import React from "react";
import YouTube from 'react-youtube';

const Jesus = () => {
    // Your Verse of the month and explanation
    const verseOfTheMonth = "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.";
    const verseExplanation = "This verse expresses the deep love that God has for humanity and the sacrifice He made.";

    // Your YouTube video IDs
    const youtubeVideos = ["VideoID1", "VideoID2", "VideoID3"];

    // Your resources
    const resources = [
        {
            name: "Revelation Church LA", 
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
            pastor: "Pastor Sarah Jakes Roberts", 
            websiteLink: "https://sarahjakesroberts.com", 
            youtubeLink: "https://www.youtube.com/@SarahJakesRoberts"
        },
        {
            name: "A Potter's House Church: ONE", 
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
    ];

    return (
        <div id="JesusPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Jesus</h1>
            </div>

            {/* Verse of the Month */}
            <div id="verseSection">
                <h2>Verse of the Month</h2>
                <p>{verseOfTheMonth}</p>
                <p>{verseExplanation}</p>
            </div>

            {/* YouTube Videos */}
            <div id="youtubeSection">
                <h2>Teachings</h2>
                {youtubeVideos.map((videoId) => (
                    <YouTube videoId={videoId} />
                ))}
            </div>

            {/* Resources */}
            <div id="resourcesSection">
                <h2>Resources</h2>
                <div id="resourcesSlider">
                    {resources.map((resource, index) => (
                        <div className="resourceSlide" key={index}>
                            <div className="resourceDetails">
                                <h3>{resource.name}</h3>
                                <p>{resource.pastor}</p>
                                <a href={resource.websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
                                <a href={resource.youtubeLink} target="_blank" rel="noopener noreferrer">YouTube</a>
                            </div>
                        </div>
                    ))}
                </div>
                <button id="slideLeft"><img src="/images/left_arrow.png" alt="left arrow"/></button>
                <button id="slideRight"><img src="/images/right_arrow.png" alt="right arrow"/></button>
            </div>
        </div>
    );
};

export default Jesus;