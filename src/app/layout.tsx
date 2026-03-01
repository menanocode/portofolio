import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anno Achmat Istiana | Portfolio",
  description: "Portfolio website of Anno Achmat Istiana, Mahasiswa Teknologi Informasi & Web Developer Enthusiast.",
  keywords: ["Anno Achmat Istiana", "Portfolio", "Web Developer", "Teknologi Informasi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-foreground min-h-screen flex flex-col bg-transparent`}>
        <AnimatedBackground />
        <ScrollProgress />

        {/* We use pointer-events-none on the wrappers so the background canvas can detect the mouse, 
            but pointer-events-auto on the actual interactive components */}
        <div className="pointer-events-none z-50">
          <Navbar />
        </div>

        <main className="flex-1 flex flex-col pt-20 z-10 pointer-events-none">
          <div className="pointer-events-auto">
            {children}
          </div>
        </main>

        <div className="pointer-events-auto z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
