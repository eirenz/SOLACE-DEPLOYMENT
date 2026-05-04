# Solace API Documentation

The Solace API is a RESTful service that handles all core business logic, authentication, and database interactions.

**Base URL:** `https://solace-api-n00h.onrender.com/api`

## 🔐 Authentication
All requests (except login/register) require a Bearer Token in the Authorization header.

- **POST `/auth/login`**: Authenticate a user and receive a JWT.
- **POST `/auth/register`**: Create a new student account.
- **POST `/auth/refresh`**: Use a valid refresh cookie to receive a new access token.
- **POST `/auth/forgot-password`**: Request a 6-digit OTP (logged to console in demo mode).

---

## 👤 User Management (Admin Only)
- **GET `/admin/users`**: Retrieve all registered users.
- **GET `/admin/users/:id`**: Get detailed profile of a specific user.
- **PUT `/admin/users/:id`**: Update user details or role.
- **DELETE `/admin/users/:id`**: Remove a user from the platform.

---

## ✉️ Notifications & Messaging
- **POST `/admin/notifications/bulk`**: Send a support message to a specific priority group.
- **POST `/admin/notifications/individual`**: Send a targeted message or warning to a single user.
- **GET `/notifications`**: Retrieve a list of notifications for the currently logged-in user.

---

## 📅 Appointments
- **GET `/appointments`**: List all appointments for the current user (Student or Counselor).
- **POST `/appointments`**: Book a new appointment.
- **PATCH `/appointments/:id`**: Update appointment status (e.g., Confirm, Cancel, Complete).

---

## 📓 Journals & Moods
- **POST `/journals`**: Create a new journal entry.
- **GET `/journals`**: Retrieve history of journal entries.
- **POST `/checkins`**: Submit a quick mood check-in.
- **GET `/admin/analytics/moods`**: (Admin) View aggregated mood data for all students.
