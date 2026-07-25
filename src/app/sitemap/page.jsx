import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sitemap",
  description: "Website sitemap for Dalron J. Robertson.",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <section className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1
          className="text-5xl font-extrabold mb-10 tracking-tight py-12"
          style={{ color: "#FFFFFF" }}
        >
          Sitemap
        </h1>

        <ul className="text-neutral-400 list-disc pl-8 space-y-4 text-lg leading-relaxed">
          <li>
            <Link href="/" className="hover:underline hover:text-white transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline hover:text-white transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/work" className="hover:underline hover:text-white transition-colors duration-200">
              Work
            </Link>
          </li>
          <li>
            <Link href="/writing" className="hover:underline hover:text-white transition-colors duration-200">
              Writing
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:underline hover:text-white transition-colors duration-200">
              Connect
            </Link>
          </li>
          <li>
            <Link href="/legal/privacy" className="hover:underline hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/legal/terms" className="hover:underline hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
