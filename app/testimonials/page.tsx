import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TestimonialsHero } from "@/components/sections/testimonials-hero";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What families say about TTM Tutoring — real feedback from parents whose children have received carefully matched one-to-one private tuition.",
};

interface Testimonial {
  quote: string;
  attribution: string;
  context: string;
}

const COL_1: Testimonial[] = [
  {
    quote:
      "Our son had been struggling with GCSE Maths for two years. After 14 weeks with TTM the improvement wasn't just numerical — the way he approaches unfamiliar problems changed entirely.",
    attribution: "Parent",
    context: "Year 11 · GCSE Mathematics",
  },
  {
    quote:
      "We travel extensively for work and maintaining academic continuity has always been a real challenge. TTM made it completely seamless — same quality, every location.",
    attribution: "Parent",
    context: "Travelling Tuition · London & Europe",
  },
  {
    quote:
      "The weekly structure and clear communication made us feel genuinely involved without being overburdened. Exactly the right level of oversight.",
    attribution: "Parent",
    context: "Year 8 · Weekly Mathematics",
  },
  {
    quote:
      "Reliable, discreet, and genuinely excellent at what they do. We have recommended TTM to three other families in the past year.",
    attribution: "Parent",
    context: "Private Tuition · Surrey",
  },
];

const COL_2: Testimonial[] = [
  {
    quote:
      "TTM took time to understand what our daughter actually needed before recommending anything. That made us trust everything that followed.",
    attribution: "Parent",
    context: "Year 9 · Mathematics",
  },
  {
    quote:
      "The diagnostic review was eye-opening. We hadn't realised how specific the gaps were — TTM identified every one and addressed them methodically.",
    attribution: "Parent",
    context: "Year 11 · GCSE Preparation",
  },
  {
    quote:
      "Our son's A-Level Chemistry was a real concern going into the final year. The targeted work on exam technique made a significant difference to his result.",
    attribution: "Parent",
    context: "Year 13 · A-Level Chemistry",
  },
  {
    quote:
      "The tutor matching process was far more thorough than anything we had encountered before. TTM understood exactly what our daughter needed from the very first conversation.",
    attribution: "Parent",
    context: "Year 10 · A-Level Preparation",
  },
];

const COL_3: Testimonial[] = [
  {
    quote:
      "The improvement in confidence was worth it alone. The anxiety around exams was holding everything back — and it is entirely gone now.",
    attribution: "Parent",
    context: "Year 12 · Sciences",
  },
  {
    quote:
      "We needed online tuition that didn't feel like online tuition. The sessions were focused, structured, and genuinely useful — more so than any alternative we tried.",
    attribution: "Parent",
    context: "Online Tuition · International",
  },
  {
    quote:
      "Our son started enjoying Mathematics again. We thought we were buying marks — we got something far more valuable.",
    attribution: "Parent",
    context: "Year 9 · Mathematics",
  },
  {
    quote:
      "The care TTM provides goes well beyond what any agency we have worked with has offered. They are involved, responsive, and always thinking ahead.",
    attribution: "Parent",
    context: "Year 7 · Homeschool Guidance",
  },
];

function TestimonialCard({ quote, attribution, context }: Testimonial) {
  return (
    <div className="testi-card">
      <p className="testi-quote">&ldquo;{quote}&rdquo;</p>
      <div className="testi-attr">
        <p className="testi-name">{attribution}</p>
        <p className="testi-context">{context}</p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <TestimonialsHero />

      {/* ── Scrolling Columns ────────────────────────────────────────────── */}
      <section className="testi-section">
        <div className="testi-grid">

          {/* Column 1 — scroll up */}
          <div className="testi-col">
            <div className="testi-col-inner testi-scroll-up">
              {[...COL_1, ...COL_1].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>

          {/* Column 2 — scroll down (tablet+) */}
          <div className="testi-col testi-col-md">
            <div className="testi-col-inner testi-scroll-down">
              {[...COL_2, ...COL_2].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>

          {/* Column 3 — scroll up alt (desktop) */}
          <div className="testi-col testi-col-lg">
            <div className="testi-col-inner testi-scroll-up-alt">
              {[...COL_3, ...COL_3].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>

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
              Email us with the student&rsquo;s year group, subject, and current
              concern — we will come back with a clear recommendation.
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
