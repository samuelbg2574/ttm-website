"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("js");

    // Disconnect any previous observer before creating a new one
    observerRef.current?.disconnect();
    observerRef.current = null;

    // Give Next.js time to commit the new page's DOM before observing
    const timer = setTimeout(() => {
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
        observerRef.current = observer;
      } else {
        elements.forEach(show);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [pathname]);

  return null;
}
