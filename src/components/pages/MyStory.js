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
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>The Beginnings</h2>
                        <div>
                            <br></br>
                            <p>My life's journey began to take shape at the tender age of four, seated before the black and white keys of a piano. Classical notes, one after the other, opened up a world of creativity and discipline, a realm where my small hands were the architects of symphonies that filled the air. As I grew, my world extended beyond the confines of the piano and took me to prestigious performing arts schools, leading me across the country to compete in tournaments and attend specialized programs. The rhythm of my journey resounded with the tunes of almost every musical instrument. I had found a unique harmony within the music, a harmony that was soon to take an unexpected twist.</p>
                            <p>As I entered college, my path took an unexpected detour. Initially choosing to major in music, I soon found myself enamored by the structure and intricacies of the biological world. The labyrinth of life, its interconnections and fine-tuned workings, were not unlike the complex compositions I had been orchestrating. This newfound love for biology felt as natural as a shift in a melody, bringing with it a profound sense of curiosity and purpose.</p>
                            <p>My journey then led me to the confines of a pharmacy, where my fondness for biology evolved into a deep-seated passion for science. The intricacies of human health, the delicate balance of chemicals, and the art of healing; all of these elements came together in a harmonious rhythm that felt as familiar as my music.</p>
                            <p>Graduation led to yet another chapter in my journey, where I chose to pursue my Masters in Medical Sciences. It was here that I encountered my first significant academic challenge. The complexity of the material and the vastness of knowledge to be absorbed seemed like a daunting mountain to climb. However, this demanding phase of my life was sculpting me for what was to come, silently preparing me for the trials of pharmacy school.</p>
                            <p>My acceptance into pharmacy school marked a pivotal moment in my journey. Leaving behind my Masters program, I relocated to Chicago, ready to face this new chapter. As I dove into the world of pharmacy, I quickly realized that the challenges of my Masters program had prepared me well. I was in sync with the pace of the program, comfortable with the demands it entailed. It felt like I was finally where I was meant to be, as if every step of my journey had led me to this point. Pharmacy school didn't feel like an uphill battle; instead, it felt like a dance I had been rehearsing for all my life.</p>
                        </div>
                        <div className="bookFooter">Page 1</div>
                    </article>
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>Something's Off</h2>
                        <div>
                            <br></br>
                            <p>I found myself navigating the familiar terrains of retail pharmacy. A field I had become proficient in over half a decade, akin to a seasoned maestro directing an orchestra, fluently conducting every role and every scenario. Yet, an invisible question mark loomed over the horizon, the symphony of routine began to sound off-key. A minor disagreement over my contract transformed into a major pivot in my professional journey, leading me to an entirely different stage - a mail-order pharmacy startup.</p>
                            <p>The realm of this startup offered me a panoramic view of the inner workings of pharmacy. No longer just playing a single instrument, I was immersed in a world that required me to understand the entire orchestra - from administrative tasks to the technical intricacies of robotic technology. I began to operate these robots, turning gears and calibrating programs until they moved as an extension of my will. The plot then thickened as I found myself evolving into a hybrid role of a data analyst, my narrative converging with technology in a way I hadn’t anticipated.</p>
                            <p>Yet, the tale took an unexpected turn. The advent of COVID-19, a plot twist on a global scale, seeped into every corner of our lives. Its tendrils reached into my pharmacy school, morphing the traditional educational system into a remote learning model. This era of upheaval cast a deep shadow on my once assured path. Suddenly, the pursuit of a pharmaceutical career began to feel like an ill-fitting costume. There was a void, a longing for something more. I was competent, yes, but was I content? Was this the script I wanted for my life?</p>
                            <br></br>
                            <p>"Ten years from now, make sure you can say that you CHOSE your life, you didn't SETTLE for it."</p>
                            <br></br>
                            <p>The answer lay in the creative pulse that drummed through my veins. I yearned to not just operate, but to innovate. I longed to create, to immerse myself in the vibrant spectrum of possibility, to unleash the artist within. Therefore, I decided to embrace the unknown. I stepped away from pharmacy school, and set sail into the uncharted waters of my future, armed with nothing but a heart full of dreams and a spirit yearning to create.</p>
                        </div>
                        <div className="bookFooter">Page 2</div>
                    </article>
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>The Sabbatical</h2>
                        <div>
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className="bookFooter">Page 3</div>
                    </article>
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>The Future</h2>
                        <div>
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
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
