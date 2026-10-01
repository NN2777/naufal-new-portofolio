import Reveal from "@/app/components/Reveal";
import Image from "next/image";

const summaryRows = [
  {
    period: "Jul 2026 — Present",
    title: "Independent Practice",
    role: "Backend Engineer",
    text: "Engineered a high-concurrency E-Wallet backend in Go (Golang) focusing on ACID compliance, pessimistic locking, double-entry ledger accounting, and idempotent transaction safety. Integrated Midtrans payment gateway for external transaction processing, backed by Redis for multi-tier caching and rate limiting. Currently expanding the system with Kafka for outbox pattern event-driven messaging alongside Prometheus and Grafana for system observability and monitoring."
  },
  {
    period: "Febuary 2025 — July 2026",
    title: "Digiherba Nusantara",
    role: "Junior Web Programmer",
    text: "Joined Digiherba Nusantara as a Junior Web Programmer, working with daily data cleaning, formatting, and standardization. Over time, the role expanded into developer and IT work, including Python automation, Digitala internal system development, Laravel Filament modules, export/import workflows, API integrations, database syncing, attendance system, and scheduled automation.",
  },
  {
    period: "2024",
    title: "Polinema",
    role: "Web Developer / Web Support",
    text: "Worked on PPID and the official Polinema website after graduating, including layout implementation, deployment, and maintenance for public-facing institutional web projects.",
  },
  {
    period: "2023",
    title: "Education",
    role: "D4 Information Engineering",
    text: "Graduated from the International Class Program in D4 Information Engineering at Politeknik Negeri Malang, with a foundation in programming, databases, web development, and system logic.",
  },
];

export default function ProfessionalSummary() {
  return (
    <section
      id="summary"
      className="scroll-mt-10 border-t border-white/10 px-5 py-20 md:px-10 lg:scroll-mt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header + Photo */}
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            {/* Text */}
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-sm text-cyan-300">Summary</p>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Professional Summary
              </h2>

              <p className="text-base leading-8 text-slate-300 md:text-lg md:leading-8">
                Versatile and adaptive Software Engineer with 3 years of
                experience translating complex business workflows into reliable
                software, grounded in clean design patterns, programming
                paradigms, and system architecture.
              </p>

              <p className="text-base leading-8 text-slate-300 md:text-lg md:leading-8">
                Expanding on my experience delivering web applications with Laravel, I am currently growing and adapting my core backend skills to master Go driven by an interest in building resilient, high-concurrency architectures tailored for fintech industry standards.
              </p>
            </div>

            {/* Photo */}
            <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:max-w-none lg:pt-10">
              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-2.5 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/30">
                  <Image
                    src="/images/work/Naufal2.jpg"
                    alt="Naufal portrait"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 280px"
                    className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
                  />
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <p className="font-mono text-xs text-center text-cyan-300">
                  Naufal Nafidiin
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Rows */}
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {summaryRows.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="grid gap-5 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12"
            >
              {/* Left */}
              <div>
                <p className="font-mono text-sm text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 text-sm text-slate-500">{item.period}</p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-cyan-300">{item.role}</p>
              </div>

              {/* Right */}
              <div className="flex items-start md:pt-9">
                <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
