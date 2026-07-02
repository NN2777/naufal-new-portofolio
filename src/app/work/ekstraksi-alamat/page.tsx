import Link from "next/link";
import { SiPython, SiPandas } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaFileCsv } from "react-icons/fa6";
import {
  LuArrowLeft,
  LuFileSearch,
  LuNotebookTabs,
  LuSearchCheck,
  LuSparkles,
  LuSplit,
} from "react-icons/lu";
import AddressGallery from "./address-gallery";

const projectBadges = [
  { name: "Google Colab", Icon: LuNotebookTabs },
  { name: "Python", Icon: SiPython },
  { name: "Pandas", Icon: SiPandas },
  { name: "RapidFuzz", Icon: LuSearchCheck },
  { name: "Excel", Icon: RiFileExcel2Line },
  { name: "CSV", Icon: FaFileCsv },
  { name: "Address Matching", Icon: LuFileSearch },
  { name: "Excel Splitting", Icon: LuSplit },
];

const automationScope = [
  {
    title: "Address Extraction & Standardization",
    description:
      "Extracted address components such as kecamatan, kabupaten, and provinsi from messy address sentences using regex, then matched the extracted values against standardized reference data using exact matching and fuzzy matching to handle typos or inconsistent naming.",
  },
  {
    title: "Excel File Splitting",
    description:
      "Automated Excel file separation based on operational rules such as date, team, channel, or file category to reduce repetitive manual spreadsheet handling.",
  },
];

const involvement = [
  "Identified repetitive daily spreadsheet work that was still being handled manually.",
  "Built Google Colab scripts using Python, Pandas, and RapidFuzz for extraction, matching, cleaning, and file splitting.",
  "Created upload-and-run workflows so raw Excel/CSV files could be processed without rebuilding the script each time.",
  "Added helper logic for duplicate checking, uncategorized data detection, confidence scoring, and standardized output generation.",
  "Helped standardize around 95% of the target data automatically, leaving only uncertain cases for manual review.",
];

export default function DataStandardizationPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          {/* Hero */}
          <div className="mt-12">
            <p className="font-mono text-sm text-cyan-300">
              Data Automation / Google Colab Scripts
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Address Extraction & Excel Automation Toolkit
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              A Google Colab-based automation workflow built to reduce
              repetitive manual spreadsheet work, including address extraction,
              fuzzy matching, duplicate checking, uncategorized data helpers,
              and Excel file splitting.
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

          <AddressGallery />

          {/* Automation Scope */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Automation Scope
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              This project focused on automating two repetitive data tasks:
              extracting and standardizing address information from messy text,
              and splitting Excel files based on operational rules. Manually
              checking 5–10 rows is still manageable, but when the data reaches
              hundreds of rows per day, the process becomes exhausting,
              repetitive, and inefficient.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {automationScope.map((module) => (
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

          {/* My Involvement */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              My Involvement
            </h2>

            <ul className="mt-6 space-y-4">
              {involvement.map((item) => (
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

          {/* Result */}
          <section className="mt-14 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Result
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              The automation helped standardize around 95% of the target data
              automatically, leaving only the remaining 5% for manual review.
              This reduced repetitive checking and cut the workload from around
              6 hours per day to around 6 hours per month.
            </p>
          </section>

          <div className="mt-14 border-t border-white/10 pt-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
              <LuArrowLeft className="h-4 w-4" />
              Back to Work Showcase
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
