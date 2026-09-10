import Reveal from "@/app/components/Reveal";
import Image from "next/image";

const summaryRows = [
  {
    period: "Jul 2025 — Present",
    title: "Personal Engineering",
    role: "Full-Stack Engineer",
    text: "Focusing on fintech or banking architecture and high-concurrency systems. Engineered an ACID-compliant E-Wallet showcase featuring Go, PostgreSQL pessimistic locking, Midtrans payment gateway, and Next.js. Planning to expand into a more banking tech like Java, Spring Boot, Kafka, and Redis for high-concurrency transaction systems.",
  },
  {
    period: "Febuary 2025 — July 2026",
    title: "Digiherba Nusantara",
    role: "Data Analyst → Developer / IT",
    text: "Joined Digiherba Nusantara as a Data Analyst, working with daily data cleaning, formatting, and standardization. Over time, the role expanded into developer and IT work, including Python automation, Digitala internal system development, Laravel Filament modules, export/import workflows, API integrations, database syncing, attendance system, and scheduled automation.",
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
            <div className="max-w-3xl">
              <p className="font-mono text-sm text-cyan-300">Summary</p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Professional Summary
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                I&apos;m a{" "}
                <span className="font-medium text-cyan-300">
                  Full-Stack Engineer
                </span>{" "}
                specializing in internal business platforms and fintech backend
                systems.
              </p>

              {/* Clean Scannable Highlights */}
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 text-cyan-300 text-xs">
                    ▸
                  </span>
                  <span>
                    <strong className="font-medium text-white">Past:</strong>{" "}
                    Built{" "}
                    <span className="font-medium text-cyan-300">Digitala</span>{" "}
                    (an ERP system) and custom Python data tools at{" "}
                    <a
                      href="https://www.instagram.com/digiherbanusantara/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-cyan-200 hover:decoration-cyan-200"
                    >
                      PT Digi Herba Nusantara
                    </a>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 text-cyan-300 text-xs">
                    ▸
                  </span>
                  <span>
                    <strong className="font-medium text-white">
                      Current Interest:
                    </strong>{" "}
                    Banking & Fintech, i just built a production-grade{" "}
                    <span className="font-medium text-cyan-300">
                      E-Wallet Showcase
                    </span>{" "}
                    (Go, PostgreSQL, Next.js) featuring{" "}
                    <span className="font-medium text-cyan-300">Midtrans</span>{" "}
                    gateway integration, ACID ledgers, idempotency, and
                    concurrent transaction safety.
                  </span>
                </li>
              </ul>
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
