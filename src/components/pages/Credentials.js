import React from 'react';

const Credentials = () => {
    return (
        <div id="credentialsPage" className="page">
            {/* Title */}
            <div id="titleSection-template">
                <h1>Credentials</h1>
            </div>
    
            <div id="boxesContainer">
                {/* Resume Section */}
                <div id="resumeSection" className="section-credentials" style={{textAlign: "center"}}>
                    <h1>Resume</h1>
                    <div className="buttonContainer">
                        <a href="https://www.dropbox.com/scl/fi/gfq577iyorqptm9286val/DJR-Resume.docx-8.pdf?rlkey=8rh26az6v6mfuioj84zoilods&st=4lrwiine&dl=0" target="_blank" rel="noopener noreferrer" className="resumeButton">View Resume</a>
                        <a href="https://www.dropbox.com/scl/fi/gfq577iyorqptm9286val/DJR-Resume.docx-8.pdf?rlkey=8rh26az6v6mfuioj84zoilods&st=4lrwiine&dl=1" download className="resumeButton">Download Resume</a>
                    </div>
                </div>
        
                {/* Curriculum Vitae Section */}
                <div id="cvSection" className="section-credentials" style={{textAlign: "center"}}>
                    <h1>Curriculum Vitae</h1>
                    <div className="buttonContainer">
                        <a href="https://www.dropbox.com/scl/fi/x4vaqjdx0jaw9xt90x7nf/DJR-CV.docx-5.pdf?rlkey=cir0ujv5vu8gve1i2kv6oa8e2&st=pdcfkzsg&dl=0" target="_blank" rel="noopener noreferrer" className="cvButton">View Curriculum Vitae</a>
                        <a href="https://www.dropbox.com/scl/fi/x4vaqjdx0jaw9xt90x7nf/DJR-CV.docx-5.pdf?rlkey=cir0ujv5vu8gve1i2kv6oa8e2&st=pdcfkzsg&dl=1" download className="cvButton">Download Curriculum Vitae</a>
                    </div>
                </div>

                {/* Certifications Section */}
                <div id="certificatesSection" className="section-credentials" style={{textAlign: "center"}}>
                    <h1>Certifications</h1>
                    <div className="buttonContainer">
                        <a href="https://www.dropbox.com/sh/tqxl9vgpobnnvso/AAD_nK8q8oY3e0a0IH-dZIHca?dl=0" target="_blank" rel="noopener noreferrer" className="certificationButton">View Certifications</a>
                    </div>
                </div>
        
                {/* Notoriety Section */}
                <div id="notorietySection" className="section-credentials" style={{textAlign: "center"}}>
                    <h1>Notoriety</h1>
                    <div className="buttonContainer">
                    <p style={{opacity: "0.77"}}>This section unveils an array of awards, honors, and notable acknowledgments that exemplify my commitment to excellence, growth, and contributions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default Credentials;