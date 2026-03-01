"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-[9999] origin-left shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            style={{ scaleX: scrollYProgress }}
        />
    );
}
