import Image from "next/image";
import Footer from "@/components/Footer";
import TimelineRibbonClient from "../../components/sections/TimelineRibbonClient";
import DocumentsRibbon from "../../components/sections/DocumentsRibbon";

export const metadata = {
  title: "About | Dalron Robertson",
  description: "Bio and professional milestones for Dalron J. Robertson",
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
            I am Dalron J. Robertson, a researcher, engineer and creative problem solver in the life sciences. My early work in the arts taught me how structured discipline and creative insight spark innovation. Through composing music and writing books I learned to build systems that combine precision with expressive purpose.
          </p>
          <p className="leading-relaxed text-neutral-800 mt-2">
            My training spans biomedical science, clinical pharmacology and software engineering. As lead graduate researcher I guided a team of sixteen in evaluating phytochemicals for therapeutic use. We built structural models, ran molecular docking simulations and conducted bioinformatics analyses to identify the most promising candidates. That work earned second place at my university’s annual research symposium.
          </p>
          <p className="leading-relaxed text-neutral-800 mt-2">
            Currently, as I work toward completing my Pharm.D., I am developing a specialized ecosystem of machine-learning models, domain-specific language models, and autonomous agents tailored to the life sciences. This integrated framework continuously ingests biological data and evolves dynamically to support biomedical research. My clinical background, engineering expertise, and dedication to meaningful innovation equip me to create intelligent systems that accelerate scientific discovery.
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