import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
    const books = [
        {
            id: 1,
            title: "Circuit Breakers: Echoes of Innovation",
            // description: "Dr. Jade King is a woman at war—not just with the powerful tech conglomerates redefining healthcare but with herself. As artificial intelligence threatens to dominate the field she holds dear, Jade finds herself caught in a battle to protect the soul of medicine while confronting her own fears of inadequacy in a rapidly changing world. Navigating the chaos of innovation, Jade must also face her deepest vulnerabilities: a budding romance with the brilliant but enigmatic Devon Rosenburgh, her lingering doubts about her ability to make a difference, and the relentless pull between ambition and authenticity. Can she reconcile her drive to succeed with her desire to stay grounded in the human connections that inspired her career? Set against the vibrant backdrop of Chicago’s bustling medical scene and the sleek, high-stakes world of tech startups, When Innovation Meets Humanity is a powerful tale of resilience, love, and the search for balance. As Jade fights to bridge the divide between cutting-edge innovation and the warmth of human touch, she discovers that healing is as much about the heart as it is about the mind. This is not just a medical drama—it’s a journey of courage, self-discovery, and the transformative power of connection.",
            image: "/images/Books/CircuitBreakers1.png",
            link: "/circuitbreakers-bookone"
        },
        {
            id: 2,
            title: "To Love Ignorantly: Love's Memoir",
            // description: "Embark on a journey and discover what happens when AI...",
            image: "/images/Books/ToLoveIgnorantly.png",
            link: "/toloveignorantly"
        }
    ]

    return (
        <div id="booksPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Latest Releases</h1>
            </div>

            <div>
                <div className="bookGrid">
                    {books.map((book) => (
                        <div className="bookCard" key={book.id}>
                            <img src={book.image} alt={book.title}/>
                            <Link to={book.link}>{book.title}</Link>
                            <p>{book.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Books;
