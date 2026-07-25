"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube
} from "react-icons/si";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto px-6 max-w-6xl grid gap-12 md:grid-cols-5 justify-items-center items-start">
        <div className="justify-self-start">
          <Link href="/">
            <div className="w-12 h-12 rounded-full overflow-hidden transform transition-transform duration-200 ease-out hover:scale-105">
              <Image
                src="/assets/images/IMG_6414.jpeg"
                alt="Dalron J. Robertson"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
          </Link>
        </div>
        <nav className="space-y-3 text-sm">
          <Link href="/" className="block text-white hover:opacity-75 active:opacity-50 transition-opacity hover:underline">Home</Link>
          <Link href="/about" className="block text-white hover:opacity-75 active:opacity-50 transition-opacity hover:underline">About</Link>
          <Link href="/work" className="block text-white hover:opacity-75 active:opacity-50 transition-opacity hover:underline">Work</Link>
          <Link href="/writing" className="block text-white hover:opacity-75 active:opacity-50 transition-opacity hover:underline">Writing</Link>
          <Link href="/#contact" className="block text-white hover:opacity-75 active:opacity-50 transition-opacity hover:underline">Connect</Link>
        </nav>
        <nav className="space-y-3 text-sm">
          <a
            href="/files/DJR-Resume.pdf"
            download
            className="block text-white hover:opacity-90 active:opacity-50 transition-opacity hover:underline"
          >
            Resume
          </a>
          <a
            href="/files/DJR-CurriculumVitae.pdf"
            download
            className="block text-white hover:opacity-90 active:opacity-50 transition-opacity hover:underline"
          >
            Curriculum Vitae
          </a>
        </nav>
        <div className="space-y-3 text-sm">
          <Link href="/legal/privacy" className="block text-white hover:opacity-90 active:opacity-50 transition-opacity hover:underline">Privacy</Link>
          <Link href="/legal/terms" className="block text-white hover:opacity-90 active:opacity-50 transition-opacity hover:underline">Terms</Link>
          <Link href="/sitemap" className="block text-white hover:opacity-90 active:opacity-50 transition-opacity hover:underline">Site Map</Link>
        </div>
        <div className="justify-self-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center transform transition-transform duration-200 ease-out hover:scale-105 hover:bg-white/10 active:opacity-50"
          >
            <HiOutlineArrowCircleUp size={24} className="text-white" />
          </button>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-800 pt-8 text-center">
        <p className="mb-6 text-xs text-white">© {new Date().getFullYear()} Dalron J. Robertson. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-white">
          <a href="https://github.com/AGuyNamedDJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-90 active:opacity-50 transition-opacity">
            <SiGithub size={24} />
          </a>
          <a href="https://www.instagram.com/aguynameddj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-90 active:opacity-50 transition-opacity">
            <SiInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dalronjrobertson/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-90 active:opacity-50 transition-opacity">
            <SiLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com/@AGNDJ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-90 active:opacity-50 transition-opacity">
            <SiYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
