import Link from "next/link";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import Reveal from "@/app/components/Reveal";

const contacts = [
  {
    label: "Email",
    value: "naufanafidn@email.com",
    href: "mailto:naufanafidn@email.com",
    Icon: MdOutlineEmail,
  },
  {
    label: "WhatsApp",
    value: "+6281213405817",
    href: "https://wa.me/6281213405817",
    Icon: SiWhatsapp,
  },
  {
    label: "GitHub",
    value: "github.com/NN2777",
    href: "https://github.com/NN2777",
    Icon: SiGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-10 lg:scroll-mt-0 border-t border-white/10 px-5 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Contact
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Have a project, idea, or internal workflow that needs a better
              system? Send me a message and let&apos;s see what makes sense.
            </p>

          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-3 md:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = contact.Icon;

            return (
              <Reveal key={contact.label} delay={index * 80}>
                <Link
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    contact.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-4 text-sm text-slate-500">{contact.label}</p>

                  <p className="mt-1 truncate text-sm font-medium text-white group-hover:text-cyan-300">
                    {contact.value}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-20 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Naufal. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
