"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    return (
        <SectionWrapper id="contact">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Hubungi Saya</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    <p className="text-lg text-muted-foreground">
                        Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk mengirim pesan!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground/80">Nama Lengkap</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground/80">Pesan</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                            placeholder="Halo, saya ingin mendiskusikan project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">Mengirim... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></span>
                        ) : isSuccess ? (
                            <span className="flex items-center gap-2 text-green-100">Terkirim <CheckCircle size={18} /></span>
                        ) : (
                            <span className="flex items-center gap-2">Kirim Pesan <Send size={18} /></span>
                        )}
                    </button>
                </form>
            </div>
        </SectionWrapper>
    );
}
