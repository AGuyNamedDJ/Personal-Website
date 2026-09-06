export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Dalron J. Robertson's personal website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page light-section">
      <section className="legal-document">
        <h1>Privacy Policy</h1>
        <p>Last updated: July 24, 2026</p>

        <div>
          <p>
            This policy explains how information may be handled when you visit
            dalronjrobertson.com.
          </p>
        </div>

        <div>
          <h2>Information Collected</h2>
          <p>
            This website does not use a direct contact form or collect account
            information. The hosting provider may collect basic technical data,
            such as IP address, browser type, device type, and pages visited,
            for security, reliability, and traffic measurement.
          </p>
        </div>

        <div>
          <h2>External Links and Services</h2>
          <p>
            The site links to third-party services, including email, social
            media, booksellers, and related websites. Information you provide
            after following those links is governed by the privacy policy of
            that service.
          </p>
        </div>

        <div>
          <h2>Cookies</h2>
          <p>
            The site itself does not set advertising cookies. The hosting
            provider or linked third-party services may use cookies under their
            own policies. You can control cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2>Changes to This Policy</h2>
          <p>
            This policy may be updated when the site or its services change. The
            latest revision date will appear at the top of this page.
          </p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:dalronj.robertson@gmail.com">
              dalronj.robertson@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
