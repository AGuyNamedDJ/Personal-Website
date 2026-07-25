import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#241408] text-[#F9F4EC]">
      <Image
        src="/assets/images/Hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E06] via-[#1A0E06]/90 to-[#1A0E06]/35" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 pt-28 sm:px-10 md:items-center md:pb-0 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#D2C2AA]">
            Dalron J. Robertson, M.S.
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Science with a clinical foundation.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#E8DED0] md:text-xl">
            Biomedical researcher, software engineer, and PharmD/MBA candidate
            building precision-medicine systems for better therapeutic decisions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-full bg-[#F9F4EC] px-6 py-3 text-sm font-semibold text-[#241408] no-underline transition hover:bg-white"
            >
              Explore the work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[#F9F4EC]/50 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
            >
              About Dalron
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#D2C2AA]">
            <span>UChicago Medicine</span>
            <span>Founder, NaS</span>
            <span>Chicago State University</span>
          </div>
        </div>
      </div>
    </section>
  );
}
