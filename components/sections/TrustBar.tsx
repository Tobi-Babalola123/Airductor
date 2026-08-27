"use client";

import { motion, useInView } from "framer-motion";
import { Award, ShieldCheck, Star, Users, Zap } from "lucide-react";
import { useRef } from "react";

const trustItems = [
  {
    icon: Award,
    label: "Veteran-Owned Business",
    sub: "Proudly serving with honor",
  },
  {
    icon: ShieldCheck,
    label: "Satisfaction Guaranteed",
    sub: "We stand behind our work",
  },
  {
    icon: Users,
    label: "Trusted Technicians",
    sub: "Licensed & experienced pros",
  },
  { icon: Zap, label: "Fast Response", sub: "When comfort can't wait" },
  { icon: Star, label: "Trane Certified", sub: "Comfort Specialist dealer" },
];

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

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustBar() {
  return (
    <section className="bg-[#132845] py-10 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustItems.map(({ icon: Icon, label, sub }) => (
            <FadeUp
              key={label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center mb-1">
                <Icon size={22} className="text-amber-400" />
              </div>
              <p className="text-white font-bold text-sm leading-tight">
                {label}
              </p>
              <p className="text-gray-400 text-xs">{sub}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
