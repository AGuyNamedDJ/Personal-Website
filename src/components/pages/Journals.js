import React from "react";

const Journals = () => {
    const journals = [
        {
            id: 1,
            title: "Love's Purpose",
            image: "/images/Journals/4-Love1.jpg",
            link: "/jfour",
            date: "June 14, 2022"
        },
        {
            id: 2,
            title: "The Tunnel of the Job Search",
            image: "/images/Journals/1-JobSearch1.jpeg",
            link: "/jone",
            date: "January 11, 2023"
        },
        {
            id: 3,
            title: "A Busy Week",
            image: "/images/Journals/2-ABusyWeek2.jpeg",
            link: "/jtwo",
            date: "January 24, 2023"
        },
        {
            id: 4,
            title: "New Aged Branding",
            image: "/images/Journals/3-Branding1.jpeg",
            link: "/jthree",
            date: "May 25, 2023"
        },
        {
            id: 5,
            title: "A Journey Towards Digital Harmony",
            image: "/images/Journals/5-Digital4.webp",
            link: "/jfive",
            date: "May 27, 2023"
        },
        {
            id: 6,
            title: "Darkness is Evidence of Light",
            image: "/images/Journals/6-Light.jpg",
            link: "/jsix",
            date: "June 28, 2023"
        }
        // {
        //     id: 7,
        //     title: "Harnessing the Darkness",
        //     image: "/images/Journals/6-Light.jpg",
        //     link: "/jseven",
        //     date: "July 1, 2023"
        // }
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
