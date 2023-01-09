import React from "react";

const Memoirs = () => {

    return (
        <div>
            <div id="title">Memoirs</div>
            <br></br>
            <br></br>

            <div id="memoirs-trips">
                {/* Montego Bay, Jamaica */}
                <div id="memoirs-MontegoBay">
                    <p>Montego Bay</p>
                    <img src="/images/montegobay-1.jpg" id="montegobay-1" alt="montegobay-1"></img>
                    
                </div>

                {/* Quintana Roo, Mexico */}
                <div id="memoirs-QuintanaRoo">
                    <p>Quintana Roo</p>
                    <img src="/images/QuintanaRoo-1.jpeg" id="QuintanaRoo-1" alt="QuintanaRoo-1"></img>
                </div>

                {/* Chicago, IL */}
                <div id="memoirs-Chicago">
                <p>Chicago</p>
                <img src="/images/chicago-1.jpg" id="chicago-1" alt="chicago-1"></img>
            </div>
            </div>
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
                    <p class="footer-websites">GITHUB INSTAGRAM LINKEDIN </p>
                    <p class="footer-websites-bottom"> CODEWARS EMAIL</p>
                </div>
            </footer>
        </div>
    )
};

export default Memoirs;