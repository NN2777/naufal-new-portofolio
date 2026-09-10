import Image from "next/image";
import Link from "next/link";
import { SiGo, SiPostgresql, SiNextdotjs } from "react-icons/si";

import {
  LuArrowLeft,
  LuShieldCheck,
  LuDatabase,
  LuLock,
  LuRefreshCw,
  LuLayers,
  LuExternalLink,
} from "react-icons/lu";

import { TbApi, TbWebhook } from "react-icons/tb";

const projectBadges = [
  { name: "Go (Golang)", Icon: SiGo },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Midtrans Gateway", Icon: TbApi },

  { name: "ACID Ledgers", Icon: LuDatabase },
  { name: "Pessimistic Locking", Icon: LuLock },
  { name: "Idempotent APIs", Icon: LuRefreshCw },
  { name: "Webhook Pipelines", Icon: TbWebhook },
  { name: "Concurrency Safety", Icon: LuShieldCheck },
];

const coreModules = [
  {
    title: "ACID Transaction Engine",
    description:
      "Core double-entry ledger handling concurrent multi-wallet transfers using PostgreSQL 'FOR UPDATE' row-level locks to prevent race conditions and balance overdrafts.",
  },
  {
    title: "Midtrans Payment Integration",
    description:
      "Automated wallet top-up pipeline using Midtrans Snap API for payment initiation and asynchronous webhook handling for real-time transaction settlements.",
  },
  {
    title: "Idempotency & Replay Protection",
    description:
      "API middleware and database constraints ensuring duplicate HTTP requests or duplicate payment gateway webhooks never result in double-crediting balance.",
  },
  {
    title: "Secure Auth & Wallet Context",
    description:
      "JWT-based authentication paired with middleware context extraction to ensure users can only access and execute operations on authorized wallet accounts.",
  },
];

const projectLinks = [
  {
    label: "Visit GitHub Repository",
    href: "https://github.com/NN2777/E-Wallet-Showcase",
  },
];

export default function EWalletPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mt-12">
            <p className="font-mono text-sm text-cyan-300">
              High-Concurrency Backend System
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Fintech E-Wallet
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              A production-grade e-wallet engineered for safe, concurrent fund
              transfers. Features ACID-compliant ledgers, PostgreSQL pessimistic
              locking, idempotent APIs, and Midtrans payment gateway
              integration.
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

          {/* Screenshot / Visual Container */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/50">
              <Image
                src="/images/work/EWallet.png"
                alt="Fintech E-Wallet System Architecture"
                fill
                className="object-cover"
              />
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

          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Core Modules
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              The platform is architected around financial data integrity,
              focusing on concurrency control, payment gateway synchronization,
              and immutable audit logs.
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

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              I engineered the entire project end-to-end from designing the
              PostgreSQL database schema and ACID transaction logic in Go, to
              building the Next.js frontend and integrating the Midtrans payment
              gateway webhook pipeline.
            </p>
          </section>

          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Result
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              Verified system reliability and transaction safety through
              automated backend testing and live sandbox simulations:
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Passed concurrent multi-wallet transfer stress tests with zero race conditions or double-spending.",
                "Validated 100% idempotency coverage on duplicate webhook payloads and API retries.",
                "Achieved full test coverage on core ledger logic, row locking, and balance updates.",
                "Verified real-time balance settlements via Midtrans Sandbox and Cloudflare webhook tunneling.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300 md:text-base"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

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
