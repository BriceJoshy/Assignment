# Next.js and Django Application

## Overview

This repository contains a web application built using Next.js with TypeScript, Tailwind CSS, Shadcn, LucidReact, and Axios for the frontend, and Django for the backend. TypeScript adds static type checking, Tailwind CSS provides utility-first styling, Shadcn offers components for design consistency, LucidReact facilitates UI development, and Axios is used for making HTTP requests. Django is a high-level Python web framework for building backend services.

## Features

- **Frontend:** Built with Next.js, TypeScript, Tailwind CSS, Shadcn, LucidReact, and Axios
- **Backend:** Built with Django (Python web framework)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- `pip` (Python package installer)

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Start the Next.js development server:

   ```bash
   npm run dev
   ```

The frontend application will be available at `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. navigate to Django Project:

   ```bash
   cd chart_api
   ```

5. Apply migrations:

   ```bash
   python manage.py migrate
   ```

6. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

The backend application will be available at `http://localhost:8000`.

## Configuration

1. **Frontend Configuration:** Update environment variables in `.env.local` in the frontend directory if needed.
2. **Backend Configuration:** Update environment variables in `.env` in the backend directory if needed.
3. **Tailwind CSS:** Configure Tailwind CSS by editing `tailwind.config.js` and ensuring the necessary imports are in `globals.css`.
4. **Axios:** Set up Axios for HTTP requests and configure base URLs or headers in `axiosConfig.ts` or similar.
5. **Django Secret Key:** Manually copy the

## API Endpoints

The application exposes the following API endpoints for retrieving chart data:

## API Endpoints

The backend provides the following API endpoints for retrieving chart data:

- **Candlestick Data:** `/api/candlestick-data/`  
  Provides data for candlestick charts.  
  Example URL: `http://localhost:8000/api/candlestick-data/`

- **Line Chart Data:** `/api/line-chart-data/`  
  Supplies data for line charts.  
  Example URL: `http://localhost:8000/api/line-chart-data/`

- **Bar Chart Data:** `/api/bar-chart-data/`  
  Returns data for bar charts.  
  Example URL: `http://localhost:8000/api/bar-chart-data/`

- **Side Bar Chart Data:** `/api/side-bar-chart-data/`  
  Delivers data for vertical bar charts.  
  Example URL: `http://localhost:8000/api/side-bar-chart-data/`

- **Pie Chart Data:** `/api/pie-chart-data/`  
  Offers data for pie charts.  
  Example URL: `http://localhost:8000/api/pie-chart-data/`

## Approach and Thought Process

### Objective

The goal was to build a robust web application with a clear separation of concerns between the frontend and backend. The frontend, developed using Next.js, TypeScript, Tailwind CSS, Shadcn, LucidReact, and Axios, provides a modern, responsive user interface. The backend, built with Django, handles data management and serves APIs to support dynamic content.

### Frontend Development

1. **Technology Stack:**

   - **Next.js:** Chosen for its powerful server-side rendering capabilities, which improve SEO and load times.
   - **TypeScript:** Provides static type checking to catch errors early and enhance code quality.
   - **Tailwind CSS:** Utilized for its utility-first approach to styling, allowing for quick, consistent UI design.
   - **Shadcn & LucidReact:** Integrated for their pre-built, customizable UI components that help in maintaining design consistency.
   - **Axios:** Used for making HTTP requests to interact with backend APIs efficiently.

2. **Design and Implementation:**
   - **Component-Based Architecture:** Built reusable components to maintain a modular and scalable codebase.
   - **Responsive Design:** Ensured that the application is accessible and functional across various devices by leveraging Tailwind CSS's responsive utilities.
   - **State Management:** Implemented state management strategies to handle and pass data efficiently between components.

### Backend Development

1. **Technology Stack:**

   - **Django:** Chosen for its robustness and ease of use in building RESTful APIs and handling data management.

2. **Data Management and APIs:**

   - **RESTful APIs:** Developed to provide data for various types of charts, such as candlestick, line, bar, side bar, and pie charts. This allows the frontend to dynamically fetch and display data based on user interactions.
   - **Data Models:** Defined models to structure the data efficiently, making it easy to perform CRUD operations and manage relationships between different data entities.

3. **Integration and Testing:**
   - **API Integration:** Ensured seamless integration between the frontend and backend by carefully designing API endpoints and using Axios to handle data fetching and state updates.
   - **Testing:** Incorporated unit and integration tests to validate the functionality of both frontend components and backend APIs, ensuring reliability and robustness of the application.

### Summary

The approach focused on creating a seamless and scalable application by leveraging modern technologies and best practices. The separation of concerns between frontend and backend was crucial in building a maintainable and extensible application. The thoughtful integration of various tools and libraries aimed to deliver a high-quality user experience and robust data management capabilities.

## Dependencies

This project uses the following main libraries and tools:

### Core Dependencies

- **Next.js:** Framework for server-side rendering React applications.
- **React:** Library for building user interfaces.
- **React-DOM:** Library for working with the DOM in React.
- **Tailwind CSS:** Utility-first CSS framework.
- **Lucide React:** Collection of icons for React applications.
- **Class Variance Authority:** Tool for managing class names.
- **Radix UI:** Component library for accessible UI components.
- **Axios:** Promise-based HTTP client.

### Development Dependencies

- **TypeScript:** Typed superset of JavaScript.
- **PostCSS:** Tool for transforming CSS with JavaScript plugins.
- **ESLint:** Linter for identifying and fixing problems in code.
- **Tailwind CSS Plugins:** Extensions for Tailwind CSS functionalities.
