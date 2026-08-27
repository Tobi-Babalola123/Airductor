"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useRef } from "react";

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

const PHONE = "(760) 375-3100";
const PHONE_HREF = "tel:7603753100";

export default function FinalCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1705579605238-24a90c8799c5?w=1400&h=600&fit=crop&auto=format)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#060f1c]/88" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <h2 className="text-white text-5xl sm:text-7xl font-black uppercase leading-none mb-5">
            Ready to Get Your{" "}
            <span className="text-amber-400">Comfort Back?</span>
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you need a repair, maintenance, or a brand-new HVAC system,
            our team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded text-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Request Service <ArrowRight size={18} />
            </a>
            <a
              href={PHONE_HREF}
              className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded text-lg transition-all hover:bg-white/10 flex items-center gap-2"
            >
              <Phone size={18} /> Call {PHONE}
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Fast response · Experienced technicians · Satisfaction guaranteed
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
