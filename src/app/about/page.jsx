import Image from "next/image";
import Footer from "../../components/Footer";
import TimelineRibbonClient from "../../components/sections/TimelineRIbbonClient.jsx";
import DocumentsRibbon from "../../components/sections/DocumentsRibbon.jsx";

export const metadata = {
  title: "About",
  description: "Dalron J. Robertson is a biomedical researcher, software engineer, PharmD/MBA candidate, and founder of NaS.",
  keywords: [
    "Dalron J. Robertson",
    "About Dalron Robertson",
    "Pharm.D. candidate",
    "biomedical scientist",
    "clinical pharmacologist",
    "computational biology",
    "drug discovery",
    "bioinformatics",
    "precision medicine",
    "translational science",
  ]
};

export default function AboutPage() {
  return (
    <main className="scroll-smooth bg-[#F9F4EC] pt-16">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20 sm:px-10 md:pb-16 md:pt-28">
        <h1
          className="text-6xl font-normal leading-none md:text-8xl"
          style={{ fontFamily: "Willington", color: "#5C3A21" }}
        >
          About Dalron
        </h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 sm:px-10 md:grid-cols-[320px_1fr] md:gap-16">
        <Image
          src="/assets/images/Graduation.jpeg"
          alt="Dalron J. Robertson"
          width={640}
          height={800}
          className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
        />
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#241408] md:text-4xl">
            Scientist, clinician in training, and builder.
          </h2>
          <p className="mt-6 leading-relaxed text-neutral-800">
            Dalron J. Robertson is a biomedical researcher, software engineer,
            PharmD/MBA candidate, and founder of NaS. His work focuses on
            precision medicine, translational science, clinical pharmacy, and
            computational approaches to biomedical research.
          </p>
          <p className="mt-5 leading-relaxed text-neutral-800">
            His background includes biological science, health-system pharmacy,
            software engineering, molecular modeling, bioinformatics, and
            business. Clinical work at UChicago Medicine provides a direct view
            of patients, medication systems, and the consequences of therapeutic
            decisions. Industry mentorship through Astellas has expanded his
            understanding of translational medicine, applied safety, quality,
            biomarkers, and drug development.
          </p>
          <p className="mt-5 leading-relaxed text-neutral-800">
            Oncology is the initial clinical and scientific focus. Over time,
            the work will extend into infectious disease and other areas where
            biomarkers, real-world evidence, and biomedical data can improve
            patient selection, treatment strategy, dosing, and response.
          </p>
          <p className="mt-5 leading-relaxed text-neutral-800">
            The larger purpose is institution building. Through NaS, research,
            clinical practice, and future philanthropy, Dalron aims to create
            systems that produce knowledge, develop people, and improve medicine.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-semibold text-[#241408] md:text-4xl">
          Key Milestones
        </h2>
        <TimelineRibbonClient />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-0 pt-24 text-center sm:px-10">
        <h2 className="mb-3 text-3xl font-semibold">Professional Credentials</h2>
        <p className="text-neutral-700">
          Download the documents outlining Dalron&apos;s education, experience, and projects.
        </p>
      </section>
      <DocumentsRibbon />

      <Footer />
    </main>
  );
}
