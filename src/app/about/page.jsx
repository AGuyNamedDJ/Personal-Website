import Image from "next/image";

// ─────────────────────────────────────────────────────────
// /about  – basic starter layout
// ─────────────────────────────────────────────────────────
export const metadata = {
  title: "About | Dalron Robertson",
  description: "Bio and professional milestones for Dalron J. Robertson",
};

export default function AboutPage() {
  return (
    <main className="scroll-smooth">
      {/* 1) Page hero  */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <Image
          src="/assets/images/AboutHero.jpg" // drop any banner image here or replace with a gradient div
          alt=""
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          About Me
        </h1>
      </section>

      {/* 2) Portrait + bio */}
      <section className="mx-auto max-w-prose px-4 py-24 md:flex md:items-center md:gap-10">
        <Image
          src="/assets/images/DalronPortrait.jpg"
          alt="Dalron Robertson portrait"
          width={260}
          height={260}
          className="rounded-3xl object-cover shadow-lg mx-auto mb-8 md:mb-0"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="leading-relaxed text-neutral-800">
            I’m Dalron, an AI/ML research engineer and Pharm.D. candidate with a
            passion for biotech innovation. My work spans foundational white
            papers, graduate research, and building interdisciplinary projects
            that bridge data science and medicine. I’m driven by curiosity,
            precision, and the belief that technology—used responsibly—can
            transform healthcare for everyone.
          </p>
        </div>
      </section>

      {/* 3) Simple milestone timeline */}
      <section className="mx-auto max-w-3xl px-4 pb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Key Milestones
        </h2>
        <ol className="relative border-l-2 border-[#D2C2AA] ml-4 space-y-12">
          {[
            {
              year: 2025,
              title: "NaS Founding White Paper",
              desc: "Published the blueprint for an AI-driven biotech research institute.",
            },
            {
              year: 2023,
              title: "“Circuit Breakers” Memoir",
              desc: "Debut book reached Amazon #1 New Release in Engineering Biography.",
            },
            {
              year: 2021,
              title: "M.S. Biology, Mississippi College",
              desc: "Graduated Summa Cum Laude, focus on computational genomics.",
            },
          ].map((m) => (
            <li key={m.year} className="ml-6">
              <span className="absolute -left-[46px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#D2C2AA] shadow">
                {m.year}
              </span>
              <h3 className="font-semibold text-lg">{m.title}</h3>
              <p className="mt-1 text-neutral-700">{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}