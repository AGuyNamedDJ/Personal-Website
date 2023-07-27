# dalronjrobertson.com

## Description

Dalron J. Robertson's personal website showcases his diverse ventures, projects, and work. Built with React, this website provides an interactive experience for visitors to learn more about Dalron's background, experience, and ongoing endeavors.

---

## Table of Contents

---

## Installation

---

## Usage

---

## File & Directory Structure

### /public

    -- images/ :Directory containing all image files used on the website.
        1. **Books/**
        2. **Chi-Image/**
        3. **Chi2/**
        4. **Journals/**
        5. **Websites/**
        6. **Websites/**
        7. **Writings/**

    -- Styles.css :The main CSS file that contains styles for the entire website.

    -- _redirects :This file is used for configuring redirection rules for hosting the website on Netlify.

    -- index.html :The main HTML file that serves as the landing page for your website.
        1. **Meta Tags**:
            - Description: These meta tags provide essential information about the document to the browser and search engines. The charset specifies the character encoding for the document, while the X-UA-Compatible sets the document mode for Internet Explorer. The viewport meta tag ensures proper scaling and responsiveness on different devices.

        2. **Title**:
            - Description: The `<title>` element specifies the title of the webpage, which appears on the browser's title bar or tab.

        3. **CSS Styles**:
            - Description: The `<link>` tag references an external CSS file ("style.css") that contains styles for the entire website. It is used to style the HTML elements to provide the desired visual layout.

        4. **Fonts**:
            - Description: The series of `<link>` tags reference different Google Fonts that will be used on the website. Each link points to a specific font family and weight. These fonts will be loaded from Google's servers and applied to the content as specified.

        5. **Open Graph Tags**:
            - Description: These meta tags are used for social media sharing, particularly for platforms like Facebook. They provide information about the webpage's title, description, image, and URL that will be displayed when the page is shared on social media platforms.

        6. **Content**:
            - Description: The `<div>` with the `id="apps"` acts as a placeholder for content generated dynamically through JavaScript. It is common for Single Page Applications (SPAs) to use such placeholders to render content dynamically.

### /src

    -- components/ :This directory contains all the reusable components used in the project.
        -- animations/ :This directory holds all the JSON files used for Lottie animations in the project. Lottie is a library that allows the integration of high-quality, scalable animations in web applications.

        -- pages/ :This directory contains page components used to render the content and functionality of each individual page of the website. Each page component represents a specific section or view of the application.
            -- About.js
                1. **Imports**:
                    - Description: This section contains general imports for the component, including React, useState, useEffect, and Link from react-router-dom. It also imports Lottie for handling animations and the JSON animation files.
                2. **Animation Options**:
                    - Description: This section contains default options for the Lottie animation, specifying properties such as looping, autoplay, animation data, and renderer settings.
                3. **Image Sources**:
                    - Description: This section provides an array of placeholder image sources used for a slideshow in the "Personal Interests" section.
                4. **Shuffle Images Function**:
                    Description: This function shuffles the array of image sources to be used in the slideshow.
                5. **About Component**:
                    - Description: The About component renders the "About" page of the website. It includes sections such as "Intro Section" with a brief introduction about the website owner, "Story Section" with a link to read the owner's story, "Creation Section" with animated content describing the owner's creative ventures, and "Personal Interests Section" with a slideshow of personal interest images.

            -- Books.js
                1. **Imports**:
                    - Description: This section contains general imports for the component, including React and Link from react-router-dom.
                2. **Books Data**:
                    - Description: This section defines an array of book objects, each representing a book available on the website. Each book object contains properties such as id, title, description, image, and link.
                3. **Books Component**:
                    - Description: The Books component renders the "Books" page of the website. It displays a collection of books, with each book represented as a card containing its image, title, and description. Clicking on a book card's link will direct the user to a specific page for that book.

            -- BooksOne.js
                1. **Imports:
                    - Description: This section contains the import statement for React.
                2. **BooksOne Component**:
                    - Description: The BooksOne component renders the page for the book titled "Circuit Breakers: Book One". It provides details about the book, including the title and a brief description of its content.

            -- Business.js
                1. **Import Section**:
                    - Imports the necessary modules for the component, including React.
                2. **Return Statement**:
                    - Returns a simple "Coming Soon" page with a title and two paragraphs of text.

            -- Connect.js
                1. **Imports**:
                    - Description: This section contains the import statements for React, useState, useEffect, Lottie, and other required dependencies.
                2. **Slides Data**:
                    - Description: This section defines an array of objects that represent the data for each slide in the carousel. Each object contains information about a social media platform, such as its title, link, username, description, and associated animation image.
                3. **Styles**:
                    - Description: This section defines the CSS styles used in the component for layout and positioning of elements.
                4. **Slide Component**:
                    - Description: This section defines a functional component called Slide, which represents an individual slide in the carousel. It takes props for content, link, username, description, image, and active status to conditionally apply the 'active' class based on the current slide index.
                5. **Connect Component**:
                    - Description: The Connect component is a functional component that renders the Connect page. It displays a carousel of social media platforms with their descriptions and animation images. The carousel automatically transitions to the next slide every 3.5 seconds. Additionally, it includes sections for scheduling a meeting using Calendly and a contact form to send a message.

            -- Credentials.js
                1. **Imports**:
                    - Description: This component imports React.
                2. **Credentials Component**:
                    - Description: The Credentials component is a page that showcases the user's credentials, including their resume, curriculum vitae, certifications, and notoriety. It contains four sections, each displaying relevant information and providing options to view or download the corresponding documents.
                    The sections are:
                        1. ***Resume Section***:
                            - Description: This section displays the user's resume and provides links to view and download it.
                        2. ***Curriculum Vitae Section***:
                            - Description: This section displays the user's curriculum vitae and provides links to view and download it.
                        3. ***Certifications Section***:
                            - Description: This section displays the user's certifications and provides a link to view them.
                        4.***Notoriety Section***:
                            - Description: This section briefly describes the user's awards, honors, and notable acknowledgments that highlight their commitment to excellence, growth, and contributions.

            -- FAQs.js
                1. **Imports**:
                    - Description: The FAQs component imports React and useState from the "react" package.
                2. **FAQs Component**:
                    - Description: The FAQs component displays a list of frequently asked questions and their corresponding answers. Users can click on a question to reveal its answer. The component uses the useState hook and the FAQList array to manage the active state of each question and answer.

            -- HomePage.js
                1. **Imports**:
                    - Description: The HomePage component imports the necessary dependencies from the "react" library, "react-scroll," and other packages.
                2. **HomePage Component**:
                    - Description: The HomePage component serves as the landing page of the website, comprising four distinct blocks:
                        1. ***Block 1***: Welcome Message
                            - Description: This block introduces "Dalron" and provides a brief description of his aspirations, encouraging users to explore further.
                        2. ***Block 2***: Recent Projects (Currently Hidden)
                            - Description: Although commented out and not displayed, this block is intended to showcase recent projects with images and links.
                        3. ***Block 3***: Career Timeline
                            - Description: This block presents Dalron's career history in three rows, including job titles, companies, and respective durations.
                        4. ***Block 4***: Contact Information
                            - Description: The final block displays "CONTACT ME" and provides social media links for Github, Instagram, LinkedIn, Twitter, and YouTube channels. Users can access Dalron's profiles by clicking on these links.

            -- Jesus.js
                1. **Imports**:
                    - Description: General imports for the page, including React and YouTube player library.
                2. **Component Definition**:
                    - Description: The main functional component "Jesus" which constitutes the page is defined.
                3. **States and Constants**:
                    - Description: Several constants and states are defined, including:
                        - verseOfTheMonth and verseExplanation for displaying a religious verse and its explanation.
                        - initialYoutubeVideos and youtubeVideos for handling the YouTube videos to be displayed.
                        - resources and currentSlide for managing the resource information and navigation.
                4. **State Update Functions:
                    - Description: nextVideo, prevVideo, shuffle, nextSlide, prevSlide functions handle updates to the YouTube video display and resource carousel.
                5. **Render**:
                    - Description: Contains the render method of the component, which includes:
                        - The page title.
                        - Verse of the month and its explanation.
                        - Video resources with navigation.
                        - Resource carousel with navigation.
                6. **Export**:
                    - Description: The Jesus component is exported for use in other parts of the application.
                7. **Commented Code**:
                    - Description: There is a block of commented code at the end, which seems to be an alternate implementation of the resources section.

            -- JournalEntry.js
                1. **Imports**:
                    - Description: General imports for the page, including React.
                2. **Component Definition**:
                    - Description: The functional component "JournalEntry1" which constitutes the journal entry is defined.
                3. **Render**:
                    - Description: Contains the render method of the component, which includes:
                        - The page title.
                        - An image for the journal entry.
                        - The main journal entry content.
                        - The published date of the journal entry.
                3. **Export**:
                    - Description: The JournalEntry1 component is exported for use in other parts of the application.

            -- Journals.js

            -- MyStory.js

            -- Privacy & Legal.js

            -- Projects.js

            -- RealEstate.js

            -- SiteMap.js

            -- TearmsofUse.js

            -- Ventures.js

            -- Websites.js


        -- utilities/ :This directory contains utility components, helper functions, or custom hooks that provide specific functionality used across the project.
            -- ErrorPage.js :A component that displays an error page when a route is not found or an error occurs in the application.
                1.  **Imports**:
                    - General imports for the page, including React and custom components for consistent layout and functionality.
                2. **Error Content**:
                    - Description: Displays an error message and an image to inform users about server issues and team response.
                3. **Footer**:
                    - Description: Renders the website's footer for consistent layout and content.

            -- FetchForHomePage.js :A component responsible for fetching data required for the homepage, enhancing performance and data loading efficiency.
                1. **Imports**:
                    - Description: General imports for the page, including React, Navbar, Footer, and necessary hooks from react-router-dom.
                2. **Content**:
                    - Description: Renders the content of the homepage or nested child components using <Outlet /> as a placeholder for specific route rendering.

            -- Footer.js :A reusable component that renders the website's footer, providing consistent layout and content across pages.
                1. **Imports**:
                    - Description: This section contains general imports for the component, including React and Link from react-router-dom.
                2. **Footer Columns**:
                    - Description: This section contains multiple columns of footer links, each providing information and navigation to different sections of the website, such as ventures, employer-related information, creatives content, support, and social media links.
                3. **Footer Bottom**:
                    - Description: This section displays the bottom part of the footer, which contains links for copyright notice, privacy & legal, terms of use, and site map.

            -- Navbar.js :A reusable component that renders the website's navigation bar, allowing easy navigation between different sections and pages.
                1. **Imports**:
                    - Description: This section contains general imports for the component, including React and Link from react-router-dom.
                2. **Navbar**:
                    - Description: The Navbar component renders the website's navigation bar. It provides links to various sections and pages of the website, such as the homepage, about page, projects page, ventures page, credentials page, and contact page.

            -- Template.js :A template page that serves as a starting point to quickly create new webpages with common elements and structure.

        -- .DS_Store :This file is specific to macOS and stores custom attributes related to a folder's view options, icon positions, and other metadata.


    -- .DS_Store :This file is specific to macOS and stores custom attributes related to a folder's view options, icon positions, and other metadata.

    -- index.js :The main entry point of the JavaScript code for the project.
        1. **Imports**:
            - Description: This section contains import statements for various libraries and components used in the application. It includes imports for React, react-router-dom related modules (createBrowserRouter, RouterProvider), and react-dom/client (createRoot).

        2. **Import-Utilities**:
            - Description: This section contains imports for utility components used in the project. These utilities might include helper functions, custom hooks, or components with specific functionality that can be reused across multiple pages.

        3. **Imports-Pages**:
            - Description: This section contains imports for different page components used in the project. Each import corresponds to a specific page or section of the website. Page components are used to render the content and functionality of each individual page.
        4. **Browser Router**:

            - Description: This section sets up the router using createBrowserRouter from react-router-dom. It defines the routing configuration for the application, specifying the path and corresponding page component for each route. It also includes a catch-all route to handle any undefined paths.

        5. **Version 18**:
            - Description: This section is responsible for rendering the application. It creates a root element using createRoot and renders the application using the RouterProvider, passing the defined router as a prop.

---

## APIs & Libraries Used

---

## Testing

---

## Credits

---

## Contact Information
