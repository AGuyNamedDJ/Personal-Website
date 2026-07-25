export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Dalron J. Robertson's personal website.",
};

import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black px-4 pb-24 pt-24 text-white">
      <section className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-left text-5xl font-bold text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500">Last updated: July 24, 2026</p>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-left text-neutral-400">
            This policy explains how information may be handled when you visit
            dalronjrobertson.com.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <h2 className="mb-4 text-left text-3xl font-semibold text-white">
            Information Collected
          </h2>
          <p className="text-left text-neutral-400">
            This website does not use a direct contact form or collect account
            information. The hosting provider may collect basic technical data,
            such as IP address, browser type, device type, and pages visited, for
            security, reliability, and traffic measurement.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <h2 className="mb-4 text-left text-3xl font-semibold text-white">
            External Links and Services
          </h2>
          <p className="text-left text-neutral-400">
            The site links to third-party services, including email, social
            media, booksellers, and related websites. Information you provide
            after following those links is governed by the privacy policy of
            that service.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <h2 className="mb-4 text-left text-3xl font-semibold text-white">
            Cookies
          </h2>
          <p className="text-left text-neutral-400">
            The site itself does not set advertising cookies. The hosting
            provider or linked third-party services may use cookies under their
            own policies. You can control cookies through your browser settings.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <h2 className="mb-4 text-left text-3xl font-semibold text-white">
            Changes to This Policy
          </h2>
          <p className="text-left text-neutral-400">
            This policy may be updated when the site or its services change. The
            latest revision date will appear at the top of this page.
          </p>
        </div>

        <div className="py-8">
          <h2 className="mb-4 text-left text-3xl font-semibold text-white">
            Contact
          </h2>
          <p className="text-left text-neutral-400">
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:dalronj.robertson@gmail.com"
              className="text-white underline underline-offset-4"
            >
              dalronj.robertson@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
