import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/ui/Spotlight";
import { RESUME_DATA } from "@/data/resume-data";
import ScrollTOStartPage from "@/components/scroll-to-start-page/scroll-to-start-page";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: RESUME_DATA.name,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.about,
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "portfolio",
    "Alireza",
    "Soltanian",
  ],
  authors: [
    {
      name: "alirezasoltanian",
      url: "https://alirezasoltanian.ir",
    },
  ],
  creator: "alirezasoltanian",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: RESUME_DATA.url,
    title: RESUME_DATA.name,
    description: RESUME_DATA.about,
    siteName: RESUME_DATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: RESUME_DATA.name,
    description: RESUME_DATA.about,
    images: [`${RESUME_DATA.ogImage}`],
    creator: "@alirezasoltanian",
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: absoluteUrl("/site.webmanifest"),
};

// export const viewport: Viewport = {
//   colorScheme: "dark light",
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   userScalable: false,
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='overflow-x-hidden h-fit' lang='en'>
      <body className={inter.className}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
      {/* <ScrollTOStartPage /> */}
    </html>
  );
}
