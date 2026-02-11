# Video Asset Instructions

## Video File Location

The video displayed on the Home page must be placed at:

**File path:** `frontend/public/assets/watch-our-video.mp4`  
**Public URL:** `/assets/watch-our-video.mp4`

## Fallback Image Location

If the video is unavailable, a fallback image will be displayed. The fallback image must be placed at:

**File path:** `frontend/public/assets/video-fallback.jpeg`  
**Public URL:** `/assets/video-fallback.jpeg`

## Recommended Format

- **Video:** MP4 with H.264 codec for broad browser compatibility
- **Image:** JPEG or PNG format

## How to Replace Assets

To replace the video or fallback image without changing code:

1. **Replace the video:**
   - Place your new video file at `frontend/public/assets/watch-our-video.mp4`
   - Ensure it's named exactly `watch-our-video.mp4`
   - The video will be automatically served at `/assets/watch-our-video.mp4`

2. **Replace the fallback image:**
   - Place your new image at `frontend/public/assets/video-fallback.jpeg`
   - Ensure it's named exactly `video-fallback.jpeg`
   - The image will be automatically served at `/assets/video-fallback.jpeg`

## Notes

- Both assets are served as static files by the frontend (no backend hosting)
- The VideoSection component will automatically use the fallback image if the video fails to load
- No code changes are required when swapping assets—just replace the files in place
