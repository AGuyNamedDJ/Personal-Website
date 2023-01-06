import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Imports
import ErrorPage from "./components/utilities/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexToHomePage />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    }
])

//version 18

const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)