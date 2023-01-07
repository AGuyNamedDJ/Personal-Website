import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import-Utilities
import HomePage from "./components/utilities/HomePage";
import ErrorPage from "./components//utilities/ErrorPage";
import Index from "./components/utilities/Index";

// Imports-Pages
import About from "./components/pages/About";
import Journal from "./components/pages/Journal";
import Memoirs from "./components/pages/Memoirs";
import Photography from "./components/pages/Photography";
import Work from "./components/pages/Work";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <About />
            },
            // {
            //     path: "/about",
            //     element: <About />
            // },
            {
                path: "/journal",
                element: <Journal />
            },
            {
                path: "/memoirs",
                element: <Memoirs />
            },
            {
                path: "/photography",
                element: <Photography />
            },
            {
                path: "/work",
                element: <Work />
            }
        ]
    }
])

//version 18

const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)

// Notes
    // about page npm run start
