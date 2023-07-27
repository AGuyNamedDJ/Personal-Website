import React from 'react';
import { Link } from 'react-router-dom';

const Websites = () => {
    // This is an example of a single website, you'd add more to this list for your projects
    const websites = [
        {
            title: "Personal Website",
            description: "A personal website showcasing my Life's Journey, expertise, and experience featuring a comprehensive portfolio of professional projects, education, and personal interests, including a personal journal and photography collection.",
            technologies: ["Javascript", "React.js", "Lottie Files", "Axios", "Framer", "Flip Page", "Scroll Parallax", "CSS", "HTML"],
            image: "/images/AGNDJ1.png",
            liveLink: "dalronjrobertson.com",
            codeLink: "https://github.com/AGuyNamedDJ/Personal-Website"
        },
        {
            title: "Jamal - Backend",
            description: "Backend for 'Jamāl' - a Salon Suite Franchise app. Built with Node.js and Express.js, supporting SQL database. Manages bookings, user roles (customers, suite renters, admins), direct messaging, and user favorites. Includes authentication and notification handling for enhanced user engagement.",
            technologies: ["Javascript", "Node","CORS", "dotenv", "Express", "SQL", "Jest", "bcrypt", "pg", "morgan", "jsonwebtoken"],
            image: "/images/Websites/Salon.jpg",
            liveLink: null,
            codeLink: "https://github.com/AGuyNamedDJ/Jamal-Backend"
        },
        {
            title: "TradingView Strategies & Indicator Scripts #1 (Open Source)",
            description: "This project contains a collection of custom trading strategies and indicators for TradingView, developed using Pine Script. The aim of this collection is to provide traders and investors with a diverse set of tools for technical analysis and to assist them in making more informed trading decisions.",
            technologies: ["Pinescript", "HTML"],
            image: "/images/Websites/Tradingview.png",
            liveLink: null,
            codeLink: "https://github.com/AGuyNamedDJ/TradingView-Scripts-1"
        },
        {
            title: "Health Hive - Back End",
            description: "HealthHive backend uses Node.js, Express, and PostgreSQL for efficient hospital data management. Features secure authentication with JSON Web Tokens and environment variable management with dotenv.",
            technologies: ["Javascript", "Express", "Node.js", "PostgreSQL", "BCrypy", "Morgan", "dotenv", "JSON"],
            image: "/images/Websites/Doctor.jpeg",
            liveLink: null,
            codeLink: "https://github.com/AGuyNamedDJ/Health-Hive-Back-End"
        },
        {
            title: "Car-Haven - Back End",
            description: "A Back-End for a car dealership that showcases a range of vehicles for sale. The website features filtering and sorting, vehicle information, & a contact page for customers to get in touch.",
            technologies: ["Javascript", "Express", "Node.js", "PostgreSQL", "BCrypy", "API", "dotenv", "JSON"],
            image: "/images/Websites/Carhaven.png",
            liveLink: "https://carhaven.netlify.app/inventory",
            codeLink: "https://github.com/AGuyNamedDJ/Car-Haven-Back"
        },
        {
            title: "Car-Haven - Front End",
            description: "Car Haven is a full-stack web application for luxury car enthusiasts. It includes a database of manufacturers, models, and unique features for specific cars. Built using React.js, Node.js, and Tailwind CSS, it offers a visually stunning user interface and a seamless user experience for browsing and searching for luxury cars.",
            technologies: ["Javascript", "React.js", "Tailwind.css", "HTML"],
            image: "/images/Websites/Carhaven.png",
            liveLink: "https://carhaven.netlify.app/inventory",
            codeLink: "https://github.com/AGuyNamedDJ/Car-Haven-Front"
        },
        {
            title: "Dal-Recipe - Back End",
            description: "The Back-End development for a Full-Stack Cooking & Recipe website showcasing some of my favorite recipes. Continually updated with new recipes.",
            technologies: ["Javascript", "Express", "Node.js", "PostgreSQL", "API", "dotenv"],
            image: "/images/Websites/Dalrecipe.png",
            liveLink: "https://dal-recipe.netlify.app",
            codeLink: "https://github.com/AGuyNamedDJ/Dal-Recipe-Back"
        },
        {
            title: "Dal-Recipe - Front End",
            description: "The Front-End development for a Full-Stack Cooking & Recipe website showcasing some of my favorite recipes. Continually updated with new recipes.",
            technologies: ["Javascript", "React.js", "AJAX", "CSS", "HTML"],
            image: "/images/Websites/Dalrecipe.png",
            liveLink: "https://dal-recipe.netlify.app",
            codeLink: "https://github.com/AGuyNamedDJ/Dal-Recipe-Front"
        },
        {
            title: "Capstone, The Sweet Spot | Co Developer",
            description: "A Full Stack e-commerce website selling baked goods & candy developed with an agile team of 4 students dev.",
            technologies: ["Javascript", "React.js", "Express", "Node.js", "PostgreSQL", "API", "dotenv", "BCrypt", "AJAX", "JSON Web Token", "Morgan", "CSS", "HTML"],
            image: "/images/Websites/TSS.png",
            liveLink: "https://thesweetspot.netlify.app",
            codeLink: "https://github.com/The-Sweet-Spot/CandyBackEnd"
        },
        {
            title: "Fitness Trackr | Co-Developer",
            description: "A Full Stack Fitness App using React.js to fetch data from a created API developed with a student dev.",
            technologies: ["Javascript", "React.js", "Express", "Node.js", "PostgreSQL", "API", "dotenv", "BCrypt", "AJAX", "JSON Web Token", "Morgan", "CSS", "HTML"],
            image: "/images/Websites/Fitness.png",
            liveLink: "https://usefitnesstrackr.netlify.app",
            codeLink: "https://github.com/Tori-Dalron-Team/FitnessTrackr."
        },
        {
            title: "Juicebox",
            description: "A Back-End with a Database and Web server with a custom API showcasing knowledge of PostgreSQL & Node.",
            technologies: ["Javascript", "Express", "Node.js", "PostgreSQL", "API", "AJAX"],
            image: "/images/Websites/Juicebox.jpeg",
            liveLink: null,
            codeLink: "https://github.com/AGuyNamedDJ/JuiceBox"
        },
        {
            title: "Stranger's Things",
            description: "A React-based single-page application showcasing how CRUD can improve fetching and user authentication via JSON Web Tokens. (JWT)",
            technologies: ["Javascript", "React.js", "AJAX", "CSS", "HTML"],
            image: "/images/Websites/Strangers.png",
            liveLink: "https://usefitnesstrackr.netlify.app",
            codeLink: "https://github.com/AGuyNamedDJ/Strangers-Things-2"
        },
        {
            title: "Hackers News",
            description: "A consumer-focused Node application showcasing knowledge of Express.js features.",
            technologies: ["Javascript", "React.js", "CSS", "HTML"],
            image: "/images/Websites/Hacker.png",
            liveLink: "https://hackernews-7fqr.onrender.com",
            codeLink: "https://github.com/AGuyNamedDJ/Hacker-News"
        },
        {
            title: "Puppy Bowl",
            description: "A React-based single-page application showcasing focused on coding the front end by using a pre-existing API.",
            technologies: ["Javascript", "React.js", "DOM", "CSS", "HTML"],
            image: "/images/Websites/Puppy.png",
            liveLink: "https://chicagopuppybowl22.netlify.app",
            codeLink: "https://github.com/AGuyNamedDJ/Puppy-Bowl"
        },
        {
            title: "Connect Four",
            description: "An interactive arcade game built, during a class hackathon, showcasing development of a good user experience through a clean interface.",
            technologies: ["Javascript", "React.js", "DOM", "CSS", "HTML"],
            image: "/images/Websites/Connect.png",
            liveLink: "https://connect4our.netlify.app",
            codeLink: "https://github.com/AGuyNamedDJ/Connect-Four"
        },
        {
            title: "Real Estate Clicker",
            description: "An online clicker game showcasing knowledge of JavaScript & the DOM with HTML/CSS.",
            technologies: ["Javascript", "DOM","CSS", "HTML"],
            image: "/images/Websites/Clicker.png",
            liveLink: "https://realestateclickergame.netlify.app",
            codeLink: "https://github.com/AGuyNamedDJ/Real-Estate-Clicker-Game"
        },
    ];

    return (
        <div id="websitesPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Developments</h1>
            </div>

            <div className="websites-container">
                {websites.map((website, index) => (
                    <div className="website-card" id={`project-${index}`} key={index}>
                        <h2>{website.title}</h2>
                        <img src={website.image} alt={website.title} />
                        <p>{website.description}</p>
                        <p>Technologies Used: {website.technologies.join(", ")}</p>
                        {website.liveLink && <a href={website.liveLink} target="_blank" rel="noreferrer">Live Website</a>}
                        <a href={website.codeLink} target="_blank" rel="noreferrer">View Code</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Websites;
