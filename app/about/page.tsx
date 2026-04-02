import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/sections/about-hero";
import { FounderProfileCard } from "@/components/ui/founder-profile-card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TTM Tutoring was founded on the conviction that thoughtful tutor matching and ongoing oversight produce better outcomes than volume tutoring ever can.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <AboutHero />

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section className="section section-tight">
        <div className="container statement-grid" data-reveal>
          <div className="statement-copy">
            <p className="statement-lead">
              Most tutoring services optimise for scale. TTM optimises for
              match — the point at which a student&rsquo;s specific learning
              profile, subject gaps, and working style meet a tutor who can
              address all three at once.
            </p>
          </div>
          <blockquote className="editorial-quote">
            <p>
              &ldquo;The mediocre teacher tells. The good teacher explains. The
              superior teacher demonstrates. The great teacher inspires.&rdquo;
            </p>
            <cite>William Arthur Ward</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Meet the Founder ─────────────────────────────────────────────── */}
      <section className="section about-founder-section" data-reveal>
        <div className="container">
          <div className="about-founder-header">
            <p className="eyebrow">Meet the Founders</p>
            <h2>Built by people who have tutored.</h2>
          </div>
          <FounderProfileCard />
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────────────── */}
      <section className="section section-soft" data-reveal>
        <div className="container about-values-grid">

          <div className="about-values-copy">
            <p className="eyebrow">How We Work</p>
            <h2>A higher standard at every stage.</h2>
            <p>
              From the first consultation to the final progress review, TTM
              applies the same precision to process as we expect of our tutors
              in the classroom.
            </p>
          </div>

          <div className="feature-list about-values-list">
            <article className="feature-line">
              <h3>Exact-match tutor placement</h3>
              <p>
                We invest time in finding the right tutor — not just the next
                available one. Subject knowledge, communication style, and
                availability are all considered before any introduction is made.
              </p>
            </article>
            <article className="feature-line">
              <h3>Ongoing educational oversight</h3>
              <p>
                Our involvement does not end at placement. We monitor progress,
                collect feedback, and adjust the plan as the student develops
                — because a good plan in October may need refining by January.
              </p>
            </article>
            <article className="feature-line">
              <h3>Global standards, personal attention</h3>
              <p>
                We work across UK, IB, and international curricula while
                remaining focused on the individual — never applying a generic
                method when a specific one is better.
              </p>
            </article>
            <article className="feature-line">
              <h3>Discretion and flexibility</h3>
              <p>
                Families come to us when timing, privacy, and continuity all
                matter at once. We adapt to your schedule, your location, and
                your level of involvement.
              </p>
            </article>
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section section-dark" id="contact">
        <div className="container about-cta" data-reveal>
          <p className="eyebrow eyebrow-on-dark">Get In Touch</p>
          <h2>Ready to find the right tutor?</h2>
          <p>
            Tell us about your child, the subject, and what you&rsquo;re hoping
            to achieve. We&rsquo;ll take care of the rest.
          </p>
          <div className="button-row">
            <a
              className="button button-light"
              href="mailto:toptiermathematics@gmail.com"
            >
              toptiermathematics@gmail.com
            </a>
            <Link className="button button-ghost-light" href="/case-studies">
              View Results
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
