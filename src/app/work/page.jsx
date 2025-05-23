export const metadata = {
  title: "Work | Dalron Robertson",
  description: "Selected projects and professional work by Dalron Robertson"
};

import Footer from "@/components/Footer";

const projects = [
  {
    title: "Robertson Foundation",
    img: "/assets/images/RobertsonFoundation.jpg",
    link: "/work/robertson-foundation"
  },
  {
    title: "Creative Studio",
    img: "/assets/images/CreativeStudioPreview.jpg",
    link: "/work/creative-studio"
  },
  {
    title: "Upcoming Ventures",
    img: "/assets/images/UpcomingVenturesPreview.jpg",
    link: "/work/upcoming-ventures"
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
      <section className="mx-auto max-w-3xl px-4 py-12 mt-0 md:mt-2 text-center">
        <p className="text-2xl md:text-4xl font-semibold mb-4 text-neutral-300">
          Everything Starts with Creation
        </p>
        <p className="text-lg md:text-xl text-neutral-200">
          I build platforms, craft stories, and launch ventures, each designed to help others bring their boldest ideas to life and make the impossible possible.
        </p>
      </section>

      {/* NaS Overview */}
      <section id="nas-overview" className="bg-[#181615] text-white py-16">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-6 text-white text-center">
              NaS Research
            </p>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 text-neutral-300 text-center">
              We’re building NaS to be the world’s first AI powered, quantum ready research campus, where every scientist has the compute, automation, and data scaffolding they need to turn bold ideas into reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                'Large scale R&D hub for cross disciplinary teams',
                'Institute to incubate tomorrow’s scientific leaders',
                'Robotic manufacturing and automated experimentation',
                'High security biobank and next generation data analytics'
              ].map((item) => (
                <p
                  key={item}
                  className="text-lg md:text-xl leading-relaxed text-neutral-300 pl-4 border-l-4 border-[#F9F4EC]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Illustration or mockup */}
          <div className="flex items-center justify-center mt-8">
            <div className="max-w-md">
              <img
                src="/assets/images/NaSHQ.png"
                alt="NaS Campus Mockup"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transition into white paper */}
      <section className="mx-auto max-w-4xl px-4 py-12 mt-12 mb-12 text-left">
        <p className="text-3xl md:text-5xl font-semibold text-neutral-300">
          Here’s the blueprint guiding<br />
          NaS from vision to reality.
        </p>
      </section>

      {/* NaS White Paper */}
      <section id="nas-white-paper" className="relative overflow-hidden py-8 min-h-[50vh]">
        <div className="mx-auto max-w-5xl px-4 flex flex-col items-center">
          <div className="mb-8">
            <img
              src="/assets/images/NaSArticle.png"
              alt="NaS White Paper"
              className="max-w-3xl max-h-[60vh] object-contain rounded-lg shadow-xl"
              style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.14)" }}
            />
          </div>
          <p className="text-xl text-neutral-300 mb-4 text-center">
            Our founding white paper introduces the vision, strategy, and technical infrastructure behind NaS. It details our initial design for a groundbreaking knowledge model and the pathway toward autonomous scientific innovation.
          </p>
          <div className="flex gap-4">
            <a
              href="https://cdn.nas.com/papers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F9F4EC] text-[#181615] px-6 py-3 rounded-2xl font-medium shadow hover:scale-105 transition"
            >
              View All Papers →
            </a>
            <a
              href="https://nas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-[#F9F4EC] text-[#F9F4EC] px-6 py-3 rounded-2xl font-medium shadow hover:scale-105 transition"
            >
              Visit NaS Website →
            </a>
          </div>
        </div>
      </section>

      {/* Robertson Foundation */}
      <section id="robertson-foundation" className="py-32">
        <div className="flex items-center justify-center mb-8">
          <img
            src="/assets/images/RobertsonFoundation.jpg"
            alt="Robertson Foundation"
            className="max-w-4xl max-h-[65vh] object-contain rounded-lg shadow-2xl border-none outline-none"
            style={{ boxShadow: "0 40px 60px rgba(0,0,0,0.3)", border: "none" }}
          />
        </div>
        <div className="mx-auto mt-12 max-w-3xl px-4 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-neutral-300 mb-6">
            The Robertson Foundation champions the arts, humanities, and community vitality. Through targeted grants,  events, and collaborative initiatives, we nuture  creative expression across diverse cultural landscapes.
          </p>
          <a
            href="https://robertsonfoundation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm md:text-base font-medium text-neutral-200 underline hover:text-white transition"
          >
            Visit the Robertson Foundation Website →
          </a>
        </div>
      </section>

      {projects
        .filter(p => p.title !== "Robertson Foundation")
        .map((p) => (
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