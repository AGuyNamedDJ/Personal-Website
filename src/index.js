// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import-Utilities
import HomePage from "./components/utilities/HomePage";
import ErrorPage from "./components/utilities/ErrorPage";
import Index from "./components/utilities/Index";

// Imports-Pages
import HomepageContent from "./components/pages/HomepageContent";

// Browser Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomepageContent />
            }
        ]
    }
])

//version 18

const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)