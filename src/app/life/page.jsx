import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";
import { editorialImages } from "@/lib/editorial-images";
import { TextLink, Contact } from "@/components/editorial/Primitives";
import { Reveal, Parallax, DotCarousel } from "@/components/editorial/Motion";
export const metadata = {
  title: "Life",
  description:
    "Photographs of family, Chicago, travel, and graduations by Dalron J. Robertson.",
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
          <p className="eyebrow">Family, travel, and Chicago.</p>
          <h1>
            Photo
            <br />
            journal.
          </h1>
          <a className="small-link" href="#collections">
            The photo journal ↓
          </a>
        </div>
      </section>
      <section className="life-intro light-section shell-full">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Personal photographs</p>
            <h2>
              My family.
              <br />
              My travels.
              <br />
              <span className="muted">My photographs.</span>
            </h2>
          </Reveal>
          <p>
            Photographs from trips, time with my daughter, and walks around
            Chicago.
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
              Browse the
              <br />
              photo albums.
            </h2>
            <span>Eight photo albums.</span>
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
        <p className="eyebrow">Find me online</p>
        <h2>Elsewhere.</h2>
        <div className="elsewhere-links">
          {[
            [
              "Beli",
              "Restaurants I’ve visited.",
              "https://beliapp.co/profile/dalronrobertson",
            ],
            [
              "Instagram",
              "My photos and posts.",
              "https://www.instagram.com/aguynameddj/",
            ],
            ["YouTube", "My videos.", "https://www.youtube.com/@AGNDJ"],
          ].map(([name, desc, href]) => (
            <a href={href} key={name} target="_blank" rel="noopener noreferrer">
              <h3>{name}</h3>
              <p>{desc}</p>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className="private-note">
          I enjoy photography, good food,
          <br />
          and spending time with family.
        </p>
      </section>
      <Contact />
    </main>
  );
}
