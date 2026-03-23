import Link from "next/link";
import { ReactNode } from "react";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/services", label: "Services" },
  { href: "/", label: "View Site" },
];

export function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="page-shell min-h-screen bg-[linear-gradient(180deg,rgba(253,232,232,0.6),rgba(254,249,240,0.95))] dark:bg-[linear-gradient(180deg,rgba(45,20,36,0.6),rgba(13,8,32,0.95))]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[240px_1fr] lg:px-10 lg:gap-8">
        <aside className="luxury-panel rounded-[2rem] p-5 lg:p-6">
          <p className="font-heading text-3xl text-[var(--color-plum)] lg:text-4xl">Veloura</p>
          <p className="mt-2 text-xs uppercase tracking-[0.32em] text-[var(--color-plum-700)]">
            Admin Suite
          </p>
          <nav className="mt-6 flex flex-row flex-wrap gap-1 lg:mt-8 lg:flex-col lg:space-y-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--color-plum-700)] transition hover:bg-white/70 dark:hover:bg-[rgba(23,16,48,0.70)] hover:text-[var(--color-plum-900)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="space-y-6 lg:space-y-8">
          <header className="luxury-panel rounded-[2rem] p-5 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--color-plum-700)]">
              Salon operations
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-none text-[var(--color-plum-900)] md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-plum-700)]">
              {description}
            </p>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
