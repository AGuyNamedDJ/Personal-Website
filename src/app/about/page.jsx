import Image from "next/image";
import Footer from "@/components/Footer";
import TimelineRibbonClient from "@/components/sections/TimelineRibbonClient";

export const metadata = {
  title: "About | Dalron Robertson",
  description: "Bio and professional milestones for Dalron J. Robertson",
};

export default function AboutPage() {
  return (
    <main className="pt-14 scroll-smooth">
      <section className="h-[15vh] md:h-[20vh] flex items-center justify-center mb-1">
        <h1
          className="text-[6rem] md:text-[8rem] font-bold text-center"
          style={{ fontFamily: "Willington", color: "#5C3A21" }}
        >
          About Me
        </h1>
      </section>

      <section className="mx-auto max-w-prose px-4 pt-0 pb-12 md:flex md:items-center md:gap-10">
        <Image
          src="/assets/images/Graduation.jpeg"
          alt="Graduation portrait"
          width={260}
          height={260}
          className="rounded-3xl object-cover shadow-lg mx-auto mb-8 md:mb-0"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="leading-relaxed text-neutral-800">
            I’m Dalron J. Robertson, a researcher, engineer, and creator focused on developing intelligent systems for life sciences. My background combines biomedical science, clinical pharmacology, and software engineering, allowing me to tackle scientific questions with both technical rigor and biological understanding.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Key Milestones
        </h2>
        <TimelineRibbonClient />
      </section>

      <Footer />
    </main>
  );
}