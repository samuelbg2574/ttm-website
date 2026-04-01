import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import { HeroSection } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "TTM Tutoring | Carefully Matched Private Tuition",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Statement ────────────────────────────────────────────────────── */}
      <section className="section section-tight">
        <div className="container statement-grid" data-reveal>
          <div className="statement-copy">
            <p className="statement-lead">
              TTM Tutoring is a private tuition service built around thoughtful
              tutor matching, ongoing guidance, and a more exacting standard of
              support than volume tutoring usually allows.
            </p>
          </div>
          <blockquote className="editorial-quote">
            <p>
              &ldquo;Excellence is never an accident. It is always the result of high
              intention, sincere effort, and intelligent execution.&rdquo;
            </p>
            <cite>Aristotle</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Services — GalleryHoverCarousel ──────────────────────────────── */}
      <GalleryHoverCarousel id="services" heading="Our Services" />

      {/* ── Featured Work ─────────────────────────────────────────────────── */}
      <section className="section section-dark" id="proof">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-copy" data-reveal>
              <p className="eyebrow eyebrow-on-dark">Featured Work</p>
              <h2>World-class tutoring tailored to your child&rsquo;s needs.</h2>
              <p>
                The strongest proof is not a slogan but a well-run plan that
                changes how a student works, feels, and performs.
              </p>
              <Link className="button button-light" href="/case-studies">
                View All Case Studies
              </Link>
            </div>

            <div className="featured-cases">
              <article className="featured-case" data-reveal style={{ ["--delay" as string]: "0.08s" }}>
                <p className="mini-label">GCSE Mathematics</p>
                <h3>Rebuilding confidence and closing core gaps in 14 weeks.</h3>
                <p>
                  A Year 11 student working hard but underperforming — anxiety,
                  algebraic gaps, and fragile exam technique holding back real
                  ability.
                </p>
                <Link
                  className="text-link text-link-light"
                  href="/case-studies/gcse-maths"
                >
                  Read case study
                </Link>
              </article>

              <article className="featured-case" data-reveal style={{ ["--delay" as string]: "0.12s" }}>
                <p className="mini-label">A-Level Chemistry</p>
                <h3>Turning consistent effort into exam performance.</h3>
                <p>
                  An Upper Sixth student revising well but scoring in the low B
                  band — the gap between knowledge and marks required a
                  different approach.
                </p>
                <Link
                  className="text-link text-link-light"
                  href="/case-studies/alevel-chemistry"
                >
                  Read case study
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="container why-grid">
          <figure className="why-media" data-reveal>
            <Image
              className="editorial-image"
              src="https://images.pexels.com/photos/33913336/pexels-photo-33913336.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Student working quietly at a study desk with books and a large monitor."
              width={800}
              height={1000}
            />
          </figure>

          <div className="why-copy" data-reveal style={{ ["--delay" as string]: "0.08s" }}>
            <p className="eyebrow">Why Choose Us?</p>
            <h2>Education guided with care and precision.</h2>
            <p>
              Every family is different, and every student&rsquo;s learning profile is
              different too. We take a deeply personal approach to tutor
              matching and educational oversight so the support feels exact, not
              generic.
            </p>

            <div className="feature-list">
              <article className="feature-line">
                <h3>Exact-match tutor placement</h3>
                <p>
                  We invest time in finding the right tutor, not just the next
                  available one.
                </p>
              </article>
              <article className="feature-line">
                <h3>Ongoing educational oversight</h3>
                <p>
                  Our involvement continues after placement so the plan can
                  adapt as the student changes.
                </p>
              </article>
              <article className="feature-line">
                <h3>Global standards, personal attention</h3>
                <p>
                  We work across different school systems while staying focused
                  on the individual student.
                </p>
              </article>
              <article className="feature-line">
                <h3>Flexible and discreet</h3>
                <p>
                  Families rely on us when timing, privacy, and continuity all
                  matter at once.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────────────────── */}
      <section className="section section-soft">
        <div className="container quote-panel" data-reveal>
          <blockquote className="testimonial-quote">
            &ldquo;We were delighted to find a tutoring service that allowed us to
            keep travelling while our child&rsquo;s education remained properly
            structured and well supported.&rdquo;
          </blockquote>
          <p className="quote-attribution">Parent of a travelling tuition student</p>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="container contact-grid" data-reveal>
          <figure className="contact-media">
            <Image
              fill
              className="editorial-image"
              src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Tutor working closely with a student in a calm, focused setting."
              style={{ objectFit: "cover" }}
            />
          </figure>

          <div className="contact-panel">
            <p className="eyebrow eyebrow-on-dark">Get In Touch</p>
            <h2>Your child&rsquo;s private tuition begins here.</h2>
            <p>
              Speak to us if you would like more information on homeschooling,
              private tuition, or a more tailored educational arrangement for
              the year ahead.
            </p>
            <div className="button-row">
              <a
                className="button button-light"
                href="mailto:toptiermathematics@gmail.com"
              >
                toptiermathematics@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
