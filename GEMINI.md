# GEMINI.md

## Project Overview
This repository is a collection of beginner-friendly web development projects. Each project is a self-contained static web application built using core web technologies: HTML5, CSS3, and Vanilla JavaScript. The projects serve as introductory examples for various web interface components and functionalities.

### Projects
- **beginner-calculator**: A simple arithmetic calculator with basic mathematical operations.
- **beginner-timetable**: A project likely showcasing table layouts and scheduling displays.
- **cse-elective-selection**: A form-based application for selecting engineering electives, demonstrating form handling and validation.
- **first_webpage**: A basic introductory webpage structure.
- **pulsing-message-box**: A UI experiment with CSS animations and simple DOM interactions.

## Building and Running
These are static web projects and do not require a build step.

### How to Run
- **Directly**: Open the `index.html` file within any project folder using your web browser.
- **Local Server (Recommended)**: To avoid potential CORS issues or to test more accurately, serve the root directory using a static file server:
  - Using Node.js: `npx serve .`
  - Using Python: `python3 -m http.server 8000`
  - Using VS Code: Use the "Live Server" extension.

### Testing
- Manual testing is currently used. Open the projects in a browser and interact with the UI to verify functionality.
- TODO: Implement automated UI tests using a framework like Playwright or Cypress if the projects scale.

## Development Conventions
- **Structure**: Each project is isolated in its own directory with its own `index.html`, `style.css`, and `script.js`.
- **Vanilla Tech**: Focus on standard web APIs without external libraries or frameworks.
- **Styling**: Uses CSS for layout and animations.
- **Scripting**: Uses Vanilla JavaScript for DOM manipulation and event handling.
