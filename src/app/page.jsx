import Image from "next/image";
import Link from "next/link";
import {
  Contact,
  TextLink,
  BookObject,
} from "@/components/editorial/Primitives";
import {
  Reveal,
  Parallax,
  BookComposition,
} from "@/components/editorial/Motion";
import { editorialImages } from "@/lib/editorial-images";
export const metadata = {
  title: { absolute: "Dalron J. Robertson — Scientist. Founder. Writer." },
  description:
    "Science, stories, and a life in pursuit of possibility. The work and world of Dalron J. Robertson.",
  alternates: { canonical: "https://dalronjrobertson.com" },
};
export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <Parallax className="hero-art" amount={80}>
          <Image
            src={editorialImages.homeHero}
            alt="Chicago architecture along the river at dusk"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </Parallax>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-name">Dalron J. Robertson</p>
          <h1>
            A mind for science.
            <br />
            <span className="metal-text">A life beyond it.</span>
          </h1>
          <p className="hero-subtitle">
            Scientist. Founder. Writer.
            <br />
            Building what I believe should exist.
          </p>
          <div className="hero-links">
            <TextLink href="/work">Explore the work</TextLink>
            <TextLink href="/about">Meet Dalron</TextLink>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Based in Chicago. Thinking beyond it.</span>
          <a href="#introduction" aria-label="Continue to introduction">
            ↓
          </a>
        </div>
      </section>
      <section id="introduction" className="home-intro shell">
        <Reveal>
          <p className="eyebrow">A few things worth pursuing.</p>
          <h2>
            Better care.
            <br />
            Bigger questions.
            <br />
            <span className="muted">A fuller life.</span>
          </h2>
        </Reveal>
        <Reveal className="intro-aside">
          <p>
            I work at the intersection of clinical pharmacy, biomedical
            research, and software. I’m building NaS, writing books, and making
            room for the life around the work.
          </p>
          <TextLink href="/about">The story so far</TextLink>
        </Reveal>
      </section>
      <section className="science-feature">
        <div className="science-feature-image">
          <Image
            src="/assets/images/nas-lab-workflow.jpg"
            alt="Scientific research workspace"
            fill
            sizes="100vw"
          />
          <div />
        </div>
        <Reveal className="science-feature-copy">
          <p className="eyebrow">NaS / Precision medicine</p>
          <h2>
            Science should
            <br />
            <span>reach someone.</span>
          </h2>
          <p>
            A company in development, grounded in a simple ambition: turn
            biomedical evidence into better therapeutic decisions.
          </p>
          <TextLink href="/work#nas">Inside the work</TextLink>
        </Reveal>
      </section>
      <section className="home-writing light-section">
        <div className="home-writing-copy">
          <Reveal>
            <p className="eyebrow">Books & writing</p>
            <h2>
              Other worlds.
              <br />
              <span className="muted">Human questions.</span>
            </h2>
            <p>
              Medicine, ambition, love, and the futures we choose. Some
              questions need a story.
            </p>
            <TextLink href="/writing">Discover the books</TextLink>
          </Reveal>
        </div>
        <BookComposition compact />
      </section>
      <section id="person" className="home-person">
        <Parallax className="home-person-photo" amount={45}>
          <Image
            src={editorialImages.homePortrait}
            alt="Dalron at his master's graduation"
            fill
            sizes="(max-width: 700px) 100vw, 55vw"
          />
        </Parallax>
        <Reveal className="home-person-copy">
          <p className="eyebrow">The person behind it</p>
          <h2>
            Still learning.
            <br />
            Still becoming.
          </h2>
          <p>
            Biology led to research. Research led to new questions. The path has
            kept widening.
          </p>
          <TextLink href="/about">Get to know me</TextLink>
        </Reveal>
      </section>
      <section className="home-life">
        <Image
          src={editorialImages.homeLife}
          alt="The Chicago skyline framed by trees"
          fill
          sizes="100vw"
        />
        <div className="image-vignette" />
        <Reveal className="home-life-copy">
          <p className="eyebrow">Beyond the work</p>
          <h2>
            Life deserves
            <br />
            your attention.
          </h2>
          <TextLink href="/life">A look around</TextLink>
        </Reveal>
      </section>
      <Contact />
    </main>
  );
}
