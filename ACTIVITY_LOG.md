# Activity Log & Future Tasks

## Date: May 4, 2026
### Summary of Recent Activities

#### 1. Administrative Message Workflow Optimization
- **Dynamic Group Messaging:** Implemented bulk messaging capabilities in `AnalysisReports.jsx` allowing admins to send support messages to entire groups (Normal, Moderate, High Priority) simultaneously.
- **Mood-Based Presets:** Added dynamic message generation that adapts to the recipient's `latestMood`, ensuring support messages are relevant and personalized.
- **State Management Fix:** Resolved a race condition in the Admin `MessageModal` where recipient toggle states were being reset by `useEffect` logic.

#### 2. Real-Time Notification & Interaction System
- **Real-Time Synchronization:** Validated and optimized `useNotificationStore.js` to ensure incoming notifications appear instantly via WebSocket listeners (`new_notification`) without requiring page refreshes.
- **Notification Modals:** Added comprehensive modal handling logic to `MobileNavbar.jsx`, `CounselorPageWrapper.jsx`, and `AdminPageWrapper.jsx`. Notifications for Support Messages, Warnings, and Appointments now trigger the correct overlay modals instead of simply navigating.
- **Mobile Interaction Bug Fix:** Resolved a critical issue on mobile viewports where the notification dropdown would unmount on `mousedown` before a `click` event could fire. Added a `.closest()` check to ignore "outside clicks" that originate from within the dropdown.
- **Build Integrity:** Fixed JSX syntax errors (missing closing brackets and React Fragments) in layout wrappers that were previously blocking Vercel production builds.

#### 3. Pre-Testing Audit & Bug Fixes (May 4, 2026)
- **Critical Bug Fix — Vent Submission Crash:** The `appointment.routes.js` imported `submitVentSchema` but the validator exported `createVentSchema`. This undefined reference caused a 500 error whenever a student tried to submit a vent (Listen-Only). Corrected the import to match the export name.
- **Appointment Notes Silently Stripped:** The `createAppointmentSchema` Zod validator was missing the `notes` field. Since the `validate()` middleware replaces `req.body` with the parsed result, any notes students wrote during booking were being silently discarded. Added `notes` as an optional string field (max 2,000 chars).
- **Forgot Password OTP Not Emailed:** Identified that the OTP for password reset is only logged to the server console (`console.log`) — no email transport (e.g., Nodemailer) is integrated. Documented as a known limitation for testing.
- **Render Cold-Start Delay:** Documented the 30–60 second cold-start delay on Render's free tier for groupmate awareness during testing.

#### 4. Mobile UI Fixes & Platform Stability (May 4, 2026)
- **Email Overflow in Admin User Info Modal (`UserManagement.jsx`):** Long email addresses were breaking out of the container. Applied `word-break: break-all`, `overflow-wrap: break-word`, and `min-width: 0` to fix the layout.
- **Journal Save Button & Emoji Alignment (`Journal.jsx`):** 
    - Added a sticky bottom save bar on mobile for better accessibility.
    - **Emoji Centering:** Refactored the mood selection row to use `justifyContent: 'center'` and `flexWrap: 'wrap'`, ensuring emojis are perfectly centralized on all mobile screen widths instead of left-aligned and scrolling.
- **Rate Limit Adjustment (`rateLimiter.js`):** Resolved the "Too many attempts" blocker by increasing the `authLimiter` from 10 to 50 attempts and the `otpLimiter` from 5 to 15 attempts per 15-minute window. This prevents groupmates from getting locked out during high-frequency testing.
- **Deployment:** Pushed all fixes to the main branch to trigger redeployments on Vercel and Render, clearing existing lockouts and applying the new limits.

---

### To Be Continued (Future Tasks)

#### 1. End-to-End Verification
- [ ] **Production Socket Test:** Perform a live test on the deployed site to ensure the Socket.io connection remains stable across different network conditions.
- [ ] **Cross-Role Flow Test:** Execute the full lifecycle of an admin message:
    1. Admin sends high-priority bulk message.
    2. Student receives real-time notification badge.
    3. Student clicks notification on mobile/desktop.
    4. Student interacts with the support modal (e.g., "Talk to Counselor").
    5. Navigation to the correct destination is confirmed.

#### 2. UI/UX Polishing
- [ ] **Dashboard Alignment:** Audit the mobile dashboard widgets for any overflow or alignment issues, especially the mood range indicators.
- [ ] **Loading States:** Add subtle loading skeletons or spinners for real-time notification fetching to improve perceived performance on slow connections.

#### 3. Platform Stability
- [ ] **Mobile Performance:** Monitor the performance of the full-width notification dropdown on lower-end mobile devices to ensure smooth transitions.
- [ ] **Error Handling:** Implement more robust error boundaries for the notification modals to prevent UI crashes if notification data is malformed.
