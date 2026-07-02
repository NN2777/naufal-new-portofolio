import Image from "next/image";
import Link from "next/link";
import { LuArrowLeft, LuExternalLink } from "react-icons/lu";
import { SiNextdotjs, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";

const projectBadges = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
];

const projectLinks = [
  {
    label: "Visit Site",
    href: "https://ie-design.vercel.app/",
  },
];

const involvement = [
  "Implemented the public-facing website layout based on the design direction and project requirements.",
  "Built responsive sections for company profile, product or service showcase, and website information.",
  "Worked on frontend structure, spacing, typography, and responsive behavior using Next.js, React, and Tailwind CSS.",
  "Prepared the website for deployment on Vercel as a live public-facing website.",
];

export default function EiDesignPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          {/* Hero */}
          <div className="mt-12">
            <p className="font-mono text-sm text-cyan-300">Public Website</p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              EiDesign
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Responsive public-facing website built for EiDesign to present
              company information, product or service highlights, and brand
              identity through a clean frontend implementation.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {projectBadges.map((item) => {
                const Icon = item.Icon;

                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Preview */}
          <section className="mt-14">
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025]">
              <div className="relative aspect-[2/1] bg-[#10151c]">
                <Image
                  src="/images/work/eidesign.png"
                  alt="EiDesign website preview"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/25 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                    Website Preview
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                Website preview and related project links.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {projectLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    <span>{link.label}</span>
                    <LuExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* What I Worked On */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              What I Worked On
            </h2>

            <ul className="mt-6 space-y-4">
              {involvement.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-slate-300"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Result */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Result
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              The project delivered a responsive public website that presents
              EiDesign&apos;s information, visual identity, and main content in
              a clean and accessible format.
            </p>
          </section>

          <div className="mt-14 border-t border-white/10 pt-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
              <LuArrowLeft className="h-4 w-4" />
              Back to Work Showcase
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
