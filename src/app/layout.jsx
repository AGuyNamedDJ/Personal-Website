import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  /* ---------- Basic identity ---------- */
  title: "Dalron J. Robertson | AI/ML Researcher, Engineer & Founder of NaS",
  description:
    "AI/ML researcher, engineer, and founder advancing innovation across life sciences, healthcare technology, computational biology, pharmacology, and intelligent systems.",
  authors: [
    { name: "Dalron J. Robertson", url: "https://dalronjrobertson.com" },
  ],
  keywords: [
    "Dalron J. Robertson",
    "Dalron Robertson",
    "AGNDJ",
    "A Guy Named DJ",
    "NaS",
    "Nicole Antoinette Shaw",
    "Nicole",
    "Dalron",
    "AI pharmacology",
    "computational biology",
    "machine learning",
    "drug discovery",
    "life-science research",
    "high-performance computing",
    "biomedical engineering",
    "scientific research",
    "health technology",
    "precision medicine",
    "quantum computing",
    "bioinformatics"
  ],
  metadataBase: new URL("https://dalronjrobertson.com"),

  /* ---------- Icons ---------- */
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },

  /* ---------- Open Graph / social preview ---------- */
  openGraph: {
    title: "Dalron J. Robertson",
    description:
      "Researcher and engineer creating intelligent systems for groundbreaking discoveries in biology, medicine, and AI-driven pharmacology.",
    url: "https://dalronjrobertson.com",
    siteName: "Dalron J. Robertson",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: new URL("/og.png", new URL("https://dalronrobertson.com")).href,
        width: 1200,
        height: 630,
        alt: "Dalron J. Robertson site preview",
      },
    ],
  },


  /* ---------- SEO helpers ---------- */
  alternates: {
    canonical: "https://dalronrobertson.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  /* ---------- Structured Data (JSON-LD) ---------- */
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dalron J. Robertson",
    "url": "https://dalronrobertson.com",
    "sameAs": [
      "https://linkedin.com/in/dalronjrobertson",
      "https://instagram.com/AGuyNamedDJ"
    ],
    "jobTitle": "Researcher and Engineer",
    "affiliation": {
      "@type": "Organization",
      "name": "NaS"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Chicago State University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Jackson State University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Mississippi College"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Scale AI"
      },
      {
        "@type": "Organization",
        "name": "Medication Management Partners"
      },
      {
        "@type": "Organization",
        "name": "CVS Pharmacy"
      }
    ]
  }
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-red-500 min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}