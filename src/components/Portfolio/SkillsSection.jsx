import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';

const SkillsSection = memo(({ theme, persona, onSkillClick }) => {
    const skills = SKILLS_DATA[persona];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-2">Technical Arsenal</h2>
                <p className="text-gray-400 text-sm">Click on a category to see expertise</p>
                <div className={`h-1 w-24 mx-auto ${theme.bgSolid} rounded-full mt-2`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => onSkillClick(group)}
                        className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-gray-900/50 cursor-pointer group"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className={`${theme.accent} font-bold text-lg group-hover:text-white transition-colors`}>{group.category}</h3>
                            <ChevronRight className={`${theme.accentBright} opacity-0 group-hover:opacity-100 transition-opacity`} size={18} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
});

export default SkillsSection;
