import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";
import { editorialImages } from "@/lib/editorial-images";
import { TextLink, Contact } from "@/components/editorial/Primitives";
import { Reveal, Parallax, DotCarousel } from "@/components/editorial/Motion";
export const metadata = {
  title: "Life",
  description:
    "People, places, and moments. A personal photographic journal from Dalron J. Robertson.",
  alternates: { canonical: "https://dalronjrobertson.com/life" },
};
export default function Life() {
  return (
    <main className="life-page">
      <section className="life-hero">
        <Image
          src={editorialImages.lifeHero}
          alt="The Chicago River and its bridges at dusk"
          fill
          priority
          sizes="100vw"
        />
        <div className="image-vignette" />
        <div>
          <p className="eyebrow">People. Places. The in-between.</p>
          <h1>
            Life.
            <br />
            Look closer.
          </h1>
          <a className="small-link" href="#collections">
            The photo journal ↓
          </a>
        </div>
      </section>
      <section className="life-intro light-section shell-full">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Outside the work</p>
            <h2>
              Not everything
              <br />
              needs a purpose.
              <br />
              <span className="muted">Some things are the point.</span>
            </h2>
          </Reveal>
          <p>
            Family, travel, food, photography, and the small moments worth
            remembering. A window into a life that keeps unfolding.
          </p>
        </div>
      </section>
      <section className="featured-moments light-section">
        <DotCarousel label="Moments from the photo journal">
          {[collections[2], collections[0], collections[1]].map((c) => (
            <Link
              key={c.slug}
              href={`/creative-studio/${c.slug}`}
              className="moment-slide"
            >
              <Image
                src={editorialImages.featured[c.slug]}
                alt={c.name}
                fill
                sizes="90vw"
              />
              <div className="image-vignette" />
              <div>
                <p>
                  {c.category} / {c.year}
                </p>
                <h3>{c.title}</h3>
                <span>Explore the photographs ↗</span>
              </div>
            </Link>
          ))}
        </DotCarousel>
      </section>
      <section id="collections" className="collections-section light-section">
        <div className="shell">
          <div className="collection-heading">
            <p className="eyebrow">The photo journal</p>
            <h2>
              A few chapters
              <br />
              from real life.
            </h2>
            <span>Eight collections. One ongoing story.</span>
          </div>
          <div className="collection-grid">
            {collections.map((c, i) => (
              <Reveal
                key={c.slug}
                className={`collection-item collection-item-${i}`}
              >
                <Link href={`/creative-studio/${c.slug}`}>
                  <div className="collection-image">
                    <Image
                      src={c.cover}
                      alt={c.name}
                      fill
                      sizes="(max-width:700px) 100vw, 50vw"
                    />
                  </div>
                  <div className="collection-caption">
                    <div>
                      <p>
                        {c.category} · {c.year}
                      </p>
                      <h3>{c.name}</h3>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="elsewhere-section shell">
        <p className="eyebrow">Other corners of my world</p>
        <h2>Follow the curiosity.</h2>
        <div className="elsewhere-links">
          {[
            [
              "Beli",
              "Good food. Places worth returning to.",
              "https://beliapp.co/profile/dalronrobertson",
            ],
            [
              "Instagram",
              "The visual notebook.",
              "https://www.instagram.com/aguynameddj/",
            ],
            [
              "YouTube",
              "Film, play, and other interests.",
              "https://www.youtube.com/@AGNDJ",
            ],
          ].map(([name, desc, href]) => (
            <a href={href} key={name} target="_blank" rel="noopener noreferrer">
              <h3>{name}</h3>
              <p>{desc}</p>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="private-note">
          The public record is only part of the life.
          <br />
          The rest is lived for its own sake.
        </p>
      </section>
      <Contact />
    </main>
  );
}
