import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LOGOS_DATA } from '../../data/portfolioData';

const LogoMarquee = ({ theme, persona = 'builder' }) => {
    const [isHovered, setIsHovered] = useState(false);
    // Get persona-specific logos
    const personaLogos = LOGOS_DATA[persona] || LOGOS_DATA.builder;
    // Use 2 sets for a perfect seamless loop when animating to -50%
    const marqueeLogos = [...personaLogos, ...personaLogos];

    return (
        <div className="py-16 relative overflow-hidden group">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

            {/* Header (Optional, added for context) */}
            <div className="max-w-6xl mx-auto px-6 mb-8 text-center md:text-left">
                <span className={`${theme?.accent || 'text-cyan-400'} text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block opacity-50`}>Technologies & Stack</span>
                <div className="h-px w-12 bg-white/10 hidden md:block" />
            </div>

            {/* Gradient Masks for seamless entry/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <div
                className="flex overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex gap-6 md:gap-10 items-center whitespace-nowrap w-max px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: isHovered ? 60 : 35, // Slow down on hover for readability
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {marqueeLogos.map((logo, idx) => (
                        <div
                            key={`${logo.id}-${idx}`}
                            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 hover:scale-110 group/item relative cursor-default"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                loading="lazy"
                                decoding="async"
                                className="w-6 h-6 md:w-8 md:h-8 opacity-80 group-hover/item:opacity-100 transition-all duration-500 transform group-hover/item:rotate-[15deg]"
                            />
                            <span className="text-gray-400 font-bold tracking-tight uppercase text-xs md:text-sm group-hover/item:text-white transition-colors duration-500">
                                {logo.name}
                            </span>

                            {/* Inner Accent Glow */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-10 transition-opacity duration-500 ${theme?.bgSolid || 'bg-white'}`} />

                            {/* Outer Soft Glow */}
                            <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover/item:opacity-30 blur-xl transition-all duration-500 pointer-events-none ${theme?.bgSolid || 'bg-white'}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LogoMarquee;
