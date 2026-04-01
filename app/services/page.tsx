import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicesHero } from "@/components/sections/services-hero";

export const metadata: Metadata = {
  title: "Our Services | TTM Tutoring",
  description:
    "Private tuition services from TTM Tutoring — travelling tuition, hourly tuition, online sessions, and homeschool guidance. Carefully matched tutors with close ongoing oversight.",
};

const SERVICES = [
  {
    id: "travelling",
    index: "01",
    title: "Travelling Tuition",
    tags: ["Residential", "Global", "Flexible"],
    description:
      "Structured academic support for families who travel — whether seasonal, residential, or fully itinerant. We build timetables that hold across time zones, maintain curriculum continuity through location changes, and ensure a student never falls behind simply because of a flight.",
    includes: [
      "Academic timetabling around travel schedules",
      "Curriculum-matched session planning across locations",
      "Progress tracking and handover documentation",
      "Time-zone aware scheduling and tutor coordination",
    ],
    image:
      "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Student working at a desk with notebooks and a focused expression.",
  },
  {
    id: "hourly",
    index: "02",
    title: "Hourly Tuition",
    tags: ["GCSE", "A-Level", "Primary", "Intervention"],
    description:
      "Targeted one-to-one sessions built around a specific subject, assessment, or skill gap. Whether the need is a single term of exam preparation or a longer-term weekly arrangement, we match the right tutor and structure the work properly from the first session.",
    includes: [
      "Diagnostic assessment to map exact gaps",
      "Exam technique and past paper practice",
      "Subject-specific tutor matching",
      "Regular written progress reports",
    ],
    image:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Chemistry student reviewing notes with tutor in a focused study setting.",
  },
  {
    id: "online",
    index: "03",
    title: "Online Tuition",
    tags: ["Remote", "UK & International", "Flexible"],
    description:
      "High-quality teaching via video with the same preparation, structure, and close oversight as in-person work. For families with demanding schedules, international commitments, or a preference for the convenience of remote sessions — without compromising on rigour.",
    includes: [
      "Live one-to-one video sessions",
      "Shared documents and real-time annotation",
      "Session notes and written feedback",
      "Flexible weekly scheduling",
    ],
    image:
      "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Student studying independently at a well-lit desk.",
  },
  {
    id: "homeschool",
    index: "04",
    title: "Homeschool Guidance",
    tags: ["Full-time", "Part-time", "Bespoke"],
    description:
      "Comprehensive educational support for families choosing to educate outside a standard timetable. We provide carefully matched tutors, sequenced curriculum planning, and ongoing oversight — whether the arrangement is a short-term bridge or a long-term commitment.",
    includes: [
      "Full curriculum scoping and planning",
      "Daily or weekly session delivery",
      "IGCSE and A-Level pathway support",
      "Family progress reviews",
    ],
    image:
      "https://images.pexels.com/photos/6929223/pexels-photo-6929223.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Student studying at a desk in a calm home setting.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <ServicesHero />

      {/* ── Service Sections ─────────────────────────────────────────────── */}
      <div className="container">
        {SERVICES.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className="service-block"
            data-reveal
            style={{ ["--delay" as string]: `${i * 0.04}s` }}
          >
            <div className="service-block-header">
              <span className="service-block-index">{service.index}</span>
              <div className="service-block-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="case-tile-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className={`service-block-grid${i % 2 !== 0 ? " service-block-grid-flip" : ""}`}>
              {/* Content */}
              <div className="service-block-content">
                <h2 className="service-block-title">{service.title}</h2>
                <p className="service-block-desc">{service.description}</p>

                <div className="service-block-includes">
                  <p className="service-block-includes-label">What&rsquo;s included</p>
                  <ul className="service-block-list">
                    {service.includes.map((item) => (
                      <li key={item} className="service-block-list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link className="button button-primary" href="/#contact">
                  Arrange a Consultation
                </Link>
              </div>

              {/* Image */}
              <figure className="service-block-image">
                <Image
                  fill
                  src={service.image}
                  alt={service.imageAlt}
                  style={{ objectFit: "cover", objectPosition: "center 25%" }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </figure>
            </div>
          </section>
        ))}
      </div>

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
              Tell us the student&rsquo;s year group, subject, and current concern — we
              will come back with a considered response and a clear recommendation.
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
