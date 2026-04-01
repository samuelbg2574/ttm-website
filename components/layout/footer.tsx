import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-on-dark" href="/" aria-label="TTM Tutoring home">
            <span className="brand-mark-wrap brand-mark-wrap-dark">
              <span className="brand-mark">TTM</span>
            </span>
            <span className="brand-copy">
              <strong>TTM Tutoring</strong>
              <span>Private Tuition</span>
            </span>
          </Link>
          <p>
            Carefully matched one-to-one tuition for families who want academic
            rigour, discretion, and steady guidance.
          </p>
        </div>

        <div className="footer-column">
          <p className="mini-label footer-mini-label">Navigation</p>
          <Link className="footer-link" href="/services">
            Services
          </Link>
          <Link className="footer-link" href="/case-studies">
            Case Studies
          </Link>
          <Link className="footer-link" href="/testimonials">
            Testimonials
          </Link>
          <Link className="footer-link" href="/#about">
            About Us
          </Link>
          <Link className="footer-link" href="/#contact">
            Contact
          </Link>
        </div>

        <div className="footer-column">
          <p className="mini-label footer-mini-label">Contact</p>
          <a className="footer-link" href="mailto:toptiermathematics@gmail.com">
            toptiermathematics@gmail.com
          </a>
          <span className="footer-meta">Private enquiries by email</span>
          <span className="footer-meta">Online and in-person arrangements</span>
        </div>
      </div>
    </footer>
  );
}
