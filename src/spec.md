# Specification

## Summary
**Goal:** Replace the Home page VideoSection fallback image so the newly uploaded image is shown when the homepage video cannot be loaded.

**Planned changes:**
- Replace the static asset at `frontend/public/assets/video-fallback.jpeg` with the newly uploaded `image-1.png` content (converted/renamed as needed), keeping the public URL unchanged.
- Keep `frontend/src/components/site/VideoSection.tsx` referencing `/assets/video-fallback.jpeg` with no route or navigation changes.

**User-visible outcome:** If the homepage video fails to load, the site displays the newly uploaded fallback image at the same `/assets/video-fallback.jpeg` URL.
