const siteConfig = {
  brand: {
    name: "TTM Tutoring",
    descriptor: "Private Tuition",
    mark: "TTM",
  },
  navigation: [
    { label: "Home", href: "./index.html", key: "home" },
    { label: "Case Studies", href: "./case-studies.html", key: "case-studies" },
  ],
  contactEmail: "toptiermathematics@gmail.com",
  contactHref: "mailto:toptiermathematics@gmail.com",
  footerLine:
    "Bespoke one-to-one tuition for families who value high standards, thoughtful matching, and calm expert guidance.",
};

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current");
    const links = siteConfig.navigation
      .map(
        ({ label, href, key }) => `
          <a class="nav-link ${current === key ? "is-active" : ""}" href="${href}">
            ${label}
          </a>
        `
      )
      .join("");

    this.innerHTML = `
      <header class="site-header">
        <div class="container">
          <div class="nav-shell">
            <a class="brand" href="./index.html" aria-label="${siteConfig.brand.name} home">
              <span class="brand-mark">${siteConfig.brand.mark}</span>
              <span class="brand-copy">
                <strong>${siteConfig.brand.name}</strong>
                <span>${siteConfig.brand.descriptor}</span>
              </span>
            </a>
            <nav class="nav-links" aria-label="Primary navigation">
              ${links}
            </nav>
            <a class="button button-primary button-small" href="${siteConfig.contactHref}">
              Email Us
            </a>
          </div>
        </div>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const links = siteConfig.navigation
      .map(
        ({ label, href }) => `
          <a class="footer-link" href="${href}">${label}</a>
        `
      )
      .join("");

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-shell">
            <div class="footer-copy">
              <a class="brand" href="./index.html" aria-label="${siteConfig.brand.name} home">
                <span class="brand-mark">${siteConfig.brand.mark}</span>
                <span class="brand-copy">
                  <strong>${siteConfig.brand.name}</strong>
                  <span>${siteConfig.brand.descriptor}</span>
                </span>
              </a>
              <p>${siteConfig.footerLine}</p>
            </div>
            <nav class="footer-nav" aria-label="Footer navigation">
              ${links}
            </nav>
            <div class="footer-contact">
              <a class="footer-email" href="${siteConfig.contactHref}">
                ${siteConfig.contactEmail}
              </a>
              <span class="footer-link">Private hourly tuition</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
