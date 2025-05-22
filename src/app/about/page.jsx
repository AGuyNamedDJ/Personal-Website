import Image from "next/image";
import Footer from "@/components/Footer";

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
      <section className="relative h-[24vh] md:h-[32vh] overflow-hidden">
        <Image
          src="/assets/images/AboutHero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center scale-110"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          About Me
        </h1>
      </section>

      <section className="mx-auto max-w-prose px-4 pt-0 pb-20 md:flex md:items-center md:gap-10">
        <Image
          src="/assets/images/Graduation.jpeg"
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

      <section className="mx-auto max-w-3xl px-4 pb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Key Milestones
        </h2>
        <ol className="relative border-l-2 border-[#D2C2AA] ml-4 space-y-12">
          {[
            {
              year: 2025,
              title: "NaS Founding White Paper (May 2025)",
              desc: "Published foundational white paper outlining an AI‑driven biotech research framework."
            },
            {
              year: 2025,
              title: "M.S. Biological Sciences, Mississippi College (May 2025)",
              desc: "Completed master’s studies with a focus on computational biology."
            },
            {
              year: 2024,
              title: "Circuit Breakers: Echoes of Innovation",
              desc: "Authored a book exploring creativity and resilience in engineering."
            }
          ].map((m) => (
            <li key={m.year + m.title} className="ml-6">
              <span className="absolute -left-[46px] top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#D2C2AA] shadow">
                {m.year}
              </span>
              <h3 className="font-semibold text-lg">{m.title}</h3>
              <p className="mt-1 text-neutral-700">{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>
      <Footer />
    </main>
  );
}