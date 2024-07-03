# Luxembourgish Language Learning Web Application (LLL)

This repository contains the front-end part for the Luxembourgish Language Learning (LLL) web application. The application aims to help users learn the Luxembourgish language through various interactive features.

## Description

The Luxembourgish Language Learning web application provides users with a platform to learn and practice the Luxembourgish language. The front-end part of this project is built using React, TypeScript, and TailwindCSS to ensure a modern, responsive, and maintainable user interface.

## Features

- Interactive language learning modules
- Responsive design
- User-friendly interface
- Integration with backend APIs

## Prerequisites

To run this project locally, you need to have the following software installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/othmane-mahfoud/luxtutor-front.git
    cd luxtutor-front
    cd my-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up TailwindCSS**:

    Ensure your `tailwind.config.js` file looks like this:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    Ensure your `src/index.css` file includes the TailwindCSS directives:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Running the Application

Follow these steps to run the application in Visual Studio Code:

1. **Open the project in Visual Studio Code**:

    ```bash
    code .
    ```

2. **Start the development server**:

    In the integrated terminal of Visual Studio Code, run the following command:

    ```bash
    npm start
    ```

3. **Open the application in your browser**:

    Once the development server is running, open your browser and navigate to `http://localhost:3000`.

## Project Structure

Here is an overview of the project directory structure:

luxtutor-front/

├── node_modules/

├── public/

├── src/

│ ├── assets/

│ │ ├── luxembourgFlag.gif

│ │ ├── luxembourgFlag.jpg

│ │ └── uni.svg

│ ├── components/

│ │ ├── Signup.tsx

│ │ ├── Footer.tsx

│ │ ├── Header.tsx

│ │ └── MainContent.tsx

│ ├── App.tsx

│ ├── index.css

│ ├── index.tsx

│ ├── logo.svg

│ ├── react-app-env.d.ts

│ ├── reportWebVitals.ts

│ └── setupTests.ts

├── tailwind.config.js

├── package.json

├── tsconfig.json

├── postcss.config.js

├── README.md

├── package-lock.json

└── .gitignore



## Contact

If you have any questions or need further assistance, please feel free to contact us:

- Parsa Vares: [parsa.vares@uni.lu](mailto:parsa.vares@uni.lu)
- Othmane Mahfoud: [othmane.mahfoud.001@student.uni.lu](mailto:othmane.mahfoud.001@student.uni.lu)

***

Thank you for using the Luxembourgish Language Learning web application!
