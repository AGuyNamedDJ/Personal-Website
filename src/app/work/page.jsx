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
      <section id="nas-overview" className="relative overflow-hidden pt-6 pb-6 min-h-[50vh] bg-[#181615]">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-4xl font-semibold mb-4 text-white">NaS Research</p>
          <p className="text-lg text-neutral-300 mb-4">
            NaS will be the global center for scientific discovery and innovation, powered by artificial intelligence, quantum computing, and advanced robotics. We’re building an infrastructure to equip researchers in physics, chemistry, biotechnology, agriculture, medicine, environmental science, and beyond with the tools they need for transformative breakthroughs.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            Our plan includes four core divisions currently under development: a large-scale research and development hub, an institute to foster scientific talent and entrepreneurship, robotic manufacturing and automation facilities, and a secure biobank for deep scientific data analytics.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            We’re designing NaS to offer exceptional support, compensation, and growth opportunities for our scientists, while investing in local communities through improvements in infrastructure, education, and economic development—starting in Hyde Park and expanding throughout Chicago.
          </p>
          <p className="text-lg text-neutral-300 mb-4">
            By building NaS, we aim to fully embody science, leading innovation responsibly and ethically to shape the future of our world.
          </p>
        </div>
      </section>

      {/* NaS White Paper */}
      <section id="nas-white-paper" className="relative overflow-hidden py-6 min-h-[50vh]">
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