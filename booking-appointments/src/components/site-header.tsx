"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book Now" },
  { href: "/reviews", label: "Reviews" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn("sticky z-40", compact ? "relative top-auto" : "top-[var(--k2-demo-top-offset,0px)]")}
    >
      <div
        className={cn(
          "border-b border-[var(--color-border)] bg-[rgba(254,249,240,0.84)] dark:bg-[rgba(13,8,32,0.88)] backdrop-blur-xl",
          compact && "rounded-[2rem] border-x",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-2xl leading-none text-[var(--color-plum)] sm:text-3xl">
              Veloura
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.36em] text-[var(--color-plum-700)]">
              Atelier
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm text-[var(--color-plum-700)] md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--color-plum)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="/book">
              <Button>Reserve a Ritual</Button>
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/70 text-[var(--color-plum-700)] dark:bg-[rgba(23,16,48,0.70)]"
            >
              {mobileOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[var(--color-border)] bg-[rgba(254,249,240,0.97)] dark:bg-[rgba(13,8,32,0.97)] px-4 pb-4 pt-2 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-[var(--color-plum-700)] transition hover:bg-white/60 hover:text-[var(--color-plum)] dark:hover:bg-[rgba(23,16,48,0.60)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-4">
                <Link href="/book" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Reserve a Ritual</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
