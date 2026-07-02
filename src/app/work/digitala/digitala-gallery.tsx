"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const images = [
  {
    src: "/images/work/digitala/digitala-home.png",
    alt: "Digitala dashboard preview",
    label: "Dashboard",
    fit: "cover",
  },
  {
    src: "/images/work/digitala/digitala-roles.png",
    alt: "Digitala role based access preview",
    label: "Role-Based Access",
    fit: "cover",
  },
  {
    src: "/images/work/digitala/digitala-order.png",
    alt: "Digitala order module preview",
    label: "Order Module",
    fit: "cover",
  },
  {
    src: "/images/work/digitala/digitala-audit.png",
    alt: "Digitala stock movement audit trail preview",
    label: "Stock Audit Trail",
    fit: "cover",
  },
  {
    src: "/images/work/digitala/digitala-export-import.png",
    alt: "Digitala import export workflow preview",
    label: "Import/Export Workflow",
    fit: "cover",
  },
  {
    src: "/images/work/digitala/digitala-attendance.png",
    alt: "Digitala attendance module preview",
    label: "Attendance",
    fit: "contain",
  },
] as const;

const MAX_VISIBLE = 4;

export default function DigitalaGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const activeImage = images[activeIndex];

  const visibleImages = useMemo(() => {
    return images.slice(startIndex, startIndex + MAX_VISIBLE);
  }, [startIndex]);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + MAX_VISIBLE < images.length;

  const goPrev = () => {
    if (!canGoPrev) return;

    const nextStart = Math.max(startIndex - 1, 0);
    setStartIndex(nextStart);
  };

  const goNext = () => {
    if (!canGoNext) return;

    const nextStart = Math.min(startIndex + 1, images.length - MAX_VISIBLE);
    setStartIndex(nextStart);
  };

  return (
    <section className="mt-14">
      {/* Big Image */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025]">
        <div className="relative aspect-[2/1] bg-[#10151c]">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className={`transition duration-500 ${
              activeImage.fit === "contain"
                ? "object-contain p-6"
                : "object-cover object-top"
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

      {/* Thumbnail Slider */}
      <div className="mt-4">
        {/* Mobile thumbnail strip */}
        <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden">
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-40 shrink-0 overflow-hidden rounded-2xl border bg-white/[0.025] text-left transition ${
                  isActive
                    ? "border-cyan-400/50"
                    : "border-white/10 hover:border-cyan-400/30"
                }`}
              >
                <div className="relative aspect-[2/1] bg-[#10151c]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="160px"
                    className={`transition duration-700 group-hover:scale-[1.02] group-hover:brightness-110 ${
                      activeImage.fit === "contain"
                        ? "object-contain p-6"
                        : "object-cover object-top"
                    }
                    } ${isActive ? "opacity-100" : "opacity-60"}`}
                  />
                </div>

                <div className="p-3">
                  <p
                    className={`truncate text-xs font-medium ${
                      isActive ? "text-cyan-300" : "text-slate-400"
                    }`}
                  >
                    {image.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop thumbnail slider */}
        <div className="hidden items-center gap-3 lg:flex">
          {images.length > MAX_VISIBLE && (
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous image"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <LuChevronLeft className="h-5 w-5" />
            </button>
          )}

          <div className="grid min-w-0 flex-1 grid-cols-4 gap-3">
            {visibleImages.map((image, offset) => {
              const realIndex = startIndex + offset;
              const isActive = realIndex === activeIndex;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(realIndex)}
                  className={`group overflow-hidden rounded-2xl border bg-white/[0.025] text-left transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/[0.035] ${
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
                      } ${isActive ? "opacity-100" : "opacity-55 group-hover:opacity-85"}`}
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

          {images.length > MAX_VISIBLE && (
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next image"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:border-white/10 disabled:hover:bg-white/[0.025] disabled:hover:text-slate-400"
            >
              <LuChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
