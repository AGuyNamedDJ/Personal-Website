import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
    const books = [
        {
            id: 1,
            title: "The Light of the World",
            description: "Embark on a journey of discovery and revelation with Dalron J. Robertson...",
            image: "/images/Books/CircuitBreakers1.png",
            link: "/books/one"
        }
    ]

    return (
        <div id="booksPage" className="page">
            <div id="titleSection">
                <h1>Books</h1>
            </div>
            
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
    )
}

export default Books;
