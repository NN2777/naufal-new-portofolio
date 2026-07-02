import {
  SiGithub,
  SiGit,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiChartdotjs,
  SiGoogleanalytics,
  SiMetabase,
} from "react-icons/si";
import { MdArticle, MdImage, MdViewCarousel } from "react-icons/md";
import { TbApi, TbClockCog, TbFileImport } from "react-icons/tb";
import { FaFileCsv, FaServer } from "react-icons/fa6";
import { RiFileExcel2Line } from "react-icons/ri";
import { LuLayoutDashboard, LuTerminal, LuShieldCheck } from "react-icons/lu";
import type { IconType } from "react-icons";

import Reveal from "@/app/components/Reveal";

type Tool = {
  name: string;
  Icon: IconType;
};

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  tools: Tool[];
};

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Internal Systems & Dashboards",
    description:
      "I build database-driven admin systems, dashboard widgets, role-based access, CRUD modules, export/import workflows, and operational workflows for internal business use.",
    tools: [
      { name: "Laravel Filament", Icon: SiLaravel },
      { name: "Filament Shield", Icon: LuShieldCheck },
      { name: "PHP", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Chart.js", Icon: SiChartdotjs },
      { name: "CSV", Icon: FaFileCsv },
    ],
  },
  {
    number: "02",
    title: "CMS & Content Management",
    description:
      "I build admin-managed website content systems for articles, banners, product sections, custom pages, testimonials, and media assets.",
    tools: [
      { name: "Laravel Filament", Icon: SiLaravel },
      { name: "Laravel Blade", Icon: SiLaravel },
      { name: "MySQL", Icon: SiMysql },
      { name: "Articles", Icon: MdArticle },
      { name: "PHP", Icon: SiPhp },
    ],
  },
  {
    number: "03",
    title: "Data Workflows & Automation",
    description:
      "I work with operational data retreival, data cleaning, standardization, processing, and automation to reduce repetitive manual work.",
    tools: [
      { name: "Google Analytics", Icon: SiGoogleanalytics },
      { name: "Metabase", Icon: SiMetabase },
      { name: "Python", Icon: SiPython },
      { name: "Excel", Icon: RiFileExcel2Line },
      { name: "CSV", Icon: FaFileCsv },
      { name: "MySQL", Icon: SiMysql },
    ],
  },
  {
    number: "04",
    title: "API Integration & Data Syncing",
    description:
      "I connect systems, sync data, and automate scheduled processes through APIs and background tasks.",
    tools: [
      { name: "REST API", Icon: TbApi },
      { name: "Cron Jobs", Icon: TbClockCog },
      { name: "Laravel Scheduler", Icon: SiLaravel },
      { name: "MySQL", Icon: SiMysql },
      { name: "Postman", Icon: SiPostman },
    ],
  },
  {
    number: "05",
    title: "Deployment & Development",
    description:
      "I understand basic full-stack deployment flow, version control, environment setup, and project maintenance.",
    tools: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "CLI", Icon: LuTerminal },
    ],
  },
  {
    number: "06",
    title: "Frontend Implementation",
    description:
      "I implement responsive layouts, landing pages, company profiles, and clean web interfaces.",
    tools: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "Laravel Blade", Icon: SiLaravel },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "HTML / CSS / JS / TS", Icon: LuLayoutDashboard },
    ],
  },
];

export default function SkillsTools() {
  return (
    <section
      id="skills"
      className="scroll-mt-10 lg:scroll-mt-0 border-t border-white/10 px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-cyan-300">
              Capability-based stack
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Skills & Tools
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
              What I can build, and the tools I use to build it. I organize my
              skills by capability, not just by technology names.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 80}>
              <article
                key={group.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
              >
                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  {/* Left */}
                  <div className="flex gap-4">
                    <span className="mt-1 font-mono text-sm text-cyan-300">
                      {group.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {group.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="lg:justify-self-end">
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {group.tools.map((tool) => {
                        const Icon = tool.Icon;

                        return (
                          <span
                            key={tool.name}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                          >
                            <Icon className="h-3.5 w-3.5 text-cyan-300" />
                            {tool.name}
                          </span>
                        );
                      })}
                    </div>
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
