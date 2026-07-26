import Image from "next/image";
import Link from "next/link";
import BuilderHero from "@/components/sections/BuilderHero";
import BuilderScrollStory from "@/components/sections/BuilderScrollStory";
import IdentitySwitcher from "@/components/sections/IdentitySwitcher";
import ContactStrip from "@/components/sections/ContactStrip";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dalron J. Robertson | Scientist, Founder, Writer, Builder",
  description:
    "Dalron J. Robertson is a scientist, founder, writer, and builder creating systems, companies, and institutions with a foundation in science and patient care.",
  alternates: {
    canonical: "https://dalronjrobertson.com",
  },
};

const selectedWork = [
  {
    label: "Company",
    title: "NaS",
    description:
      "A precision-medicine company being built to turn biomedical evidence into better therapeutic decisions.",
    image: "/assets/images/NaSHQ.png",
    href: "https://nasresearch.bio",
    external: true,
  },
  {
    label: "Published writing",
    title: "Books and essays",
    description:
      "Fiction, personal reflection, and serious questions about medicine, ambition, love, technology, and progress.",
    image: "/assets/images/CB.png",
    href: "/writing",
  },
  {
    label: "Institution in development",
    title: "The Robertson Foundation",
    description:
      "A long-term home for work supporting culture, education, and stronger communities.",
    image: "/assets/images/RobertsonFoundation.jpg",
    href: "/work#institutions",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0B0908] text-[#F3EBDD]">
      <BuilderHero />
      <BuilderScrollStory />

      <section className="border-y border-white/10 bg-[#18130F] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
              The current chapter
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#FFF9F0] md:text-5xl">
              Grounded in science and patient care.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-relaxed text-[#D2C4B1] md:text-2xl">
              Dalron&apos;s current work is rooted in clinical pharmacy,
              biomedical research, and precision medicine. That foundation
              informs the systems he builds and keeps the work connected to real
              patients, real institutions, and real therapeutic decisions.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                ["UChicago Medicine", "Clinical foundation"],
                ["PharmD/MBA", "Training in progress"],
                ["NaS", "Company in development"],
              ].map(([title, detail]) => (
                <div key={title} className="bg-[#100D0B] p-7">
                  <p className="text-lg font-semibold text-[#FFF9F0]">{title}</p>
                  <p className="mt-2 text-sm text-[#A99478]">{detail}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex border-b border-[#A99478] pb-1 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:border-white hover:text-white"
            >
              Read the full story ↗
            </Link>
          </div>
        </div>
      </section>

      <IdentitySwitcher />

      <section className="bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
                Selected work
              </p>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
                Different forms. One standard.
              </h2>
            </div>
            <Link
              href="/work"
              className="w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:bg-white/10 hover:text-white"
            >
              View all work
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {selectedWork.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`group relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#18130F] no-underline ${
                  index === 0 ? "lg:translate-y-10" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`transition duration-700 group-hover:scale-[1.035] ${
                    index === 2 ? "object-contain p-8" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0908] via-[#0B0908]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BFA98B]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#FFF9F0]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-[#CDBEAA]">
                    {item.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-[#E8DCC9]">
                    Explore ↗
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#201812] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0B0908] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px]">
            <Image
              src="/assets/images/Graduation.jpeg"
              alt="Dalron J. Robertson"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
              Beyond the work
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#FFF9F0] md:text-6xl">
              A full life is part of the design.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#BFAF9B]">
              Photography, travel, food, books, film, play, and personal
              milestones belong here too. The work matters, but it is not the
              whole person.
            </p>
            <Link
              href="/life"
              className="mt-9 w-fit rounded-full bg-[#E8DCC9] px-7 py-3.5 text-sm font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]"
            >
              Enter the Life page
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip />
      <Footer />
    </main>
  );
}
