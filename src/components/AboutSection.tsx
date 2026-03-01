import SectionWrapper from "./SectionWrapper";
import { Code2, BrainCircuit, Database } from "lucide-react";

export default function AboutSection() {
    const interests = [
        {
            title: "Web Development",
            description: "Fokus pada pembuatan aplikasi web modern yang responsif, cepat, dan interaktif dengan pengalaman pengguna yang optimal.",
            icon: <Code2 className="w-8 h-8 text-blue-500 mb-4" />,
        },
        {
            title: "Artificial Intelligence",
            description: "Memiliki ketertarikan dalam memahami penerapan AI dan machine learning untuk efisiensi sistem informasi.",
            icon: <BrainCircuit className="w-8 h-8 text-purple-500 mb-4" />,
        },
        {
            title: "Sistem Informasi",
            description: "Menganalisis dan merancang solusi sistem untuk menyelesaikan berbagai tantangan bisnis dan organisasi.",
            icon: <Database className="w-8 h-8 text-green-500 mb-4" />,
        },
    ];

    return (
        <SectionWrapper id="about" className="bg-white/5 border-y border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Tentang Saya</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Saya adalah seorang mahasiswa Teknologi Informasi yang memiliki passion mendalam terhadap dunia pengembangan teknologi.
                        Saya selalu bersemangat untuk belajar teknologi terbaru, terutama di bidang pengembangan web (Web Development), Artificial Intelligence (AI), dan Sistem Informasi.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="bg-background/50 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-white/5 transition-all group"
                        >
                            {interest.icon}
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                {interest.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {interest.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
