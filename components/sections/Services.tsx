"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Leaf,
  RefreshCw,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Wind,
    title: "AC Repair",
    desc: "Fast diagnosis and reliable repairs to get your home cool and comfortable again.",
    tag: "Most Requested",
  },
  {
    icon: Flame,
    title: "Heating Repair",
    desc: "Reliable heating repairs to keep your home warm when temperatures drop.",
  },
  {
    icon: Wrench,
    title: "HVAC Installation",
    desc: "Professional system installation designed around your home's comfort needs.",
  },
  {
    icon: RefreshCw,
    title: "HVAC Replacement",
    desc: "Upgrade an aging system with a modern, efficient HVAC solution.",
  },
  {
    icon: ShieldCheck,
    title: "HVAC Maintenance",
    desc: "Prevent unexpected breakdowns and keep your system performing efficiently.",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    desc: "Improve the air inside your home with filtration, purification, and humidity solutions.",
  },
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

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <FadeUp className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <p className="text-amber-600 font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">
            HVAC Services
          </p>

          <h2 className="text-[#0b1d35] text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            Solutions for Every{" "}
            <span className="text-amber-500">Comfort Need.</span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From a quick repair to a complete HVAC replacement, our experienced
            team helps keep your home comfortable in every season.
          </p>
        </FadeUp>

        {/* SERVICE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <FadeUp key={title} delay={i * 0.06}>
              <a href="#contact" className="group relative block h-full">
                <div
                  className="
                      relative
                      h-full
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      p-6 sm:p-7
                      overflow-hidden
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-amber-300
                      hover:shadow-xl
                    "
                >
                  {/* Top accent */}
                  <div
                    className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-1
                        bg-transparent
                        group-hover:bg-amber-500
                        transition-colors
                        duration-300
                      "
                  />

                  {/* Tag */}
                  {tag && (
                    <span
                      className="
                          absolute
                          top-5
                          right-5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-amber-700
                          bg-amber-50
                          border
                          border-amber-100
                          px-2.5
                          py-1
                          rounded-full
                        "
                    >
                      {tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className="
                        w-12
                        h-12
                        rounded-xl
                        bg-[#0b1d35]
                        group-hover:bg-amber-500
                        flex
                        items-center
                        justify-center
                        mb-6
                        transition-colors
                        duration-300
                      "
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                      className="
                          text-white
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-[#0b1d35] text-xl sm:text-2xl font-extrabold tracking-tight mb-3">
                    {title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">{desc}</p>

                  {/* CTA */}
                  <div
                    className="
                        mt-6
                        inline-flex
                        items-center
                        gap-1.5
                        text-amber-600
                        font-bold
                        text-sm
                        group-hover:gap-2.5
                        transition-all
                        duration-200
                      "
                  >
                    Get Help
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        {/* SECTION CTA */}
        <FadeUp delay={0.15} className="mt-12 lg:mt-14">
          <div
            className="
              rounded-2xl
              bg-[#0b1d35]
              px-6
              py-7
              sm:px-8
              sm:py-8
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
            "
          >
            <div className="text-center md:text-left">
              <p className="text-white font-extrabold text-lg sm:text-xl">
                Not sure what your system needs?
              </p>

              <p className="text-white/60 text-sm mt-1">
                Tell us what's going on and we'll help you find the right
                solution.
              </p>
            </div>

            <a
              href="#contact"
              className="
                shrink-0
                inline-flex
                items-center
                justify-center
                gap-2
                bg-amber-500
                hover:bg-amber-400
                text-black
                font-extrabold
                px-6
                py-3.5
                rounded-md
                transition-all
                duration-200
                hover:-translate-y-0.5
              "
            >
              Request Service
              <ArrowRight size={17} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
