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

#### 5. Final Demo Readiness & System Hardening (May 4, 2026)
- **JWT Demo Extension:** Increased `JWT_ACCESS_EXPIRY` to `2h` to prevent mid-presentation logouts.
- **Neon Warm-up Logic:** Modified `/api/health` to perform a `SELECT 1` query to keep the database active during UptimeRobot pings.
- **Forgot Password Flow:**
    - Fully implemented 6-digit OTP UI (frontend) and logic (backend).
    - Added a functional countdown timer for resending codes.
    - **Note:** Due to Render's free tier SMTP blocks, the system now falls back to logging the OTP securely to the Render console for demo verification.
- **Validation Documentation:** Created `SYSTEM_VALIDATION_GUIDE.md` containing database queries, logs troubleshooting, and FAQ answers for the presentation panel.

---

### Status: Ready for Demo
- **Deployment:** All fixes are live on `solace-deployment.vercel.app`.
- **Database:** Neon DB is active and synced.
- **Documentation:** `SYSTEM_VALIDATION_GUIDE.md` is ready for review.

### Future Tasks (Post-Presentation)
1. **SMTP Integration:** Move from Gmail SMTP to Resend API or SendGrid for more reliable production email delivery on cloud hosting.
2. **Registration Verification:** Add a mandatory "Email Verification" step during sign-up to prevent fake account creation.
3. **Admin Dashboard Analytics:** Expand the Analysis Reports to include graphical trends of mood scores over time.
