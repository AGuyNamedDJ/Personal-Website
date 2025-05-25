export const metadata = {
  title: "Writing | Dalron Robertson",
  description: "Essays, research papers, and reflections by Dalron Robertson"
};

export default function WritingPage() {
  return (
    <main className="pt-20 scroll-smooth bg-black text-white">
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 pt-40 pb-96 text-center">
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-400 mb-0">
            Every Word Matters.
          </p>
          <p className="text-[8rem] md:text-[10rem] leading-none font-bold text-center mb-1 text-white">
            Every Idea, Powerful.
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-neutral-400 text-center mb-0">
            Books, research papers, white papers, and reflections, each crafted to inform, inspire, and make an impact.
          </p>
        </div>
      </section>
    </main>
  );
}
