import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "lora.wtf — The Clanker Economy",
  description:
    "What if CLANKR and ZORA had a baby. 3 steps. Zero friction. Your clanker goes from username to coin.",
  openGraph: {
    title: "lora.wtf — The Clanker Economy",
    description:
      "What if CLANKR and ZORA had a baby. 3 steps. Zero friction. Your clanker goes from username to coin.",
    url: "https://lora.wtf",
    siteName: "lora.wtf",
    images: [{ url: "/headertextt.png", width: 1920, height: 660 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "lora.wtf — The Clanker Economy",
    description:
      "What if CLANKR and ZORA had a baby. Your clanker goes from username to coin.",
    images: ["/headertextt.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
