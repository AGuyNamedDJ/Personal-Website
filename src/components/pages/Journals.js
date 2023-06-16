import React from "react";

const Journals = () => {
    const journals = [
        {
            id: 1,
            title: "The Tunnel of the Job Search",
            image: "/images/Journals/1-JobSearch.jpg",
            link: "/TTOTJS",
            date: "January 11, 2023"
        },
        {
            id: 2,
            title: "A Busy Week",
            image: "/images/Journals/2-ABusyWeek.jpeg",
            link: "/ABW",
            date: "January 24, 2023"
        },
        {
            id: 3,
            title: "New Aged Branding",
            image: "/images/Journals/3-Branding.png",
            link: "/Branding",
            date: "May 29, 2023"
        }
    ]

    const reversedJournals = [...journals].reverse();

    return (
        <div id="journalsPage" className="page">
            <div id="titleSection">
                <h1>Journals</h1>
            </div>
            
            <div className="journalGrid">
                {reversedJournals.map((journal) => (
                    <div className="journalCard" key={journal.id}>
                        <a href={journal.link}>
                            <img src={journal.image} alt="journal cover"/>
                            <div className="overlay">
                                <h3>{journal.title}</h3>
                                <h2>{journal.date}</h2>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Journals;
