import React from "react";

const Ventures = () => {
    return(
        <div className="ventures">
            <div id="ventures-1">
                <p className ="ventures-1-title">Ventures</p>
            </div>

            <div id="ventures-2" className="ventures-2-container">
                <div className="ventures-2-text">
                    <h2 class="ventures-2-title">This is my<br /><span>Purpose<span class="dot"></span></span></h2>
                    <p>I am deeply committed to serving as a powerful catalyst for transformative change within underrepresented communities. With interests spanning real estate, technology, life sciences, retail and service sectors., my passion is not defined by the pursuit of wealth rather the relentless drive to spur growth. My objective is to invigorate, catalyze, and uplift. I am here to unlock opportunities, to debunk impossibilities, and to inspire. Aspirations of wealth are secondary to the success of those I serve. This is a long-term mission - a journey for profound change.</p>
                </div>
                <div className="ventures-2-image">
                    <img src="/images/chicago-skyline.jpg" alt="Descriptive Image Text" />
                </div>
            </div>
        </div>
    )
};

export default Ventures;