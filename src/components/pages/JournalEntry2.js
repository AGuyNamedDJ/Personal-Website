import React from "react";

const JournalEntry1 = () => {
    return (
        <div id="journalEntry" className="page">
            {/* Page Title */}
            <div id="titleSection">
                <h1>A Busy Week</h1>
            </div>

            {/* Journal Entry Image */}
            <div className="journal-entry-image">
                <img src="/images/Journals/2-ABusyWeek.jpeg" />
            </div>
            
            {/* Journal Entry Content */}
            <div className="journal-entry-content">
                <p>This week was a big one for me as I had my first three interviews for Software Engineering positions! While I was a bit nervous going into them, I'm happy to say that with each interview, my confidence grew. It reminded me of the importance of pushing ourselves out of our comfort zones, and how every opportunity is a chance to learn and grow.</p>
                <p>I'm excited to see where this journey takes me and I'm grateful for the support of my friends and family who have been cheering me on. Here's to many more interviews to come!</p>
            </div>

            {/* Journal Entry Date */}
            <div className="journal-entry-date">
                <p>Published on: January 24, 2023</p>
            </div>
        </div>
    );
};

export default JournalEntry1;
