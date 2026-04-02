"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services",      href: "/services" },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "Testimonials",  href: "/testimonials" },
  { label: "About Us",      href: "/about" },
  { label: "Contact",       href: "/#contact" },
];

function isActive(href: string, pathname: string): boolean {
  const path = href.split("#")[0];
  if (path === "" || path === "/") return pathname === "/";
  return pathname.startsWith(path);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-shell">

        {/* Brand */}
        <Link className="brand" href="/" aria-label="TTM Tutoring home">
          <span className="brand-mark-wrap">
            <span className="brand-mark">TTM</span>
          </span>
          <span className="brand-copy">
            <strong>TTM Tutoring</strong>
            <span>Private Tuition</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links nav-desktop" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              className={`nav-link${isActive(link.href, pathname) ? " nav-link-active" : ""}`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="nav-end">
          <Link className="button button-primary button-small nav-cta-desktop" href="/#contact">
            Contact Us
          </Link>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </div>

      {/* Mobile nav dropdown */}
      <div
        className={`nav-mobile${mobileOpen ? " nav-mobile-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container nav-mobile-links" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              className={`nav-mobile-link${isActive(link.href, pathname) ? " nav-link-active" : ""}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="button button-primary nav-mobile-cta" href="mailto:toptiermathematics@gmail.com">
            toptiermathematics@gmail.com
          </a>
        </nav>
      </div>
    </header>
  );
}
