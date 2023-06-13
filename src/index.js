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
import Business from "./components/pages/Business";
import Connect from "./components/pages/Connect";
import Credentials from "./components/pages/Credentials";
import HomePage from "./components/pages/HomePage";
import Journal from "./components/pages/Journal";
import MyStory from "./components/pages/MyStory";
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
                path: "/credentials/resume",
                element: <Resume />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/projects/books",
                element: <Books />
            },
            {
                path: "/projects/journal",
                element: <Journal />
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