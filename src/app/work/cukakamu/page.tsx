import Link from "next/link";
import { SiBootstrap, SiLaravel, SiMysql, SiPhp } from "react-icons/si";
import {
  LuArrowLeft,
  LuFileText,
  LuImage,
  LuLayoutDashboard,
  LuPanelTop,
} from "react-icons/lu";
import CukakamuGallery from "./cukakamu-gallery";

import { LuCalendarClock, LuShoppingBag } from "react-icons/lu";

const projectBadges = [
  { name: "Laravel", Icon: SiLaravel },
  { name: "Laravel Filament", Icon: SiLaravel },
  { name: "MySQL", Icon: SiMysql },
  { name: "PHP", Icon: SiPhp },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "CMS", Icon: LuLayoutDashboard },
  { name: "Articles", Icon: LuFileText },
  { name: "Product Catalogue", Icon: LuShoppingBag },
  { name: "Scheduled Publishing", Icon: LuCalendarClock },
];

const coreModules = [
  {
    title: "Dynamic Hero Management",
    description:
      "Admin-managed hero sections for updating website headline, visuals, CTA, and promotional content without changing code.",
  },
  {
    title: "Article Management",
    description:
      "CMS workflow for creating, editing, organizing, categorizing, tagging, and scheduling article content for the public website.",
  },
  {
    title: "Product Catalogue",
    description:
      "Product catalogue management for controlling product information, product categories, product display, and related website content from the admin panel.",
  },
  {
    title: "Direct Purchase & Store Links",
    description:
      "Management for direct purchase categories, products, and store links used to guide visitors toward available buying channels.",
  },
  {
    title: "Pages & Website Content",
    description:
      "Admin-managed pages and website content sections so common content updates can be handled without direct code changes.",
  },
  {
    title: "Testimonials",
    description:
      "Admin-managed testimonial content to support social proof and website credibility.",
  },
];

const involvement = [
  "Built and maintained CMS resources for heroes, articles, tags, categories, products, pages, testimonials, and direct purchase content.",
  "Created dynamic content forms so website sections can be updated from the admin panel without changing code.",
  "Structured article management with categories, tags, authors, and scheduled publishing support.",
  "Worked on product catalogue, product category, and store/direct purchase management for website conversion flow.",
  "Connected CMS-managed content with the public-facing Cukakamu website display.",
];

export default function CukakamuCmsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mt-12">
            <p className="font-mono text-sm text-cyan-300">
              CMS / Website Admin
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Cukakamu CMS
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Cukakamu CMS is an admin-managed content system for controlling
              website content such as heroes, articles, tags, categories,
              scheduled publishing, product catalogue, product categories,
              testimonials, and direct purchase/store links.
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

          <CukakamuGallery />

          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Core Modules
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              The CMS was built to make website content easier to manage from an
              internal admin panel, reducing the need for manual code changes
              when updating common website sections.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {coreModules.map((module) => (
                <article
                  key={module.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {module.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              My Involvement
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

          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Result
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              The CMS made Cukakamu website content easier to update and manage
              from an internal admin panel, especially for recurring content
              changes such as articles, banners, product sections, and website
              assets.
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
