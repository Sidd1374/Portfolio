import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const ProjectDetailModal = ({ isOpen, onClose, project, theme }) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    // Reset index when project changes
    useEffect(() => {
        setCurrentIdx(0);
    }, [project?.id]);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Auto-scroll carousel
    useEffect(() => {
        if (!isOpen || !project) return;
        const images = project.images || [project.image];
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isOpen, project]);

    if (!isOpen || !project) return null;

    const images = project.images || [project.image];
    const hasMultipleImages = images.length > 1;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="w-full max-w-5xl bg-gray-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col md:flex-row h-full overflow-hidden">
                        {/* Image Section */}
                        <div className="relative w-full md:w-3/5 bg-black flex items-center justify-center group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIdx}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    src={`${import.meta.env.BASE_URL}${images[currentIdx]}`}
                                    alt={project.title}
                                    className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain"
                                />
                            </AnimatePresence>

                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/40 backdrop-blur-md">
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentIdx(i)}
                                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIdx ? 'bg-white w-4' : 'bg-white/40'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col bg-gray-900 border-l border-white/5 overflow-y-auto">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded bg-white/5 text-gray-400 border border-white/10`}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 -mt-2 -mr-2 rounded-full hover:bg-white/5 text-gray-500 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-6 flex-1">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Overview</h4>
                                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                                </div>

                                {project.details && (
                                    <>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">The Challenge</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{project.details.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">The Solution</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{project.details.solution}</p>
                                        </div>
                                        {project.details.features && (
                                            <div>
                                                <h4 className="text-xs font-bold uppercase tracking-tighter text-gray-500 mb-2">Key Features</h4>
                                                <ul className="grid grid-cols-1 gap-2">
                                                    {project.details.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all`}
                                >
                                    Source Code <ExternalLink size={16} />
                                </a>

                                {/* Hidden Live Demo Button - Request from user */}
                                {project.showLive && (
                                    <button
                                        disabled
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm opacity-50 cursor-not-allowed"
                                    >
                                        Live Demo (Coming Soon) <Download size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
