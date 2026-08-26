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
  SiPandas,
  SiGooglebigquery,
  SiGooglecolab,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiComposer,
  SiNpm,
  SiHostinger,
  SiCss,
} from "react-icons/si";
import { MdArticle, MdImage, MdViewCarousel } from "react-icons/md";
import { TbApi, TbClockCog, TbFileImport, TbTerminal2 } from "react-icons/tb";
import { FaFileCsv, FaServer } from "react-icons/fa6";
import { RiFileExcel2Line } from "react-icons/ri";
import { LuLayoutDashboard, LuTerminal, LuShieldCheck } from "react-icons/lu";
import { LuCodeXml, LuPanelTop } from "react-icons/lu";
import type { IconType } from "react-icons";
import { VscJson } from "react-icons/vsc";
import { LuSend } from "react-icons/lu";

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
      { name: "Laravel", Icon: SiLaravel },
      { name: "Laravel Filament", Icon: LuLayoutDashboard },
      { name: "Filament Shield", Icon: LuShieldCheck },
      { name: "PHP", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Chart.js", Icon: SiChartdotjs },
    ],
  },
  {
    number: "02",
    title: "CMS & Content Management",
    description:
      "I build admin-managed website content systems for articles, banners, product sections, custom pages, testimonials, and media assets.",
    tools: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "Laravel Filament", Icon: LuPanelTop },
      { name: "Laravel Blade", Icon: LuCodeXml },
      { name: "PHP", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
    ],
  },
  {
    number: "03",
    title: "Data Workflows & Automation",
    description:
      "I work with operational data retreival, data cleaning, standardization, processing, and automation to reduce repetitive manual work.",
    tools: [
      { name: "Python", Icon: SiPython },
      { name: "Pandas", Icon: SiPandas },
      { name: "Google Colab", Icon: SiGooglecolab },
      { name: "BigQuery", Icon: SiGooglebigquery },
      { name: "Excel", Icon: RiFileExcel2Line },
      { name: "CSV Processing", Icon: FaFileCsv },
      { name: "MySQL", Icon: SiMysql },
      { name: "Metabase", Icon: SiMetabase },
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
      "I manage version control, environment configuration, dependency management, production deployment, and ongoing application maintenance.",
    tools: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Command Line", Icon: TbTerminal2 },
      { name: "Composer", Icon: SiComposer },
      { name: "npm", Icon: SiNpm },
      { name: "Hostinger", Icon: SiHostinger },
    ],
  },
  {
    number: "06",
    title: "Frontend Implementation",
    description:
      "I build responsive web interfaces, reusable components, landing pages, company profiles, and application frontends optimized for desktop and mobile devices.",
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
              These are the tools I work with regularly. I use them in real
              projects, while still expanding my stack to become sharper and
              build better products.
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
