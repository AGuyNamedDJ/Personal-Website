import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Dalron J. Robertson",
  description: "AI Pharmacologist, Founder of NaS — designing biology’s future.",
  authors: [{ name: "Dalron J. Robertson", url: "https://dalronrobertson.com" }],
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