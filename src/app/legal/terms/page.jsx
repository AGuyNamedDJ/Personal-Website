export const metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Dalron J. Robertson's personal website.",
};

import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="py-32 pb-64 px-6 md:px-12 bg-black text-white">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1
          className="text-5xl md:text-6xl font-bold mb-8 text-white text-center"
          style={{ color: '#FFFFFF' }}
        >
          Terms of Service
        </h1>
        <p className="text-center text-sm text-neutral-500">
          Last updated: July 24, 2026
        </p>

        <p className="text-lg md:text-xl text-white leading-relaxed">
          Below are the terms and conditions for using dalronjrobertson.com.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Acceptance of Terms</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          By using this website, you agree to these terms. If you disagree, please do not use the site.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Use of Content</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          All content is provided for personal and informational purposes.
          Commercial use, reproduction, or distribution without explicit
          permission is prohibited.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Intellectual Property</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          All website content, including text, images, graphics, and other materials, is owned by Dalron J. Robertson unless otherwise noted.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Third-Party Links</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          This site may contain links to external websites. Dalron J. Robertson isn't responsible for the content or privacy practices of external websites.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Limitation of Liability</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          Dalron J. Robertson is not liable for damages arising from the use of,
          or inability to use, this website or its content.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Changes to These Terms</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          Terms may change periodically. Your continued use after updates means acceptance of the new terms.
        </p>

        <p className="text-3xl font-semibold mt-12 mb-4 text-white border-b pb-2 border-neutral-700">Contact</p>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          Questions about these terms can be sent to{" "}
          <a
            href="mailto:dalronj.robertson@gmail.com"
            className="text-white underline underline-offset-4"
          >
            dalronj.robertson@gmail.com
          </a>
          .
        </p>
      </section>
      <Footer />
    </main>
  );
}
