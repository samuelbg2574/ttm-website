"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
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
            About Us
          </div>

          <h1
            className="cs-hero-headline"
            data-hero-item
            style={{ "--hero-delay": "0.15s" } as React.CSSProperties}
          >
            <span className="hero-v2-line-light">The people</span>
            <span className="hero-v2-line-bold">behind it.</span>
          </h1>

          <p
            className="hero-v2-lead"
            data-hero-item
            style={{ "--hero-delay": "0.28s" } as React.CSSProperties}
          >
            TTM Tutoring was built on a single conviction — that the right
            tutor, matched with care and overseen with diligence, changes the
            trajectory of a student&rsquo;s education.
          </p>

          <div
            className="hero-v2-actions"
            data-hero-item
            style={{ "--hero-delay": "0.38s" } as React.CSSProperties}
          >
            <Link className="button button-primary" href="/#contact">
              Arrange a Consultation
            </Link>
            <Link className="button button-secondary" href="/services">
              Our Services
            </Link>
          </div>

        </div>

        {/* ── Right: Portrait ──────────────────────────── */}
        <figure
          className="about-hero-portrait"
          data-hero-item
          style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
        >
          <Image
            fill
            src="https://images.pexels.com/photos/6694542/pexels-photo-6694542.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="A tutor working closely with a student in a calm, focused setting."
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </figure>

      </div>
    </section>
  );
}
