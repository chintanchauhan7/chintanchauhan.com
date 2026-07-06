"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#overview", label: "overview" },
  { href: "#offerings", label: "offerings" },
  { href: "#contact", label: "contact" },
];

export default function ConsultingNav() {
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
        <Link href="/" className="text-muted hover:text-accent transition-colors">
          ← chauhan<span className="text-foreground">@</span>portfolio
        </Link>
        <ul className="hidden sm:flex items-center gap-6 text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                ./{link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
