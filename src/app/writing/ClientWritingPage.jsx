import Image from "next/image";
import Footer from "@/components/Footer";

const books = [
  {
    title: "Circuit Breakers: Echoes of Innovation",
    description:
      "A story about resilience, medicine, and preserving humanity amid rapid technological change.",
    image: "/assets/images/CB1.png",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/Circuit-Breakers-Innovation-Dalron-Robertson-ebook/dp/B0DQ5RCB3Z/",
      },
      {
        label: "Google Books",
        href: "https://books.google.com/books?id=6B83EQAAQBAJ&num=6",
      },
    ],
  },
  {
    title: "Circuit Breakers: Imperfections",
    description:
      "A novel about ambition, ethics, and resilience as medicine and technology advance.",
    image: "/assets/images/CB2.png",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/Circuit-Breakers-Imperfections-Dalron-Robertson/dp/B0F4XWYDJB/",
      },
      {
        label: "Barnes & Noble",
        href: "https://www.barnesandnoble.com/w/circuit-breakers-dalron-robertson/1147282782",
      },
      {
        label: "Google Books",
        href: "https://books.google.com/books?id=PU5I0QEACAAJ",
      },
    ],
  },
  {
    title: "To Love Ignorantly: Love's Memoir",
    description:
      "A personal exploration of vulnerability, faith, connection, and self-discovery.",
    image: "/assets/images/TLI.png",
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/Love-Ignorantly-Loves-Memoir-ebook/dp/B0DS1DBR58",
      },
      {
        label: "Barnes & Noble",
        href: "https://www.barnesandnoble.com/w/to-love-ignorantly-dalron-robertson/1146773973",
      },
      {
        label: "Google Books",
        href: "https://books.google.com/books/about/To_Love_Ignorantly_Loves_Memoir.html?id=Abg7EQAAQBAJ",
      },
    ],
  },
];

const research = [
  {
    title: "NaS Foundational Paper",
    description:
      "The initial scientific, technical, and organizational direction behind NaS.",
    image: "/assets/images/NaSArticle.png",
    href: "/files/Nas-White-Paper.pdf",
    linkLabel: "Read the paper",
  },
  {
    title: "M.S. Thesis Research",
    description:
      "Bioinformatic profiling and pharmacological evaluation of phytochemical constituents from Nigella sativa.",
    image: "/assets/images/M.S.Article.png",
    href: "/assets/images/M.S.Article.png",
    linkLabel: "View the research abstract",
  },
];

function BookCard({ book, duplicate = false }) {
  return (
    <article className="book-carousel-card overflow-hidden rounded-3xl border border-[#D2C2AA] bg-white shadow-lg">
      <div className="relative aspect-[2/3] bg-black">
        <Image
          src={book.image}
          alt={`${book.title} cover`}
          fill
          sizes="(min-width: 768px) 320px, 82vw"
          className="object-contain"
        />
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-semibold text-[#241408]">{book.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          {book.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {book.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={duplicate ? -1 : undefined}
              className="text-sm font-semibold text-[#5C3A21]"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ClientWritingPage() {
  return (
    <main className="bg-black pt-16 text-white">
      <section className="relative overflow-hidden px-6 py-28 sm:px-10 md:py-40">
        <Image
          src="/assets/images/JadeCB.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D2C2AA]">
            Writing
          </p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.045em] text-white md:text-8xl">
            Ideas made clear through story and research.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Fiction, personal reflection, and original scientific work by
            Dalron J. Robertson.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F4EC] px-6 py-24 text-[#241408] sm:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5B3A]">
            Books
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[#241408] md:text-6xl">
            Published work
          </h2>
          <p className="mt-5 text-sm text-neutral-600">
            Hover over a book to pause the carousel and explore.
          </p>
        </div>

        <div
          className="book-carousel mt-8"
          aria-label="Published books"
        >
          <div className="book-carousel-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="book-carousel-group"
                aria-hidden={groupIndex === 1 ? "true" : undefined}
              >
                {books.map((book) => (
                  <BookCard
                    key={`${groupIndex}-${book.title}`}
                    book={book}
                    duplicate={groupIndex === 1}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2C2AA]">
            Research
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
            Original scientific work
          </h2>
          <a
            href="https://nasresearch.bio/research"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
          >
            Explore NaS research
          </a>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {research.map((paper) => (
              <a
                key={paper.title}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-white/15 bg-[#181615] no-underline"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-6 transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-white">
                    {paper.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-400">
                    {paper.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-[#D2C2AA]">
                    {paper.linkLabel} →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
