# dalronjrobertson.com

## Description <a name="description"></a>

Welcome to the GitHub repository for the personal website of Dalron J. Robertson. This platform not only embodies my journey, diverse projects, and ventures, but also demonstrates my proficiency in web development, particularly in using React. The website is designed to provide an engaging and interactive user experience, allowing visitors to gain insight into my background, skills, experiences, and ongoing projects.

Constructed with a focus on clean, efficient code, and attention to detail, this website is a testament to my ability to create a seamless user experience, optimizing React.js alongside other modern web technologies. Please explore this repository to understand the structure, conventions, and coding style I adhere to in my projects. You'll find thorough documentation on the codebase, including installation guides, file and directory structures, usage, testing procedures, and more.

I appreciate your interest and look forward to any opportunity where I can bring value with my expertise and passion for web development.

---

## Table of Contents <a name="table-of-contents"></a>

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File & Directory Structure](#file-directory-structure)
   - [public/](#public)
   - [src/](#src)
5. [APIs & Libraries Used](#api)
6. [Testing](#testing)
7. [Credits](#credits)
8. [Contact Information](#contact-information)

---

## Installation <a name="installation"></a>

To get this project running on your local machine, follow the steps mentioned below.

### Prerequisites

Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can verify if you have these installed by running the following commands in your terminal/command prompt:

    npm -v

If these commands return versions, then you have the necessary installations to proceed. If not, please install Node.js and npm first.

### Steps

1. Clone the repository

Open a terminal/command prompt and navigate to the folder where you want to clone the repository. Run the following command:

    git clone https://github.com/AGuyNamedDJ/Personal_Website.git

2. Navigate to the project directory

   cd personal_site_01

3. Install dependencies

   Once you're in the root directory of the project, install the required dependencies by running:

   npm install

This command will install all the project's dependencies mentioned in the package.json file, including React, React-DOM, FontAwesome, axios, and others.

4. Start the server

Once all the dependencies are installed, you can start the server:

    npm start

This will start the server and the website should be available at localhost:3000 (or a port that your terminal indicates).

Note: If changes are made to the package.json file, you will need to stop the server (Ctrl + C in the terminal), reinstall the dependencies (npm install), and then start the server again (npm start).

Please ensure you have the necessary access rights and permissions when performing the above operations. If you encounter any issues, please refer to the 'issues' section of the repository.

---

## Usage <a name="usage"></a>

After successfully running the server, navigate to `localhost:3000` (or the port that your terminal indicates) in your browser. You should see the landing page of Dalron J. Robertson's personal website.

The website is composed of several sections:

    1. **Home:** The home page provides a brief introduction about Dalron J. Robertson.

    2. **About:** This section provides more detailed information about Dalron's background and experience.

    3. **Projects:** Here, you can explore Dalron's diverse projects and work. Each project is displayed with a brief description, and you can click on each one for more detailed information.

    4. **Ventures:** In the Ventures section, you'll discover an assortment of Dalron's entrepreneurial endeavors, side projects, and startups.

    5. **Credentials:** The Credentials section provides a detailed account of Dalron's academic qualifications, professional certifications, and skills. Here, you'll find his educational history, from university degrees to online courses, as well as professional certifications he has earned over the years.

    6. **Contact:** This page allows visitors to get in touch with Dalron. It includes a form to submit any inquiries or messages.

Additionally, the website includes an interactive navbar that enables easy navigation across the site. Hover effects, animations, and transitions are implemented across the site to enhance the user experience.

Remember that any changes you make in the code while the server is running will automatically refresh the page due to the Hot Module Replacement feature in React.

For more technical or specific interactions, consult the 'File & Directory Structure' and 'APIs & Libraries Used' sections.

---

## File & Directory Structure <a name="file-directory-structure"></a>

### /public <a name="public"></a>

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

### /src <a name="src"></a>

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
                1. **Imports**:
                    - Description: General imports for the page, including React.
                2. **Component Definition**:
                    - Description: The functional component "Journals" which contains all the journal entries is defined. Each journal entry is an object with properties such as id, title, image, link, and date.
                3. ***Render**:
                    - Description: Contains the render method of the component, which includes:
                        - The page title.
                        - A grid of journal entries created by mapping through the reversedJournals array.
                4. **Export**:
                    - Description: The Journals component is exported for use in other parts of the application.

            -- MyStory.js
                1. **Imports**:
                    - Description: Standard React imports along with useState and useEffect hooks. The FlipPage package for implementing the book-like UI is also imported.
                2. **Component Definition**:
                    - Description: A functional component "MyStory" is defined. It includes a state for tracking the window dimensions which is useful for responsive design, and an effect that listens to window resize events.
                3. **Render**:
                    - Description: The component's render method includes:
                        - A page title.
                        - The FlipPage component which holds the book-like UI. The FlipPage component has several custom properties and each 'page' of the book is created using an 'article' tag that holds the page's content. Each page contains a title, the main content and a footer.
                4. **Resize Effect**:
                    - Description: An effect that adds a resize event listener to the window. This updates the state containing the window's dimensions every time a resize event occurs, thus ensuring responsiveness of the book. The event listener is removed when the component is unmounted to prevent memory leaks.
                5. **Export**:
                    - Description: The "MyStory" component is exported for use in other parts of the application.

            -- Privacy & Legal.js
                1. **Imports**:
                    - Description: The PrivacyLegal page only requires the default React import, as no hooks or additional components are used.
                2. **Component Definition**:
                    - Description: The functional component "PrivacyLegal" is defined, which provides the site's privacy policy and terms & conditions.
                3. **Render**:
                    - Description: The render method includes:
                        - The page title "Privacy & Legal".
                        - Two main sections, one for the privacy policy and the other for the terms & conditions. Each of these sections contain a header, a last updated date, and the relevant text and data points.
                        - The privacy policy details how user data is collected, used, and protected, while the terms & conditions provide information about site usage and potential updates to the terms.
                        - Contact information is also provided in both sections, in the event that a user has any queries or concerns about the site's privacy practices or terms of service.
                4. **Export**:
                    - Description: The "PrivacyLegal" component is exported for use in other parts of the application.

            -- Projects.js
                1. **Imports**:
                    - Description: React and Link from 'react-router-dom' are imported for creating the component and navigation links.
                2. **Component Definition**:
                    - Description: Define "Projects", a functional component showcasing project categories: software development, trading, and literary works.
                3. **Render**:
                    - Description: The component renders a title and three sections each dedicated to a project category. Each section includes a brief description and a link or embedded media for further exploration.
                4. **Export**:
                    - Description: The "Projects" component is exported for use elsewhere in the application.

            -- RealEstate.js
                1. **Imports**:
                    - Description: Import React to build the functional component.
                2. **Component Definition**:
                    - Description: Define the functional component "RealEstate" which currently features a placeholder "Coming Soon" message.
                3. **Render:
                    - Description**: The component renders a message indicating that this section of the site is currently under development and asks users to stay tuned for updates.
                4. **Export**:
                    - Description: The "RealEstate" component is exported for use elsewhere in the application.

            -- SiteMap.js
                1. **Imports**:
                    - Description: React is imported to build the functional component. The Link component from "react-router-dom" is imported for navigation within the application.
                2. **Component Definition**:
                    - Description: Define the functional component "SiteMap" which renders a site map of the application's routes and sections.
                3. **Render**:
                    - Description: The component organizes and renders links for various sections of the site such as "About", "Projects", "Ventures", "Credentials", and "Connect". Each section has different subcategories with their own set of links.
                4. **Export**:
                    - Description: The "SiteMap" component is exported for use elsewhere in the application.

            -- TearmsofUse.js
                1. **Imports**:
                    - Description: React is imported to define the functional component.
                2. **Component Definition**:
                    - Description: A functional component, "TermsOfUse", is defined. It does not accept any props, but renders the terms of use for the website.
                3. **Render**:
                    - Description: This component returns a div with the class "terms-container", which includes a title and multiple sections.g
                4. **Export**:
                    - Description: The "TermsOfUse" component is exported for use elsewhere in the application.

            -- Ventures.js
                1. **Imports**:
                    - Description: Various React features, 'react-router-dom', and 'framer-motion' are imported for component creation, routing, and animations respectively.
                2. **Function Definitions**:
                    - Description: A throttle function is defined to limit function invocation rate.
                3. **Component Definition**:
                    - Description: The "Ventures" functional component is defined, using hooks for state and effects.
                4. **State Variables**:
                    - Description: useState hooks manage state for image indices and carousel lock status.
                5. **Image Arrays**:
                    - Description: Two image URL arrays are defined for carousel display.
                6. **useEffect Hooks**:
                    - Description: Two useEffect hooks manage image rotation based on time intervals and scroll events.
                7. **Render**:
                    - Description: The component renders a div with nested elements, including a carousel of images.
                8. **Export**:
                    - Description: "Ventures" component is exported for use elsewhere.

            -- Websites.js
                1. **Imports**:
                    - Description: React and 'react-router-dom' are imported to build the component and routing.
                2. **Component Definition**:
                    - Description: The "Websites" functional component is defined with a list of websites showcasing different projects.
                3. **Data Definition**:
                    - Description: An array of objects holds the data for each website, including title, description, technologies, images, and links.
                4. **Render**:
                    - Description: The component renders a page containing a title and a series of website cards. Each card displays the project details and relevant links.
                5. **Export**:
                    - Description: The "Websites" component is exported for use elsewhere.

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

## APIs & Libraries Used <a name="api"></a>

This website is built using a variety of powerful JavaScript libraries and APIs to ensure a smooth, interactive user experience. Here is a list of them:

### Libraries:

1. React.js (v18.2.0): A JavaScript library for building user interfaces.
2. React DOM (v18.2.0): The library that powers the React framework in a web environment.
3. Framer Motion (v10.12.16): A production-ready motion library for React.
4. React Router (v6.6.1) and React Router DOM (v6.6.1): The standard routing library for React.
5. React Scroll (v1.8.9) and React Scroll Parallax (v3.4.2): Libraries to enable smooth scrolling and parallax effects.
6. React Icons (v4.9.0): An easy-to-use icon library for React.
7. React Flip Page (v1.6.4): A React component for creating page flip effects.
8. Lottie React (v2.4.0): A library to easily incorporate animations in a React app.
9. React YouTube (v10.1.0): A custom React hook to play, pause, and control YouTube videos.
10. React Calendly (v4.1.1): A React component to embed and open the Calendly widget.
11. Font Awesome (v6.4.0): Icon library used for user interface design.

### APIs:

1. Axios (v1.4.0): Promise-based HTTP client for the browser and node.js, used for API calls.
   In addition to these, the project uses React Scripts (v5.0.1) for the development environment and build process.

---

## Testing <a name="testing"></a>

---

## Credits <a name="credits"></a>

---

## Contact Information <a name="contact-information"></a>
