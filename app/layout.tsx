import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SupportBubble } from "@/components/SupportBubble";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorFollower } from "@/components/CursorFollower";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gridzy - The Tech People",
  description:
    "Tailored tech solutions and creative digital strategies that elevate your brand. From web development to custom AI software, we bring your vision to life.",
  icons: {
    icon: [
      { url: "/logos/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logos/favicon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logos/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased bg-off-white text-charcoal`}>
        <SmoothScroll />
        <CursorFollower />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SupportBubble />
      </body>
    </html>
  );
}
