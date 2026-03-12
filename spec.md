# KK Euro Express Courier Service

## Current State
The website has a contact form on /contact that stores inquiries in the backend. The backend already has `getAllInquiries()` (admin-only) and `submitInquiry()` (public). There is an authorization system with admin/user roles. No admin panel exists to view inquiries.

## Requested Changes (Diff)

### Add
- Admin page at /admin route showing all customer inquiries
- Login prompt for unauthenticated users on /admin
- Hook `useGetAllInquiries` that calls `actor.getAllInquiries()`
- Admin link in site nav (visible only when logged in as admin, or always visible as subtle link)
- Each inquiry displayed as a card: name, emailOrPhone, subject, message, timestamp
- Empty state when no inquiries exist

### Modify
- App.tsx: add /admin route
- SiteLayout or nav: add subtle Admin link

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/hooks/useGetAllInquiries.ts` using react-query to call `actor.getAllInquiries()`
2. Create `src/frontend/src/pages/AdminPage.tsx` with inquiry list, login wall, empty state
3. Update `App.tsx` to register /admin route
4. Add subtle "Admin" nav link to SiteLayout
