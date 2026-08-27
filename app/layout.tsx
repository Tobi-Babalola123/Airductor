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
  title:
    "Boneso Plumbing & Mechanical | Plumbing, HVAC & Mechanical Services in Paso Robles, CA",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  description:
    "Boneso Plumbing & Mechanical provides professional plumbing, HVAC, mechanical and construction solutions for residential, commercial and construction projects in Paso Robles, California.",

  keywords: [
    "Boneso Plumbing & Mechanical",
    "Boneso Plumbing",
    "Boneso Mechanical",
    "Boneso Plumbing Paso Robles",
    "plumbing contractor Paso Robles",
    "plumbing company Paso Robles",
    "plumber Paso Robles",
    "plumbing services Paso Robles",
    "commercial plumbing Paso Robles",
    "residential plumbing Paso Robles",
    "HVAC contractor Paso Robles",
    "HVAC company Paso Robles",
    "HVAC services Paso Robles",
    "heating and cooling Paso Robles",
    "mechanical contractor Paso Robles",
    "mechanical services Paso Robles",
    "mechanical construction Paso Robles",
    "commercial mechanical contractor",
    "construction company Paso Robles",
    "commercial construction Paso Robles",
    "construction services Paso Robles",
    "building mechanical systems",
    "plumbing and mechanical contractor",
    "plumbing HVAC mechanical contractor",
    "mechanical systems contractor California",
    "HVAC plumbing construction California",
    "San Luis Obispo County plumbing",
    "San Luis Obispo County HVAC",
    "Paso Robles construction contractor",
  ],

  authors: [
    {
      name: "Boneso Plumbing & Mechanical",
    },
  ],

  creator: "Boneso Plumbing & Mechanical",
  publisher: "Boneso Plumbing & Mechanical",
  applicationName: "Boneso Plumbing & Mechanical",

  category: "Plumbing, HVAC & Mechanical Construction",

  metadataBase: new URL("https://boneso-pm.com"),

  openGraph: {
    title:
      "Boneso Plumbing & Mechanical | Plumbing, HVAC & Mechanical Services",

    description:
      "Professional plumbing, HVAC, mechanical and construction solutions delivered with precision, reliability and purpose in Paso Robles, California.",

    url: "https://boneso-pm.com",

    siteName: "Boneso Plumbing & Mechanical",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Boneso Plumbing & Mechanical | Paso Robles, CA",

    description:
      "Professional plumbing, HVAC, mechanical and construction solutions for residential, commercial and construction projects in Paso Robles, California.",
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
