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
import JournalAI from "./components/pages/JournalAI";
import JournalRejection from "./components/pages/JournalRejection";
import Memoirs from "./components/pages/Memoirs";
import MemoirsChicago from "./components/pages/MemoirsChicago";
import MemoirsMontegoBay from "./components/pages/MemoirsMontegoBay";
import MemoirsQuintanaRoo from "./components/pages/MemoirsQuintanaRoo";
import Photography from "./components/pages/Photography";
import Work from "./components/pages/Work";
import WorkCV from "./components/pages/WorkCV";
import WorkResume from "./components/pages/WorkResume";
import WorkWebsites from "./components/pages/WorkWebsites";

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
            {
                path: "/journal",
                element: <Journal />
            },
            {
                path: "/journal/ai",
                element: <JournalAI />
            },
            {
                path: "/journal/rejection",
                element: <JournalRejection />
            },
            {
                path: "/memoirs",
                element: <Memoirs />
            },
            {
                path: "/memoirs/chicago",
                element: <MemoirsChicago />
            },
            {
                path: "/memoirs/montegobay",
                element: <MemoirsMontegoBay />
            },
            {
                path: "/memoirs/quintanaroo",
                element: <MemoirsQuintanaRoo />
            },
            {
                path: "/photography",
                element: <Photography />
            },
            {
                path: "/work",
                element: <Work />
            },
            {
                path: "/work/cv",
                element: <WorkCV />
            },
            {
                path: "/work/resume",
                element: <WorkResume />
            },
            {
                path: "/work/websites",
                element: <WorkWebsites />
            }
        ]
    }
])

//version 18

const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)
