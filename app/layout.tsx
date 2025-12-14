import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadkit | Build your site faster with ready-to-use blocks",
  description:
    "A curated collection of modern, copy-paste components for shadcn/ui and Tailwind CSS.",
  openGraph: {
    type: "website",
    title: "Shadkit | Build your site faster with ready-to-use blocks",
    description:
      "A curated collection of modern, copy-paste components for shadcn/ui and Tailwind CSS.",
    url: "https://shadkit.vercel.app",
    images: [
      {
        url: "/open_graph.webp",
        width: 1200,
        height: 630,
      },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
