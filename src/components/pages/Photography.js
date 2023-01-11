import React from "react";

const Photography = () => {

    return (
        <div>
            <div class="title">Gallery</div>
            <div>
                <img src="/images/photo-1.jpg" id="photo-1"></img>
                <p class="gallery-poem">"Life is a work of art,
                    something you paint or write with your heart,
                    taking care to make every part
                    a symphony of colors or words 
                    that fly together like a flock of birds.</p>
                <img src="/images/photo-8.jpg" id="photo-8"></img>
            </div>
            <div>
                <p class="gallery-poem-8">You use the tools that you have,
                    a paintbrush or a pen in your hand. 
                    Appreciate the hand you use, 
                    because you don't get to choose, 
                    and be careful what you create 
                    using your character trait.</p>
                    <img src="/images/photo-6.jpg" id="photo-6"></img>
                    <br></br>
                    <br></br>
                <p class="gallery-poem-6">Take a lesson from the other designs, 
                    but still use your creative guidelines.
                    Don't think your abilities come from your greatness; 
                    they are a gift from God, and they're not utterly painless;
                    they take endurance and care,
                    and you have to be able to bear
                    the wear and tear.</p>
                <img src="/images/photo-5.jpg" id="photo-5"></img>
                <p class="gallery-poem-5">The piece can be one of a kind,
                    no matter if you have a great mind.
                    Write and paint of actions undefined,
                    by the knowledge of others
                    who are undermined.</p>
                {/* <img src="/images/photo-2.jpg" id="photo-2"></img> */}
            </div>
            <div>
            <img src="/images/photo-7.jpeg" id="photo-7"></img>
                <p class="gallery-poem-7">Use the love God has given
                    and the guidance of his hand 
                    to recreate his promised land.</p>
                <img src="/images/chicago-3.jpeg" id="photo-9"></img>
                <p class="gallery-poem-3">The sands of time
                    will bring about inspiration 
                    and the gifts of God you use without hesitation.
                    Life is a work of art, 
                    a reflection of you,
                    and a journey that you must pursue."</p>
            </div>
            <br></br>

            {/* End of Page */}
            <footer id="footer">
                <p id="footer-top-text">Stay connected with me here.</p>
                <p id="footer-top-text">dalronj.robertson@gmail.com</p>
                
            </footer>
            <br></br>
            
            <footer id="footer-one-container">
                <div>
                    &copy; 2023 Dalron J. Robertson.  All Rights Reserved.
                </div>
                <div id="footer-websites-container">
                    <p class="footer-websites">
                        <a href="https://github.com/DJRobertson95" target="_blank" id="link"> GITHUB |</a>
                        <a href="https://www.instagram.com/aguynameddj/" target="_blank" id="link"> INSTAGRAM |</a>
                        <a href="https://www.linkedin.com/in/dalronjrobertson/" target="_blank" id="link"> LINKEDIN |</a>
                        <a href="https://www.codewars.com/users/DJRobertson95" target="_blank" id="link"> CODEWARS |</a>
                        <a href="mailto:dalronj.robertson@gmail.com?subject=Email Subject&body=Email Body" id="link"> EMAIL</a>
                    </p>
                </div>
            </footer>
        </div>
    )
};

export default Photography;