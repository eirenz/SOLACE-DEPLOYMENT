# Admin Mobile UI Polish

Fix all admin pages so every element fits within the mobile viewport — no horizontal scrolling required.

## Issues Identified from Screenshots

| Page | Issue |
|---|---|
| **Counselors List** | Email column gets cut off. Table overflows right. |
| **Appointments** | "Search" tab text gets cut off at the edge. |
| **Dashboard (User list)** | "Status" column overflows right. |
| **Flag Content** | "Review User Report" heading too large. Layout otherwise OK. |
| **User Monitoring (Analysis)** | Stat cards overflow right ("Moderate U..." cut off). "Emotional Trend" heading too big. |

## Proposed Changes

### [MODIFY] CounselorList.jsx
- On mobile, replace the table with **stacked card rows** (name + email vertically) instead of a 2-column table.

### [MODIFY] AdminDashboard.jsx
- On mobile, replace the user management table with **stacked card rows** so "Status" badge doesn't overflow.

### [MODIFY] AdminAppointments.jsx
- Ensure the filter tabs ("Today", "Upcoming", "Completed", "All", "Search") wrap within the viewport width. Reduce font sizes and padding on mobile.

### [MODIFY] FlagContent.jsx
- Reduce "Review User Report" heading font size on mobile. Ensure table fits.

### [MODIFY] AnalysisReports.jsx
- Change stat cards grid from horizontal overflow to a `2x2` grid that fits within viewport.
- Reduce heading font sizes on mobile.

## Verification Plan
- Visual check on deployed site using mobile device / browser dev tools.
