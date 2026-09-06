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
  title: {
    absolute: "Dalron J. Robertson — Pharmacy intern at UChicago Medicine.",
  },
  description:
    "Dalron J. Robertson is a scientist, author, and founder of NaS in Chicago. Read about his research, books, and pharmacy training.",
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
            Scientist.
            <br />
            <span className="metal-text">Author. Founder.</span>
          </h1>
          <p className="hero-subtitle">
            Pharmacy intern at UChicago Medicine.
            <br />
            Founder of NaS.
          </p>
          <div className="hero-links">
            <TextLink href="/work">Explore the work</TextLink>
            <TextLink href="/about">Meet Dalron</TextLink>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Chicago, Illinois.</span>
          <a href="#introduction" aria-label="Continue to introduction">
            ↓
          </a>
        </div>
      </section>
      <section id="introduction" className="home-intro shell">
        <Reveal>
          <p className="eyebrow">What I do</p>
          <h2>
            Pharmacy.
            <br />
            Research.
            <br />
            <span className="muted">Writing.</span>
          </h2>
        </Reveal>
        <Reveal className="intro-aside">
          <p>
            I’m a pharmacy intern at UChicago Medicine and a PharmD/MBA student
            at Chicago State University. I founded NaS and have published two
            novels and a memoir.
          </p>
          <TextLink href="/about">About me</TextLink>
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
            My research
            <br />
            <span>company.</span>
          </h2>
          <p>
            I’m developing NaS, a precision-medicine company focused on
            biomedical research and treatment decisions.
          </p>
          <TextLink href="/work#nas">About NaS</TextLink>
        </Reveal>
      </section>
      <section className="home-writing light-section">
        <div className="home-writing-copy">
          <Reveal>
            <p className="eyebrow">Books & writing</p>
            <h2>
              Two novels.
              <br />
              <span className="muted">One memoir.</span>
            </h2>
            <p>
              I write the Circuit Breakers novels and the memoir To Love
              Ignorantly.
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
          <p className="eyebrow">About me</p>
          <h2>
            Dalron J.
            <br />
            Robertson.
          </h2>
          <p>
            I studied biology at Jackson State University and earned my master’s
            at Mississippi College. I now live and study in Chicago.
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
          <p className="eyebrow">Photo journal</p>
          <h2>
            Family, travel,
            <br />
            and Chicago.
          </h2>
          <TextLink href="/life">View photographs</TextLink>
        </Reveal>
      </section>
      <Contact />
    </main>
  );
}
