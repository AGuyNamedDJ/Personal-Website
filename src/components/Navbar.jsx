"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const currentY = window.scrollY;
      if (currentY > lastY + 10 && currentY > 100) {
        // scrolling down
        setShow(false);
      } else if (currentY < lastY - 10) {
        // scrolling up
        setShow(true);
      }
      lastY = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 bg-transparent transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform duration-150 ease-out hover:scale-110 active:scale-95">
          <Image
            src="/assets/images/IMG_6414.jpeg"
            alt="Dalron J. Robertson"
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
        </Link>

        {/* Individual pill links */}
        <ul className="ml-auto flex items-center gap-1 text-xs font-medium sm:gap-2 sm:text-sm">
          <li>
            <Link href="/about" className="rounded-md border border-black/10 bg-[#F9F4EC]/95 px-2.5 py-1.5 no-underline shadow transition hover:bg-[#D2C2AA] sm:px-4">About</Link>
          </li>
          <li>
            <Link href="/work" className="rounded-md border border-black/10 bg-[#F9F4EC]/95 px-2.5 py-1.5 no-underline shadow transition hover:bg-[#D2C2AA] sm:px-4">Work</Link>
          </li>
          <li>
            <Link href="/writing" className="rounded-md border border-black/10 bg-[#F9F4EC]/95 px-2.5 py-1.5 no-underline shadow transition hover:bg-[#D2C2AA] sm:px-4">Writing</Link>
          </li>
          <li className="hidden sm:block">
            <Link href="/#contact" className="rounded-md border border-black/10 bg-[#F9F4EC]/95 px-4 py-1.5 no-underline shadow transition hover:bg-[#D2C2AA]">Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
