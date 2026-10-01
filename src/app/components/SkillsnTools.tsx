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
  SiApachekafka,
  SiRedis,
  SiPrometheus,
  SiGrafana,
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
    title: "Production Core — Internal Systems & ERPs",
    description:
     "3 years of primary production experience building full-scale business platforms, internal ERPs (Digitala), and administrative portals using Laravel, PHP, and relational databases. Specialized in complex operational workflows, role-based access control (RBAC), and interactive reporting dashboards.",
    tools: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "PHP", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Laravel Filament", Icon: LuLayoutDashboard },
      { name: "Filament Shield", Icon: LuShieldCheck },
      { name: "Metabase", Icon: SiMetabase },
      { name: "Chart.js", Icon: SiChartdotjs },
    ],
  },
  {
    number: "02",
    title: "Extended Stack — Fintech Backend Services",
    description:
      "Not limited to PHP/Laravel i also have hands-on engineering of low-latency backend systems in Go. Demonstrated via a production-grade E-Wallet showcase featuring ACID double-entry ledgers, Kafka transactional outbox messaging, Redis caching & rate limiting, and Prometheus/Grafana observability.",
    tools: [
      { name: "Go", Icon: SiGo },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Kafka", Icon: SiApachekafka },
      { name: "Redis", Icon: SiRedis },
      { name: "Prometheus", Icon: SiPrometheus },
      { name: "Grafana", Icon: SiGrafana },
      { name: "REST APIs", Icon: TbApi },
      { name: "Postman", Icon: SiPostman },
    ],
  },
  {
    number: "03",
    title: "Frontend & Interfaces",
    description:
      "Comfortable translating UI/UX designs and layout systems from Figma into responsive client portals, internal dashboards, and dynamic web applications built with Next.js, React, and Tailwind CSS.",
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
    title: "Data Processing & Automation",
    description:
      "Experienced in automated data extraction, ETL workflows, and scheduled operational cron jobs to reduce manual overhead",
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
      className="scroll-mt-10 border-t border-white/10 px-5 py-20 md:px-10 lg:px-16 lg:scroll-mt-0"
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
              These are the tools and technologies I build with daily across
              production applications and engineering showcases.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 80}>
              <article className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.035] md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Number Badge */}
                  <span className="mt-1 font-mono text-sm font-semibold text-cyan-300 shrink-0">
                    {group.number}
                  </span>

                  {/* Body Content */}
                  <div className="w-full">
                    <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-200">
                      {group.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
                      {group.description}
                    </p>

                    {/* Tools & Badges - Natural Left-to-Right Flow */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.tools.map((tool) => {
                        const Icon = tool.Icon;

                        return (
                          <span
                            key={tool.name}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
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