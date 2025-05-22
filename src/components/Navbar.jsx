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
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/IMG_6414.JPG"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
        </Link>

        {/* Individual pill links */}
        <ul className="ml-8 flex gap-3 text-sm font-medium">
          <li>
            <Link href="/#about"   className="px-4 py-1 rounded-md bg-[#F9F4EC]/90 border border-black/10 shadow hover:bg-[#D2C2AA] transition-transform duration-150 ease-out hover:scale-105 active:scale-95 active:bg-[#BFAF8F] active:opacity-80">About</Link>
          </li>
          <li>
            <Link href="/#work"    className="px-4 py-1 rounded-md bg-[#F9F4EC]/90 border border-black/10 shadow hover:bg-[#D2C2AA] transition-transform duration-150 ease-out hover:scale-105 active:scale-95 active:bg-[#BFAF8F] active:opacity-80">Work</Link>
          </li>
          <li>
            <Link href="/#writing" className="px-4 py-1 rounded-md bg-[#F9F4EC]/90 border border-black/10 shadow hover:bg-[#D2C2AA] transition-transform duration-150 ease-out hover:scale-105 active:scale-95 active:bg-[#BFAF8F] active:opacity-80">Writing</Link>
          </li>
          <li>
            <Link href="/#contact" className="px-4 py-1 rounded-md bg-[#F9F4EC]/90 border border-black/10 shadow hover:bg-[#D2C2AA] transition-transform duration-150 ease-out hover:scale-105 active:scale-95 active:bg-[#BFAF8F] active:opacity-80">Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}