import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import {
  SiLaravel,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiPython,
  SiBootstrap,
  SiJavascript,
  SiWordpress,
  SiGo,
  SiPostgresql,
} from "react-icons/si";

import { LuExternalLink } from "react-icons/lu";
import { FaFileCsv } from "react-icons/fa6";
import { RiFileExcel2Line } from "react-icons/ri";
import { LuCode } from "react-icons/lu";
import { TbApi } from "react-icons/tb";

const works = [
  {
    title: "Fintech E-Wallet",
    company: "Personal Engineering Showcase",
    date: "2026",
    type: "High-Concurrency Backend System",
    description:
      "A production-grade e-wallet engineered for safe, concurrent fund transfers. Features ACID-compliant ledgers, PostgreSQL pessimistic locking, idempotent APIs, and Midtrans payment gateway integration.",
    stack: [
      { name: "Go", Icon: SiGo },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Midtrans", Icon: TbApi }, 
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/e-wallet",
        type: "internal",
        variant: "button",
      },
    ],
    featured: true,
    thumbnail: "E-WALLET",
    image: "/images/work/EWallet.png", // Update with your actual image path
  },
    {
    title: "EiDesign",
    company: "Client Work",
    date: "2025",
    type: "Public Website",
    description:
      "Responsive static website for portfolio, product showcase, and company profile use cases using modern frontend tools.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Vercel", Icon: SiVercel },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/eidesign",
        type: "internal",
        variant: "button",
      },
      {
        label: "Explore Site",
        href: "https://ie-design.vercel.app",
        type: "external",
        variant: "text",
      },
    ],
    private: false,
    thumbnail: "EIDESIGN",
    image: "/images/work/eidesign/eidesign-home.png",
  },
  {
    title: "Digitala",
    company: "Digiherba",
    date: "2025 - 2026",
    type: "Internal Business System",
    description:
      "Internal system built with Laravel Filament for dashboards, database-driven modules, export/import workflows, API integrations, data syncing, attendance, and operational tools.",
    stack: [
      { name: "Laravel Filament", Icon: SiLaravel },
      { name: "React", Icon: SiReact },
      { name: "MySQL", Icon: SiMysql },
      { name: "PHP", Icon: SiPhp },
      { name: "REST API", Icon: TbApi },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/digitala",
        type: "internal",
        variant: "button",
      },
    ],
    featured: true,
    thumbnail: "DIGITALA",
    image: "/images/work/Digitala.png",
  },
  {
    title: "Cukakamu",
    company: "Digiherba",
    date: "2025",
    type: "CMS",
    description:
      "Content management system for managing website content such as articles, banners, product sections, pages, and website assets.",
    stack: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "Laravel Filament", Icon: SiLaravel },
      { name: "MySQL", Icon: SiMysql },
      { name: "Bootstrap", Icon: SiBootstrap },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/cukakamu",
        type: "internal",
        variant: "button",
      },
    ],
    thumbnail: "CMS",
    image: "/images/work/Cukakamu.png",
  },
  {
    title: "Address Extraction & Excel Automation Toolkit",
    company: "Digiherba",
    date: "2024",
    type: "Python Automation",
    description:
      "Python automation tool for extracting, cleaning, and standardizing operational data to reduce repetitive manual work.",
    stack: [
      { name: "Python", Icon: SiPython },
      { name: "Excel", Icon: RiFileExcel2Line },
      { name: "CSV", Icon: FaFileCsv },
      { name: "Data Cleaning", Icon: LuCode },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/ekstraksi-alamat",
        type: "internal",
        variant: "button",
      },
    ],
    image: "/images/work/EkstraksiAlamat.png",
    private: false,
    thumbnail: "PYTHON",
  },
  {
    title: "Polinema Official Website",
    company: "Polinema",
    date: "2024",
    type: "Public Website",
    description:
      "Public-facing institutional website work involving layout implementation, deployment, and maintenance.",
    stack: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "HTML", Icon: LuCode },
      { name: "CSS", Icon: LuCode },
      { name: "JavaScript", Icon: SiJavascript },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/polinema",
        type: "internal",
        variant: "button",
      },
      {
        label: "Explore Figma",
        href: "https://intip.in/RedesignWebsitePolinema",
        type: "external",
        variant: "text",
      },
    ],
    private: false,
    thumbnail: "POLINEMA",
    image: "/images/work/polinema/Polinema-home.png",
  },
  {
    title: "Anak Autis Website",
    company: "Personal Project",
    date: "2026",
    type: "Next.js Website UI",
    description:
      "Responsive website UI for an autism support/service concept. Currently focused on the public-facing interface, with planned expansion into a blog/CMS-style website.",
    stack: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Vercel", Icon: SiVercel },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/anakautism",
        type: "internal",
        variant: "button",
      },
      {
        label: "Explore Site",
        href: "https://anakautis.vercel.app/",
        type: "external",
        variant: "text",
      },
    ],
    private: false,
    thumbnail: "ANAK AUTIS",
    image: "/images/work/anakautism/anakautis2.png",
  },
  {
    title: "PPID Polinema",
    company: "Polinema",
    date: "2024",
    type: "Public Information Website",
    description:
      "Public information website work for Polinema involving layout implementation, content structure, deployment, and maintenance support.",
    stack: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "HTML", Icon: LuCode },
      { name: "CSS", Icon: LuCode },
      { name: "JavaScript", Icon: SiJavascript },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/ppid",
        type: "internal",
        variant: "button",
      },
      {
        label: "Explore site",
        href: "https://ppid.polinema.ac.id/",
        type: "external",
        variant: "text",
      },
    ],
    private: false,
    thumbnail: "PPID",
    image: "/images/work/PPID.png",
  },
  {
    title: "Gamarista Studio Official Website",
    company: "Gamarista Studio",
    date: "2024",
    type: "Official Website",
    description:
      "Official website for Gamarista Studio, built to present the studio profile, services, projects, and brand identity through a responsive public-facing website.",
    stack: [
      { name: "Laravel Blade", Icon: SiLaravel },
      { name: "HTML", Icon: LuCode },
      { name: "CSS", Icon: LuCode },
      { name: "JavaScript", Icon: SiJavascript },
    ],
    links: [
      {
        label: "Learn More",
        href: "/work/gamarista",
        type: "internal",
        variant: "button",
      },
      {
        label: "Explore Site",
        href: "https://gamaristastudio.com/",
        type: "external",
        variant: "text",
      },
    ],
    private: false,
    thumbnail: "GAMARISTA",
    image: "/images/work/Gamarista.png",
  },
];

