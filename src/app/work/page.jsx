export const metadata = {
  title: "Work | Dalron Robertson",
  description: "Selected projects and professional work by Dalron Robertson"
};

import Footer from "@/components/Footer";

const projects = [
  {
    title: "NaS Research",
    img: "/assets/images/NaSArticle.png",
    link: "/files/NaSArticle.pdf"
  },
  {
    title: "Robertson Foundation",
    img: "/assets/images/RobertsonFoundation.jpg",
    link: "/work/robertson-foundation"
  },
  {
    title: "Creative Studio",
    img: "/assets/images/CreativeStudioPreview.jpg",
    link: "/work/creative-studio"
  }
];

export default function WorkPage() {
  return (
    <main className="pt-20 scroll-smooth bg-[#181615] text-white">
      <section className="h-[12vh] md:h-[16vh] flex items-center justify-center mb-0">
        <h1
          className="text-[6rem] md:text-[8rem] font-bold text-center"
          style={{ fontFamily: "Willington", color: "#F9F4EC" }}
        >
          My Work
        </h1>
      </section>
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

      {projects.map((p) => (
        <section
          key={p.title}
          id={p.title.replace(/\s+/g, "-").toLowerCase()}
          className="relative overflow-hidden py-32 min-h-[85vh]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={p.img}
              alt={p.title}
              className="max-w-4xl max-h-[65vh] object-contain rounded-lg shadow-lg"
              style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.14)" }}
            />
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 left-8 inline-flex items-center text-sm font-medium text-neutral-200 underline transform transition-transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              View {p.title} →
            </a>
          </div>
        </section>
      ))}
    <Footer />
    </main>
  );
}