"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-[#2C1A0B] h-screen w-full overflow-hidden">
      <img
        src="/assets/images/Hero.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0, animation: "fadeIn 3s ease-in-out forwards" }}
      />
    </section>
  );
}