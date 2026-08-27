"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const planBenefits = [
  "Priority scheduling over standard customers",
  "Two seasonal system tune-ups per year",
  "15% discount on repairs and replacement parts",
  "Improved system performance and efficiency",
  "Extended equipment lifespan",
  "System performance reports included",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MaintenancePlan() {
  return (
    <section
      id="maintenance-plans"
      className="py-20 bg-[#0b1d35] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1400&h=700&fit=crop&auto=format')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <FadeUp>
          <p className="text-amber-400 font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Membership Plans
          </p>
          <h2 className="text-white text-5xl sm:text-6xl font-black uppercase leading-none mb-5">
            Protect Your Comfort All Year Long
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Join our Ultimate Savings Club and enjoy priority service, seasonal
            tune-ups, and exclusive discounts all for one low monthly rate.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="bg-[#132845] border border-amber-500/25 rounded-2xl overflow-hidden">
            <div className="bg-amber-500 px-8 py-5 flex items-center justify-between">
              <div>
                <p className="text-black font-black text-2xl">
                  ULTIMATE SAVINGS CLUB
                </p>
                <p className="text-black/70 text-sm">
                  Your all-season comfort membership
                </p>
              </div>
              <div className="text-right">
                <p className="text-black text-4xl font-black">$7.50</p>
                <p className="text-black/70 text-xs">/mo per system</p>
              </div>
            </div>
            <div className="px-8 py-6">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-4 font-semibold">
                You Receive
              </p>
              <ul className="space-y-3">
                {planBenefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-amber-400 shrink-0 mt-0.5"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                Explore Maintenance Plans <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
