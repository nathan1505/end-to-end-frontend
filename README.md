# Frontend Application

This README provides instructions on how to set up and run the frontend for the end-to-end web application.
![image](https://github.com/user-attachments/assets/e0fb4ff9-b6ef-43e4-a79a-db7aace2c38c)

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Setup Instructions

### 1. Clone the repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/nathan1505/end-to-end-frontend.git
cd your-backend-directory
```

2. **Install Dependencies**
Install all necessary dependencies by running:
```bash
npm install
# Or if you are using Yarn
yarn install
```

3. **Set Environment Variables**
Set up the `REACT_APP_API_URL` environment variable to point to your backend server. This variable will be used within your React application to make API requests.

Create a .env file in the root directory of your project and add the following line:
```bash
REACT_APP_API_URL={BACKEND_URL}
```

Replace `{BACKEND_URL}` with the actual URL of your backend API if it is hosted on a different address.

4. **Build the Application**
To build the application for production, run:
```bash
npm install
# Or if you are using Yarn
yarn install
```
This command compiles the React application into static files for production deployment.

5. **Start the Application**
To start the application locally for development, run:
```bash
npm start
# Or if you are using Yarn
yarn start
```
This will start the development server and open the application in your default web browser.

6. **(Optional) Test the Application**
You can run the Jest script by run:
 ```bash
npm test
# Or if you are using Yarn
yarn test
```
