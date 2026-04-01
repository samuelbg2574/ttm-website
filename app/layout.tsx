import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/providers/scroll-reveal";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TTM Tutoring",
    default: "TTM Tutoring | Carefully Matched Private Tuition",
  },
  description:
    "Carefully matched private tuition for families seeking academic rigour, thoughtful educational guidance, and one-to-one support delivered with precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <ScrollReveal />
        <ScrollToTop />
      </body>
    </html>
  );
}
