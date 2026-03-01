"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
    children,
    id,
    className = "",
}: {
    children: React.ReactNode;
    id: string;
    className?: string;
}) {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="container mx-auto px-6">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}
