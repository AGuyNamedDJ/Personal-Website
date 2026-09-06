import Image from "next/image";
import Link from "next/link";
export function TextLink({ href, children, external = false, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-link ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function SectionHeading({ label, title, children, light = false }) {
  return (
    <div className={`section-heading ${light ? "ink-heading" : ""}`}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}
export function BookObject({ index = 0, className = "", priority = false }) {
  const images = ["CB1.png", "CB2.png", "TLI.png"];
  const titles = [
    "Circuit Breakers: Echoes of Innovation",
    "Circuit Breakers: Imperfections",
    "To Love Ignorantly: Love’s Memoir",
  ];
  return (
    <div className={`book-object book-${index} ${className}`}>
      <div className="book-front">
        <Image
          src={`/assets/images/${images[index]}`}
          alt={`${titles[index]} by Dalron J. Robertson`}
          width={1024}
          height={1024}
          sizes="(max-width: 640px) 280px, 520px"
          priority={priority}
        />
      </div>
      <div className="book-spine" aria-hidden="true" />
      <div className="book-edge" aria-hidden="true" />
    </div>
  );
}
export function NextChapter({ label, title, href, image }) {
  return (
    <section className="next-chapter">
      <Link href={href} className="chapter-link">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>
            {title}
            <span aria-hidden="true">↗</span>
          </h2>
        </div>
        {image && (
          <div className="next-image">
            <Image src={image} alt="" fill sizes="35vw" />
          </div>
        )}
      </Link>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="eyebrow">A conversation can be a beginning.</p>
      <h2>
        What could we
        <br />
        <span className="muted">make possible?</span>
      </h2>
      <div className="contact-row">
        <TextLink href="mailto:dalronj.robertson@gmail.com">
          Get in touch
        </TextLink>
        <p>
          For research, writing, collaboration,
          <br />
          and ideas worth pursuing.
        </p>
      </div>
    </section>
  );
}
