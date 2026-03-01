import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "SaaS Analytics Dashboard",
            description: "Platform SaaS multi-tenant untuk analitik data penjualan dengan visualisasi grafik interaktif, integrasi payment gateway (Stripe), dan sistem RBAC (Role-Based Access Control).",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
            links: { demo: "#", github: "#" },
            neonColor: "blue"
        },
        {
            title: "E-Learning Management System",
            description: "Sistem manajemen pembelajaran daring. Fitur meliputi manajemen kelas, streaming video materi, kuis real-time, dan otomasi sertifikat kelulusan.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
            tags: ["Laravel", "React", "MySQL", "Pusher"],
            links: { demo: "#", github: "#" },
            neonColor: "purple"
        },
        {
            title: "Real-time Collaboration Chat",
            description: "Aplikasi obrolan real-time bergaya Discord yang mendukung voice channel, screen sharing (WebRTC), dan enkripsi pesan end-to-end.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Socket.io", "Node.js", "Redis"],
            links: { demo: "#", github: "#" },
            neonColor: "cyan"
        },
        {
            title: "Microservices API Gateway",
            description: "Arsitektur backend scalable menggunakan pola microservice backend. Menangani load balancing, JWT authentication, dan rate limiting terpusat.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            tags: ["Node.js", "Docker", "Nginx", "MongoDB"],
            links: { demo: "#", github: "#" },
            neonColor: "green"
        },
        {
            title: "AI Product Recommender Engine",
            description: "Mesin rekomendasi pintar untuk platform E-commerce yang menganalisa riwayat belanja dan rating untuk menyarankan produk relevan lintas user.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "TensorFlow", "FastAPI", "Postgre"],
            links: { demo: "#", github: "#" },
            neonColor: "orange"
        },
        {
            title: "Modern Company Profile Website",
            description: "Website modern untuk profil perusahaan B2B dengan desain responsif, mode gelap, animasi Framer Motion, dan skor SEO Lighthouse 100.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["Next.js", "Framer Motion", "Vercel"],
            links: { demo: "#", github: "#" },
            neonColor: "blue"
        },
    ];

    return (
        <SectionWrapper id="projects" className="bg-white/5 border-y border-white/5 backdrop-blur-sm">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Portofolio Unggulan
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Kumpulan proyek komprehensif yang telah saya rancang, kembangkan, dan deploy ke produksi.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-background/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col h-full"
                    >
                        {/* Project Image Container */}
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Gradient Overlay for cool effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20 opacity-80" />

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Hover Action Links */}
                            <div className="absolute inset-0 z-30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.links.demo} className="p-3 bg-blue-600/90 rounded-full hover:bg-blue-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all text-white">
                                    <MonitorPlay size={20} />
                                </a>
                                <a href={project.links.github} className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-8 flex-1 flex flex-col relative">
                            {/* Deco line */}
                            <div className="w-10 h-1 bg-blue-500 rounded-full mb-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/90 group-hover:border-blue-500/30 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600/10 text-blue-400 font-medium hover:bg-blue-600/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 border border-blue-500/20 gap-2">
                    Jelajahi Github Saya <Github size={20} />
                </button>
            </div>
        </SectionWrapper>
    );
}
