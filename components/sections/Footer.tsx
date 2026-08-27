"use client";

const PHONE = "(760) 375-3100";
const PHONE_HREF = "tel:7603753100";
const EMAIL = "highdesertairductor@gmail.com";
const COMPANY = "High Desert Air Ductor";

export default function Footer() {
  const cols = [
    { heading: "Company", links: ["About Us", "Services", "Contact"] },
    {
      heading: "Services",
      links: ["AC Repair", "Heating", "Installation", "Maintenance"],
    },
    {
      heading: "Resources",
      links: ["Financing", "Maintenance Plans", "Service Areas", "FAQs"],
    },
  ];

  return (
    <footer className="bg-[#060f1c] text-gray-400 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div>
            <img
              src="/images/navlogo.png"
              alt="High Desert Air Ductor"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-5">
              Fast, reliable HVAC service across Indian Wells Valley and
              surrounding communities.
            </p>
            <a
              href={PHONE_HREF}
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors text-sm block mb-1"
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm break-all"
            >
              {EMAIL}
            </a>
          </div>
          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-white font-bold text-sm uppercase tracking-wide mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            © 2024 {COMPANY}. All rights reserved. Veteran-Owned &amp; Operated.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
