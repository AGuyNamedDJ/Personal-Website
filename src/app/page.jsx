import HeroSection from "@/components/sections/HeroSection";
import LatestRibbon from "@/components/sections/LatestRibbon";
import NowSection from "@/components/sections/NowSection";
import ContactStrip from "@/components/sections/ContactStrip";
import Footer from "@/components/Footer";

// Thin white bars on the left & right edges
const EdgeSpacer = () => (
  <div className="relative h-px">
    <div className="absolute inset-y-0 left-0 w-1.5 md:w-3 bg-white pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-1.5 md:w-3 bg-white pointer-events-none" />
  </div>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <EdgeSpacer />

      <LatestRibbon />
      <NowSection />
      <ContactStrip />

      <EdgeSpacer />
      <Footer />
    </>
  );
}
