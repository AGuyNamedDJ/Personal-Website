import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  /* ---------- Basic identity ---------- */
  title: "Dalron J. Robertson",
  description:
    "Creator, engineer, and researcher building intelligent systems for discovery across biology, medicine, and computation.",
  authors: [
    { name: "Dalron J. Robertson", url: "https://dalronrobertson.com" },
  ],
  keywords: [
    "Dalron Robertson",
    "AI pharmacology",
    "computational biology",
    "machine learning",
    "drug discovery",
    "life‑science research",
    "high‑performance computing",
  ],
  metadataBase: new URL("https://dalronrobertson.com"),

  /* ---------- Icons ---------- */
  icons: {
    icon: "/favicon.ico",                // classic browser favicon
    apple: "/apple-touch-icon.png",      // iOS / iMessage badge
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },

  /* ---------- Open Graph / social preview ---------- */
  openGraph: {
    title: "Dalron J. Robertson",
    description:
      "Researcher & engineer focused on pharmacology, machine learning, and high‑performance computing in the life sciences.",
    url: "https://dalronrobertson.com",
    siteName: "Dalron J. Robertson",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og.png",      // 1200×630 image in /public
        width: 1200,
        height: 630,
        alt: "Dalron J. Robertson site preview",
      },
    ],
  },

  /* ---------- Twitter Card ---------- */
  twitter: {
    card: "summary_large_image",
    title: "Dalron J. Robertson",
    description:
      "Building intelligent systems that advance discovery in biology and medicine.",
    creator: "@dalronrobertson",
    images: ["/og.png"],
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