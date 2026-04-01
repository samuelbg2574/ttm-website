import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseStudiesHero } from "@/components/sections/case-studies-hero";
import { CASE_STUDIES } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies showing how carefully structured private tuition improves confidence, performance, and continuity for students in demanding academic situations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <CaseStudiesHero />

      {/* ── Case Study Tiles ──────────────────────────────────────────────── */}
      <section className="section section-tight" id="case-list">
        <div className="container">
          <div className="case-tile-list">
            {CASE_STUDIES.map((study, i) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="case-tile"
                data-reveal
                style={{ ["--delay" as string]: `${i * 0.06}s` }}
              >
                <div className="case-tile-img-wrap">
                  <Image
                    fill
                    src={study.tileImage}
                    alt={study.tileTitle}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 820px) 100vw, 45vw"
                  />
                </div>

                <div className="case-tile-content">
                  <div className="case-tile-top">
                    <div className="case-tile-tags">
                      {study.tags.map((tag) => (
                        <span key={tag} className="case-tile-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="case-tile-title">{study.tileTitle}</h2>
                    <p className="case-tile-summary">{study.tileSummary}</p>
                  </div>

                  <span className="case-tile-cta">Read case study</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section className="section" id="case-contact">
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
            <h2>Tell us what support your child needs now.</h2>
            <p>
              If you are deciding between weekly tuition, exam preparation, or
              a more specific intervention, email us with the student&rsquo;s year
              group, subject, and current concern.
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
