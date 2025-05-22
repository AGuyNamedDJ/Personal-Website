

export const metadata = {
  title: "Work | Dalron Robertson",
  description: "Selected projects and professional work by Dalron Robertson"
};

const projects = [
  {
    title: "NaS Research Agent",
    year: "2025",
    img: "/assets/images/NaSArticle.png",
    link: "/files/NaSArticle.pdf",
    desc: "Foundational white paper establishing an AI‑driven biotech research framework"
  },
  {
    title: "Robertson Foundation",
    year: "2024",
    img: "/assets/images/RobertsonFoundation.jpg",
    link: "/work/robertson-foundation",
    desc: "Non‑profit bridging medicine and technology to advance cultural innovation"
  },
  {
    title: "Circuit Breakers",
    year: "2023",
    img: "/assets/images/CB.png",
    link: "https://www.amazon.com/gp/product/B0F4XWYDJB",
    desc: "Memoir exploring imperfection and resilience in engineering culture"
  }
];

export default function WorkPage() {
  return (
    <main className="scroll-smooth">
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img
          src="/assets/images/WorkHero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Selected Work
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 grid gap-14 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-[#F9F4EC] border border-[#D2C2AA] shadow hover:shadow-lg transition-transform duration-150 ease-out hover:-translate-y-1"
          >
            <div className="relative h-48 rounded-t-3xl overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-neutral-600 mb-3">{p.desc}</p>
              <span className="inline-block bg-[#D2C2AA] text-white text-xs px-3 py-1 rounded-full">
                {p.year}
              </span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}