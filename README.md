# Demo App

A demo repository containing two independent assessments:

- `backend`: An Express API for creating and managing notes.
- `landingpage`: A React and Material UI application with responsive dashboard, login, sell, and 404 pages.

## Tasks accomplished

### Backend

- Create, read, update, and delete note endpoints
- Html frontend to interact with the endpoints

### Landing Page

- Fixed dimension and ui for 404, login, dashboard and sell page
- Made the sell page ui look cleaner and made it fit for desktop, tablet and phone

## Project Structure

```text
.
├── backend/
│   ├── app.js
│   ├── package.json
│   └── public/
├── landingpage/
│   ├── package.json
│   ├── server.js
│   ├── public/
│   └── src/
└── README.md
```

## Demo Videos

- [Landing page demo](videos/LandingPage.mp4)
- [Notes backend demo](videos/Notes.mp4)

## Requirements

- Node.js and npm
- A modern web browser

## Getting Started

Clone the repository and move into the project directory:

```bash
git clone https://github.com/NubSh0t/Demo.git
cd Demo
```

### Run the Backend

Install the backend dependencies and start the Express API:

```bash
cd backend
npm install
node app.js
```

The backend runs on:

```text
http://localhost:5000
```

### Run the Landing Page

Open a new terminal, then install the landing page dependencies and start the application:

```bash
cd landingpage
npm install
npm start
```

The React development server is available at:

```text
http://localhost:3000
```

or (if the 3000 port is not available)

```text
http://localhost:3001
```

The landing page package also starts its local Express server on port `5025`.
