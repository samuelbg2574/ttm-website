import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies-data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: study.tileTitle,
    description: study.tileSummary,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="cs-detail-hero">
        <div className="container">

          {/* Breadcrumb */}
          <nav className="cs-detail-nav" aria-label="Breadcrumb">
            <Link href="/case-studies">Case Studies</Link>
            <span>/</span>
            <span>{study.label}</span>
          </nav>

          <div className="cs-detail-hero-grid">
            {/* Copy */}
            <div className="cs-detail-hero-copy">
              <span className="cs-detail-label">{study.label}</span>
              <h1 className="cs-detail-headline">{study.headline}</h1>
              <p className="cs-detail-subheading">{study.subheading}</p>
            </div>

            {/* Hero metric */}
            <div className="cs-detail-hero-metric">
              <p className="cs-detail-metric-context">{study.heroMetric.context}</p>
              <p className="cs-detail-metric-nums">
                <span className="cs-detail-metric-before">{study.heroMetric.before}</span>
                <span className="cs-detail-metric-arrow">→</span>
                <span className="cs-detail-metric-after">{study.heroMetric.after}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ──────────────────────────────────────────────────── */}
      <div className="container">
        <div className="cs-detail-metrics-bar">
          {study.metrics.map((m) => (
            <div key={m.label} className="cs-detail-metric-item">
              <p className="cs-detail-metric-item-label">{m.label}</p>
              <p className="cs-detail-metric-item-value">{m.value}</p>
              <p className="cs-detail-metric-item-desc">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="cs-detail-body">
        <div className="container">

          {/* Detail image */}
          <div className="cs-detail-image-wrap">
            <Image
              fill
              src={study.detailImage}
              alt={study.headline}
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              sizes="(max-width: 900px) 100vw, 1320px"
              priority
            />
          </div>

          {/* Content sections */}
          <div className="cs-detail-sections">
            <div className="cs-detail-section" data-reveal>
              <p className="cs-detail-section-label">Challenge</p>
              <p className="cs-detail-section-text">{study.challenge}</p>
            </div>

            <div className="cs-detail-section" data-reveal>
              <p className="cs-detail-section-label">Our approach</p>
              <p className="cs-detail-section-text">{study.approach}</p>
            </div>

            <div className="cs-detail-section" data-reveal>
              <p className="cs-detail-section-label">Impact</p>
              <p className="cs-detail-section-text">{study.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back + Contact ───────────────────────────────────────────────── */}
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
              Email us with the student&rsquo;s year group, subject, and current
              concern — we will come back with a considered response.
            </p>
            <div className="button-row">
              <a
                className="button button-light"
                href="mailto:toptiermathematics@gmail.com"
              >
                toptiermathematics@gmail.com
              </a>
              <Link
                className="button button-secondary"
                href="/case-studies"
                style={{ borderColor: "rgba(251,247,241,0.28)", color: "var(--surface)" }}
              >
                ← All case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
