import Image from "next/image";
import Footer from "@/components/Footer";
import TimelineRibbonClient from "@/components/sections/TimelineRIbbonClient";
import DocumentsRibbon from "@/components/sections/DocumentsRibbon";

export const metadata = {
  title: "About",
  description:
    "Dalron J. Robertson is a scientist, founder, writer, and builder based in Chicago.",
  keywords: [
    "Dalron J. Robertson",
    "Dalron Robertson",
    "scientist",
    "founder",
    "writer",
    "clinical pharmacy",
    "precision medicine",
    "institution building",
  ],
  alternates: {
    canonical: "https://dalronjrobertson.com/about",
  },
};

const principles = [
  {
    number: "01",
    title: "Stay close to reality.",
    body:
      "Clinical work keeps larger decisions connected to patients, professionals, and the systems people depend on.",
  },
  {
    number: "02",
    title: "Build for continuity.",
    body:
      "The strongest work should remain useful after a job changes, a product evolves, or the founder steps away.",
  },
  {
    number: "03",
    title: "Create room for others.",
    body:
      "Knowledge, ownership, capital, and institutions matter most when they expand what other people can do.",
  },
  {
    number: "04",
    title: "Keep a whole life.",
    body:
      "Family, faith, beauty, rest, travel, culture, and play are not distractions from a meaningful life.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0B0908] pt-20 text-[#F3EBDD]">
      <section className="px-6 pb-24 pt-24 sm:px-10 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            About Dalron
          </p>
          <h1 className="mt-6 max-w-6xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#FFF9F0]">
            A life organized around building.
          </h1>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#15110E] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[660px] overflow-hidden rounded-[2rem]">
            <Image
              src="/assets/images/Graduation.jpeg"
              alt="Dalron J. Robertson"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#FFF9F0] md:text-6xl">
              Scientist by training. Builder by instinct.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-[#D2C4B1]">
              Dalron J. Robertson is a scientist, founder, writer, and builder
              based in Chicago. His current work is grounded in clinical
              pharmacy, biomedical research, and precision medicine.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#B2A38F]">
              That foundation supports a larger purpose: creating companies,
              systems, bodies of work, and institutions that advance knowledge,
              develop people, and produce value that can endure.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#B2A38F]">
              His background spans biological science, health-system pharmacy,
              software engineering, molecular modeling, bioinformatics,
              business, writing, and photography. These are not separate
              identities. They are different tools used to understand problems
              and build responses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-[#15110E] p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A99478]">
                The current chapter
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#FFF9F0]">
                Learning deeply and building carefully.
              </h2>
              <p className="mt-6 leading-relaxed text-[#BFAF9B]">
                Clinical work at UChicago Medicine provides a direct view of
                patients, medication systems, and the consequences of
                therapeutic decisions. PharmD/MBA training at Chicago State
                University continues the clinical and business foundation.
              </p>
              <p className="mt-5 leading-relaxed text-[#968775]">
                Industry mentorship through Astellas has expanded Dalron&apos;s
                understanding of translational medicine, applied safety,
                quality, biomarkers, and drug development. NaS is where those
                lessons begin taking institutional form.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#8E6745]/40 bg-[#21170F] p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BFA98B]">
                The long view
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#FFF9F0]">
                A life larger than one profession.
              </h2>
              <p className="mt-6 leading-relaxed text-[#CDBEAA]">
                Oncology is the first deep clinical focus, followed by
                infectious disease. Beyond medicine, the longer horizon
                includes companies, property, scholarship, philanthropy,
                culture, and institutions capable of continuing useful work.
              </p>
              <p className="mt-5 leading-relaxed text-[#9F8E79]">
                The aim is not to collect titles. It is to retain enough
                independence to choose meaningful work, remain close to human
                reality, and direct knowledge and resources toward a longer
                future for other people.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#18130F] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            Working principles
          </p>
          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
            The standard behind the work.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.number} className="bg-[#0F0C0A] p-8">
                <p className="text-xs font-semibold text-[#8E7457]">
                  {principle.number}
                </p>
                <h3 className="mt-12 text-2xl font-semibold text-[#FFF9F0]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#AFA08D]">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            Milestones
          </p>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
            The path so far.
          </h2>
          <div className="mt-14">
            <TimelineRibbonClient />
          </div>
        </div>
      </section>

      <section className="bg-[#15110E] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            Professional documents
          </p>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
            The detailed record.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#AFA08D]">
            View or download the résumé and curriculum vitae for education,
            experience, research, and professional work.
          </p>
        </div>
        <DocumentsRibbon />
      </section>

      <Footer />
    </main>
  );
}
