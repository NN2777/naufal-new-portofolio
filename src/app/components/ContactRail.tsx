import Link from "next/link";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

const railLinks = [
  {
    label: "Email",
    href: "mailto:naufanafidn@email.com",
    Icon: MdOutlineEmail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/62813405817",
    Icon: SiWhatsapp,
  },
  {
    label: "GitHub",
    href: "https://github.com/NN2777",
    Icon: SiGithub,
  },
];

export default function ContactRail() {
  return (
    <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-5 xl:flex xl:animate-[railIn_800ms_ease-out_500ms_both]">
      <div className="flex flex-col items-center gap-4">
        {railLinks.map((link) => {
          const Icon = link.Icon;

          return (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className="text-slate-500 transition hover:-translate-y-1 hover:text-cyan-300"
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>

      <div className="h-24 w-px bg-white/20" />
    </div>
  );
}