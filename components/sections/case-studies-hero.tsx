"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const METRICS = [
  {
    subject: "GCSE Mathematics",
    before: "48%",
    after: "72%",
    detail: "14-week programme",
  },
  {
    subject: "A-Level Chemistry",
    before: "59%",
    after: "76%",
    detail: "Exam preparation",
  },
  {
    subject: "Year 8 Mathematics",
    before: "61%",
    after: "83%",
    detail: "Two-term support",
  },
];

export function CaseStudiesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      sectionRef.current?.setAttribute("data-loaded", "");
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={sectionRef} className="cs-hero">
      <div className="container cs-hero-grid">

        {/* ── Left: Copy ───────────────────────────────── */}
        <div className="cs-hero-copy">

          <div
            className="hero-v2-badge"
            data-hero-item
            style={{ "--hero-delay": "0.05s" } as React.CSSProperties}
          >
            Case Studies
          </div>

          <h1
            className="cs-hero-headline"
            data-hero-item
            style={{ "--hero-delay": "0.15s" } as React.CSSProperties}
          >
            <span className="hero-v2-line-light">The results</span>
            <span className="hero-v2-line-bold">in numbers.</span>
          </h1>

          <p
            className="hero-v2-lead"
            data-hero-item
            style={{ "--hero-delay": "0.28s" } as React.CSSProperties}
          >
            Three students, three subjects, three carefully structured plans —
            and the measurable academic progress that followed each one.
          </p>

          <div
            className="hero-v2-actions"
            data-hero-item
            style={{ "--hero-delay": "0.38s" } as React.CSSProperties}
          >
            <Link className="button button-primary" href="#case-list">
              Read the case studies
            </Link>
            <Link className="button button-secondary" href="/#contact">
              Arrange a Consultation
            </Link>
          </div>

        </div>

        {/* ── Right: Bento proof grid ───────────────────── */}
        <div
          className="cs-hero-bento"
          data-hero-item
          style={{ "--hero-delay": "0.1s" } as React.CSSProperties}
        >
          {/* Portrait image — spans rows 1–2 on the left */}
          <figure className="cs-bento-img">
            <Image
              fill
              src="https://images.pexels.com/photos/6502728/pexels-photo-6502728.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Tutor guiding a student through written work at a desk."
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </figure>

          {/* Stat cards */}
          {METRICS.map((m, i) => (
            <div
              key={m.subject}
              className={`cs-bento-stat cs-bento-stat-${i + 1}`}
            >
              <p className="cs-bento-subject">{m.subject}</p>
              <p className="cs-bento-numbers">
                <span className="cs-bento-before">{m.before}</span>
                <span className="cs-bento-arrow">→</span>
                <span className="cs-bento-after">{m.after}</span>
              </p>
              <p className="cs-bento-detail">{m.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
