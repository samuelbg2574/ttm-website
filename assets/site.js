const revealElements = document.querySelectorAll("[data-reveal]");

const showElement = (element) => {
  element.classList.add("is-visible");
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        showElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach(showElement);
}

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll("[data-ripple]").forEach((element) => {
  element.addEventListener("click", (event) => {
    if (reduceMotionQuery.matches) return;

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const ripple = document.createElement("span");

    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    element.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const triggers = Array.from(gallery.querySelectorAll("[data-gallery-trigger]"));
  const kicker = gallery.querySelector("[data-gallery-kicker]");
  const title = gallery.querySelector("[data-gallery-title]");
  const copy = gallery.querySelector("[data-gallery-copy]");
  const link = gallery.querySelector("[data-gallery-link]");
  const hoverCapableQuery = window.matchMedia("(hover: hover)");

  if (!triggers.length || !kicker || !title || !copy || !link) return;

  let activeIndex = Math.max(
    0,
    triggers.findIndex((trigger) => trigger.getAttribute("aria-pressed") === "true")
  );

  const syncSummary = (trigger) => {
    kicker.textContent = trigger.dataset.galleryKicker || "";
    title.textContent = trigger.dataset.galleryTitle || "";
    copy.textContent = trigger.dataset.galleryCopy || "";
    link.setAttribute("href", trigger.dataset.galleryLink || "#contact");
  };

  const setActive = (index, { scroll = false } = {}) => {
    activeIndex = (index + triggers.length) % triggers.length;

    triggers.forEach((trigger, triggerIndex) => {
      const isActive = triggerIndex === activeIndex;
      const panel = trigger.closest(".gallery-panel");

      trigger.setAttribute("aria-pressed", isActive ? "true" : "false");
      panel?.classList.toggle("is-active", isActive);

      if (isActive) {
        syncSummary(trigger);

        if (scroll && gallery.scrollWidth > gallery.clientWidth + 8) {
          panel?.scrollIntoView({
            behavior: reduceMotionQuery.matches ? "auto" : "smooth",
            inline: "start",
            block: "nearest",
          });
        }
      }
    });
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("mouseenter", () => {
      if (!hoverCapableQuery.matches) return;
      setActive(index);
    });

    trigger.addEventListener("focus", () => {
      setActive(index, { scroll: true });
    });

    trigger.addEventListener("click", () => {
      setActive(index, { scroll: true });
    });
  });

  gallery.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + direction + triggers.length) % triggers.length;

    setActive(nextIndex, { scroll: true });
    triggers[nextIndex].focus();
  });

  setActive(activeIndex);
});
