import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Eye } from 'lucide-react';
import { PROJECTS_DATA, CERTIFICATES_DATA } from '../../data/portfolioData';
import { getTheme } from '../../utils/theme';

const AllItemsModal = ({ isOpen, onClose, type, persona, theme }) => {
    if (!isOpen) return null;

    const isProjects = type === 'projects';
    const data = isProjects
        ? PROJECTS_DATA.filter(p => !persona || p.personas.includes(persona))
        : CERTIFICATES_DATA.filter(c => !persona || c.personas.includes(persona));

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="w-full h-full max-w-6xl bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 md:p-10 border-b border-gray-800 flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-white capitalize">All {type}</h2>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.map((item, idx) => {
                                const itemTheme = getTheme(item.personas[0]);
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`bg-gray-800/40 border ${itemTheme.borderMedium} rounded-2xl overflow-hidden hover:${itemTheme.borderBold} transition-colors shadow-lg ${itemTheme.shadowSoft}`}
                                    >
                                        <div className={`aspect-video overflow-hidden ${!isProjects ? 'bg-black p-4' : ''}`}>
                                            <img
                                                src={`${import.meta.env.BASE_URL}${item.image}`}
                                                alt={item.title}
                                                className={`w-full h-full ${isProjects ? 'object-cover' : 'object-contain'}`}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{isProjects ? item.description : item.issuer}</p>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`inline-flex items-center gap-2 text-sm font-bold ${itemTheme.accent}`}
                                            >
                                                {isProjects ? 'View Project' : 'Verify'} <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AllItemsModal;
