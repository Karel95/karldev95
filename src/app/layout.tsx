import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { SmoothScroll } from "@/components/smooth-scroll";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KarlDev | Software Developer",
  description: "Portfolio | Karel Hernandez - Passionate developer with a strong foundation in web, app and game development, backend systems, and blockchain technology.",
  keywords: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "WebDev", "Karel Hernandez"],
  authors: [{ name: "Karel Hernandez" }],
  openGraph: {
    type: "website",
    url: "https://karl95.is-a.dev/",
    title: "KarlDev | Software Developer",
    description: "Portfolio | Karel Hernandez",
    images: [{ url: "https://karl95.is-a.dev/images/profile.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KarlDev | Software Developer",
    description: "Portfolio | Karel Hernandez",
    images: ["https://karl95.is-a.dev/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/500x500 Dark-Transparent.png"
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} font-body antialiased`}
      >
        <AppProviders>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}
