"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");

    // Wait one frame for the new page's DOM to settle before observing
    const frame = requestAnimationFrame(() => {
      const elements = document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not(.is-visible)"
      );

      const show = (el: HTMLElement) => el.classList.add("is-visible");

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              show(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      } else {
        elements.forEach(show);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
