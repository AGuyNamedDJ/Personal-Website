import Footer from "@/components/Footer";

export const metadata = {
  title: "Sitemap | Dalron J. Robertson",
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
            <a href="/" className="hover:underline hover:text-white transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline hover:text-white transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/work" className="hover:underline hover:text-white transition-colors duration-200">
              Work
            </a>
          </li>
          <li>
            <a href="/writing" className="hover:underline hover:text-white transition-colors duration-200">
              Writing
            </a>
          </li>
          <li>
            <a href="/connect" className="hover:underline hover:text-white transition-colors duration-200">
              Connect
            </a>
          </li>
          <li>
            <a href="/legal/privacy" className="hover:underline hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/legal/terms" className="hover:underline hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}