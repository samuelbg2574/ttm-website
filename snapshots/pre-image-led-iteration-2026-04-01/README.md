# TTM Tutoring Website

Two-page premium private tuition marketing site built as a lightweight static front-end.

## Files

- `index.html`: redesigned home page
- `case-studies.html`: redesigned proof and credibility page
- `assets/styles.css`: shared design system, responsive layout, and motion
- `assets/site.js`: progressive enhancement for reveal and ripple interactions
- `snapshots/pre-redesign-2026-04-01/`: full rollback snapshot of the site before the redesign

## Edit

- Update page copy directly in `index.html` and `case-studies.html`
- Update shared layout sections in both page files because the header and footer are now static markup
- Adjust colors, spacing, typography, and motion rules in `assets/styles.css`
- Adjust progressive enhancement behavior in `assets/site.js`

## Preview locally

Run a simple static server from the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Roll Back To The Previous Version

The full pre-redesign site is stored in `snapshots/pre-redesign-2026-04-01/`.

Restore it with:

```bash
cp snapshots/pre-redesign-2026-04-01/index.html ./index.html
cp snapshots/pre-redesign-2026-04-01/case-studies.html ./case-studies.html
cp snapshots/pre-redesign-2026-04-01/README.md ./README.md
cp snapshots/pre-redesign-2026-04-01/assets/styles.css ./assets/styles.css
cp snapshots/pre-redesign-2026-04-01/assets/site.js ./assets/site.js
```

## Deploy

This is a static site. You can deploy the project root directly to:

- Netlify
- Vercel static hosting
- Cloudflare Pages
- GitHub Pages

No build step is required.

## Contact Note

The site still uses the current enquiry email address in the page markup. Replace it in `index.html` and `case-studies.html` if you want to launch with a different contact address.
