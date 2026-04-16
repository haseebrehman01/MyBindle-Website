# MyBindle - Social Networking Landing Page

![MyBindle Logo](assets/Group%2012.png)

A modern, responsive landing page for "MyBindle" – a conceptual social networking platform. This page showcases the app's core features, user testimonials, installation steps, and a strong call to action, built with smooth animations and a clean, engaging design.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-FF5349?style=for-the-badge&logo=netlify&logoColor=white)](https://mybindlewebsite.netlify.app/)
[![Figma Design](https://www.figma.com/design/2Mmz5kkDby1ZU9KqreiGYf/Test?node-id=2-537&t=vloswQmeRYXD6HUW-0)](#) *

---

## ✨ Live Demo

Experience the live page here: **[https://mybindlewebsite.netlify.app/](https://mybindlewebsite.netlify.app/)**

## 📌 Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Animation & Interaction Details](#animation--interaction-details)
- [Responsive Design](#responsive-design)
- [Credits & Acknowledgements](#credits--acknowledgements)

---

## 📖 About The Project

This project is a **Figma-to-HTML/CSS/JS** conversion of a high-fidelity landing page design for "MyBindle". The goal was to create a visually appealing, fully responsive, and performant web page that effectively communicates the value proposition of a social networking app. The page features a modern UI, component-based styling, and engaging scroll-triggered animations to enhance user experience.

The design emphasizes key selling points like seamless connections, privacy, real-time chat, and community building, guiding visitors from awareness to action (app download/donation).

## 🛠️ Built With

- **HTML5** - Semantic markup for structure and content.
- **CSS3** - Custom styling with Flexbox and Grid for layout.
  - CSS Variables for theming.
  - Neumorphic design elements (box-shadows).
- **JavaScript (ES6)** - For core interactivity and DOM manipulation.
- **GSAP (GreenSock Animation Platform)** - For high-performance, scroll-triggered animations.
  - `ScrollTrigger` plugin for animation based on scroll position.
- **Font Awesome** - For iconography (e.g., App Store, Google Play).
- **Google Fonts** - For 'Poppins' and 'Outfit' typography.

## 🚀 Key Features

- **Hero Section:** Bold headline, descriptive text, and a prominent call-to-action button with an engaging illustration.
- **Features Grid:** Highlights six key app features with interactive hover effects.
- **Connection Section:** Focuses on community and engagement, listing unique selling points like short videos and smart notifications.
- **Installation Steps:** A visual progress tracker with three simple steps to guide users.
- **Donation Call-to-Action:** A distinct section encouraging charitable action.
- **Testimonials Carousel/Grid:** Displays user reviews with star ratings, user avatars, and locations. Includes a "See More/Less" functionality to toggle extra testimonials.
- **Footer CTA:** Final download prompt with platform-specific buttons (App Store, Google Play) and a mockup of the app.
- **Responsive Design:** Fully functional and visually coherent on devices from 375px up to 1740px+.
- **Advanced Animations:** Uses **GSAP** for entrance animations, parallax effects on scroll, hover micro-interactions, and a dynamic "See More" toggle.

## 📁 Project Structure

mybindle-landing-page/
├── index.html # Main HTML file
├── style.css # All custom styles and media queries
├── animations.js # GSAP animation scripts and ScrollTrigger config
├── functionality.js # Vanilla JS for "See More/Less" button and other interactions
├── assets/ # All images, SVGs, and icons
│ ├── Group 12.png # Logo
│ ├── hero-image.png # Hero section illustration
│ ├── mobiles and circle image.png
│ ├── iPhone 14 Pro.png
│ ├── lasy.png # Donation section character
│ ├── Avatar.svg ... Avatar (7).svg # Testimonial avatars
│ ├── Stroke Body (1).png # Footer phone mockup
│ └── Group 1171274793.png
└── README.md # Project documentation


## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser and a code editor (like VS Code) to view or edit this project. No build tools or server-side setup is required.

### Installation

1.  **Clone the repository** (or download the ZIP file):
    ```sh
    git clone https://github.com/your-username/mybindle-landing-page.git

2.    Navigate to the project directory:
cd mybindle-landing-page

3. Open the project in your code editor (e.g., VS Code).

Running the Project
Simply open the index.html file in your browser.

Double-click index.html, or

Use a live server extension in your code editor for a better development experience (recommended).

The page will load, and all CSS, JavaScript, and GSAP animations will execute automatically.

🎬 Animation & Interaction Details
All animations are handled via the animations.js and functionality.js files.

animations.js (GSAP):

Entrance Animations: Elements fade and slide up as they enter the viewport using ScrollTrigger.

Parallax Effects: The hero image and connection section image move at a different scroll speed for a sense of depth.

Hover Enhancements: Smooth scaling and shadow effects on buttons and cards.

Progress Line Drawing: The connection lines in the "Install Steps" section animate their width on scroll.

functionality.js (Vanilla JS):

"See More/Less" Toggle: Dynamically expands/collapses the hidden testimonials, changing the button text and adjusting the card's max-height for a smooth transition.

📱 Responsive Design
The page uses a mobile-first approach with carefully crafted media queries to ensure an optimal experience on all screen sizes.

Breakpoints: 1740px, 1440px, 1280px, 1245px, 1024px, 768px, 480px, 375px.

Key Responsive Changes:

Hero, Connection, and CTA sections stack vertically on tablets and mobile.

Grids (Features, Testimonials) change from 3-column to 2-column to 1-column layouts.

Typography and spacing scale down gracefully.

Buttons and CTAs become full-width on smaller devices for better touch targets.

The "Footer CTA" image is hidden on medium screens to save space.

🙏 Credits & Acknowledgements
Design Inspiration: The original design was sourced from a Figma community file or design agency.

Icons: Font Awesome

Fonts: Google Fonts (Poppins, Outfit)

Animation Library: GSAP

Hosting: Netlify

