import PortfolioShell from "@/app/components/PortfolioShell";
import ProfessionalSummary from "@/app/components/ProfessionalSummary";
import SkillsTools from "@/app/components/SkillsnTools";
import WorkShowcase from "@/app/components/WorkShowcase";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <PortfolioShell>
      <section
        id="home"
        className="flex min-h-screen items-center px-5 py-20 md:px-10 lg:px-16"
      >
        <div className="animate-[fadeUp_700ms_ease-out_both] max-w-4xl">
          <p className="font-mono text-sm text-cyan-300">
            Hi there, nice to meet you.
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            I&apos;m Naufal
          </h1>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-500 md:text-6xl">
            Full-Stack Developer
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            I build internal dashboards, admin systems, data workflows, and
            automation tools for business operations — currently focused on
            Laravel Filament, database-driven modules, dashboard widgets,
            export/import Excel workflows, API integrations, and data syncing.
          </p>
        </div>
      </section>

      <ProfessionalSummary />
      <SkillsTools />
      <WorkShowcase />
      <Contact />
    </PortfolioShell>
  );
}
