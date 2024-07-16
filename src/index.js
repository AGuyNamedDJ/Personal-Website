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
import Jesus from "./components/pages/Jesus";
import Journals from "./components/pages/Journals";
import JournalEntry1 from "./components/pages/JournalEntry1";
import JournalEntry2 from "./components/pages/JournalEntry2";
import JournalEntry3 from "./components/pages/JournalEntry3";
import JournalEntry4 from "./components/pages/JournalEntry4";
import JournalEntry5 from "./components/pages/JournalEntry5";
import JournalEntry6 from "./components/pages/JournalEntry6";
import JournalEntry7 from "./components/pages/JournalEntry7";
import MyStory from "./components/pages/MyStory";
import PrivacyLegal from "./components/pages/PrivacyLegal";
import Projects from "./components/pages/Projects";
import RealEstate from "./components/pages/RealEstate";
import Resume from "./components/pages/Resume";
import SiteMap from "./components/pages/SiteMap";
import TermsOfUse from "./components/pages/TermsOfUse";
import Ventures from "./components/pages/Ventures";
import Websites from "./components/pages/Websites";

// Import Photo Albums
import AlbumOneChicagoLoop239 from "./components/pages/AlbumOneChicagoLoop239";
import AlbumTwoAppleDay91223 from "./components/pages/AlbumTwoAppleDay91223";
import AlbumThreeDC1024 from "./components/pages/AlbumThreeDC1024";
import AlbumFourTSF from "./components/pages/AlbumFourTSF";

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
                path: "/AlbumOne",
                element: <AlbumOneChicagoLoop239 />
            },
            {
                path: "/AlbumTwo",
                element: <AlbumTwoAppleDay91223 />
            },
            {
                path: "/AlbumThree",
                element: <AlbumThreeDC1024 />
            },
            {
                path: "/AlbumFour",
                element: <AlbumFourTSF />
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
                path: "/jesus",
                element: <Jesus />
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
                path: "/jseven",
                element: <JournalEntry7 /> // Update recent journal to footer, & site map
            },
            {
                path: "/projects/websites",
                element: <Websites />
            },
            {
                path: "/sitemap",
                element: <SiteMap />
            },
            {
                path: "/termsofuse",
                element: <TermsOfUse />
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
            {
                path: "*", //catch all route
                element: <ErrorPage />
            },
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)