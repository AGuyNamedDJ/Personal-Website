import Image from "next/image";
import { TextLink, NextChapter } from "@/components/editorial/Primitives";
import { Reveal, Parallax } from "@/components/editorial/Motion";
import { portrait } from "@/lib/collections";
export const metadata = {
  title: "About",
  description:
    "Education, pharmacy experience, research, and personal interests of Dalron J. Robertson.",
  alternates: { canonical: "https://dalronjrobertson.com/about" },
};
const milestones = [
  [
    "2028",
    "Doctor of Pharmacy",
    "Expected May 2028 · Chicago State University",
  ],
  [
    "2025",
    "UChicago Medicine",
    "Pharmacy intern · Discharge Medication Program and outpatient pharmacy",
  ],
  [
    "2025",
    "Astellas Bridge to Industry",
    "Mentorship in translational medicine, applied safety, quality, biomarkers, and drug development",
  ],
  [
    "2025",
    "Master of Science in Biological Sciences",
    "Mississippi College · Bioinformatics and molecular modeling",
  ],
  ["2025", "Founded NaS", "Precision-medicine company in development"],
  [
    "2023–25",
    "Software Engineer, Scale AI",
    "Technical evaluation, safety, search quality, and software systems",
  ],
  [
    "2022",
    "Software engineering training",
    "University of Illinois Chicago · Full-stack development, algorithms, and systems design",
  ],
  ["2018", "Bachelor of Science in Biology", "Jackson State University"],
];
export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Dalron J. Robertson, M.S.</p>
          <h1>
            About
            <br />
            Dalron
            <br />
            <span className="metal-text">Robertson.</span>
          </h1>
          <p>
            Scientist. Founder. Writer.
            <br />
            Based in Chicago.
          </p>
        </div>
        <div className="about-portrait">
          <Image
            src={portrait}
            alt="Dalron J. Robertson at Mississippi College"
            fill
            priority
            sizes="(max-width:700px) 100vw, 55vw"
          />
          <div />
        </div>
      </section>
      <section className="about-intro light-section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Background</p>
            <h2>
              Biology, pharmacy,
              <br />
              <span className="muted">and research.</span>
            </h2>
          </Reveal>
          <div className="biography-columns">
            <p>
              I’m Dalron Robertson, a scientist, author, and founder of NaS. I
              live in Chicago, where I work as a pharmacy intern at UChicago
              Medicine.
            </p>
            <div>
              <p>
                I earned a bachelor’s in biology at Jackson State University and
                a master’s in biological sciences at Mississippi College. My
                graduate research involved bioinformatics and molecular
                modeling.
              </p>
              <p>
                I’m completing PharmD/MBA training at Chicago State University
                while developing NaS. Outside work and school, I write books,
                take photographs, and spend time with my family.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-beliefs shell">
        <Reveal>
          <p className="eyebrow">Personal priorities</p>
          <h2>
            What matters
            <br />
            <span className="muted">to me.</span>
          </h2>
        </Reveal>
        <div className="belief-list">
          {[
            [
              "Patient care.",
              "My pharmacy work includes the Discharge Medication Program and outpatient pharmacy at UChicago Medicine.",
            ],
            [
              "NaS.",
              "I’m developing the company alongside my pharmacy training.",
            ],
            [
              "Education.",
              "Education is part of my plans for NaS and the Robertson Foundation.",
            ],
            [
              "Family and faith.",
              "I value time with my family, my faith, travel, and rest.",
            ],
          ].map(([title, body], i) => (
            <Reveal key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="experience" className="experience-section light-section">
        <div className="shell experience-grid">
          <div>
            <p className="eyebrow">Education & experience</p>
            <h2>
              My experience
              <br />
              and education.
            </h2>
            <p className="experience-note">
              Degrees and roles in biology,
              <br />
              technology, and patient care.
            </p>
          </div>
          <ol>
            {milestones.map(([year, title, detail]) => (
              <li key={title}>
                <span>{year}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="documents-section shell">
        <p className="eyebrow">Documents</p>
        <h2>Résumé and CV.</h2>
        <div className="document-links">
          {[
            ["Résumé", "DJR-Resume.pdf", "A concise professional overview"],
            [
              "Curriculum vitae",
              "DJR-CurriculumVitae.pdf",
              "Education, research, and experience",
            ],
          ].map(([title, file, desc]) => (
            <article key={file}>
              <svg viewBox="0 0 48 60" aria-hidden="true">
                <path d="M8 2h23l10 11v45H8zM31 2v12h10M16 27h17M16 35h17M16 43h11" />
              </svg>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div>
                  <TextLink href={`/files/${file}`}>View PDF</TextLink>
                  <a href={`/files/${file}`} download>
                    Download ↓
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <NextChapter label="Photo journal" title="My photographs." href="/life" />
    </main>
  );
}
