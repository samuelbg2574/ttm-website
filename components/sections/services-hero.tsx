"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { num: "01", title: "Travelling Tuition", href: "/services#travelling" },
  { num: "02", title: "Hourly Tuition",     href: "/services#hourly" },
  { num: "03", title: "Online Tuition",     href: "/services#online" },
  { num: "04", title: "Homeschool Guidance", href: "/services#homeschool" },
];

export function ServicesHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="cs-hero" {...(loaded ? { "data-loaded": "" } : {})}>
      <div className="container cs-hero-grid">

        {/* ── Left: Copy ───────────────────────────────── */}
        <div className="cs-hero-copy">

          <div
            className="hero-v2-badge"
            data-hero-item
            style={{ "--hero-delay": "0.05s" } as React.CSSProperties}
          >
            Our Services
          </div>

          <h1
            className="cs-hero-headline"
            data-hero-item
            style={{ "--hero-delay": "0.15s" } as React.CSSProperties}
          >
            <span className="hero-v2-line-light">Tuition shaped</span>
            <span className="hero-v2-line-bold">around you.</span>
          </h1>

          <p
            className="hero-v2-lead"
            data-hero-item
            style={{ "--hero-delay": "0.28s" } as React.CSSProperties}
          >
            Four distinct service formats — each applying the same standard of
            tutor matching, careful planning, and close oversight to a different
            family situation.
          </p>

          <div
            className="hero-v2-actions"
            data-hero-item
            style={{ "--hero-delay": "0.38s" } as React.CSSProperties}
          >
            <Link className="button button-primary" href="/#contact">
              Arrange a Consultation
            </Link>
          </div>

        </div>

        {/* ── Right: Service nav list ───────────────────── */}
        <nav
          className="services-hero-nav"
          aria-label="Jump to service"
          data-hero-item
          style={{ "--hero-delay": "0.12s" } as React.CSSProperties}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="services-hero-nav-item"
            >
              <span className="services-hero-nav-num">{item.num}</span>
              <span className="services-hero-nav-title">{item.title}</span>
              <span className="services-hero-nav-arrow" aria-hidden>↗</span>
            </Link>
          ))}
        </nav>

      </div>
    </section>
  );
}
