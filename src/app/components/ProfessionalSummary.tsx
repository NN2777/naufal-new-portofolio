import Reveal from "@/app/components/Reveal";
import Image from "next/image";

const summaryRows = [
  {
    period: "Late 2024 — Present",
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
                  Full-Stack Developer
                </span>{" "}
                working across{" "}
                <span className="font-medium text-cyan-300">Data Analysis</span>{" "}
                and{" "}
                <span className="font-medium text-cyan-300">
                  Web Development
                </span>{" "}
                at{" "}
                <a
                  href="https://www.instagram.com/digiherbanusantara/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-cyan-200 hover:decoration-cyan-200"
                >
                  PT Digi Herba Nusantara
                </a>
                . My work focuses on building practical systems for real
                business operations — from data workflows and automation to
                internal dashboards, CMS, and Laravel Filament-based admin
                systems — so operational data is easier to manage, report, and
                rely on.
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
