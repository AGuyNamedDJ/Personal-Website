import Image from "next/image";
import Footer from "../../components/Footer";
import TimelineRibbonClient from "../../components/sections/TimelineRIbbonClient.jsx";
import DocumentsRibbon from "../../components/sections/DocumentsRibbon.jsx";

export const metadata = {
  title: "About Dalron J. Robertson | Researcher, Engineer, and AI Innovator",
  description: "Learn about Dalron J. Robertson, a researcher and engineer specializing in biomedical science, clinical pharmacology, AI-driven drug discovery, computational biology, and creative innovation.",
  keywords: [
    "Dalron J. Robertson",
    "About Dalron Robertson",
    "AI researcher",
    "Pharm.D. candidate",
    "biomedical scientist",
    "clinical pharmacologist",
    "computational biology",
    "drug discovery",
    "machine learning",
    "bioinformatics",
    "health technology",
    "creative innovation"
  ]
};

export default function AboutPage() {
  return (
    <main className="pt-20 scroll-smooth">
      <section className="h-[12vh] md:h-[16vh] flex items-center justify-center mb-0">
        <h1
          className="text-[6rem] md:text-[8rem] font-bold text-center"
          style={{ fontFamily: "Willington", color: "#5C3A21" }}
        >
          About Me
        </h1>
      </section>

      <section className="mx-auto max-w-prose px-4 pt-0 pb-12">
        <Image
          src="/assets/images/Graduation.jpeg"
          alt="Graduation portrait"
          width={260}
          height={260}
          className="rounded-3xl object-cover shadow-lg float-left md:mr-8 mb-4 mt-3"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="leading-relaxed text-neutral-800">
            I am Dalron J. Robertson, a scientist and builder working in the life sciences. My work is grounded in careful thinking, disciplined craft, and a deep curiosity about how biological systems function. Long before formal scientific training, the arts shaped how I approach problems. Writing and composing taught me that structure and creativity belong together, and that meaningful work is built patiently, piece by piece.
          </p>
          <p className="leading-relaxed text-neutral-800 mt-2">
            My academic foundation in biology and biomedical science led naturally into research. During my graduate work I led a team of sixteen students studying phytochemicals and their therapeutic potential. We used bioinformatics, structural modeling, and molecular docking to explore how naturally occurring compounds interact with biological targets. That work strengthened my belief that computation and biological insight together can reveal patterns that would otherwise remain hidden.
          </p>
          <p className="leading-relaxed text-neutral-800 mt-2">
            Clinical medicine is another part of that pursuit. Work within UChicago Medicine and collaboration with scientists and leaders at Astellas reflect my commitment to understanding how discoveries move from biological insight to real therapies. At the same time I continue building computational tools designed to organize and interpret complex biomedical data, allowing scientific knowledge to accumulate and evolve in more intelligent ways.
          </p>
          <p className="leading-relaxed text-neutral-800 mt-2">
            Across research, medicine, and technology, the purpose remains steady. I study life carefully, build systems that extend our ability to understand it, and apply that understanding toward the improvement of human health.
          </p>
          <div className="clear-left" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Key Milestones
        </h2>
        <TimelineRibbonClient />
      </section>
      <section className="mx-auto max-w-3xl px-4 pt-1 pb-0 text-center">
        <h2 className="text-3xl font-semibold mb-0">Professional Credentials</h2>
        <p className="text-neutral-700 mb-1">
          Download the documents that outline my education, experience, and projects.
        </p>
      </section>
      <div className="-mt-8">
        <DocumentsRibbon />
      </div>

      <Footer />
    </main>
  );
}