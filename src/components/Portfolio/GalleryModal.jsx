import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { EVENTS_HIGHLIGHTS, FULL_DATA } from '../../data/portfolioData';

const GalleryModal = ({ isOpen, onClose, images = [], category = null, theme }) => {
    const sections = [
        { key: 'college', label: 'Tech Events & Hackathons' },
        { key: 'insight', label: 'Podcast - Insight Universe' },
        { key: 'projects', label: 'Projects' }
    ];

    const getImagesFor = (key) => {
        if (key === 'college') return EVENTS_HIGHLIGHTS.map(e => e.image).filter(Boolean);
        if (key === 'insight') {
            const imgs = FULL_DATA.filter(d => d.organization && d.organization.toLowerCase().includes('insight universe')).flatMap(d => d.details?.images || []);
            if (imgs.length) return imgs;
            const fallback = FULL_DATA.find(d => d.id === 201);
            return fallback?.details?.images || [];
        }
        if (key === 'projects') return FULL_DATA.filter(d => d.category === 'project').flatMap(d => d.details?.images || []);
        return [];
    };

    const [active, setActive] = useState(0);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (category) {
            const found = sections.findIndex(s => s.label.toLowerCase() === String(category).toLowerCase());
            if (found >= 0) setActive(found);
        }
        setIdx(0);
    }, [isOpen, category]);

    if (!isOpen) return null;

    const activeKey = sections[active].key;
    const activeImages = getImagesFor(activeKey);
    const showPrev = idx > 0;
    const showNext = idx < activeImages.length - 1;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={onClose}>
                    <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className={`relative w-full max-w-5xl bg-gray-900 border ${theme.borderMedium} rounded-2xl overflow-hidden`} onClick={(e) => e.stopPropagation()}>
                        <div className={`h-1 w-full bg-gradient-to-r ${theme.gradientDeep}`} />
                        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"><X size={24} /></button>

                            <div className="mb-4 flex items-center justify-between">
                                <div className="relative flex-1">
                                    <div className="flex bg-gray-800/30 p-1 rounded-lg gap-1">
                                        {sections.map((s, i) => (
                                            <button key={s.key} onClick={() => { setActive(i); setIdx(0); }} className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-md ${active === i ? 'text-white' : 'text-gray-300'} ${active === i ? theme.accentBg : ''}`}>
                                                {s.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
                                        <div className="relative w-full h-full">
                                            <div className="absolute bottom-1 left-0" style={{ left: `${(active / sections.length) * 100}%`, width: `${100 / sections.length}%` }}>
                                                <div className={`h-1 rounded-full ${theme.bgSolid}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-4">{sections[active].label}</h2>

                            {activeImages.length > 0 ? (
                                <div>
                                    <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-gray-800 rounded-xl overflow-hidden">
                                        <motion.img key={`${active}-${idx}`} src={`${import.meta.env.BASE_URL}${activeImages[idx]}`} alt={`${sections[active].label} ${idx + 1}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ type: 'spring', stiffness: 200, damping: 30 }} className="object-contain w-full h-full" />

                                        {showPrev && (
                                            <button onClick={() => setIdx(i => i - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 z-10">
                                                <ChevronRight size={24} className="rotate-180" />
                                            </button>
                                        )}
                                        {showNext && (
                                            <button onClick={() => setIdx(i => i + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 z-10">
                                                <ChevronRight size={24} />
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {activeImages.map((img, i) => (
                                            <button key={i} onClick={() => setIdx(i)} className={`w-20 h-14 rounded-md overflow-hidden border ${i === idx ? `${theme.borderSolid}` : 'border-gray-800'} focus:outline-none`}>
                                                <img src={`${import.meta.env.BASE_URL}${img}`} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-400">No images available for this section.</div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GalleryModal;