export default function WorkShowcase() {
  return (
    <section
      id="work"
      className="scroll-mt-10 lg:scroll-mt-0 border-t border-white/10 px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-cyan-300">Selected work</p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Work Showcase
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
              A selected list of systems, modules, work, tools, and websites I
              have worked on. Internal projects are presented through scope,
              stack, and case studies instead of public links.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work, index) => (
            <Reveal
              key={work.title}
              delay={index * 80}
              className={work.featured ? "md:col-span-2 xl:col-span-2" : ""}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]">
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden border-b border-white/10 bg-black/20 ${
                    work.featured ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  {work.image ? (
                    <>
                      <Image
                        src={work.image}
                        alt={`${work.title} preview`}
                        fill
                        sizes={
                          work.featured
                            ? "(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 66vw"
                            : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        }
                        className="object-cover object-top opacity-75 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/80 via-[#0B0F14]/25 to-transparent" />

                      <div className="absolute left-5 top-5 flex items-center gap-3">
                        <span className="font-mono text-sm text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {work.private && (
                        <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-slate-300 backdrop-blur">
                          Private
                        </span>
                      )}

                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                          {work.type}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent)]" />

                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

                      <div className="relative flex h-full flex-col justify-between p-5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm text-cyan-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {work.private && (
                            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-400">
                              Private
                            </span>
                          )}
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                            {work.type}
                          </p>

                          <p
                            className={`mt-3 font-bold tracking-tight text-white ${
                              work.featured ? "text-5xl" : "text-3xl"
                            }`}
                          >
                            {work.thumbnail}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <h3
                      className={`font-semibold tracking-tight text-white ${
                        work.featured ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {work.title}
                    </h3>

                    <p className="mt-2 text-sm text-cyan-300">
                      {work.company} · {work.date}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {work.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.stack.map((tool, index) => {
                        const Icon = tool.Icon;

                        return (
                          <span
                            key={`${tool.name}-${index}`}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                          >
                            <Icon className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                            {tool.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                    {(work.links ?? []).map((link) => {
                      const isButton = link.variant === "button";

                      if (link.type === "internal") {
                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            className={
                              isButton
                                ? "inline-flex w-fit items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
                                : "group/link inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                            }
                          >
                            <span>{link.label}</span>
                          </Link>
                        );
                      }

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isButton
                              ? "inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
                              : "group/link inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                          }
                        >
                          <span>{link.label}</span>

                          <LuExternalLink
                            className={
                              isButton
                                ? "h-3.5 w-3.5"
                                : "h-3.5 w-3.5 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            }
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
