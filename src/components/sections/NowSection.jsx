// src/components/sections/NowSection.jsx
export default function NowSection() {
  return (
    <section
      className="bg-[#181615] px-6 py-24 text-white sm:px-10 md:py-32"
      id="now"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2C2AA]">
          Current research
        </p>
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Meet Nicole, NaS&apos;s AI Research Agent.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Nicole is being developed to organize biomedical literature and
            support structured research across NaS. Her knowledge base draws
            from published evidence and the broader NaS research systems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/files/Nas-White-Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-[#F9F4EC] px-6 py-3 text-sm font-semibold text-[#181615] no-underline transition hover:bg-white"
            >
              Read the foundational paper
            </a>
            <a
              href="https://github.com/NaS-Research"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
