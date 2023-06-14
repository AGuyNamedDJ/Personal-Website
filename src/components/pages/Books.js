import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
    const books = [
        {
            id: 1,
            title: "Circuit Breakers: Book One",
            description: "Embark on a journey and discover what happens when AI...",
            image: "/images/Books/CircuitBreakers1.png",
            link: "/circuitbreakers-bookone"
        }
    ]

    return (
        <div id="booksPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Books</h1>
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
