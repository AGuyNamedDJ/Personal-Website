import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Imports
import HomePage from "./components/utilities/HomePage";
import ErrorPage from "./components//utilities/ErrorPage";
import Index from "./components/utilities/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />
            }

        ]
    }
])

//version 18

const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)