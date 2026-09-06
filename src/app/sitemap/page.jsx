import Link from "next/link";
import { collections } from "@/lib/collections";
export const metadata = {
  title: "Sitemap",
  description: "Explore every part of Dalron J. Robertson’s website.",
};
export default function Sitemap() {
  return (
    <main className="sitemap-page light-section">
      <div className="shell">
        <p className="eyebrow">Site navigation</p>
        <h1>Sitemap.</h1>
        <div className="sitemap-columns">
          <section>
            <h2>The site</h2>
            {[
              ["Home", "/"],
              ["Work", "/work"],
              ["Writing", "/writing"],
              ["About", "/about"],
              ["Life", "/life"],
              ["Connect", "/#contact"],
            ].map(([name, href]) => (
              <Link href={href} key={href}>
                {name}
                <span>↗</span>
              </Link>
            ))}
          </section>
          <section>
            <h2>The photo journal</h2>
            {collections.map((c) => (
              <Link key={c.slug} href={`/creative-studio/${c.slug}`}>
                {c.name}
                <span>↗</span>
              </Link>
            ))}
          </section>
          <section>
            <h2>The details</h2>
            <Link href="/legal/privacy">Privacy policy ↗</Link>
            <Link href="/legal/terms">Terms of service ↗</Link>
            <a href="/files/DJR-Resume.pdf">Résumé ↗</a>
            <a href="/files/DJR-CurriculumVitae.pdf">Curriculum vitae ↗</a>
          </section>
        </div>
      </div>
    </main>
  );
}
