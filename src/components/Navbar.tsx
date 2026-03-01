"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useHoverSound } from "@/hooks/useHoverSound";

const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
    { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const playHoverSound = useHoverSound();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-transparent"}`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="#home" className="text-xl font-bold tracking-tighter" onMouseEnter={playHoverSound}>
                    Anno<span className="text-blue-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300"
                            onMouseEnter={playHoverSound}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Mobile Nav Toggle */}
                    <button
                        className="md:hidden text-foreground hover:text-blue-500 transition-colors duration-200"
                        onClick={() => {
                            playHoverSound();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        onMouseEnter={playHoverSound}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10">
                    <nav className="flex flex-col items-center py-6 gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-foreground/80 hover:text-blue-500 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                onMouseEnter={playHoverSound}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
