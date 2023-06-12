import React from 'react';

const Credentials = () => {
    return (
        <div id="credentialsPage" className="page">
            {/* Title */}
            <div id="titleSection-credentials">
                <h1>Credentials</h1>
            </div>
    
            {/* Resume Section */}
            <div id="resumeSection" className="section-credentials" style={{textAlign: "center"}}>
                <h1>Resume</h1>
                <div className="buttonContainer">
                    <a href="https://www.dropbox.com/s/wmp2n32alyvm7jc/DJR-Resume-2023-4.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="resumeButton">View Resume</a>
                    <a href="https://www.dropbox.com/s/wmp2n32alyvm7jc/DJR-Resume-2023-4.pdf?dl=1" download className="resumeButton">Download Resume</a>
                </div>
            </div>
    
            {/* Curriculum Vitae Section */}
            <div id="cvSection" className="section-credentials" style={{textAlign: "center"}}>
                <h1>Curriculum Vitae</h1>
                <div className="buttonContainer">
                    <a href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="cvButton">View Curriculum Vitae</a>
                    <a href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=1" download className="cvButton">Download Curriculum Vitae</a>
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
                <p style={{opacity: "0.77"}}>This section unveils an array of awards, honors, media features, and notable acknowledgments that exemplify my commitment to excellence, growth, and societal contributions.</p>
                </div>
            </div>
        </div>
    );
};
    

export default Credentials;
