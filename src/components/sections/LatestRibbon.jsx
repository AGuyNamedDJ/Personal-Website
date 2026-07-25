import Image from "next/image";

const features = [
  {
    eyebrow: "Precision medicine",
    title: "NaS",
    description:
      "A company being built to turn biomedical evidence into systems for better therapeutic decisions.",
    image: "/assets/images/NaSHQ.png",
    href: "https://nasresearch.bio",
    linkLabel: "Explore NaS",
    external: true,
  },
  {
    eyebrow: "Research",
    title: "Foundational paper",
    description:
      "Publications and ongoing research from NaS.",
    image: "/assets/images/NaSArticle.png",
    href: "https://nasresearch.bio/research",
    linkLabel: "Explore the research",
    external: true,
  },
  {
    eyebrow: "Writing",
    title: "Circuit Breakers",
    description:
      "Stories about medicine, ambition, ethics, resilience, and the choices that shape progress.",
    image: "/assets/images/CB.png",
    href: "/writing",
    linkLabel: "Explore the books",
    external: false,
  },
];

export default function LatestRibbon() {
  return (
    <section id="latest" className="bg-[#F9F4EC] px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5B3A]">
            Selected work
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#241408] md:text-6xl">
            Research, systems, and stories built with purpose.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              target={feature.external ? "_blank" : undefined}
              rel={feature.external ? "noopener noreferrer" : undefined}
              className="group overflow-hidden rounded-3xl border border-[#D2C2AA] bg-white no-underline transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#181615]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A5B3A]">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#241408]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {feature.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#5C3A21]">
                  {feature.linkLabel} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
