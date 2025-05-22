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
            I am Dalron J. Robertson, a researcher, engineer, and creator focused on developing intelligent systems for life sciences. My background combines biomedical science, clinical pharmacology, and software engineering, allowing me to tackle scientific questions with both technical rigor and biological understanding.

My work emphasizes creation through computational modeling, writing, teaching, and visual storytelling. I build computational pipelines and specialized language models, author books, and deliver lectures, all grounded in clarity, intentionality, and practical relevance.

Recently, I led a diverse research team employing computational modeling and bioinformatics to evaluate potential therapeutic compounds, earning recognition at my university’s research symposium. Currently, I am creating a specialized Mixture-of-Experts language model to assist life sciences research teams with ongoing knowledge management and discovery.

Ultimately, I view research as a form of stewardship. My goal is to design systems and create experiences that help others think clearly, innovate confidently, and build lasting contributions in science and healthcare.
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
              year: 2018,
              title: "M.S. in Biology, Mississippi College (2018)",
              desc: "Enrolled in graduate studies to explore advanced topics in molecular biology and bioinformatics."
            },
            {
              year: 2019,
              title: "Doctor of Pharmacy Program Enrollment (2019)",
              desc: "Began Pharm.D. coursework, laying the foundation for clinical practice and pharmaceutical research."
            },
            {
              year: 2021,
              title: "Professional Sabbatical (2021)",
              desc: "Took intentional time away to reflect, plan next steps, and align career goals with personal vision."
            },
            {
              year: 2022,
              title: "Software Engineering Coursework Completion, University of Illinois at Chicago (2022)",
              desc: "Finished key classes in algorithms, full-stack development, and systems design to bridge code with life sciences."
            },
            {
              year: 2023,
              title: "AI Software Engineer, Scale AI (2023)",
              desc: "Joined the Scale AI team to apply machine-learning pipelines for annotating biological datasets and accelerating drug discovery."
            },
            {
              year: 2024,
              title: "Master’s Coursework Resumption, Mississippi College (August 2024)",
              desc: "Returned to complete remaining credits and move toward thesis research in cellular and molecular biology."
            },
            {
              year: 2025,
              title: "Publication: To Love Ignorantly (February 2025)",
              desc: "Released my second book, a reflection on vulnerability, faith, and the courage to love without guarantees."
            },
            {
              year: 2025,
              title: "Publication: Circuit Breakers 2 (April 2025)",
              desc: "Published the sequel to my tech memoir, examining resilience and creative problem-solving in high-pressure environments."
            },
            {
              year: 2025,
              title: "M.S. in Biology Conferred, Mississippi College (May 2025)",
              desc: "Officially graduated, marking the culmination of advanced research and thesis defense in biological sciences."
            },
            {
              year: 2025,
              title: "NaS Foundational White Paper Release (May 25, 2025)",
              desc: "Unveiled the strategic blueprint for NaS—outlining infrastructure, research pillars, and initial findings."
            },
            {
              year: 2025,
              title: "Pharm.D. P3 Re-enrollment & Chicago Relocation (Summer 2025)",
              desc: "Re-entered the final year of pharmacy school and moved back to Chicago to begin clinical rotations."
            },
            {
              year: 2028,
              title: "Pharm.D. Graduation (Projected May 2028)",
              desc: "Target date to earn my Doctor of Pharmacy and transition into patient-centered pharmaceutical care."
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