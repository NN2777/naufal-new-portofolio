import Reveal from "@/app/components/Reveal";

const summaryRows = [
  {
    period: "Late 2024 — Present",
    title: "Digiherba",
    role: "Data Analyst → Developer / IT",
    text: "Joined Digiherba as a Data Analyst, working with daily data cleaning, formatting, and standardization. Over time, the role expanded into developer and IT work, including Python automation, Digitala internal system development, Laravel Filament modules, export/import workflows, API integrations, database syncing, attendance system, and scheduled automation.",
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
    text: "Graduated from D4 Information Engineering at Politeknik Negeri Malang, building a foundation in programming, databases, web development, and system logic.",
  },
];

export default function ProfessionalSummary() {
  return (
    <section
      id="summary"
      className="scroll-mt-10 lg:scroll-mt-0 border-t border-white/10 px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-cyan-300">Summary</p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Professional Summary
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I’m a developer and IT person focused on building practical
              systems for real business operations — from data workflows and
              automation to internal dashboards and Laravel Filament-based admin
              systems.
            </p>
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
