import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "High Desert Air Ductor | HVAC Services in Indian Wells Valley, CA",

  icons: {
    icon: "/images/navlogo.png",
    shortcut: "/images/navlogo.png",
    apple: "/images/navlogo.png",
  },

  description:
    "High Desert Air Ductor provides reliable heating, air conditioning, HVAC repair, installation, maintenance, and indoor air quality services for homes and businesses throughout Indian Wells Valley, California.",

  keywords: [
    "High Desert Air Ductor",
    "High Desert Air Doctor",
    "High Desert Air Ductor HVAC",
    "HVAC Indian Wells Valley",
    "HVAC contractor Indian Wells Valley",
    "HVAC company Indian Wells Valley",
    "HVAC services Indian Wells Valley",
    "HVAC repair Indian Wells Valley",
    "AC repair Indian Wells Valley",
    "air conditioning repair Indian Wells Valley",
    "heating repair Indian Wells Valley",
    "heating contractor Indian Wells Valley",
    "air conditioning contractor Indian Wells Valley",
    "HVAC installation Indian Wells Valley",
    "HVAC replacement Indian Wells Valley",
    "HVAC maintenance Indian Wells Valley",
    "indoor air quality Indian Wells Valley",
    "heating and cooling Indian Wells Valley",
    "HVAC contractor Ridgecrest CA",
    "HVAC company Ridgecrest CA",
    "HVAC repair Ridgecrest CA",
    "AC repair Ridgecrest CA",
    "heating repair Ridgecrest CA",
    "air conditioning Ridgecrest CA",
    "HVAC installation Ridgecrest CA",
    "HVAC maintenance Ridgecrest CA",
    "HVAC contractor Inyokern CA",
    "HVAC services Inyokern CA",
    "AC repair Inyokern CA",
    "heating repair Inyokern CA",
    "HVAC contractor Kern County CA",
    "HVAC services Kern County CA",
  ],

  authors: [
    {
      name: "High Desert Air Ductor",
    },
  ],

  creator: "High Desert Air Ductor",
  publisher: "High Desert Air Ductor",
  applicationName: "High Desert Air Ductor",

  category: "HVAC Services",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title:
      "High Desert Air Ductor | Reliable HVAC Services in Indian Wells Valley",

    description:
      "Reliable heating, cooling, HVAC repair, installation, maintenance, and indoor air quality solutions for homes and businesses throughout Indian Wells Valley, California.",

    url: "https://your-domain.com",

    siteName: "High Desert Air Ductor",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "High Desert Air Ductor | HVAC Services in Indian Wells Valley",

    description:
      "Reliable HVAC repair, installation, maintenance, heating, cooling, and indoor air quality services throughout Indian Wells Valley, California.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
