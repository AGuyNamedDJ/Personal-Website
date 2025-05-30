export const metadata = {
  title: "Privacy Policy | Dalron J. Robertson",
  description: "Privacy policy detailing how user data is handled on Dalron J. Robertson's personal website.",
};

import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-24 px-4 bg-black text-white">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-left text-white" style={{ color: '#FFFFFF' }}>Privacy Policy</h1>

        <div className="border-b border-neutral-700 py-8">
          <p className="mb-6 text-neutral-400 text-left">
            This Privacy Policy explains how your personal data is collected and used when you visit dalronrobertson.com.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Information Collected</p>
          <p className="text-neutral-400 text-left">
            We collect minimal personal data, primarily through forms and analytics. Information collected may include your name, email address, and any details provided through contact forms or inquiries.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Use of Your Information</p>
          <p className="text-neutral-400 text-left">
            Your data is used solely to respond to inquiries, improve the site experience, and for basic analytics purposes.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Third-Party Services</p>
          <p className="text-neutral-400 text-left">
            We may use third-party services such as analytics providers or form processing services (e.g., Formspree). These services handle data according to their privacy policies.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Cookies</p>
          <p className="text-neutral-400 text-left">
            Cookies may be used to track usage patterns and preferences to enhance site performance. You can manage or block cookies through your browser settings.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Your Rights</p>
          <p className="text-neutral-400 text-left">
            You have the right to access, modify, or request deletion of your personal data at any time. Please contact us via the Connect page to exercise these rights.
          </p>
        </div>

        <div className="border-b border-neutral-700 py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Changes to This Policy</p>
          <p className="text-neutral-400 text-left">
            We may update this policy occasionally to reflect changes in practices or legal requirements. Updates will be clearly indicated on this page.
          </p>
        </div>

        <div className="py-8">
          <p className="text-3xl font-semibold font-light mb-4 text-white text-left">Contact Information</p>
          <p className="text-neutral-400 text-left">
            For any questions regarding your privacy or this policy, please contact us through the Connect page.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}