"use client";

import { useCallback, useEffect, useRef } from "react";

export function useHoverSound() {
    const audioContextRef = useRef<AudioContext | null>(null);

    // Initialize Audio Context on first interaction to respect browser policies
    useEffect(() => {
        const initAudio = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
        };

        window.addEventListener('click', initAudio, { once: true });
        window.addEventListener('touchstart', initAudio, { once: true });
        window.addEventListener('keydown', initAudio, { once: true });

        return () => {
            window.removeEventListener('click', initAudio);
            window.removeEventListener('touchstart', initAudio);
            window.removeEventListener('keydown', initAudio);
        };
    }, []);

    const playHoverSound = useCallback(() => {
        if (!audioContextRef.current) return;

        const ctx = audioContextRef.current;

        // Resume context if it was suspended
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Subtle, futuristic "tick/bloop" sound profile
        osc.type = "sine";

        // Frequency sweep for that futuristic UI sound
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);

        // Volume envelope (very subtle, short tick so it's not annoying)
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
    }, []);

    return playHoverSound;
}
