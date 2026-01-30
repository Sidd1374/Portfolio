import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

const AchievementsSection = memo(({ theme }) => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <span className={`${theme.accent} text-sm font-bold uppercase tracking-wider mb-2 block`}>Hall of Fame</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
                    <div className={`h-1 w-16 mx-auto ${theme.bgSolid} rounded-full`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ACHIEVEMENTS_DATA.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 ${theme.accentBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:border-gray-600 transition-all h-full flex flex-col items-center">
                                <div className={`p-4 bg-black rounded-full mb-6 shadow-lg border border-gray-800 group-hover:scale-110 ${theme.groupHoverBorder} transition-all duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className={`${theme.accent} text-sm font-medium mb-4`}>{item.org}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default AchievementsSection;
