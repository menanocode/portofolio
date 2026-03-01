import SectionWrapper from "./SectionWrapper";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <SectionWrapper id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center min-h-[90vh]">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 mb-8 shadow-2xl">
                    <div className="absolute inset-0 bg-blue-500/20 animate-pulse" />
                    {/* using a placeholder image logic or generic avatar image since we don't have user's actual image */}
                    <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                        AAI
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                    Hi, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Anno Achmat Istiana</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-medium">
                    Mahasiswa Teknologi Informasi <span className="mx-2 hidden md:inline">|</span><br className="md:hidden" /> Web Developer Enthusiast
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="#projects"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 gap-2"
                    >
                        Lihat Portfolio
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/5 text-foreground font-medium hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 border border-white/10 gap-2"
                    >
                        Hubungi Saya
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
