import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-column">
                    <h4>For Browsers</h4>
                    <ul>
                        <li><Link to="/ventures">Business</Link></li> {/* Dream Incubation */}
                        <li><Link to="/projects#tradingSection">Derivative/Hedge Trading</Link></li> {/* need to create page */}
                        <li><Link to="/projects#writingSection">Literary Works</Link></li> {/* need to create page */}
                        <li><Link to="/ventures/realestate">Real Estate</Link></li>
                        <li><Link to="/#block2">Recent Projects</Link></li> {/* need to create page */}
                        <li><Link to="/projects#codingSection">Software Development</Link></li> {/* need to create page */}
                        <li><a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_jGUHtmMZ8LVgS5NuV-ruq" target="_blank" rel="noopener noreferrer">Trading Markets</a></li> {/* need to create page */}
                        <li><Link to="/ventures/business">Ventures</Link></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="footer-column">
                    <h4>For Employers</h4>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://www.dropbox.com/sh/tqxl9vgpobnnvso/AAD_nK8q8oY3e0a0IH-dZIHca?dl=0" target="_blank" rel="noopener noreferrer">Certifications</a></li> {/* need to create page */}
                        <li><Link to="/credentials">Credentials</Link></li>
                        <li><a href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=0" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></li> {/* need to create page */}
                        <li><Link to="/projects/websites">Development Projects</Link></li>
                        <li><a href="https://www.dropbox.com/s/wmp2n32alyvm7jc/DJR-Resume-2023-4.pdf?dl=0" target="_blank" rel="noopener noreferrer" >Resume</a></li> {/* need to create page */}
                        <li><Link to="/projects#codingSection">Software</Link></li> {/* need to create page */}
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-column">
                    <h4>For Creatives</h4>
                    <ul>
                        <li><a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_9q-Ocgh7_m-9QLrnJjA3j" target="_blank" rel="noopener noreferrer">Behind the Lens</a></li>
                        <li><Link to="/projects/books">Books</Link></li>
                        <li><Link to="/projects/journals">Journals</Link></li>
                        <li><a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo9ul0ZoPWf9yBL6sdF8KaB_" target="_blank" rel="noopener noreferrer">Music Spaces</a></li>
                        <li><Link to="/jsix">Recent Writing</Link></li>
                        <li><a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo-24k9y15pYjlWKvOIWgurs" target="_blank" rel="noopener noreferrer">The Dreamer's Desk</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/connect">Contact</Link></li>
                        <li><Link to="/faqs">FAQ</Link></li>
                        <li><a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo-s2GiQvdE-sP7f0KiTalxo" target="_blank" rel="noopener noreferrer">Guided By Grace</a></li>
                        <li><Link to="/jesus">Jesus</Link></li>
                        <li><a href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_V8e2esmRO7J6JcFCvOpkP" target="_blank" rel="noopener noreferrer">Reflections & Revelations</a></li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div className="footer-column">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://github.com/AGuyNamedDJ" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="https://www.instagram.com/aguynameddj/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/dalronjrobertson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.threads.net/@aguynameddj" target="_blank" rel="noopener noreferrer">Threads</a></li> 
                        <li><a href="https://twitter.com/AGuyNamedDJ_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.youtube.com/channel/UCDUahDaIaCmrWOTA90Qr34Q" target="_blank" rel="noopener noreferrer">Youtube: Gaming</a></li> 
                        <li><a href="https://www.youtube.com/@AGNDJ" target="_blank" rel="noopener noreferrer">Youtube: Personal</a></li>
                    </ul>
                </div>
            </div>

            <div id="footer-bottom">
                <Link to="/">Copyright © 2023 Dalron J. Robertson. All rights reserved.</Link>
                <Link to="/privacy&legal">Privacy & Legal</Link>
                <Link to="/termsofuse">Terms of Use</Link> 
                <Link to="/sitemap">Site Map</Link> 
            </div>
        </div>
    );
};

export default Footer;


// return (
//     <div id="footer">
//         <div id="footer-left">
//             <Link to="/connect#emailSection">
//                 <img src="/images/message-icon.png" alt="description of image" />
//             </Link>
//         </div>
//         <div id="footer-center">
//             <Link to="/">Dalron J. Robertson © 2023</Link>
//             <Link to="/privacy&legal">Privacy & Legal</Link>
//             <Link to="/projects/journals">Journals</Link>
//             {/* <Link to="/projects/books">Books</Link> */}
//             <Link to="/faqs">FAQ</Link>
//             <Link to="/connect">Contact</Link>
//         </div>
//         <div id="footer-right">
//             <button onClick={() => window.scrollTo(0, 0)}>
//                 <img src="/images/back-icon.png" alt="Back to Top" />
//             </button>
//         </div>
//     </div>
//   );
// };