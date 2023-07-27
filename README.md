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

        -- utilities/ :This directory contains utility components, helper functions, or custom hooks that provide specific functionality used across the project.

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
