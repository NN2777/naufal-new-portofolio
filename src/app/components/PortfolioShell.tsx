"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import ContactRail from "./ContactRail";
import ScrollProgress from "./ScrollProgress";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

type PortfolioShellProps = {
  children: ReactNode;
};

export default function PortfolioShell({ children }: PortfolioShellProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <ScrollProgress />
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 animate-sidebar-in border-r border-white/10 bg-[#0B0F14] lg:flex lg:items-center lg:justify-center">
        <nav className="flex w-full flex-col gap-6 px-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-lg text-slate-400 transition hover:bg-white/[0.04] hover:text-white animate-[sidebarIn_600ms_ease-out_both]"
              style={{
                animationDelay: `${250 + index * 80}ms`,
              }}
            >
              <span className="font-mono text-sm text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-50 animate-mobile-header-in border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-cyan-300">
              N
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Naufal</p>
              <p className="text-xs text-slate-500">Full-Stack Developer</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
          />

          <div className="relative h-full w-72 border-r border-white/10 bg-[#0B0F14] px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Menu</p>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  <span className="font-mono text-xs text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="min-w-0 lg:pl-60 xl:pr-20">{children}</main>
      <ContactRail />
    </div>
  );
}
