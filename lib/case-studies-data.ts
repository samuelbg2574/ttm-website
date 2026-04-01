export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  label: string;
  tags: string[];
  tileTitle: string;
  tileSummary: string;
  tileImage: string;
  detailImage: string;
  headline: string;
  subheading: string;
  heroMetric: { before: string; after: string; context: string };
  metrics: [CaseStudyMetric, CaseStudyMetric, CaseStudyMetric];
  challenge: string;
  approach: string;
  impact: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "gcse-maths",
    label: "GCSE Support",
    tags: ["GCSE", "Mathematics"],
    tileTitle: "GCSE Maths: rebuilding confidence and closing core gaps.",
    tileSummary:
      "A 14-week programme for a Year 11 student whose anxiety around unfamiliar questions was holding back performance well below their actual ability.",
    tileImage:
      "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=900",
    detailImage:
      "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1400",
    headline: "Rebuilding confidence and closing core gaps.",
    subheading:
      "A Year 11 student working hard but underperforming — anxiety, algebraic gaps, and fragile exam technique holding back real ability.",
    heroMetric: { before: "48%", after: "72%", context: "Average topic score" },
    metrics: [
      { label: "Before", value: "48%", description: "Average topic score" },
      { label: "After", value: "72%", description: "Average topic score" },
      { label: "Mock shift", value: "5 → 7", description: "Working grade movement" },
    ],
    challenge:
      "The student was working hard but underperforming in GCSE Maths. Anxiety around unfamiliar questions, gaps in algebra and ratio, and weak confidence in multi-step reasoning were holding back performance despite genuine effort.",
    approach:
      "We carried out a diagnostic review of recent tests, topic fluency, and exam habits. A 14-week plan followed with weekly tuition, topic repair, cumulative retrieval, and sequenced exam practice — each session built directly on what the last one exposed.",
    impact:
      "Average topic performance rose from 48% to 72%, and the school mock moved from Grade 5 to Grade 7. The student became calmer, more secure, and more willing to engage with difficult material. The improvement was not just numerical — the way they approached unfamiliar problems changed entirely.",
  },
  {
    slug: "alevel-chemistry",
    label: "A-Level Preparation",
    tags: ["A-Level", "Chemistry"],
    tileTitle: "A-Level Chemistry: turning effort into exam performance.",
    tileSummary:
      "Weekly support for an Upper Sixth student revising consistently but unable to translate that work into marks. Organic mechanisms and timed exam pressure were the breaking points.",
    tileImage:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=900",
    detailImage:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1400",
    headline: "Turning consistent effort into exam performance.",
    subheading:
      "An Upper Sixth student revising well but scoring in the low B band — the gap between knowledge and marks required a different kind of work.",
    heroMetric: { before: "59%", after: "76%", context: "Average paper score" },
    metrics: [
      { label: "Before", value: "59%", description: "Average paper score" },
      { label: "After", value: "76%", description: "Average paper score" },
      { label: "Result", value: "Secure A", description: "Assessment standard" },
    ],
    challenge:
      "The student was revising consistently but not translating that effort into marks. Organic mechanisms, longer responses, and calculation-heavy papers were keeping them in low B territory despite real understanding of the material.",
    approach:
      "We completed a paper audit to identify whether the issue sat in knowledge, application, or exam method. The plan focused on precision under timed pressure, mark-scheme language, and a running error log reviewed each week — building discipline as much as content.",
    impact:
      "Average paper scores improved from 59% to 76%, moving the student into secure A-grade performance. They became more disciplined in exam technique and more assured with difficult material. The shift came from working smarter, not harder.",
  },
  {
    slug: "year-8-maths",
    label: "Weekly Maths Support",
    tags: ["Year 8", "Mathematics"],
    tileTitle: "Steady progress built through consistency and structure.",
    tileSummary:
      "A two-term weekly arrangement for a Year 8 student whose algebraic reasoning had started to slip. Small gaps were compounding — and confidence was beginning to follow.",
    tileImage:
      "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=900",
    detailImage:
      "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=1400",
    headline: "Steady progress built through consistency and structure.",
    subheading:
      "A capable Year 8 student with small gaps that were beginning to compound — the kind of drift that looks manageable until it isn't.",
    heroMetric: { before: "61%", after: "83%", context: "End-of-topic score" },
    metrics: [
      { label: "Before", value: "61%", description: "Average end-of-topic score" },
      { label: "After", value: "83%", description: "Average end-of-topic score" },
      { label: "Position", value: "At target", description: "School performance by year end" },
    ],
    challenge:
      "A capable Year 8 student had started to fall behind in algebraic reasoning and multi-step problem solving. Small gaps were beginning to compound and confidence had dipped — a pattern that typically worsens without structured intervention.",
    approach:
      "We reviewed school assessments, topic fluency, and exercise book patterns to map the exact points of slippage. A two-term weekly plan rebuilt fluency, strengthened algebra, and improved problem-solving method through sequenced teaching and spaced review.",
    impact:
      "Average topic performance rose from 61% to 83%, and the student moved from below target to securely at target. Confidence, classroom participation, and willingness to attempt harder problems all improved — the kind of shift that tends to carry forward.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
