# TTM Tutoring Website — Project Context

## Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS in `app/globals.css`
- **Components**: shadcn/ui (`components.json` at root)
- **Fonts**: Outfit (body) + IBM Plex Mono (mono), loaded via `next/font/google`
- **Deployment**: Vercel — auto-deploys from `main` on `github.com/samuelbg2574/ttm-website`

## Project Structure
```
app/
  layout.tsx              # Root layout — Header, Footer, ScrollReveal, ScrollToTop
  page.tsx                # Home page
  globals.css             # All custom CSS (no CSS modules)
  services/               # /services page
  testimonials/           # /testimonials page
  case-studies/
    page.tsx              # /case-studies index
    [slug]/               # Individual case study detail pages

components/
  layout/
    header.tsx
    footer.tsx
  providers/
    scroll-reveal.tsx     # IntersectionObserver for [data-reveal] elements
  sections/               # Page-specific hero + content sections
    hero.tsx
    services-hero.tsx
    case-studies-hero.tsx
    testimonials-hero.tsx
  ui/                     # Reusable UI primitives
    gallery-hover-carousel.tsx  # From 21st.dev — used in services section
    scroll-to-top.tsx
    button.tsx
    card.tsx
    carousel.tsx
```

## Key CSS/Animation Patterns

### Hero load-in animation
All hero sections use a `data-loaded` attribute on the `<section>` to trigger CSS entry animations on child `[data-hero-item]` elements.

**Always use `useState` for this — never `useRef` + `setAttribute`:**
```tsx
const [loaded, setLoaded] = useState(false);

useEffect(() => {
  setLoaded(false);
  const t = setTimeout(() => setLoaded(true), 80);
  return () => clearTimeout(t);
}, []);

// JSX:
<section className="..." {...(loaded ? { "data-loaded": "" } : {})}>
```
The empty dependency array is intentional — the reset to `false` then `true` on each render ensures the animation re-fires on client-side navigation. Using `setAttribute` instead would break navigation because React may keep the component mounted without re-running the effect.

### Scroll reveal
Elements with `[data-reveal]` are observed by `ScrollReveal` (`components/providers/scroll-reveal.tsx`) and get `is-visible` added when they enter the viewport. The observer is keyed to `usePathname()` so it re-runs on every route change. Always store the observer in `useRef` and disconnect at the top of the effect, not inside nested callbacks.

### CSS breakpoints (mobile-first additions in `globals.css`)
- `1100px` — two-column → single-column layout shifts
- `900px` — hero grid collapses
- `820px` — header/nav adjustments
- `720px` — tablet tweaks
- `640px` — further stacking, full-width buttons
- `480px` — small phone overrides (font sizes, container padding, touch targets)

Hamburger and scroll-to-top buttons must have a minimum touch target of `2.75rem`.

## Viewport Meta
Set via Next.js export pattern in `app/layout.tsx`, not a raw `<meta>` tag:
```tsx
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
```

## Common Commands
```bash
npm run dev       # local dev server
npx next build    # production build + lint check
```
Always run `npx next build` before pushing to verify no type errors or lint failures.
