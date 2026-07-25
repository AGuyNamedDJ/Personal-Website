import Image from "next/image";
import Footer from "@/components/Footer";
import CreativeGrid from "@/components/sections/CreativeGrid";

export const metadata = {
  title: "Work",
  description:
    "Explore Dalron J. Robertson's work in precision medicine, biomedical research, writing, and community development.",
};

const nasPriorities = [
  "Oncology as the initial proving ground",
  "Biomarkers and patient stratification",
  "Real-world evidence and biomedical data",
  "Treatment strategy, dosing, and response",
];

export default function WorkPage() {
  return (
    <main className="scroll-smooth bg-black pt-16 text-white">
      <section className="px-6 py-28 sm:px-10 md:py-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D2C2AA]">
            Selected work
          </p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.045em] text-white md:text-8xl">
            Built to move ideas into practice.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Scientific systems, writing, and institutions designed to make
            knowledge useful and create lasting value.
          </p>
        </div>
      </section>

      <section id="nas-overview" className="bg-[#181615] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2C2AA]">
              NaS
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
              Turning evidence into better therapeutic decisions.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
              NaS is a precision-medicine company being built to turn real-world
              evidence and multimodal biomedical data into systems that support
              patient selection, treatment strategy, dosing, response
              prediction, and drug-development decisions.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {nasPriorities.map((item) => (
                <p
                  key={item}
                  className="border-l-2 border-[#D2C2AA] pl-4 text-sm leading-relaxed text-neutral-300"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://nasresearch.bio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#F9F4EC] px-6 py-3 text-sm font-semibold text-[#181615] no-underline transition hover:bg-white"
              >
                Visit NaS
              </a>
              <a
                href="https://nasresearch.bio/research"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
              >
                Explore the research
              </a>
            </div>
          </div>

          <Image
            src="/assets/images/NaSHQ.png"
            alt="NaS"
            width={900}
            height={900}
            className="aspect-square w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <Image
            src="/assets/images/NaSArticle.png"
            alt="NaS founding paper"
            width={800}
            height={1000}
            className="max-h-[680px] w-full rounded-3xl object-contain"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2C2AA]">
              Foundational paper
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
              The starting point, not the final form.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300">
              The founding paper introduced the initial scientific and technical
              direction. The work now centers on building practical research
              systems and validating the evidence needed to improve therapeutic
              decisions.
            </p>
            <a
              href="/files/Nas-White-Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
            >
              Read the paper
            </a>
          </div>
        </div>
      </section>

      <section id="robertson-foundation" className="bg-[#F9F4EC] px-6 py-24 text-[#241408] sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5B3A]">
              Community
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#241408] md:text-6xl">
              Robertson Foundation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              The Robertson Foundation supports the arts, humanities, and
              community vitality through grants, events, and collaborative
              initiatives that nurture creative expression.
            </p>
            <a
              href="https://robertsonfoundation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-[#5C3A21] px-6 py-3 text-sm font-semibold text-[#5C3A21] no-underline transition hover:bg-[#5C3A21] hover:text-white"
            >
              Visit the foundation
            </a>
          </div>
          <Image
            src="/assets/images/RobertsonFoundation.jpg"
            alt="Robertson Foundation"
            width={1000}
            height={700}
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section id="creative-studio" className="bg-black py-24 md:py-32">
        <CreativeGrid />
      </section>

      <section className="border-t border-white/10 bg-black px-6 py-24 text-center sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2C2AA]">
          Film and life
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
          Stories beyond the laboratory.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          Personal journeys, cinematic storytelling, gaming, cooking, and
          thoughtful reviews.
        </p>
        <a
          href="https://www.youtube.com/@AGNDJ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black no-underline transition hover:bg-neutral-200"
        >
          Visit the YouTube channel
        </a>
      </section>

      <Footer />
    </main>
  );
}
