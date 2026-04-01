"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      sectionRef.current?.setAttribute("data-loaded", "");
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={sectionRef} className="hero-v2">
      <div className="container hero-v2-grid">

        {/* ── Left: Copy ───────────────────────────────── */}
        <div className="hero-v2-copy">

          <div
            className="hero-v2-badge"
            data-hero-item
            style={{ "--hero-delay": "0.05s" } as React.CSSProperties}
          >
            Private Tuition
          </div>

          <h1
            className="hero-v2-headline"
            data-hero-item
            style={{ "--hero-delay": "0.15s" } as React.CSSProperties}
          >
            <span className="hero-v2-line-light">Personalised</span>
            <span className="hero-v2-line-bold">private tuition.</span>
          </h1>

          <p
            className="hero-v2-lead"
            data-hero-item
            style={{ "--hero-delay": "0.28s" } as React.CSSProperties}
          >
            One-to-one academic support for families who want the right tutor,
            clear educational judgement, and close oversight from the first
            conversation onwards.
          </p>

          <div
            className="hero-v2-actions"
            data-hero-item
            style={{ "--hero-delay": "0.38s" } as React.CSSProperties}
          >
            <Link className="button button-primary" href="#contact">
              Arrange a Consultation
            </Link>
            <Link className="button button-secondary" href="/case-studies">
              Explore Case Studies
            </Link>
          </div>

          <div
            className="hero-v2-tags"
            data-hero-item
            style={{ "--hero-delay": "0.5s" } as React.CSSProperties}
          >
            {[
              { label: "GCSE",             href: "/services#hourly" },
              { label: "A-Level",          href: "/services#hourly" },
              { label: "Homeschool",       href: "/services#homeschool" },
              { label: "SEN",              href: "/services#hourly" },
              { label: "Online & in-person", href: "/services#online" },
            ].map((tag) => (
              <Link key={tag.label} href={tag.href} className="hero-v2-tag">
                {tag.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Right: Image ─────────────────────────────── */}
        <div
          className="hero-v2-media"
          data-hero-item
          style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
        >
          <figure className="hero-v2-figure">
            <Image
              src="/hero-library.jpg"
              alt="Curved library shelves filled with books."
              fill
              className="hero-v2-img"
              priority
            />
            <div className="hero-v2-img-overlay" />
          </figure>

          {/* Floating proof card */}
          <div className="hero-v2-proof">
            <p className="hero-v2-proof-stat">48% → 72%</p>
            <p className="hero-v2-proof-label">GCSE result after 14 weeks</p>
          </div>
        </div>

      </div>
    </section>
  );
}
