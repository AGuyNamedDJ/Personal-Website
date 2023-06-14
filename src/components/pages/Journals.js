import React from "react";

const Journals = () => {
    const journals = [
        {
            id: 1,
            title: "The Tunnel of the Job Search",
            image: "/images/Journals/1-JobSearch.jpg",
            link: "/projects/journals/1"
        },
        {
            id: 2,
            title: "Journal 2",
            image: "/images/Journals/1-JobSearch.jpg",
            link: "/projects/journals/1"
        },
        {
            id: 3,
            title: "Journal 3",
            image: "/images/Journals/1-JobSearch.jpg",
            link: "/projects/journals/1"
        },
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
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Journals;
