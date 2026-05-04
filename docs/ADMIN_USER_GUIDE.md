# Solace Admin Suite: User Guide

Welcome to the Solace Administrative Management Suite. This guide provides instructions on how to manage students, counselors, and system-wide support communications.

## 👥 User Management
The **User Management** module is the central hub for overseeing all platform participants.

### Managing Students
- **View Profiles:** Click on any student row to see their full profile, including contact details and current status.
- **Role Elevation:** Admins can promote a `Student` to a `Counselor` or `Admin` role via the edit modal.
- **Account Status:** Deactivate or reactivate accounts to manage access during disciplinary or administrative actions.

### Managing Counselors
- **Counselor List:** View all active counselors and their assigned specialties.
- **Profile Updates:** Update counselor credentials and bios to ensure students see accurate information when booking appointments.

---

## 📈 Analysis & Support Reports
The **Analysis Reports** module uses data-driven insights to help you prioritize student care.

### Priority Groups
The system automatically categorizes students into three priority levels based on their most recent mood check-ins:
1. **Normal (Green):** Students reporting stable or positive moods.
2. **Moderate (Yellow):** Students showing signs of stress or declining mood scores.
3. **High Priority (Red):** Students reporting severe distress. These users should be attended to immediately.

### Dynamic Group Messaging
- **How to use:** Click the **"Send Message"** button at the top of a priority group.
- **Feature:** This allows you to send a support message to *every* student in that category simultaneously.
- **Personalization:** The system uses "Mood-Based Presets" to ensure that a student in the "Moderate" group receives a different tone of support than one in the "Normal" group.

---

## 🔔 Real-Time Notifications
The platform utilizes **WebSockets (Socket.io)** to ensure that administrative actions are felt instantly by students.

- **Direct Messages:** When an admin sends a support message, the student receives an instant modal popup, even if they are currently active on another page.
- **Warnings:** Use the "Send Warning" feature for policy violations. These appear as high-visibility alerts on the student's dashboard.
- **Appointment Updates:** Any changes made by counselors or admins to appointment statuses are pushed to the student's notification center in real-time.

---

## 🛠 Troubleshooting for Admins
- **Notification not appearing?** Ensure the student has a stable internet connection. If the connection drops, the system will automatically attempt to reconnect.
- **Data not refreshing?** Click the Solace logo to return to the dashboard, which triggers a fresh data fetch from the backend.
