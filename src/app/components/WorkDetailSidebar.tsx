"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const workItems = [
  {
    number: "01",
    label: "Digitala",
    href: "/work/digitala",
  },
  {
    number: "02",
    label: "Cukakamu CMS",
    href: "/work/cukakamu",
  },
  {
    number: "03",
    label: "Address & Excel Automation",
    href: "/work/ekstraksi-alamat",
  },
  {
    number: "04",
    label: "Polinema Website",
    href: "/work/polinema",
  },
  {
    number: "05",
    label: "PPID Polinema",
    href: "/work/ppid",
  },
  {
    number: "06",
    label: "EiDesign",
    href: "/work/eidesign",
  },
  {
    number: "07",
    label: "Anak Autis",
    href: "/work/anakautism",
  },
  {
    number: "08",
    label: "Gamarista Studio",
    href: "/work/gamarista",
  },
];

export default function WorkDetailSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 border-r border-white/10 bg-[#0B0F14] lg:flex lg:flex-col">
      <div className="border-b border-white/10 px-6 py-6">
        <Link
          href="/#work"
          className="text-sm text-slate-400 transition hover:text-cyan-300"
        >
          ← Back to Work
        </Link>

        <p className="mt-5 font-mono text-xs text-cyan-300">Selected Work</p>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-4">
        <div className="space-y-2">
          {workItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-cyan-400/10 text-white"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span className="font-mono text-xs text-cyan-300">
                  {item.number}
                </span>

                <span className="leading-5">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
