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
  SiMetabase,
  SiPandas,
  SiGooglebigquery,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGo,
  SiPostgresql,
} from "react-icons/si";
import { TbApi, TbClockCog, TbTerminal2 } from "react-icons/tb";
import { FaFileCsv } from "react-icons/fa6";
import { RiFileExcel2Line } from "react-icons/ri";
import { LuLayoutDashboard, LuShieldCheck, LuCodeXml } from "react-icons/lu";
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
    title: "High-Concurrency & Fintech Backend",
    description:
      "Designing ACID-compliant transaction ledgers, pessimistic locking mechanisms, idempotent API endpoints, and payment gateway integrations.",
    tools: [
      { name: "Go", Icon: SiGo },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "REST APIs", Icon: TbApi },
      { name: "Postman", Icon: SiPostman },
    ],
  },
  {
    number: "02",
    title: "Internal Systems & ERP Platforms",
    description:
      "Building database-driven business operations platforms, role-based access control, export/import workflows, and reporting dashboards.",
    tools: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "Laravel Filament", Icon: LuLayoutDashboard },
      { name: "Filament Shield", Icon: LuShieldCheck },
      { name: "PHP", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Chart.js", Icon: SiChartdotjs },
      { name: "Metabase", Icon: SiMetabase },
    ],
  },
  {
    number: "03",
    title: "Frontend & Web Development",
    description:
      "Building responsive user interfaces, dynamic admin dashboards, and modern web applications optimized for desktop and mobile.",
    tools: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Laravel Blade", Icon: LuCodeXml },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
    ],
  },
  {
    number: "04",
    title: "Data Automation & Infrastructure",
    description:
      "Automating ETL pipelines, operational data extraction/cleaning, scheduled cron jobs, and application lifecycle management.",
    tools: [
      { name: "Python", Icon: SiPython },
      { name: "Pandas", Icon: SiPandas },
      { name: "BigQuery", Icon: SiGooglebigquery },
      { name: "Excel", Icon: RiFileExcel2Line },
      { name: "CSV Processing", Icon: FaFileCsv },
      { name: "Cron Jobs", Icon: TbClockCog },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "CLI / Terminal", Icon: TbTerminal2 },
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
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-cyan-300">
              Capability-based stack
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Skills & Tools
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
              These are the tools and technologies I build with daily across production applications and engineering showcases.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 80}>
              <article
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                  {/* Left */}
                  <div className="flex gap-4">
                    <span className="mt-1 font-mono text-sm text-cyan-300">
                      {group.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {group.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
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