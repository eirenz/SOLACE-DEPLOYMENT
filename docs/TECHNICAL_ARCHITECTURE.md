# Solace: Technical Architecture & Security

This document outlines the high-level architecture, technology stack, and security protocols implemented in the Solace platform.

## 🏗 System Architecture
Solace follows a decoupled **MERN-like architecture** (using PostgreSQL instead of MongoDB) to ensure scalability and separation of concerns.

- **Frontend:** React.js (Vite) Single Page Application (SPA).
- **Backend:** Node.js & Express REST API.
- **Database:** PostgreSQL (Hosted on Neon) with Prisma ORM.
- **Real-Time:** Socket.io for bidirectional communication.

---

## 💻 Technology Stack

### Core Technologies
- **React 19:** Utilizing the latest functional component patterns and hooks.
- **Prisma:** Modern ORM for type-safe database queries and migrations.
- **Zod:** Schema-based validation for all API requests and environment variables.
- **Zustand:** Lightweight state management for handling authentication and notifications.

### Design System
- **Vanilla CSS:** Custom-built design system with a centralized token palette (`index.css`).
- **Lucide-React:** For consistent, high-quality iconography.
- **Inter & Outfit:** Premium typography choices from Google Fonts.

---

## 🔒 Security Protocols

### Authentication & Authorization
- **JWT (JSON Web Tokens):** Secure, stateless authentication. Access tokens are short-lived, while Refresh Tokens (stored in HTTP-only cookies) allow for secure session extensions.
- **RBAC (Role-Based Access Control):** Granular permission system. Middleware checks ensure that only users with the `ADMIN` role can access the Administrative Suite or bulk messaging endpoints.

### Data Protection
- **Password Hashing:** All passwords and OTPs are hashed using `bcrypt` with a salt factor of 10.
- **Input Sanitization:** All incoming requests are validated via Zod schemas to prevent SQL injection and malformed data entry.
- **Helmet.js:** Implementation of secure HTTP headers to prevent XSS and clickjacking attacks.

---

## 📡 Real-Time Logic (Socket.io)
The system uses a **Room-Based approach** for notifications:
- Each user is automatically joined to a private room based on their `userId` upon login.
- Admins send events to these rooms (e.g., `new_notification`).
- The frontend listener updates the global `useNotificationStore`, which triggers the UI modals.
- **Auto-Reconnect:** Custom logic in `chatSocket.js` detects when a JWT is about to expire and silently refreshes the socket connection to prevent disconnects.

---

## 🌐 Deployment Infrastructure
- **Frontend:** Hosted on **Vercel** with automatic CD (Continuous Deployment) from the `main` branch.
- **Backend:** Hosted on **Render** (Web Service).
- **Database:** **Neon PostgreSQL** (Serverless), offering low latency and auto-scaling capabilities.
