"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/images/work/ekstraksi-alamat/EkstraksiAlamat-1.png",
    alt: "Google Colab automation workflow preview",
    label: "Colab Workflow",
    fit: "cover",
  },
  {
    src: "/images/work/ekstraksi-alamat/EkstraksiAlamat-before.png",
    alt: "My Daily Address Matching Excel file preview",
    label: "Before",
    fit: "contain",
  },
  {
    src: "/images/work/ekstraksi-alamat/EkstraksiAlamat-after.png",
    alt: "Standardized output result preview",
    label: "Result",
    fit: "contain",
  },
] as const;

export default function AddressGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <section className="mt-14">
      {/* Big preview */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025]">
        <div className="relative aspect-[2/1] bg-[#10151c]">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className={`transition duration-700 group-hover:brightness-110 ${
              activeImage.fit === "contain"
                ? "object-contain p-6"
                : "object-cover object-top group-hover:scale-[1.02]"
            }`}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/25 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5">
            <p className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              {activeImage.label}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group w-44 shrink-0 overflow-hidden rounded-2xl border bg-white/[0.025] text-left transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/[0.035] md:w-56 ${
                isActive
                  ? "border-cyan-400/60 shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                  : "border-white/10 hover:border-cyan-400/30"
              }`}
            >
              <div className="relative aspect-[2/1] bg-[#10151c]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="240px"
                  className={`transition duration-500 group-hover:scale-[1.05] group-hover:brightness-110 ${
                    image.fit === "contain"
                      ? "object-contain p-3"
                      : "object-cover object-top"
                  } ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-85"}`}
                />
              </div>

              <div className="p-3">
                <p
                  className={`truncate text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {image.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
