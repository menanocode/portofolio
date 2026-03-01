import SectionWrapper from "./SectionWrapper";
import {
    FileCode2,
    Palette,
    Braces,
    Database,
    TerminalSquare,
    Atom,
    Server,
    Layers,
    LayoutTemplate,
    Cpu,
    Cloud,
    GitBranch,
    Container
} from "lucide-react";

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <LayoutTemplate size={24} className="text-blue-400" />,
            skills: [
                { name: "React / Next.js", icon: <Atom size={28} className="text-cyan-400" /> },
                { name: "JavaScript (ES6+)", icon: <Braces size={28} className="text-yellow-400" /> },
                { name: "TypeScript", icon: <FileCode2 size={28} className="text-blue-500" /> },
                { name: "Tailwind CSS", icon: <Palette size={28} className="text-teal-400" /> },
                { name: "Framer Motion", icon: <Layers size={28} className="text-purple-500" /> },
            ]
        },
        {
            title: "Backend Development",
            icon: <Server size={24} className="text-green-400" />,
            skills: [
                { name: "Node.js / Express", icon: <Cpu size={28} className="text-green-500" /> },
                { name: "Laravel (PHP)", icon: <TerminalSquare size={28} className="text-red-500" /> },
                { name: "Python", icon: <FileCode2 size={28} className="text-blue-300" /> },
                { name: "RESTful APIs", icon: <Server size={28} className="text-gray-400" /> },
                { name: "GraphQL", icon: <Atom size={28} className="text-pink-500" /> },
            ]
        },
        {
            title: "Database & DevOps",
            icon: <Database size={24} className="text-orange-400" />,
            skills: [
                { name: "MySQL / Postgre", icon: <Database size={28} className="text-blue-400" /> },
                { name: "MongoDB", icon: <Database size={28} className="text-green-500" /> },
                { name: "Git & GitHub", icon: <GitBranch size={28} className="text-orange-500" /> },
                { name: "Docker", icon: <Container size={28} className="text-blue-500" /> },
                { name: "AWS / Vercel", icon: <Cloud size={28} className="text-white" /> },
            ]
        }
    ];

    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Keahlian Teknis
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Sebagai Fullstack Developer, saya menguasai berbagai teknologi moderen mulai dari rekayasa antarmuka hingga arsitektur server.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {skillCategories.map((category, catIndex) => (
                    <div
                        key={catIndex}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 group"
                    >
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white/90">{category.title}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-4 bg-background/50 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
                                >
                                    <div className="mb-3">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs font-semibold text-foreground/80 text-center">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
