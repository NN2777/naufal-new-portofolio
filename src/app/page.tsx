import PortfolioShell from "@/app/components/PortfolioShell";
import ProfessionalSummary from "@/app/components/ProfessionalSummary";
import SkillsTools from "@/app/components/SkillsnTools";
import WorkShowcase from "@/app/components/WorkShowcase";
import Contact from "@/app/components/Contact";
import { LuExternalLink } from "react-icons/lu";

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
             Naufal Nafidiin
          </h1>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-500 md:text-6xl">
            Full-Stack Developer
          </h2>

          <div className="mt-7 max-w-3xl space-y-4">
            <p className="text-base leading-8 text-slate-400 md:text-2xl md:leading-10">
              I build internal systems, dashboards, data workflows, and
              automation tools for real business operations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="Naufal_Fullstack_Dev_CV_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
              View Resume
             <LuExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <ProfessionalSummary />
      <SkillsTools />
      <WorkShowcase />
      <Contact />
    </PortfolioShell>
  );
}
