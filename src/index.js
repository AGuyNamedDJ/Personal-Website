// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import-Utilities
import FetchForHomePage from "./components/utilities/FetchForHomePage";
import ErrorPage from "./components/utilities/ErrorPage";

// Imports-Pages
import About from "./components/pages/About";
import Business from "./components/pages/Business";
import HomePage from "./components/pages/HomePage";
import RealEstate from "./components/pages/RealEstate";
import Ventures from "./components/pages/Ventures";

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