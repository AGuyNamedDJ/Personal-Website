import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: {
    default: "Dalron J. Robertson | Biomedical Researcher and Founder",
    template: "%s | Dalron J. Robertson",
  },
  description:
    "Biomedical researcher, software engineer, PharmD/MBA candidate, and founder of NaS, focused on precision medicine and better therapeutic decisions.",
  authors: [
    { name: "Dalron J. Robertson", url: "https://dalronjrobertson.com" },
  ],
  keywords: [
    "Dalron J. Robertson",
    "Dalron Robertson",
    "NaS",
    "biomedical research",
    "computational biology",
    "clinical pharmacy",
    "drug discovery",
    "precision medicine",
    "translational science",
    "bioinformatics",
    "oncology",
    "infectious disease",
  ],
  metadataBase: new URL("https://dalronjrobertson.com"),

  /* ---------- Icons ---------- */
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#000000" }],
  },

  /* ---------- Open Graph / social preview ---------- */
  openGraph: {
    title: "Dalron J. Robertson",
    description:
      "Biomedical researcher, software engineer, PharmD/MBA candidate, and founder of NaS.",
    url: "https://dalronjrobertson.com",
    siteName: "Dalron J. Robertson",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dalron J. Robertson site preview",
      },
    ],
  },


  /* ---------- SEO helpers ---------- */
  alternates: {
    canonical: "https://dalronjrobertson.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dalron J. Robertson",
    url: "https://dalronjrobertson.com",
    sameAs: [
      "https://github.com/AGuyNamedDJ",
      "https://www.linkedin.com/in/dalronjrobertson/",
      "https://www.instagram.com/aguynameddj/",
      "https://www.youtube.com/@AGNDJ",
    ],
    jobTitle: "Biomedical Researcher and Pharmacy Intern",
    worksFor: [
      { "@type": "Organization", name: "UChicago Medicine" },
      { "@type": "Organization", name: "NaS" },
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Jackson State University" },
      { "@type": "CollegeOrUniversity", name: "Mississippi College" },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons & PWA assets */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96"  href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
