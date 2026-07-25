export default function ContactStrip() {
  return (
    <section id="contact" className="bg-[#D2C2AA] px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto max-w-5xl rounded-3xl border border-black/10 bg-[#F9F4EC] px-7 py-14 text-center shadow-lg sm:px-12 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5B3A]">
          Connect
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#241408] md:text-6xl">
          Research, pharmacy, and serious ideas worth building.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
          Reach out about research, professional opportunities, speaking, or
          thoughtful collaboration.
        </p>
        <p className="mt-5 text-sm text-neutral-600">
          Email{" "}
          <a
            href="mailto:dalronj.robertson@gmail.com?subject=Professional%20Inquiry%20from%20dalronjrobertson.com"
            className="font-semibold text-[#5C3A21] underline decoration-[#7A5B3A]/50 underline-offset-4 transition hover:text-[#241408]"
          >
            dalronj.robertson@gmail.com
          </a>
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:dalronj.robertson@gmail.com?subject=Professional%20Inquiry%20from%20dalronjrobertson.com"
            aria-label="Send an email to Dalron J. Robertson"
            className="inline-flex justify-center rounded-full bg-[#241408] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-black"
          >
            Email Dalron
          </a>
          <a
            href="https://www.linkedin.com/in/dalronjrobertson/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#5C3A21] px-6 py-3 text-sm font-semibold text-[#5C3A21] no-underline transition hover:bg-[#5C3A21] hover:text-white"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
