# Accurate Traffic Data / ATD Analysis

A full-stack responsive React and Express website for a traffic data analysis company. The design is inspired by professional traffic-data service websites while using original implementation, copy, layout, and styling.

## Tech Stack

- React.js + Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- Node.js + Express.js
- MongoDB + Mongoose
- Nodemailer contact notifications

## Project Structure

```text
client/
  src/
    components/
    pages/
    data/
    App.jsx
    main.jsx
    index.css
server/
  server.js
  models/Contact.js
  routes/contactRoutes.js
  .env.example
```

## Setup

Install frontend dependencies:

```bash
cd client
npm install
npm run dev
```

Install backend dependencies:

```bash
cd server
npm install
copy .env.example .env
npm run dev
```

Update `server/.env` with your MongoDB connection string and SMTP credentials.

## API

`POST /api/contact`

Required fields:

- `name`
- `email`
- `serviceRequired`
- `projectDetails`

The API saves the submission to MongoDB and sends an email notification when SMTP settings are configured.
