import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { PERSONA_SUMMARIES } from '../../data/portfolioData';

const PersonaSummary = memo(({ theme, persona }) => {
    const summaryData = PERSONA_SUMMARIES[persona];

    return (
        <motion.div
            key={persona}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 w-full max-w-3xl mx-auto"
        >
            <div className={`${theme.mutedBg} border ${theme.borderSoft} rounded-xl p-4 md:p-6 backdrop-blur-sm`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {summaryData.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className={`mb-2 ${theme.accent} ${theme.accentBg} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
});

export default PersonaSummary;
