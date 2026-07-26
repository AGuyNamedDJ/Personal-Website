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
    <header className={`fixed inset-x-0 top-0 z-40 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="mx-auto mt-2 flex h-14 max-w-7xl items-center rounded-full border border-white/10 bg-[#0B0908]/80 px-2.5 shadow-2xl backdrop-blur-xl sm:px-4 lg:px-5">
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

        <ul className="ml-auto flex items-center gap-0.5 text-[0.7rem] font-medium text-[#D8CCBC] sm:gap-1 sm:text-sm">
          <li>
            <Link href="/about" className="rounded-full px-2.5 py-2 no-underline transition hover:bg-white/10 hover:text-white sm:px-4">About</Link>
          </li>
          <li>
            <Link href="/work" className="rounded-full px-2.5 py-2 no-underline transition hover:bg-white/10 hover:text-white sm:px-4">Work</Link>
          </li>
          <li>
            <Link href="/writing" className="rounded-full px-2.5 py-2 no-underline transition hover:bg-white/10 hover:text-white sm:px-4">Writing</Link>
          </li>
          <li>
            <Link href="/life" className="rounded-full px-2.5 py-2 no-underline transition hover:bg-white/10 hover:text-white sm:px-4">Life</Link>
          </li>
          <li className="hidden md:block">
            <Link href="/#contact" className="rounded-full bg-[#E8DCC9] px-4 py-2 font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]">Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
