import Image from "next/image";
import { TextLink, NextChapter } from "@/components/editorial/Primitives";
import { Reveal, Parallax } from "@/components/editorial/Motion";
import { portrait } from "@/lib/collections";
export const metadata = {
  title: "About",
  description:
    "Scientist, founder, writer, and a life beyond any one title. Meet Dalron J. Robertson.",
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
  [
    "2025",
    "Founded NaS",
    "Establishing a precision-medicine company and its scientific direction",
  ],
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
            Always curious.
            <br />
            Never just
            <br />
            <span className="metal-text">one thing.</span>
          </h1>
          <p>
            Scientist. Founder. Writer.
            <br />A person before all of them.
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
            <p className="eyebrow">The story so far</p>
            <h2>
              Science opened the door.
              <br />
              <span className="muted">Curiosity kept it open.</span>
            </h2>
          </Reveal>
          <div className="biography-columns">
            <p>
              I’m a scientist, founder, writer, and builder based in Chicago. My
              work begins with clinical pharmacy and biomedical research, and
              extends into software, companies, and stories.
            </p>
            <div>
              <p>
                Biology gave me a way to understand living systems.
                Computational research and software gave me ways to investigate
                them. Clinical pharmacy keeps those questions connected to the
                people on the other side of every decision.
              </p>
              <p>
                Today, I’m continuing PharmD/MBA training at Chicago State
                University, working in pharmacy at UChicago Medicine, and
                developing NaS. Writing and photography remain part of the same
                life: other ways to look carefully, ask questions, and create.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-beliefs shell">
        <Reveal>
          <p className="eyebrow">What I come back to</p>
          <h2>
            Depth matters.
            <br />
            <span className="muted">So does the whole life.</span>
          </h2>
        </Reveal>
        <div className="belief-list">
          {[
            [
              "Stay close to people.",
              "Clinical work keeps large ambitions connected to human needs and real consequences.",
            ],
            [
              "Build for the long term.",
              "Create work that can remain useful as companies, roles, and circumstances change.",
            ],
            [
              "Make room for others.",
              "Knowledge and ownership matter when they expand what other people can do.",
            ],
            [
              "Protect a full life.",
              "Family, faith, beauty, travel, rest, and play belong alongside meaningful work.",
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
              The path
              <br />
              so far.
            </h2>
            <p className="experience-note">
              A foundation built across biology,
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
        <p className="eyebrow">The complete record</p>
        <h2>A little more detail.</h2>
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
      <NextChapter
        label="Away from the desk"
        title="A life, in photographs."
        href="/life"
      />
    </main>
  );
}
