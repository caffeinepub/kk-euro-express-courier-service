# Specification

## Summary
**Goal:** Promote KK Euro Express’s Instagram profile from the Home page video section and the site footer.

**Planned changes:**
- Update `VideoSection.tsx` copy to “Watch our videos on Instagram” and add a clear outbound link/button to `https://instagram.com/kkeuroexpress_banga` that opens in a new tab with `rel="noopener noreferrer"`.
- Add a footer link in `SiteFooter.tsx` labeled in English (e.g., “Instagram: @kkeuroexpress_banga”) pointing to `https://instagram.com/kkeuroexpress_banga`, opening in a new tab with `rel="noopener noreferrer"`.
- Keep existing video embed and fallback image behavior unchanged, and do not alter existing footer contact details.

**User-visible outcome:** Visitors see a “Watch our videos on Instagram” prompt on the Home page and an Instagram handle link in the footer; both open the `@kkeuroexpress_banga` Instagram profile in a new tab.
