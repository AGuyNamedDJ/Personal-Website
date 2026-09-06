"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
const links = [
  ["Work", "/work"],
  ["Writing", "/writing"],
  ["About", "/about"],
  ["Life", "/life"],
];
export default function Navbar() {
  const pathname = usePathname(),
    [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    menu = useRef(null);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 20);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [
      document.getElementById("site-content"),
      document.querySelector("footer"),
    ].filter(Boolean);
    const previousInert = background.map((el) => el.hasAttribute("inert"));
    const previousHidden = background.map((el) =>
      el.getAttribute("aria-hidden"),
    );
    background.forEach((el) => {
      el.setAttribute("inert", "");
      el.setAttribute("aria-hidden", "true");
    });
    const desktop = window.matchMedia("(min-width: 701px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    function keys(e) {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
      if (e.key === "Tab") {
        const items = [
          document.getElementById("menu-toggle"),
          ...menu.current.querySelectorAll("a"),
        ];
        const first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", keys);
    return () => {
      document.body.style.overflow = old;
      background.forEach((el, i) => {
        if (!previousInert[i]) el.removeAttribute("inert");
        if (previousHidden[i] === null) el.removeAttribute("aria-hidden");
        else el.setAttribute("aria-hidden", previousHidden[i]);
      });
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", keys);
    };
  }, [open]);
  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
    >
      <a href="#site-content" className="skip-link">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link
          className="wordmark"
          href="/"
          aria-label="Dalron J. Robertson, home"
        >
          Dalron<span> Robertson</span>
          <i>.</i>
        </Link>
        <div className="desktop-nav">
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="nav-contact">
          Connect <span aria-hidden="true">↗</span>
        </Link>
        <button
          id="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <nav ref={menu} id="mobile-menu" aria-label="Mobile navigation">
          {[...links, ["Connect", "/#contact"]].map(([name, href], i) => (
            <Link onClick={() => setOpen(false)} href={href} key={href}>
              <small>0{i + 1}</small>
              {name}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <p>Science. Stories. A life in progress.</p>
        </nav>
      )}
    </header>
  );
}
