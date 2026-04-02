"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  emailUrl?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Sam",
    title: "Founder & Director",
    bio: "TTM was founded on the conviction that exceptional tuition is only possible when the right tutor is placed with the right student. With a background in mathematics education and years spent working with families who required discretion, structure, and measurable results, Sam built TTM to make that standard of match available to every family who seeks it.",
    imageUrl:
      "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkedinUrl: "#",
    emailUrl: "mailto:toptiermathematics@gmail.com",
  },
];

export interface FounderProfileCardProps {
  className?: string;
}

export function FounderProfileCard({ className }: FounderProfileCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TEAM[currentIndex];

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % TEAM.length);
  const handlePrevious = () =>
    setCurrentIndex((i) => (i - 1 + TEAM.length) % TEAM.length);

  const socialLinks = [
    { icon: Linkedin, url: current.linkedinUrl, label: "LinkedIn" },
    { icon: Mail, url: current.emailUrl, label: "Email" },
  ].filter((s) => s.url);

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>

      {/* ── Desktop ─────────────────────────────────────────────── */}
      <div className="hidden md:flex relative items-center">

        {/* Portrait */}
        <div
          className="w-[470px] h-[470px] rounded-3xl overflow-hidden flex-shrink-0"
          style={{ background: "var(--canvas-deep)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                width={470}
                height={470}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overlapping card */}
        <div
          className="rounded-3xl p-8 ml-[-80px] z-10 max-w-xl flex-1"
          style={{
            background: "var(--surface)",
            boxShadow: "var(--shadow)",
            border: "1px solid rgba(255,255,255,0.72)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
                >
                  {current.name}
                </h2>
                <p
                  className="text-xs font-medium"
                  style={{
                    color: "var(--ttm-accent-deep)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {current.title}
                </p>
              </div>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--ink-soft)", lineHeight: "1.72" }}
              >
                {current.bio}
              </p>

              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <Link
                    key={label}
                    href={url!}
                    target={url?.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 hover:opacity-80"
                    style={{ background: "var(--ink)" }}
                    aria-label={label}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "var(--surface)" }}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <div className="md:hidden max-w-sm mx-auto text-center">
        <div
          className="w-full aspect-square rounded-3xl overflow-hidden mb-6"
          style={{ background: "var(--canvas-deep)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
              >
                {current.name}
              </h2>
              <p
                className="text-xs font-medium mb-4"
                style={{
                  color: "var(--ttm-accent-deep)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {current.title}
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--ink-soft)", lineHeight: "1.72" }}
              >
                {current.bio}
              </p>
              <div className="flex justify-center gap-3">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <Link
                    key={label}
                    href={url!}
                    target={url?.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 hover:opacity-80"
                    style={{ background: "var(--ink)" }}
                    aria-label={label}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "var(--surface)" }}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation (only if multiple team members) ────────── */}
      {TEAM.length > 1 && (
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrevious}
            aria-label="Previous"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-70"
            style={{
              background: "var(--canvas-deep)",
              border: "1px solid var(--line)",
            }}
          >
            <ChevronLeft
              className="w-6 h-6"
              style={{ color: "var(--ink)" }}
            />
          </button>

          <div className="flex gap-2">
            {TEAM.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="w-3 h-3 rounded-full transition-colors"
                style={{
                  background:
                    i === currentIndex ? "var(--ink)" : "var(--line-strong)",
                }}
                aria-label={`Go to team member ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:opacity-70"
            style={{
              background: "var(--canvas-deep)",
              border: "1px solid var(--line)",
            }}
          >
            <ChevronRight
              className="w-6 h-6"
              style={{ color: "var(--ink)" }}
            />
          </button>
        </div>
      )}
    </div>
  );
}
