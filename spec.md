# KK Euro Express Courier Service

## Current State
Admin panel at /admin requires Internet Identity login + admin role. When logged in without admin role, shows "Access Denied" with a token claim form. User cannot claim admin because no token is available in Caffeine dashboard.

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- Backend: Remove admin-only restriction from `getAllInquiries` — allow any authenticated (non-anonymous) caller to view inquiries
- Frontend: Remove the "Access Denied" state and token-claim form from AdminPage — when logged in, directly show inquiries

### Remove
- Token-based admin claim UI from AdminPage
- Access denied state from AdminPage

## Implementation Plan
1. Update `getAllInquiries` in main.mo to only check caller is not anonymous
2. Update AdminPage.tsx to remove unauthorized/claim flow — show inquiries for any logged-in user
