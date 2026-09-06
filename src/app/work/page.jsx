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
    "Biomedical research, precision medicine, software, and the companies and institutions Dalron J. Robertson is building.",
  alternates: { canonical: "https://dalronjrobertson.com/work" },
};
export default function Work() {
  return (
    <main className="work-page">
      <section className="work-hero shell">
        <p className="eyebrow">Selected work</p>
        <h1>
          From science.
          <br />
          <span className="metal-text">Into the world.</span>
        </h1>
        <p>
          Research, software, and company building.
          <br />
          Different ways to make knowledge useful.
        </p>
        <nav className="chapter-nav" aria-label="Work chapters">
          <a href="#nas">NaS</a>
          <a href="#research">Research</a>
          <a href="#clinical">Clinical foundation</a>
          <a href="#institutions">The long view</a>
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
                Better evidence.
                <br />
                Better decisions.
              </h3>
              <p>
                A precision-medicine company in development, connecting clinical
                and biological evidence to the decisions that shape treatment.
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
            <h3>Understand.</h3>
            <p>
              Study biological targets, biomarkers, and therapeutic context to
              ask more useful questions.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3>Translate.</h3>
            <p>
              Build research software and infrastructure, including Nicole, to
              turn evidence into usable systems.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h3>Build.</h3>
            <p>
              Develop a company capable of sustaining scientific work,
              education, tools, and partnerships.
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
                Every answer begins
                <br />
                with a better question.
              </>
            }
          >
            A foundation in biological science, computational research, and
            pharmacology.
          </SectionHeading>
          <div className="research-publications">
            <article>
              <span className="publication-kind">Foundational paper</span>
              <h3>
                The scientific direction
                <br />
                behind NaS.
              </h3>
              <p>
                The initial scientific, technical, and organizational framework
                for the company.
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
                Computational and experimental investigation of phytochemicals,
                biological targets, and therapeutic potential.
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
          <p className="eyebrow">03 / Clinical foundation</p>
          <h2>
            Keep the person
            <br />
            <span className="muted">in the picture.</span>
          </h2>
        </Reveal>
        <div className="clinical-body">
          <p>
            Clinical pharmacy at UChicago Medicine keeps the work close to
            patients, medication access, and the systems behind treatment. It is
            the foundation from which the larger work grows.
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
          <p className="eyebrow">04 / The long view</p>
          <h2>
            Make room
            <br />
            for what follows.
          </h2>
          <p>
            The Robertson Foundation is in development as a future home for work
            supporting culture, education, and community. A long-term ambition,
            to be built with care.
          </p>
          <span className="status-note">In development</span>
        </Reveal>
      </section>
      <NextChapter
        label="Another expression"
        title="The written work."
        href="/writing"
        image="/assets/images/JadeCB.png"
      />
    </main>
  );
}
