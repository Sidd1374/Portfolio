import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Eye } from 'lucide-react';
import { PROJECTS_DATA, CERTIFICATES_DATA, PROJECT_SORTING, CERTIFICATE_SORTING } from '../../data/portfolioData';
import { getTheme } from '../../utils/theme';

const ProjectImage = ({ images, title, isProject }) => {
    const [currentIdx, setCurrentIdx] = React.useState(0);

    React.useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    const displayImage = Array.isArray(images) ? images[currentIdx] : images;

    return (
        <div className={`aspect-video w-full overflow-hidden ${!isProject ? 'bg-black/40 p-4' : ''} flex items-center justify-center relative`}>
            <motion.img
                key={displayImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                src={`${import.meta.env.BASE_URL}${displayImage}`}
                alt={title}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${isProject ? 'object-cover' : 'object-contain'}`}
            />
            {images.length > 1 && (
                <div className="absolute bottom-2 right-2 flex gap-1">
                    {images.map((_, i) => (
                        <div key={i} className={`w-1 h-1 rounded-full ${i === currentIdx ? 'bg-white' : 'bg-white/30'}`} />
                    ))}
                </div>
            )}
        </div>
    );
};

const AllItemsModal = ({ isOpen, onClose, type, persona, theme, onCertificateClick, onProjectClick }) => {
    if (!isOpen) return null;

    const isProjects = type === 'projects';
    const rawData = isProjects ? PROJECTS_DATA : CERTIFICATES_DATA;
    const sortingConfig = isProjects ? PROJECT_SORTING : CERTIFICATE_SORTING;

    const data = [...rawData].sort((a, b) => {
        const priorityArr = sortingConfig[persona] || [];
        const aIdx = priorityArr.indexOf(a.id);
        const bIdx = priorityArr.indexOf(b.id);

        const aVal = aIdx !== -1 ? aIdx : 999 + (a.order || a.id);
        const bVal = bIdx !== -1 ? bIdx : 999 + (b.order || b.id);
        return aVal - bVal;
    });

    const themeClass = getTheme(persona);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="w-full max-w-6xl bg-gray-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/5">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 capitalize">
                                All {type}
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">Browse my complete {type} portfolio</p>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-all ring-1 ring-white/10">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.map((item, idx) => {
                                const itemTheme = getTheme(item.personas[0]);
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`bg-gray-800/40 border ${itemTheme.borderMedium} rounded-2xl overflow-hidden hover:${itemTheme.borderBold} transition-colors shadow-lg ${itemTheme.shadowSoft} cursor-pointer h-full flex flex-col`}
                                        onClick={() => isProjects ? onProjectClick?.(item) : onCertificateClick?.(item)}
                                    >
                                        <ProjectImage
                                            images={isProjects ? (item.images || [item.image]) : [item.image]}
                                            title={item.title}
                                            isProject={isProjects}
                                        />
                                        {!isProjects && item.date && (
                                            <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-[10px] font-bold ${itemTheme.badgeBg} ${itemTheme.accent} border ${itemTheme.borderSoft} backdrop-blur-md`}>
                                                {item.date}
                                            </div>
                                        )}
                                        <div className="p-6 flex flex-col flex-1 gap-4">
                                            {isProjects && item.tech && (
                                                <div className="flex flex-wrap gap-2 h-14 overflow-hidden content-start">
                                                    {item.tech.map((t, i) => (
                                                        <span key={i} className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded ${itemTheme.badgeBg} ${itemTheme.accent} border ${itemTheme.borderSoft} whitespace-nowrap h-fit`}>
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{item.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 min-h-[60px]">{isProjects ? item.description : item.issuer}</p>
                                            </div>

                                            <div className="mt-auto">
                                                {isProjects ? (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className={`inline-flex items-center gap-2 text-sm font-bold ${itemTheme.accent} hover:underline`}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        View Source Code <ExternalLink size={14} />
                                                    </a>
                                                ) : (
                                                    <div className={`inline-flex items-center gap-2 text-sm font-bold ${itemTheme.accent} opacity-80 justify-center md:justify-start`}>
                                                        Click to view <Eye size={14} />
                                                    </div>
                                                )}
                                            </div>
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
