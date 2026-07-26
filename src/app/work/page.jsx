import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work",
  description:
    "Companies, scientific work, writing, and institutions being built by Dalron J. Robertson.",
  alternates: {
    canonical: "https://dalronjrobertson.com/work",
  },
};

const areas = [
  ["01", "Science and care", "#science"],
  ["02", "Systems and companies", "#companies"],
  ["03", "Writing and culture", "#culture"],
  ["04", "Institutions and community", "#institutions"],
];

export default function WorkPage() {
  return (
    <main className="bg-[#0B0908] pt-20 text-[#F3EBDD]">
      <section className="px-6 pb-24 pt-24 sm:px-10 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            The work
          </p>
          <h1 className="mt-6 max-w-6xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#FFF9F0]">
            Different forms. One standard.
          </h1>
          <p className="mt-9 max-w-3xl text-xl leading-relaxed text-[#CDBEAA] md:text-2xl">
            The work moves through science, software, companies, writing, and
            institutions. Each form exists to make knowledge useful and create
            value that can continue growing.
          </p>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map(([number, label, href]) => (
              <a
                key={number}
                href={href}
                className="group bg-[#15110E] p-6 no-underline transition hover:bg-[#211A15]"
              >
                <p className="text-xs font-semibold text-[#8E7457]">{number}</p>
                <p className="mt-7 font-semibold text-[#F3EBDD]">{label}</p>
                <p className="mt-3 text-[#A99478] transition group-hover:translate-x-1">
                  ↓
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="science"
        className="border-t border-white/10 bg-[#15110E] px-6 py-24 sm:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[640px] overflow-hidden rounded-[2rem]">
            <Image
              src="/assets/images/Graduation.jpeg"
              alt="Dalron J. Robertson at Mississippi College"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8DCC9]">
              Clinical and scientific foundation
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
              01 / Science and care
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
              Serious work starts with reality.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-[#CDBEAA]">
              Clinical pharmacy at UChicago Medicine provides direct experience
              with patients, medication access, transitions of care,
              compounding, and the daily systems behind treatment. Graduate
              research and industry mentorship add depth in biology,
              pharmacology, biomarkers, safety, quality, and drug development.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#AFA08D]">
              Oncology is the first long-term clinical focus. Infectious disease
              follows. The goal is not to leave patient care behind, but to build
              from a clearer understanding of what care requires.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-[#E8DCC9] px-6 py-3 text-sm font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]"
              >
                About the foundation
              </Link>
              <Link
                href="/writing#research"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:bg-white/10"
              >
                View research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="companies"
        className="border-t border-white/10 bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
                02 / Systems and companies
              </p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
                Ideas need structure to travel.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#BFAF9B]">
              Software, research systems, and ownership allow useful ideas to
              reach farther than one role or one institution. NaS is the first
              company built around that conviction.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#15110E]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[620px]">
                <Image
                  src="/assets/images/NaSHQ.png"
                  alt="Architectural drawing representing NaS"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A99478]">
                  NaS
                </p>
                <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#FFF9F0] md:text-5xl">
                  A company first. An institution by design.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-[#BFAF9B]">
                  NaS is being built to turn clinical and biological evidence
                  into systems that support patient selection, treatment
                  strategy, dosing, response, and drug development.
                </p>
                <p className="mt-5 leading-relaxed text-[#8F806E]">
                  Nicole is one part of the research infrastructure. The larger
                  aim is a company capable of producing knowledge, tools, jobs,
                  training, and partnerships that continue creating value.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://nasresearch.bio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#E8DCC9] px-6 py-3 text-sm font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]"
                  >
                    Visit NaS
                  </a>
                  <a
                    href="https://github.com/NaS-Research"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:bg-white/10"
                  >
                    View the work on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="culture"
        className="border-t border-white/10 bg-[#1C1510] px-6 py-24 sm:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
              03 / Writing and culture
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
              Some questions require a different kind of language.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#CDBEAA]">
              Fiction, personal writing, photography, and film make room for
              questions that data alone cannot settle. They are not side
              projects. They are another way of examining the future and the
              people expected to live in it.
            </p>
            <Link
              href="/writing"
              className="mt-9 inline-flex rounded-full bg-[#E8DCC9] px-6 py-3 text-sm font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]"
            >
              Explore the writing
            </Link>
          </div>
          <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/assets/images/JadeCB.png"
              alt="Circuit Breakers artwork"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="institutions"
        className="border-t border-white/10 bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#15110E]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[500px] border-b border-white/10 lg:border-b-0 lg:border-r">
              <Image
                src="/assets/images/RobertsonFoundation.jpg"
                alt="Robertson Foundation"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain p-8 sm:p-12"
              />
            </div>
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
                04 / Institutions and community
              </p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-6xl">
                Build beyond the founder.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-[#CDBEAA]">
                The Robertson Foundation is in development as a future home for
                work supporting the arts, humanities, education, and community
                vitality.
              </p>
              <p className="mt-5 leading-relaxed text-[#968775]">
                The vision is intentionally long term. It should grow from real
                capacity, remain accountable to the people it serves, and help
                meaningful work endure.
              </p>
              <div className="mt-10 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8E7457]">
                    Status
                  </p>
                  <p className="mt-2 font-semibold text-[#F3EBDD]">
                    In development
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8E7457]">
                    Long view
                  </p>
                  <p className="mt-2 font-semibold text-[#F3EBDD]">
                    Culture, education, community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#18130F] px-6 py-24 text-center sm:px-10 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
          The person behind the work
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
          The work matters. The life matters too.
        </h2>
        <Link
          href="/life"
          className="mt-9 inline-flex rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:bg-white/10 hover:text-white"
        >
          Visit the Life page
        </Link>
      </section>

      <Footer />
    </main>
  );
}
