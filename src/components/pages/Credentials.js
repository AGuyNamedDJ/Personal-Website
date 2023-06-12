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
                    <a href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="cvButton">View CV</a>
                    <a href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=1" download className="cvButton">Download CV</a>
                </div>
            </div>
    
            {/* Notoriety Section */}
            <div id="notorietySection" className="section-credentials" style={{textAlign: "center"}}>
                <h1>Notoriety</h1>
                // Content here...
            </div>
        </div>
    );
};
    

export default Credentials;
