# URL Shortener Project
Author: Sahil Gupta (@sahilgupta630)

## Overview
This project is a URL Shortener application built using ReactJS, ExpressJS, NodeJS, and MongoDB. It allows users to shorten URLs, view analytics, manage shortened URLs, and more.

### Features Implemented:
- Authentication using JWT Token
- Creating new shortened URLs
- Deleting a shortened URL
- Viewing analytics with Linegraph for 5 minutes, 1 hour, and 1 day showing the number of clicks
- Protected route for personal dashboard '/workspace'
- Error handling and display during login and signup
- Automatic re-rendering of the page without refreshing
- Copy button to copy the shortURL automatically

## Installation and Running the App

### Backend (ExpressJS, NodeJS, MongoDB):
1. Clone the repository: `git clone https://github.com/sahilgupta630/URL-Shortner.git`
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Set up your MongoDB database and configure the connection in `config.js` or `.env` file.
5. Start the backend server: `npm start` or `node server.js`. This will run the backend server on port 8000.

### Client (ReactJS):
1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Make sure the backend server is running.
4. Start the frontend server: `npm start`. This will run the frontend server on port 3000.
5. Access the application in your browser at `http://localhost:3000`.

### Additional Notes:
- Ensure MongoDB is installed and running before starting the backend server.
- Make sure to handle CORS if the frontend and backend are running on different ports.
- Keep an eye on the console for any errors or logs during the installation and running process.
