import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Video } from 'lucide-react';
import { RPG_STATS } from '../../data/portfolioData';

const CharacterStats = memo(({ theme, persona }) => {
    const stats = RPG_STATS[persona];

    return (
        <section className="py-12 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden"
            >
                <div className={`absolute top-0 right-0 w-32 h-32 ${theme.accentBg} blur-3xl rounded-full`} />

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                            <span className={theme.accent}>
                                {persona === 'builder' && <Code size={24} />}
                                {persona === 'leader' && <Users size={24} />}
                                {persona === 'creator' && <Video size={24} />}
                            </span>
                            Character Stats
                        </h3>
                        <p className="text-gray-400 text-sm">Current attributes based on selected persona.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-lg">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="group">
                                <div className="flex justify-between mb-1 text-sm font-medium">
                                    <span className="text-gray-300 flex items-center gap-2">
                                        <span className={theme.accent}>{stat.icon}</span>
                                        {stat.label}
                                    </span>
                                    <span className={theme.accent}>{stat.value}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: `${stat.value}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                                        className={`h-full bg-gradient-to-r ${theme.gradientDeep}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
});

export default CharacterStats;
