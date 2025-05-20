import HeroSection from "@/components/sections/HeroSection";
import LatestRibbon from "@/components/sections/LatestRibbon";
import NowSection from "@/components/sections/NowSection";
import WorkTeaserStrip from "@/components/sections/WorkTeaserStrip";
import ContactStrip from "@/components/sections/ContactStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestRibbon />
      <NowSection />
      <WorkTeaserStrip />
      <ContactStrip />
      <Footer />
    </>
  );
}
