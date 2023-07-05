// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import-Utilities
import FetchForHomePage from "./components/utilities/FetchForHomePage";
import ErrorPage from "./components/utilities/ErrorPage";

// Imports-Pages
import About from "./components/pages/About";
import Books from "./components/pages/Books";
import BooksOne from "./components/pages/BooksOne";
import Business from "./components/pages/Business";
import Connect from "./components/pages/Connect";
import Credentials from "./components/pages/Credentials";
import FAQs from "./components/pages/FAQs";
import HomePage from "./components/pages/HomePage";
import Journals from "./components/pages/Journals";
import JournalEntry1 from "./components/pages/JournalEntry1";
import JournalEntry2 from "./components/pages/JournalEntry2";
import JournalEntry3 from "./components/pages/JournalEntry3";
import JournalEntry4 from "./components/pages/JournalEntry4";
import JournalEntry5 from "./components/pages/JournalEntry5";
import JournalEntry6 from "./components/pages/JournalEntry6";
import MyStory from "./components/pages/MyStory";
import PrivacyLegal from "./components/pages/PrivacyLegal";
import Projects from "./components/pages/Projects";
import RealEstate from "./components/pages/RealEstate";
import Resume from "./components/pages/Resume";
import Ventures from "./components/pages/Ventures";
import Websites from "./components/pages/Websites";

// Browser Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <FetchForHomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/about/mystory",
                element: <MyStory />
            },
            {
                path: "/connect",
                element: <Connect />
            },
            {
                path: "/credentials",
                element: <Credentials />
            },
            {
                path: "/faqs",
                element: <FAQs />
            },
            {
                path: "/credentials/resume",
                element: <Resume />
            },
            {
                path: "/privacy&legal",
                element: <PrivacyLegal />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "projects/books",
                element: <Books />
            },
            {
                path: "/circuitbreakers-bookone",
                element: <BooksOne />
            },
            {
                path: "/projects/journals",
                element: <Journals />
            },
            {
                path: "/jone",
                element: <JournalEntry1 />
            },
            {
                path: "/jtwo",
                element: <JournalEntry2 />
            },
            {
                path: "/jthree",
                element: <JournalEntry3 />
            },
            {
                path: "/jfour",
                element: <JournalEntry4 />
            },
            {
                path: "/jfive",
                element: <JournalEntry5 />
            },
            {
                path: "/jsix",
                element: <JournalEntry6 />
            },
            {
                path: "/projects/websites",
                element: <Websites />
            },
            {
                path: "/ventures",
                element: <Ventures />
            },
            {
                path: "/ventures/business",
                element: <Business />
            },
            {
                path: "/ventures/realestate",
                element: <RealEstate />
            },
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)