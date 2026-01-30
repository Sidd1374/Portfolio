import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const TimelineNode = ({ data, index, theme, onClick }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative mb-20 last:mb-0 w-full flex group cursor-pointer items-center"
            onClick={() => onClick(data)}
        >
            {/* The Dot / Node */}
            <div
                className={`absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border-2 flex items-center justify-center z-10 md:-translate-x-1/2 transition-all duration-500 ${isInView ? `${theme.borderSolid} scale-110` : 'border-gray-700 scale-100'}`}
                style={isInView ? { boxShadow: theme.glowShadow } : undefined}
            >
                <div className={`transition-colors duration-300 ${isInView ? theme.accent : 'text-gray-600'}`}>
                    {data.icon}
                </div>
                {/* Sparkles/Glow behind */}
                {isInView && (
                    <div className={`absolute inset-0 -z-10 ${theme.accentGlowBg} blur-xl rounded-full animate-pulse`} />
                )}
            </div>

            {/* Content Card */}
            <div className={`flex w-full items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}>
                <div className={`w-full md:w-[45%] flex items-center ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div
                        className={`p-6 rounded-2xl border transition-all duration-500 ${isInView ? `bg-gray-900/80 ${theme.borderMedium} shadow-[0_0_30px_rgba(0,0,0,0.3)] transform -translate-y-1` : 'bg-gray-900/30 border-gray-800'} hover:bg-gray-800/80`}>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${theme.badgeBg} ${theme.accent} border ${theme.borderSoft}`}>{data.year}</span>
                        {data.status === 'paid' && (
                            <span className="inline-block ml-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 border border-green-500/50">💰 Paid</span>
                        )}
                        {data.youtubeLink && (
                            <a href={data.youtubeLink} target="_blank" rel="noreferrer" className="inline-block ml-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border border-red-500/50 hover:from-red-500/50 hover:to-red-600/50 transition-all">📺 Insight Universe</a>
                        )}
                        <h3 className={`text-xl font-bold mb-1 transition-colors ${isInView ? 'text-white' : 'text-gray-300'}`}>{data.title}</h3>
                        <p className="text-gray-400 text-sm mb-3 font-medium">{data.organization}</p>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{data.description}</p>
                        <div className={`mt-4 flex items-center gap-2 text-xs font-medium ${theme.accent} uppercase tracking-wider ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                            View Details <ChevronRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TimelineNode;
