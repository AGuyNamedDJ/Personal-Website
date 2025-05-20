import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dalron J. Robertson",
  description: "AI Pharmacologist, Founder of NaS — designing biology’s future.",
  authors: [{ name: "Dalron J. Robertson", url: "https://dalronrobertson.com" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-red-500 text-neutral-900 antialiased">
        <>
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}