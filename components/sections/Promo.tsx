"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, DollarSign } from "lucide-react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const offerIncludes = [
  "Full system inspection",
  "Performance & safety check",
  "Filter inspection",
  "Efficiency check",
];

export default function Promo() {
  return (
    <section className="relative overflow-hidden bg-[#0b1d35] py-20 sm:py-24">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        {/* Copy */}
        <FadeUp>
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
                Seasonal HVAC Special
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl">
              Keep Your HVAC System Running at Its Best
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              A professional tune-up can help identify small issues before they
              turn into expensive repairs — while keeping your system running
              efficiently.
            </p>
          </div>
        </FadeUp>

        {/* Offer */}
        <FadeUp delay={0.15}>
          <div className="rounded-3xl border border-amber-400/30 bg-[#132845] p-6 shadow-2xl sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-500">
                <DollarSign className="h-7 w-7 text-black" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                  Special Offer
                </p>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black leading-none text-amber-400">
                    $79
                  </span>

                  <span className="font-bold text-white">HVAC Tune-Up</span>
                </div>
              </div>
            </div>

            <div className="mb-7 space-y-3">
              {offerIncludes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15">
                    <Check className="h-3 w-3 text-amber-400" />
                  </div>

                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 text-center font-bold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-amber-400"
            >
              Claim My $79 Tune-Up
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 text-center text-xs text-gray-500">
              No-pressure recommendations · Restrictions may apply
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
