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
                        <a href="https://www.dropbox.com/scl/fi/mjdfub6i528q3atyfja92/DJR-Resume-6.pdf?rlkey=s4n3ujcoraena2ltys1mx2t8g&dl=0" target="_blank" rel="noopener noreferrer" className="resumeButton">View Resume</a>
                        <a href="https://www.dropbox.com/scl/fi/mjdfub6i528q3atyfja92/DJR-Resume-6.pdf?rlkey=s4n3ujcoraena2ltys1mx2t8g&dl=1" download className="resumeButton">Download Resume</a>
                    </div>
                </div>
        
                {/* Curriculum Vitae Section */}
                <div id="cvSection" className="section-credentials" style={{textAlign: "center"}}>
                    <h1>Curriculum Vitae</h1>
                    <div className="buttonContainer">
                        <a href="https://www.dropbox.com/scl/fi/dy73dmutzxkow0buri8mp/DJR-CV.docx-6.pdf?rlkey=hp6upmpnzialeyl7zq29ulpqg&dl=0" target="_blank" rel="noopener noreferrer" className="cvButton">View Curriculum Vitae</a>
                        <a href="https://www.dropbox.com/scl/fi/dy73dmutzxkow0buri8mp/DJR-CV.docx-6.pdf?rlkey=hp6upmpnzialeyl7zq29ulpqg&dl=1" download className="cvButton">Download Curriculum Vitae</a>
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