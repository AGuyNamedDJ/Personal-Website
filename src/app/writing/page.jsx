import ScrollTransition from "@/components/sections/ScrollTransition";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Writing | Dalron Robertson",
  description: "Essays, research papers, white papers, and reflections by Dalron Robertson"
};

export default function WritingPage() {
  return (
    <main className="pt-20 scroll-smooth bg-black text-white">
      <ScrollTransition
        bgImage="/assets/images/JadeCB.png"
        firstText="Every Word Matters."
        secondText="Every Idea, Powerful."
        thirdText="Books, research papers, white papers, and reflections, each crafted to inform, inspire, and make an impact."
      />
      <Footer />
    </main>
  );
}
