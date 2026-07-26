import Image from "next/image";
import CreativeGrid from "@/components/sections/CreativeGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Life",
  description:
    "Photography, travel, food, film, books, play, and personal milestones from Dalron J. Robertson.",
  alternates: {
    canonical: "https://dalronjrobertson.com/life",
  },
};

const outlets = [
  {
    label: "Food",
    title: "Restaurants worth remembering",
    description:
      "A running record of meals, places, favorites, and the pleasure of finding somewhere worth returning to.",
    href: "https://beliapp.co/profile/dalronrobertson",
    linkLabel: "Follow on Beli",
  },
  {
    label: "Film and play",
    title: "Stories beyond the page",
    description:
      "Film, gaming, cooking, reviews, and the occasional record of whatever has made life more interesting.",
    href: "https://www.youtube.com/@AGNDJ",
    linkLabel: "Visit YouTube",
  },
  {
    label: "In the moment",
    title: "The visual notebook",
    description:
      "Photography, daily observations, places, people, and fragments of a life still being lived.",
    href: "https://www.instagram.com/aguynameddj/",
    linkLabel: "Visit Instagram",
  },
];

export default function LifePage() {
  return (
    <main className="bg-[#0B0908] pt-20 text-[#F3EBDD]">
      <section className="px-6 pb-24 pt-24 sm:px-10 md:pb-32 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
              Life
            </p>
            <h1 className="mt-6 max-w-5xl text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.87] tracking-[-0.06em] text-[#FFF9F0]">
              The work is not the whole life.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#CDBEAA]">
              Photography, travel, food, books, film, play, and personal
              milestones. A record of the things that make the work worth doing.
            </p>
          </div>
          <div className="relative min-h-[600px] overflow-hidden rounded-[2rem]">
            <Image
              src="/assets/images/Graduation.jpeg"
              alt="Dalron J. Robertson"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#15110E] px-6 py-24 sm:px-10 md:py-32">
        <CreativeGrid />
      </section>

      <section className="bg-[#0B0908] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            Elsewhere
          </p>
          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
            Other ways of keeping a record.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {outlets.map((outlet) => (
              <a
                key={outlet.title}
                href={outlet.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[360px] flex-col justify-between bg-[#15110E] p-8 no-underline transition hover:bg-[#211A15]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A99478]">
                    {outlet.label}
                  </p>
                  <h3 className="mt-5 text-3xl font-semibold leading-tight text-[#FFF9F0]">
                    {outlet.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-[#AFA08D]">
                    {outlet.description}
                  </p>
                </div>
                <p className="mt-10 text-sm font-semibold text-[#E8DCC9] transition group-hover:translate-x-1">
                  {outlet.linkLabel} ↗
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C1510] px-6 py-24 text-center sm:px-10 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
          A private center
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
          Not everything meaningful needs to become content.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#BFAF9B]">
          The public record is only a portion of the life. The rest remains
          protected, cultivated, and lived for its own sake.
        </p>
      </section>

      <Footer />
    </main>
  );
}
