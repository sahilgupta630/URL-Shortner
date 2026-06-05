# URL Shortener Project
![GitHub repo size](https://img.shields.io/github/repo-size/sahilgupta630/URL-Shortner)
![GitHub contributors](https://img.shields.io/github/contributors/sahilgupta630/URL-Shortner)
![GitHub stars](https://img.shields.io/github/stars/sahilgupta630/URL-Shortner?style=social)

Author: Sahil Gupta (@sahilgupta630)

## Overview
This project is a scalable, modern URL Shortener application built utilizing the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). It permits users to effortlessly shorten URLs, comprehensively view realtime analytics, and centrally manage shortened references within a personal workspace.

### Key Features:
- **Secure Authentication**: End-to-end user verification using JWT.
- **Fast URL Shortening**: Rapid creation and deployment of abbreviated links.
- **Analytics Dashboard**: Interactive line-graph analytics to gauge precise traction for 5 minutes, 1 hour, and 24 hours constraints.
- **Workspace Protection**: Personal route dashboards (`/workspace`) requiring validated tokens.
- **Seamless UX**: Asynchronous data rendering and quick-copy functionality for newly created URLs.
- **Robust Error Handling**: Centralized API error middleware processing dynamic frontend alerts.

---

## Architecture & Infrastructure
This repository incorporates:
* Global error handling inside standard Express middleware routes.
* Fully mapped API routing structures (`/routes/authRoutes.js` and `/routes/urlRoutes.js`).
* Containerization Support (`Dockerfile` & `docker-compose.yml`).
* Prettier and EditorConfig standardizations.

## API Documentation

| Endpoint | Method | Description |
|---|---|---|
| `/api/user` | GET | Retrieve user-specific shortened URLs |
| `/api/user` | POST | Automatically shorten a submitted standard URL |
| `/:shortid` | GET | Redirects client to the original mapped URL and registers a click |
| `/:shortid` | DELETE | Delete a specific Short URL |
| `/analytics/:shortid` | GET | Fetch advanced click analysis for a URL |
| `/signup` | POST | Register a new user account |
| `/login` | POST | Retrieve a JWT for an active user |

---

## Installation and Running Locally

### Option 1: Using Docker (Recommended)
You can launch the entire stack via Docker Compose:
1. Ensure Docker Desktop is active.
2. Build and spin up the containers:
   `docker-compose up --build -d`
3. Access the frontend app at `http://localhost:3000`.

### Option 2: Manual Installation
#### Backend (`NodeJS` / `Express` / `MongoDB`)
1. Clone the repository: `git clone https://github.com/sahilgupta630/URL-Shortner.git`
2. Navigate to backend: `cd backend`
3. Install dependencies: `npm install`
4. Setup environment: Copy `.env.example` as `.env` and fill out MongoDB `URI`.
5. Run server: `npm start` (Runs on Port 8000).

#### Client (`ReactJS`)
1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Make sure the backend server runs.
4. Run standard local dev: `npm start` (Runs on Port 3000).

> **Note**: Both services utilize cross-origin mapping. If modifying development ports, ensure the specific routes in CORS configuration (`backend/index.js`) are adjusted properly.
