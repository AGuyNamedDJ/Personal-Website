export const metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Dalron J. Robertson's personal website.",
};

export default function TermsPage() {
  return (
    <main className="legal-page light-section">
      <section className="legal-document">
        <h1>Terms of Service</h1>
        <p>Last updated: July 24, 2026</p>

        <p>
          Below are the terms and conditions for using dalronjrobertson.com.
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By using this website, you agree to these terms. If you disagree,
          please do not use the site.
        </p>

        <h2>Use of Content</h2>
        <p>
          All content is provided for personal and informational purposes.
          Commercial use, reproduction, or distribution without explicit
          permission is prohibited.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All website content, including text, images, graphics, and other
          materials, is owned by Dalron J. Robertson unless otherwise noted.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This site may contain links to external websites. Dalron J. Robertson
          isn't responsible for the content or privacy practices of external
          websites.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Dalron J. Robertson is not liable for damages arising from the use of,
          or inability to use, this website or its content.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          Terms may change periodically. Your continued use after updates means
          acceptance of the new terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:dalronj.robertson@gmail.com">
            dalronj.robertson@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
