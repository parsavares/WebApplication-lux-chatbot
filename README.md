# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify


This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

=======

﻿# Luxembourgish Language Learning Web Application (LLL)

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

## Project Structure (base)

>>>>>>> luxtutor-front/my-app

Here is an overview of the project directory structure:

my-app/

├── node_modules/

├── public/

├── src/

│   ├── assets/

│   │   ├── luxembourgFlag.jpg

│   │   └── uni.svg

│   ├── components/

│   │   ├── Footer.tsx

│   │   ├── Header.tsx

│   │   ├── MainContent.tsx

│   │   ├── Signup.tsx

│   │   └── SignIn.tsx

│   ├── App.tsx

│   ├── index.css

│   ├── index.tsx

│   ├── logo.svg

│   ├── react-app-env.d.ts

│   ├── reportWebVitals.ts

│   └── setupTests.ts

├── tailwind.config.js

├── package.json

├── tsconfig.json

├── postcss.config.js

├── README.md

├── package-lock.json

└── .gitignore


>>>>>>> luxtutor-front/my-app

## Contact

If you have any questions or need further assistance, please feel free to contact us:

- Parsa Vares: [parsa.vares@uni.lu](mailto:parsa.vares@uni.lu)
- Othmane Mahfoud: [othmane.mahfoud.001@student.uni.lu](mailto:othmane.mahfoud.001@student.uni.lu)

***

Thank you for using the Luxembourgish Language Learning web application!
