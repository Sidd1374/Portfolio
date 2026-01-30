import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const Modal = ({ isOpen, onClose, data, theme }) => {
    const [imgIdx, setImgIdx] = useState(0);
    if (!isOpen || !data) return null;
    const images = data.details?.images || [];
    const hasImages = images.length > 0;
    const showPrev = imgIdx > 0;
    const showNext = imgIdx < images.length - 1;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-2xl bg-gray-900 border ${theme.borderMedium} rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`h-1 w-full bg-gradient-to-r ${theme.gradientDeep}`} />
                        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"><X size={24} /></button>
                            <div className="flex items-center gap-3 mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                <span>{data.year}</span><span>•</span><span>{data.organization}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-3xl font-bold text-white">{data.title}</h2>
                                {data.status === 'paid' && (
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 border border-green-500/50">💰 Paid</span>
                                )}
                                {data.youtubeLink && (
                                    <a href={data.youtubeLink} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border border-red-500/50 hover:from-red-500/50 hover:to-red-600/50 transition-all">📺 Insight Universe</a>
                                )}
                            </div>
                            {/* Image slider */}
                            {hasImages && (
                                <div className="mb-8">
                                    <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-gray-800 rounded-xl overflow-hidden">
                                        <motion.img
                                            key={imgIdx}
                                            src={`${import.meta.env.BASE_URL}${images[imgIdx]}`}
                                            alt={data.title + ' image'}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                                            className="object-contain w-full h-full"
                                        />
                                        {showPrev && (
                                            <button onClick={() => setImgIdx(i => i - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 z-10">
                                                <ChevronRight size={24} className="rotate-180" />
                                            </button>
                                        )}
                                        {showNext && (
                                            <button onClick={() => setImgIdx(i => i + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 z-10">
                                                <ChevronRight size={24} />
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex justify-center gap-2 mt-2">
                                        {images.map((img, idx) => (
                                            <button key={idx} onClick={() => setImgIdx(idx)} className={`w-3 h-3 rounded-full ${imgIdx === idx ? theme.bgSolid : 'bg-gray-700'} border border-gray-800`} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                                    <h3 className={`${theme.accent} font-semibold mb-2 flex items-center gap-2`}><span className="text-xl">🔥</span> The Challenge</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">{data.details.challenge}</p>
                                </div>
                                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                                    <h3 className={`text-green-400 font-semibold mb-2 flex items-center gap-2`}><span className="text-xl">🚀</span> The Solution</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">{data.details.solution}</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-white font-semibold mb-3">Tech Stack & Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.details.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${theme.badgeBgDark} ${theme.accentLight} border ${theme.borderMedium}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
