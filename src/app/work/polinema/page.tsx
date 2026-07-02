import Link from "next/link";
import {
  SiBootstrap,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiInstagram,
} from "react-icons/si";
import {
  LuArrowLeft,
  LuFileText,
  LuLayoutDashboard,
  LuMonitor,
  LuRocket,
  LuWrench,
} from "react-icons/lu";

import { LuExternalLink } from "react-icons/lu";
import { SiGithub, SiFigma } from "react-icons/si";
import Image from "next/image";

const projectBadges = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Public Website", Icon: LuMonitor },
  { name: "Layout Implementation", Icon: LuLayoutDashboard },
  { name: "Deployment Support", Icon: LuRocket },
  { name: "Maintenance", Icon: LuWrench },
];

const projectLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/p/DFnCHXZy08r/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
    Icon: SiInstagram,
  },
  {
    label: "Explore Figma",
    href: "https://intip.in/RedesignWebsitePolinema",
    Icon: LuExternalLink,
  },
];

const coreScope = [
  {
    title: "Public Website Layout",
    description:
      "Worked on public-facing website layout implementation for Polinema pages and institutional web sections.",
  },
  {
    title: "Responsive Page Implementation",
    description:
      "Implemented responsive page structures so the website could be accessed properly across desktop and mobile devices.",
  },
  {
    title: "Content Structure Support",
    description:
      "Supported website content structure and section arrangement to keep information easier to browse and maintain.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Assisted with deployment, updates, and maintenance work to keep the public website stable and accessible.",
  },
];

const involvement = [
  "Worked on layout implementation for public-facing Polinema website pages.",
  "Supported responsive web sections using HTML, CSS, JavaScript, and Bootstrap.",
  "Assisted with content structure and page updates for institutional website needs.",
  "Handled deployment and maintenance support during the project period.",
  "Worked on public website tasks as part of my early professional web development experience.",
];

export default function PolinemaWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          {/* Hero */}
          <div className="mt-12">
            <p className="font-mono text-sm text-cyan-300">
              Public Institutional Website
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Polinema Official Website
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Public-facing institutional website work for Politeknik Negeri
              Malang, focused on layout implementation, responsive pages,
              deployment support, and maintenance.
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

          <section className="mt-14">
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025]">
              <div className="relative aspect-[2/1] bg-[#10151c]">
                <Image
                  src="/images/work/polinema/Polinema-home.png"
                  alt="Polinema official website homepage preview"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/25 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                    Homepage Preview
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                Public website preview and design reference.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {projectLinks.map((link) => {
                  const Icon = link.Icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{link.label}</span>
                      <LuExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Project Scope */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Project Scope
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              This project was focused on supporting the official Polinema
              website as a public information platform, with work around layout
              implementation, page structure, deployment, and ongoing website
              maintenance.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {coreScope.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* My Involvement */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              My Involvement
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              I was involved in layout implementation, responsive section
              support, page/content updates, deployment assistance, and website
              maintenance during the project period.
            </p>

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
              The work helped support Polinema&apos;s public website presence
              through page implementation, responsive layout work, deployment
              support, and maintenance for institutional information delivery.
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
