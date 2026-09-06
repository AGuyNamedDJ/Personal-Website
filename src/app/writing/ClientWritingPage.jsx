import Image from "next/image";
import { books, research } from "@/lib/writing";
import {
  BookObject,
  TextLink,
  NextChapter,
} from "@/components/editorial/Primitives";
import { Parallax, Reveal } from "@/components/editorial/Motion";
export default function Writing() {
  return (
    <main className="writing-page">
      <section className="writing-hero light-section">
        <p className="eyebrow">Dalron J. Robertson</p>
        <h1>
          Published
          <br />
          <span className="muted">books.</span>
        </h1>
        <p>Two novels and a memoir.</p>
        <Parallax className="studio-books" amount={28}>
          <Image
            src="/assets/editorial/books/collection.webp"
            alt="The three published books by Dalron J. Robertson, rendered as a collection"
            fill
            sizes="(max-width: 700px) 145vw, 1100px"
            priority
          />
        </Parallax>
        <a href="#books" className="small-link">
          Explore the collection ↓
        </a>
      </section>
      <section id="books" className="book-collection">
        {books.map((book, i) => (
          <article
            key={book.title}
            className={`book-chapter book-chapter-${i}`}
          >
            <div className="book-chapter-art">
              <Reveal>
                <BookObject index={i} />
              </Reveal>
            </div>
            <Reveal className="book-chapter-copy">
              <p className="eyebrow">
                {i < 2
                  ? `Circuit Breakers / ${i === 0 ? "Book one" : "Book two"}`
                  : "Personal writing / A memoir"}
              </p>
              <h2>
                {
                  [
                    <>
                      Echoes of
                      <br />
                      Innovation.
                    </>,
                    <>Imperfections.</>,
                    <>
                      To Love
                      <br />
                      Ignorantly.
                    </>,
                  ][i]
                }
              </h2>
              <p>{book.description}</p>
              <div className="retailer-links">
                {book.links.map((link) => (
                  <TextLink external href={link.href} key={link.label}>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </Reveal>
          </article>
        ))}
      </section>
      <section className="essay-section shell">
        <p className="eyebrow">Essays</p>
        <h2>
          Read my essays
          <br />
          <span className="muted">on Substack.</span>
        </h2>
        <div>
          <p>I also publish personal essays on Substack.</p>
          <TextLink href="https://dalronrobertson.substack.com" external>
            Read on Substack
          </TextLink>
        </div>
      </section>
      <section
        id="research"
        className="writing-research light-section shell-full"
      >
        <div className="shell">
          <p className="eyebrow">Scientific writing</p>
          <h2>
            Research papers
            <br />
            and abstracts.
          </h2>
          <div className="research-list">
            {research.map((item) => (
              <a key={item.title} href={item.href}>
                <span>
                  <small>Research</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <NextChapter
        label="About the author"
        title="About Dalron."
        href="/about"
      />
    </main>
  );
}
