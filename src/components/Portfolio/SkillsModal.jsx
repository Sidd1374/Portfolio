import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SkillsModal = memo(({ isOpen, onClose, category, skills, theme }) => {
    if (!isOpen || !skills) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className={`relative w-full max-w-lg bg-gray-900 border ${theme.borderMedium} rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className={theme.accent}>//</span> {category}
                        </h2>

                        <div className="space-y-6">
                            {skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between mb-2 text-sm font-medium text-gray-300">
                                        <span>{skill.name}</span>
                                        <span className={theme.accent}>{skill.level}%</span>
                                    </div>
                                    <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: '0%' }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.08 }}
                                            className={`h-full bg-gradient-to-r ${theme.gradientDeep}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default SkillsModal;
