import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-white/10 py-10 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <Link href="#home" className="text-2xl font-bold tracking-tighter">
                        Anno<span className="text-blue-500">.</span>
                    </Link>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Mahasiswa Teknologi Informasi | Web Developer
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/menanocode" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                        <Github size={20} />
                    </a>
                    <a href="www.linkedin.com/in/anno-achmat-istiana-b2b76a356" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:contact@example.com" className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground shadow-sm">
                <p>&copy; {currentYear} Anno Achmat Istiana. All rights reserved.</p>
            </div>
        </footer>
    );
}
