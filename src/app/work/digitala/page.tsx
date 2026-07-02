import Image from "next/image";
import Link from "next/link";
import { SiLaravel, SiMysql, SiPhp, SiReact } from "react-icons/si";
import DigitalaGallery from "./digitala-gallery";

import {
  LuArrowLeft,
  LuShieldCheck,
  LuDatabase,
  LuFileSpreadsheet,
  LuBug,
  LuWorkflow,
} from "react-icons/lu";

import { TbApi, TbClockCog } from "react-icons/tb";

const projectBadges = [
  { name: "Laravel Filament", Icon: SiLaravel },
  { name: "MySQL", Icon: SiMysql },
  { name: "PHP", Icon: SiPhp },
  { name: "React", Icon: SiReact },
  { name: "REST API", Icon: TbApi },

  { name: "Role-Based Access", Icon: LuShieldCheck },
  { name: "Dashboard Widgets", Icon: LuDatabase },
  { name: "Export / Import", Icon: LuFileSpreadsheet },
  { name: "Scheduled Automation", Icon: TbClockCog },
];

const quickHighlights = [
  "Built and maintained role-based internal modules for CRM, Finance, IT, and operational teams.",
  "Developed workflows for finance approval, IT ticketing, CRM import/export, analytics, and internal reporting.",
  "Created stricter and more dynamic form flows to improve data accuracy while still supporting flexible operational inputs across expedition, warehouse, stock, and order data.",
  "Built data tables with search, filters, actions, and audit-style tracking for operational records such as stock movements and internal reports.",
  "Integrated expedition APIs such as Ninja and JNT to sync delivery data for internal dashboards and analytics.",
  "Contributed to the latest attendance system using location check and AWS Rekognition API for face recognition and active liveness checks.",
];

const coreModules = [
  {
    title: "CRM & Operational Data",
    description:
      "Modules for managing CRM-related data, daily inputs, reports, customer/order workflows, and operational records.",
  },
  {
    title: "Finance Approval",
    description:
      "Approval workflow for finance-related processes, including controlled access and structured data review.",
  },
  {
    title: "Import / Export Workflows",
    description:
      "Excel and CSV workflows for analytics, reporting, courier formats, data mapping, and operational data movement.",
  },
  {
    title: "Stock & Warehouse Tracking",
    description:
      "Stock movement tracking with quantity before/after, movement delta, warehouse, reference source, creator, timestamp, and audit trail.",
  },
  {
    title: "Courier API Syncing",
    description:
      "Integration with expedition APIs such as Ninja and JNT to sync delivery data for dashboards, reports, and analytics.",
  },
  {
    title: "Attendance System",
    description:
      "Attendance flow using location check, active liveness, face verification, and AWS Rekognition API.",
  },
];

export default function DigitalaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mt-12">
            <p className="font-mono text-sm text-cyan-300">
              Internal Business System
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Digitala
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Digitala is an internal business system used to support
              operational workflows across CRM, Finance, IT, analytics, courier
              syncing, stock movement, and attendance.
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

          <DigitalaGallery />

          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Core Modules
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              Digitala is made up of several internal modules that support
              different business workflows across operations, CRM, finance,
              warehouse, courier data, analytics, and attendance.
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
              {quickHighlights.map((item) => (
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
              Digitala helped centralize internal workflows that were previously
              scattered across manual processes, spreadsheets, and repeated data
              formatting work.
            </p>

            <div className="mt-14 border-t border-white/10 pt-8">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
              >
                <LuArrowLeft className="h-4 w-4" />
                Back to Work Showcase
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
