"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3 justify-items-start">
        <div>
          <Link href="/">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/IMG_6414.JPG"
                alt="AGNDJ Logo"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
          </Link>
        </div>
        <nav className="space-y-3 text-sm">
          <Link href="/" className="block text-white hover:opacity-75">Home</Link>
          <Link href="/about" className="block text-white hover:opacity-75">About</Link>
          <Link href="/work" className="block text-white hover:opacity-75">Work</Link>
          <Link href="/writing" className="block text-white hover:opacity-75">Writing</Link>
          <Link href="/connect" className="block text-white hover:opacity-75">Connect</Link>
        </nav>
        <div className="space-y-3 text-sm">
          <Link href="/legal#privacy" className="block text-white hover:opacity-75">Privacy</Link>
          <Link href="/legal#terms" className="block text-white hover:opacity-75">Terms</Link>
          <Link href="/sitemap" className="block text-white hover:opacity-75">Site Map</Link>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-800 pt-8 text-center">
        <p className="mb-6 text-xs text-white">© {new Date().getFullYear()} Dalron J. Robertson. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-white">
          <Link href="https://github.com/AGuyNamedDJ" aria-label="GitHub" className="hover:opacity-75">
            <SiGithub size={24} />
          </Link>
          <Link href="https://www.instagram.com/aguynameddj/" aria-label="Instagram" className="hover:opacity-75">
            <SiInstagram size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/dalronjrobertson/" aria-label="LinkedIn" className="hover:opacity-75">
            <SiLinkedin size={24} />
          </Link>
          <Link href="https://www.youtube.com/@AGNDJ" aria-label="YouTube" className="hover:opacity-75">
            <SiYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}