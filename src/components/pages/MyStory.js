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
                    {/* Page 1 */}
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>Emergency of a Visionary</h2>
                        <div>
                            <br></br>
                            <p>My life's journey began to take shape at the age of four, seated before the black and white keys of a piano. Classical notes, one after the other, opened up a world of creativity, a realm where my small hands were the architects of symphonies that filled the air. As I grew, my world extended beyond the confines of the piano and took me to prestigious performing arts schools, leading me across the country to compete in tournaments and attend programs. The rhythm of my journey resounded with the tunes of almost every musical instrument. I had found a unique harmony within the music, a harmony that was soon to take an unexpected twist.</p>
                            <p>As I entered college, my path took an unexpected detour. Initially choosing to major in music, I soon found myself enamored by the intricacies of the biological world. The labyrinth of life, its interconnections and fine-tuned workings, were not unlike the complex compositions I had been orchestrating. This newfound love for biology felt as natural as a shift in a melody, bringing with it a profound sense of curiosity.</p>
                            <p>My journey led me to the confines of a pharmacy, where my fondness for biology evolved into a deep-seated passion for science. The intricacies of human health, the delicate balance of chemicals, and the art of healing; all of these elements came together in a harmonious rhythm that felt as familiar as my music.</p>
                            <p>Graduation led to yet another chapter in my journey, where I chose to pursue my Masters in Medical Sciences. It was here that I encountered my first significant academic challenge. The complexity of the material and the vastness of knowledge to be absorbed seemed like a daunting mountain to climb. However, this phase of my life was sculpting me for what was to come, silently preparing me for the trials of pharmacy school.</p>
                            <p>My acceptance into pharmacy school marked a pivotal moment. Leaving behind my Masters program, I relocated to Chicago, ready to face this new chapter. As I dove into the world of pharmacy, I quickly realized that the challenges of my Masters program had prepared me well. I was in sync with the pace of the program, comfortable with the demands it entailed. It felt like I was finally where I was meant to be, as if every step of my journey had led me to this point. Pharmacy school didn't feel like an uphill battle; instead, it felt like a dance I had been rehearsing for all my life.</p>
                        </div>
                        <div className="bookFooter">Page 1</div>
                    </article>

                    {/* Page 2 */}
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>Whispers of Unease</h2>
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

                    {/* Page 3 */}
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>A Pause in Time - The Sabbatical</h2>
                        <div>
                            <p>Stepping into this new season felt like stepping into an unknown abyss. The period began with a peculiar romance. She was a pharmacist, but not of the conventional sort. Her lifestyle.  Her mannerisms.  Older, yes, but more importantly, remarkably mature. She operated on an entirely different level, akin to my experience at the startup, but with a gravity of profundity that eclipsed my realm of familiarity. She was an enigma, framed by the worldly title of a pharmacist but fueled by an uncanny, almost divine revelation.</p>
                            <p>As our connection deepened, she introduced me to her spiritual world. Our first visit to her church gave my introduction to a prophetic figure, who, unbeknownst to me, was the church's apostolic head. His first words to me were an ominous forecast of a looming choice that I'd soon face. The coincidence of it all left me perplexed, for the concept of prophets was alien to me. I knew of God from childlike innocence and Easter speaches, but the workings of an active, involved deity was foreign to my life.</p>
                            <p>The shifting tides of my life began to batter the ship of our relationship. It sank under the pressure of my immaturity and lack of spiritual pursuit. This breakup shattered me in a manner unprecedented. As my mental state started to wane, I made a pact with God. I felt unfulfilled and lost. With my back against the wall, I resolved to surrender to His guidance, seeking a path out of my own foggy labyrinth.</p>
                            <p>And so, it began. My life, as I knew it, started to crumble. I took a break from school. Friends became scarce. I left my job. Solitude, the most fearsome beast, had me cornered. Health issues crept in, surgeries took their toll, and depression swallowed me whole. No one came to my aid, prompting me to lean even harder into God.  He was all I had.  He was the ony one there.</p>
                            <p>In this pursuit, layers of my past started to peel off, exposing childhood traumas and buried pain. I grappled with my spiritual beliefs and values. Amid this chaos, a divine whisper nudged me to return to derivatives. Though familiar, this time I felt an urge to go all in. And so I did.</p>
                            <p>Failure was my companion at first, teaching me more about the markets than any book ever could, any course. Little did I know, that was the acquirement of wisdom. Slowly, the failures turned into small victories and then significant wins. My first $1000 day was a revelation, shattering my previous notions about life's possibilities.</p>
                        </div>
                        <div className="bookFooter">Page 3</div>
                    </article>

                    {/* Page 4 */}
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        {/* <h2>The Future</h2> */}
                        <div>
                            <p>Then, God steered me towards another path – Software Engineering. The realm of the most brilliant minds on the planet seemed daunting at first. I felt like an outsider who didn't belong. But remembering my pact with God, I took the leap, enrolling in a software development bootcamp. To my surprise, I thrived. The thrill of development filled me with awe and reignited my innate creativity.  I soon understood that every course of life I came from prepared me for this moment.  My trainings in the arts taught me how to unlock my creativity.  My time in the sciences taught me how to look for solutions outside of the ordinary.</p>
                            <p>All the while, my relationship with God remained my compass. The fruits of surrendering to His will were manifesting in my life. I was gaining wisdom, experiencing revelations, and achieving tangible results. And then, a watershed moment arrived. I decided to get baptized again, but this time, as an adult, with a full understanding of the commitment I was making.</p>
                            <p>Following the completion of my program, I found myself on the precipice of a new journey. A search for my next professional haven was underway, but the economic landscape was far from inviting. The tech industry was experiencing an economic shake-up. A looming recession cast a long shadow, with massive layoffs becoming a harsh reality. In this new environment, merely having knowledge wasn't enough, for it was as ubiquitous as air. The market demanded perfection, specialists who were master craftsmen in their respective domains.</p>
                            <p>In response, I committed myself to a radical transformation. I didn't aim to augment my skill set, but to reconstruct the image I projected to the world. The task at hand wasn't about job hunting; it was about identity reformation. As I endeavored to reshape how the world perceived me, I realized the mirror I needed to peer into was the one held by God. His vision of me was my compass. The man He envisaged was the man I needed to become. He had guided me thus far; it was time to trust Him completely once again.</p>
                            <p>During this transformative period, one company stood out from the rest. I made a concerted effort to foster relationships with senior members and leaders within the organization. At the same time, I expanded my networking sphere to include a range of influential figures in the tech industry. My professional web was growing, and with it, a beacon of hope started to emerge. In the process, I was becoming the man I was destined to be, the man God had seen in me all along.</p>
                        </div>
                        <div className="bookFooter">Page 4</div>
                    </article>

                    {/* Page 5 */}
                    <article>
                        <div className="bookTitle">Chasing Purpose</div>
                        <h2>Embracing the Unpredictable</h2>
                        <div>
                            <p>"From Here to Eternity" - This is where the story of our past folds into the promise of tomorrow, where the narrative thread weaves onward into the future. A future not merely dreamt of, but one meticulously crafted in a divine design."</p>
                            <p>I look ahead with a zeal in my spirit, burning like a beacon guiding my every step. I see a future where I stand resolute as the man God sees me to be, a leader, a trailblazer, a creator, a visionary. A man who bends the laws of normative understanding, transcending boundaries, making the seemingly impossible a reality. As a software engineer, I continue to evolve, to unravel the codes that construct our digital world. In tandem, my journey in the derivatives market goes on, as I learn to dance with the rhythmic fluctuations of economic currents further gaining wisdom.</p>
                            <p>Yet, a new call echoes in my spirit, like the low rumble of thunder on a distant horizon. God speaks to me about new territories - entrepreneurship and real estate, new lands to conquer, new dreams to manifest. I have an ardent vision of creating a safe haven, a platform where aspiring entrepreneurs can breathe life into their dreams. A space marked by quality, stability, and innovation.</p>
                            <p>Chicago's skyline - my next canvas. My plan: to acquire multi-family properties within this vibrant city. A low hands-on venture to begin, to allow my work in software engineering to continue unfettered. But make no mistake, my transition away from this field will only be dictated by the voice of God.  For now, my instructions call for an even deeper commitment to this field of work.</p>
                            <p>However, amid all these ventures and aspirations, the most enthralling prospect awaits - the arrival of my partner, my soulmate, my wife. A chapter of life that holds more promise than any business venture could. To share this magnificent journey, to weave our tales together in a tapestry uniquely ours. To create our family, a living testament to our shared dreams and faith.</p>
                            <p>In this narrative of the future, every line is laced with a powerful truth: If you dare to dream it, you have the capacity to bring it into fruition. The grandeur of our dreams is simply a mirror to the greatness that lies within us.</p>
                            <p>And so, as I stand on the brink of tomorrow, I am filled with anticipation and excitement, ready to embrace the blessings and challenges that await. Yet, I know that this is merely the beginning. The journey continues, for the path is eternal, and the future unwritten.</p>
                        </div>
                        <div className="bookFooter">Page 5</div>
                    </article>
                    </FlipPage>
                </div>
            </div>
        </div>
    )
};

export default MyStory;
