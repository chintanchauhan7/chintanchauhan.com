"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-background/80 backdrop-blur border-b border-border" : ""
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between font-mono text-sm">
        <a href="#top" className="text-accent">
          chauhan<span className="text-foreground">@</span>portfolio
          <span className="cursor-blink" />
        </a>
        <ul className="hidden sm:flex items-center gap-6 text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition-colors">
                ./{link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
