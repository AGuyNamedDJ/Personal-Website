export const metadata = {
  title: "Writing | Dalron Robertson",
  description: "Essays, research papers, and reflections by Dalron Robertson"
};

const articles = [
  {
    title: "Circuit Breakers — Imperfections",
    date: "2023‑08‑15",
    img: "/assets/images/CB.png",
    link: "https://www.amazon.com/gp/product/B0F4XWYDJB",
    desc: "Excerpt from the memoir exploring resilience in engineering culture."
  },
  {
    title: "Founding NaS: White Paper",
    date: "2025‑04‑02",
    img: "/assets/images/NaSArticle.png",
    link: "/files/NaSArticle.pdf",
    desc: "Technical white paper outlining an AI‑driven biotech research framework."
  },
  {
    title: "AI Ethics in Drug Discovery",
    date: "2024‑11‑30",
    img: "/assets/images/WritingPlaceholder.jpg",
    link: "#",
    desc: "Conference talk summary on responsible machine learning in pharmacology."
  }
];

export default function WritingPage() {
  return (
    <main className="scroll-smooth">
      {/* Hero */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img
          src="/assets/images/WritingHero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Writing
        </h1>
      </section>

      {/* Article cards */}
      <section className="mx-auto max-w-6xl px-4 py-24 grid gap-14 md:grid-cols-3">
        {articles.map((a) => (
          <a
            key={a.title}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-[#F9F4EC] border border-[#D2C2AA] shadow hover:shadow-lg transition-transform duration-150 ease-out hover:-translate-y-1"
          >
            <div className="relative h-48 rounded-t-3xl overflow-hidden">
              <img
                src={a.img}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">{a.title}</h3>
              <p className="text-xs text-neutral-500 mb-2">{a.date}</p>
              <p className="text-sm text-neutral-600">{a.desc}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
