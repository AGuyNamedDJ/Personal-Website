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
        <p className="eyebrow">The written work</p>
        <h1>
          A world in
          <br />
          <span className="muted">every question.</span>
        </h1>
        <p>Fiction. Reflection. Research.</p>
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
        <p className="eyebrow">Beyond the books</p>
        <h2>
          Some thoughts
          <br />
          <span className="muted">are still unfolding.</span>
        </h2>
        <div>
          <p>
            Personal essays and reflections on medicine, ambition, love,
            technology, and progress.
          </p>
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
            A different kind
            <br />
            of inquiry.
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
        label="Behind the words"
        title="A life of curiosity."
        href="/about"
      />
    </main>
  );
}
