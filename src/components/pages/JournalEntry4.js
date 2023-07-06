import React from "react";

const JournalEntry1 = () => {
    return (
        <div id="journalEntry" className="page">
            {/* Page Title */}
            <div id="titleSection">
                <h1>Love's Purpose</h1>
            </div>

            {/* Journal Entry Image */}
            <div className="journal-entry-image">
                <img src="/images/Journals/4-Love1.jpg" />
            </div>
            
            {/* Journal Entry Content */}
            <div className="journal-entry-content">
                <p>Society presents us a disorted definition of love; in that it is conditional, that it is "What you can do for me."  Or maybe love is, "I'm going to 'love' you until you upset me.</p>
                <br />
                <p>But love is not an emotion; rather a choice.  Patience, humility, making sacrifices..a placement of value.  Love is purging you and giving correction.  Love doesn't cease after one challening time or disagreement</p>
                <br />
                <p>So no I must ask you.  Who do you love, and who loves you?</p>
            </div>

            {/* Journal Entry Date */}
            <div className="journal-entry-date">
                <p>Published on: June 14, 2022</p>
            </div>

        </div>
    );
};

export default JournalEntry1;
