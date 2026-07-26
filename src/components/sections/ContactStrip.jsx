export default function ContactStrip() {
  return (
    <section id="contact" className="bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#18130F] px-7 py-16 text-center shadow-2xl sm:px-12 md:py-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8E6745]/20 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
          Connect
        </p>
        <h2 className="relative mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
          For serious work and what comes next.
        </h2>
        <p className="relative mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#BFAF9B]">
          Reach out about research, business, writing, speaking, partnerships,
          or a project worth building.
        </p>
        <p className="relative mt-5 text-sm text-[#A99478]">
          Email{" "}
          <a
            href="mailto:dalronj.robertson@gmail.com?subject=Professional%20Inquiry%20from%20dalronjrobertson.com"
            className="font-semibold text-[#E8DCC9] underline decoration-[#A99478]/50 underline-offset-4 transition hover:text-white"
          >
            dalronj.robertson@gmail.com
          </a>
        </p>
        <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:dalronj.robertson@gmail.com?subject=Professional%20Inquiry%20from%20dalronjrobertson.com"
            aria-label="Send an email to Dalron J. Robertson"
            className="inline-flex justify-center rounded-full bg-[#E8DCC9] px-7 py-3.5 text-sm font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]"
          >
            Email Dalron
          </a>
          <a
            href="https://www.linkedin.com/in/dalronjrobertson/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:bg-white/10 hover:text-white"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
