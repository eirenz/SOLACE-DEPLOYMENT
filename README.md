# SOLACE — Mental Health Tracking & Counseling Platform

<div align="center">

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![React](https://img.shields.io/badge/React-19-61dafb.svg?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg?logo=node.js)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748.svg?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791.svg?logo=postgresql)
![Socket.io](https://img.shields.io/badge/RealTime-Socket.io-010101.svg?logo=socket.io)

**A secure, compassionate platform bridging students with mental health resources, anonymous peer support, and licensed guidance counselors.**

[Live Demo](https://solace-deployment.vercel.app) • [Frontend](frontend/) • [Backend](backend/)

</div>

---

## 🌟 Overview

**Project SOLACE** is a comprehensive full-stack mental health platform designed specifically for academic environments. It provides students with a private, judgment-free space to track their emotional wellness, reflect through journaling, engage in anonymous peer-support communities, and seamlessly connect with registered guidance counselors for structured appointments or real-time support chats.

---

## ✨ Key Features

### 🌿 Student Wellness Hub
- **Daily Mood Check-ins:** Log emotional states with contextual tags, reflections, and track monthly wellness progression.
- **Private Journaling:** Encrypted personal journal entries for private reflection and mental clarity.
- **Safe Space Community:** Share thoughts and experiences anonymously, participate in discussions, and receive supportive peer reactions.
- **Anonymous Identity (Pseudonyms):** Automatic generation of secure pseudonyms/aliases to ensure student anonymity when engaging in community discussions and booking appointments.

### 🤝 Counseling & Support Services
- **Counselor Directory:** Browse licensed counselors, view specializations, office hours, and availability.
- **Flexible Appointment Modes:** Book sessions tailored to student comfort — *Listen-Only* (empathetic listening without pressure) or *Advice & Recovery* (guided counseling and action plans).
- **Real-Time Live Chat:** Secure WebSocket-powered one-on-one instant messaging sessions between students and assigned counselors.

### 🛡️ Counselor & Administrative Suite
- **Counselor Dashboard:** Manage incoming student appointments, track caseloads, view appointment histories, and respond to live chat requests.
- **Admin Analytics:** Oversee system metrics, analyze student wellness trends across departments, and coordinate proactive support outreach.
- **Role-Based Access Control (RBAC):** Strict permissions separating `STUDENT`, `COUNSELOR`, and `ADMIN` capabilities.

---

## 🏗️ Architecture & Tech Stack

```
SOLACE/
├── frontend/             # React 19 Single-Page Application (Vite)
│   ├── src/
│   │   ├── api/          # Axios & WebSocket client instances
│   │   ├── components/   # Reusable UI components & modals
│   │   ├── features/     # Feature-sliced modules (auth, student, counselor, admin)
│   │   └── store/        # Zustand global state management
│   └── vercel.json       # SPA routing configuration
│
└── backend/              # Node.js Express REST API & WebSocket Server
    ├── prisma/           # Database schema & seed definitions
    └── src/
        ├── config/       # Environment & database configurations
        ├── controllers/  # API request handlers
        ├── middleware/   # JWT auth, RBAC, error handling, rate limiting
        ├── routes/       # Express route declarations
        └── server.js     # Server entry point & Socket.io handler
```

### Technologies

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, React Router v7, Zustand, TanStack Query, Lucide Icons |
| **Backend** | Node.js, Express 5, Socket.io, Prisma ORM, Bcrypt, Helmet, Morgan |
| **Database** | PostgreSQL (Supabase / Neon) |
| **Hosting** | Vercel (Frontend), Render (Backend) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **PostgreSQL** database instance (local or hosted via Supabase/Neon)

---

### 1. Clone the Repository
```bash
git clone https://github.com/eirenz/SOLACE-DEPLOYMENT.git
cd SOLACE-DEPLOYMENT
```

---

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/solace_db"
JWT_ACCESS_SECRET="your_jwt_access_secret"
JWT_REFRESH_SECRET="your_jwt_refresh_secret"
JWT_ACCESS_EXPIRY="2h"
JWT_REFRESH_EXPIRY="7d"
FRONTEND_URL="http://localhost:5173"
NODE_ENV="development"
```

Initialize the database schema and start the backend:
```bash
npx prisma db push
npm run dev
```

---

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:
```env
VITE_API_BASE_URL="http://localhost:5000/api"
VITE_GOOGLE_CLIENT_ID=""
```

Start the Vite development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔒 Security & Privacy

- **Data Privacy:** Passwords are cryptographically hashed using `bcryptjs` with salt rounds.
- **Session Management:** Secure JWT tokens with configurable expiration and HTTP-only cookie support.
- **Strict CORS & Headers:** Enforced via `helmet` and strict origin policies for API endpoints and WebSockets.
- **Student Anonymity:** Personal identifiers are never exposed on public community feeds or anonymous bookings.

---

## 📄 License

This project is licensed under the ISC License.
