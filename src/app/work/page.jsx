import Image from "next/image";
import {
  TextLink,
  SectionHeading,
  NextChapter,
} from "@/components/editorial/Primitives";
import { Reveal, Parallax } from "@/components/editorial/Motion";
export const metadata = {
  title: "Work",
  description:
    "Dalron J. Robertson’s research, pharmacy experience, and work on NaS.",
  alternates: { canonical: "https://dalronjrobertson.com/work" },
};
export default function Work() {
  return (
    <main className="work-page">
      <section className="work-hero shell">
        <p className="eyebrow">Selected work</p>
        <h1>
          Research.
          <br />
          <span className="metal-text">Practice.</span>
        </h1>
        <p>
          NaS, biomedical research, and clinical pharmacy.
          <br />
          Current projects and experience.
        </p>
        <nav className="chapter-nav" aria-label="Work chapters">
          <a href="#nas">NaS</a>
          <a href="#research">Research</a>
          <a href="#clinical">Clinical pharmacy</a>
          <a href="#institutions">Foundation</a>
        </nav>
      </section>
      <section id="nas" className="nas-chapter shell">
        <Reveal>
          <p className="eyebrow">01 / Building NaS</p>
          <div className="nas-intro">
            <h2>
              NaS<span>.</span>
            </h2>
            <div>
              <h3>
                Precision
                <br />
                medicine.
              </h3>
              <p>
                I founded NaS in 2025. The company is in development, with a
                focus on biomedical research and personalized treatment.
              </p>
              <TextLink href="https://nasresearch.bio" external>
                Explore NaS
              </TextLink>
            </div>
          </div>
        </Reveal>
        <Parallax className="work-wide-photo" amount={45}>
          <Image
            src="/assets/images/systems-companies-workspace.jpg"
            alt="Conceptual workspace for research and company building"
            fill
            sizes="90vw"
          />
        </Parallax>
        <div className="three-notes">
          <Reveal>
            <h3>Research.</h3>
            <p>
              I study biological targets and biomarkers relevant to treatment.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3>Software.</h3>
            <p>I’m developing research software for NaS, including Nicole.</p>
          </Reveal>
          <Reveal delay={0.16}>
            <h3>Company development.</h3>
            <p>
              NaS is still in development. My work includes its research plans,
              software, and educational material.
            </p>
          </Reveal>
        </div>
      </section>
      <section id="research" className="research-chapter light-section">
        <div className="shell">
          <SectionHeading
            label="02 / Research"
            title={
              <>
                Research papers
                <br />
                and abstracts.
              </>
            }
          >
            Read my graduate research abstract and the NaS foundational paper.
          </SectionHeading>
          <div className="research-publications">
            <article>
              <span className="publication-kind">Foundational paper</span>
              <h3>
                The NaS
                <br />
                foundational paper.
              </h3>
              <p>
                The paper describes the proposed research and company structure.
              </p>
              <TextLink href="/files/Nas-White-Paper.pdf">
                Read the paper
              </TextLink>
            </article>
            <article>
              <span className="publication-kind">Graduate research</span>
              <h3>
                Bioinformatics & pharmacology
                <br />
                of <em>Nigella sativa.</em>
              </h3>
              <p>
                Research on compounds in Nigella sativa and their biological
                activity.
              </p>
              <TextLink href="/assets/images/M.S.Article.png">
                View the research abstract
              </TextLink>
            </article>
          </div>
        </div>
      </section>
      <section id="clinical" className="clinical-chapter shell">
        <Reveal>
          <p className="eyebrow">03 / Clinical pharmacy</p>
          <h2>
            UChicago
            <br />
            <span className="muted">Medicine.</span>
          </h2>
        </Reveal>
        <div className="clinical-body">
          <p>
            I work as a pharmacy intern at UChicago Medicine, including the
            Discharge Medication Program and outpatient pharmacy.
          </p>
          <div className="clinical-details">
            <div>
              <h3>UChicago Medicine</h3>
              <p>Pharmacy practice & transitions of care</p>
            </div>
            <div>
              <h3>Chicago State University</h3>
              <p>PharmD/MBA training in progress</p>
            </div>
            <div>
              <h3>Astellas Bridge to Industry</h3>
              <p>Industry mentorship & drug development</p>
            </div>
          </div>
          <TextLink href="/about#experience">Education & experience</TextLink>
        </div>
      </section>
      <section id="institutions" className="foundation-chapter">
        <div className="foundation-mark">
          <Image
            src="/assets/images/RobertsonFoundation.jpg"
            alt="The Robertson Foundation"
            width={800}
            height={800}
            sizes="(max-width:700px) 80vw, 40vw"
          />
        </div>
        <Reveal>
          <p className="eyebrow">04 / Foundation</p>
          <h2>
            The Robertson
            <br />
            Foundation.
          </h2>
          <p>
            I’m planning the Robertson Foundation to support education, culture,
            and community programs. It is still in development.
          </p>
          <span className="status-note">In development</span>
        </Reveal>
      </section>
      <NextChapter
        label="Writing"
        title="My books."
        href="/writing"
        image="/assets/images/JadeCB.png"
      />
    </main>
  );
}
