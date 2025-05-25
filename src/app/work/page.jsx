export const metadata = {
  title: "Work | Dalron Robertson",
  description: "Selected projects and professional work by Dalron Robertson"
};

import Footer from "@/components/Footer";
import CreativeGrid from "@/components/sections/CreativeGrid";

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
    <main className="pt-20 scroll-smooth bg-black text-white">
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 pt-40 pb-96 text-center">
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-400 mb-0">
            Everything Starts with
          </p>
          <p className="text-[8rem] md:text-[10rem] leading-none font-bold text-center mb-1 text-white">
            Creation.
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-neutral-400 text-center mb-0">
            I build platforms, craft stories, and launch ventures, each designed to help others bring their boldest ideas to life and make the impossible possible.
          </p>
        </div>
      </section>

      {/* NaS Overview */}
      <section id="nas-overview" className="bg-[#181615] text-white py-16">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-3xl md:text-4xl font-semibold mb-6 text-neutral-300 text-center">
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

      <div className="bg-black">
      {/* Transition into white paper */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12 mt-12 mb-12 text-left">
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
          <p className="text-xl text-neutral-300 mb-8 text-center">
            Our founding white paper introduces the vision, strategy, and technical infrastructure behind NaS. It details our initial design for a groundbreaking knowledge model and the pathway toward autonomous scientific innovation.
          </p>
          <div className="flex gap-4 pb-20">
            <a
              href="https://cdn.nas.com/papers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F9F4EC] text-[#181615] px-6 py-3 rounded-2xl font-medium shadow hover:scale-105 active:scale-95 transition-transform"
            >
              View All Papers →
            </a>
            <a
              href="https://nas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-[#F9F4EC] text-[#F9F4EC] px-6 py-3 rounded-2xl font-medium shadow hover:scale-105 active:scale-95 transition-transform"
            >
              Visit NaS Website →
            </a>
          </div>
        </div>
      </section>
      </div>

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
            className="inline-block text-sm md:text-base font-medium text-neutral-200 underline transition transform hover:text-white hover:scale-105 active:scale-95 focus:outline-none"
          >
            Visit the Robertson Foundation Website →
          </a>
        </div>
      </section>

      {/* Creative Studio */}
      <section id="creative-studio" className="py-32 bg-black">
        <CreativeGrid />
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-48">
          <p className="mt-6 text-2xl md:text-3xl font-semibold text-center text-neutral-400 mb-0">
            Upcoming Ventures
          </p>
          <p className="text-[2.5rem] md:text-[4rem] font-bold text-center mb-6 text-white">
            The best ideas are worth the wait.
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-neutral-400 text-center mb-0">
            Thoughtful ideas take time to cultivate. I'm currently working on several exciting projects designed to make a meaningful impact. Stay tuned as I prepare to share what's next.
          </p>
        </div>
      </section>
    <Footer />
    </main>
  );
}