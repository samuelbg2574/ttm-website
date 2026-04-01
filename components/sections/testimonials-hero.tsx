"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function TestimonialsHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      sectionRef.current?.setAttribute("data-loaded", "");
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={sectionRef} className="testi-hero">
      <div className="container testi-hero-content">

        <div
          className="hero-v2-badge"
          data-hero-item
          style={{ "--hero-delay": "0.05s" } as React.CSSProperties}
        >
          Testimonials
        </div>

        <h1
          className="testi-hero-headline"
          data-hero-item
          style={{ "--hero-delay": "0.15s" } as React.CSSProperties}
        >
          <span className="hero-v2-line-light">What families</span>
          <span className="hero-v2-line-bold">say.</span>
        </h1>

        <p
          className="testi-hero-lead"
          data-hero-item
          style={{ "--hero-delay": "0.28s" } as React.CSSProperties}
        >
          Every result on this site came from a family who trusted us with
          something important. These are their words.
        </p>

        <div
          className="hero-v2-actions"
          data-hero-item
          style={{ "--hero-delay": "0.38s" } as React.CSSProperties}
        >
          <Link className="button button-primary" href="/#contact">
            Arrange a Consultation
          </Link>
          <Link className="button button-secondary" href="/case-studies">
            View Case Studies
          </Link>
        </div>

      </div>
    </section>
  );
}
