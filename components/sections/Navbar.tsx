"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  "Home",
  "Services",
  "About",
  "Maintenance Plans",
  "Financing",
  "Service Areas",
  "Contact",
];

const PHONE = "(760) 375-3100";
const PHONE_HREF = "tel:7603753100";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#fff]/98 shadow-2xl backdrop-blur-md" : "bg-[#fff]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-18 gap-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/navlogo.png"
            alt="High Desert Air Ductor logo"
            className="h-13 w-auto object-contain "
          />
        </a>

        {/* Center nav – desktop */}
        <div className="hidden lg:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-black hover:text-amber-500 px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap hover:bg-white/5 rounded"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right – desktop */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={PHONE_HREF}
            className="text-black font-semibold text-sm hover:text-amber-300 transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <Phone size={14} />
            {PHONE}
          </a>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-4 py-2 rounded transition-colors whitespace-nowrap"
          >
            Request Service
          </a>
        </div>

        {/* Mobile right */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <a href={PHONE_HREF} className="p-2 text-amber-400">
            <Phone size={20} />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-black"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-sm bg-[#0b1d35] shadow-2xl lg:hidden"
            >
              {/* Drawer content */}
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="shrink-0 flex items-center justify-between px-5 py-5 border-b border-white/10 bg-[#0b1d35]">
                  <img
                    src="/images/navlogo.png"
                    alt="High Desert Air Ductor logo"
                    className="h-11 w-auto object-contain brightness-0 invert"
                  />

                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-white hover:text-amber-400 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Scrollable navigation */}
                <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 scrollbar-hide">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link}
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-200 hover:text-amber-400 hover:bg-white/5 py-3 px-3 rounded-lg text-base font-medium transition-colors"
                      >
                        {link}
                      </a>
                    ))}

                    {/* Request Service */}
                    <a
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                      className="mt-5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-4 rounded-lg text-center transition-colors"
                    >
                      Request Service
                    </a>

                    {/* Phone */}
                    <a
                      href={PHONE_HREF}
                      onClick={() => setMobileOpen(false)}
                      className="mt-2 flex items-center justify-center gap-2 text-amber-400 font-semibold py-3"
                    >
                      <Phone size={18} />
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
