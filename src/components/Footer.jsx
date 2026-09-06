import Link from "next/link";
const social = [
  ["LinkedIn", "https://www.linkedin.com/in/dalronjrobertson/"],
  ["Instagram", "https://www.instagram.com/aguynameddj/"],
  ["GitHub", "https://github.com/AGuyNamedDJ"],
  ["Substack", "https://dalronrobertson.substack.com"],
  ["YouTube", "https://www.youtube.com/@AGNDJ"],
  ["Beli", "https://beliapp.co/profile/dalronrobertson"],
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="footer-name">
            Dalron J. Robertson<span>.</span>
          </Link>
          <p>Chicago, Illinois.</p>
        </div>
        <nav aria-label="Explore the site">
          <span>Explore</span>
          {[
            ["Work", "/work"],
            ["Writing", "/writing"],
            ["About", "/about"],
            ["Life", "/life"],
          ].map(([name, href]) => (
            <Link href={href} key={href}>
              {name}
            </Link>
          ))}
        </nav>
        <nav aria-label="Elsewhere">
          <span>Elsewhere</span>
          {social.map(([name, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              {name} ↗
            </a>
          ))}
        </nav>
        <nav aria-label="Professional documents">
          <span>The details</span>
          <a href="/files/DJR-Resume.pdf">Résumé ↗</a>
          <a href="/files/DJR-CurriculumVitae.pdf">Curriculum vitae ↗</a>
          <a href="mailto:dalronj.robertson@gmail.com">Email ↗</a>
        </nav>
      </div>
      <div className="footer-base">
        <p>© {new Date().getFullYear()} Dalron J. Robertson</p>
        <div>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
        <a href="#site-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
