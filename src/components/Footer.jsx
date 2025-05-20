"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-16 px-6">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3">

        {/* Logo / word‑mark */}
        <div>
          <Link href="/" className="text-xl font-semibold text-white">
            DR
          </Link>
        </div>

        {/* Mini site‑map */}
        <nav className="space-y-3 text-sm">
          <Link href="/" className="block text-neutral-400 hover:text-white">Home</Link>
          <Link href="/about" className="block text-neutral-400 hover:text-white">About</Link>
          <Link href="/work" className="block text-neutral-400 hover:text-white">Work</Link>
          <Link href="/writing" className="block text-neutral-400 hover:text-white">Writing</Link>
          <Link href="/connect" className="block text-neutral-400 hover:text-white">Connect</Link>
        </nav>

        {/* Legal links */}
        <div className="space-y-3 text-sm">
          <Link href="/legal#privacy" className="block text-neutral-400 hover:text-white">Privacy</Link>
          <Link href="/legal#terms" className="block text-neutral-400 hover:text-white">Terms</Link>
          <Link href="/sitemap" className="block text-neutral-400 hover:text-white">Site Map</Link>
        </div>
      </div>

      
      <div className="mt-12 border-t border-neutral-800 pt-8 text-center">
        <p className="mb-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Dalron J. Robertson. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-neutral-400">
          <Link href="https://twitter.com/" className="hover:text-white">X</Link>
          <Link href="https://github.com/" className="hover:text-white">GitHub</Link>
          <Link href="https://www.linkedin.com/" className="hover:text-white">LinkedIn</Link>
          <Link href="https://www.youtube.com/" className="hover:text-white">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}