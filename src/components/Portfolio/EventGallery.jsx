import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA } from '../../data/portfolioData';

const EventGallery = ({ theme }) => {
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    const openLightbox = (gallery) => {
        setSelectedGallery(gallery);
        setCurrentImageIdx(0);
    };

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <span className={`${theme.accent} text-sm font-bold uppercase tracking-wider mb-2 block`}>Moments</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Event Gallery</h2>
                </div>
                <div className={`h-1 w-16 ${theme.bgSolid} rounded-full md:hidden`} />
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[160px]">
                {GALLERY_DATA.map((item, idx) => {
                    // First 2 items are large, rest are small
                    const isLarge = idx < 2;
                    const gridClass = isLarge
                        ? 'col-span-2 row-span-2'
                        : 'col-span-1 row-span-1';

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`group cursor-pointer relative rounded-2xl overflow-hidden bg-gray-900 border border-white/5 ${gridClass}`}
                            onClick={() => openLightbox(item)}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${item.images[0]}`}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className={`text-[9px] uppercase tracking-widest font-bold ${theme.accent}`}>{item.category}</span>
                                    {item.role && (
                                        <span className={`text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-full ${item.role === 'Winner' ? 'bg-yellow-500/20 text-yellow-400' :
                                                item.role === 'Project Lead' ? 'bg-purple-500/20 text-purple-400' :
                                                    item.role === 'Secretary' ? 'bg-blue-500/20 text-blue-400' :
                                                        item.role === 'Organizer' ? 'bg-green-500/20 text-green-400' :
                                                            'bg-white/10 text-white/70'
                                            }`}>{item.role}</span>
                                    )}
                                </div>
                                <h3 className={`font-bold text-white ${isLarge ? 'text-lg md:text-xl' : 'text-sm'} line-clamp-1`}>{item.title}</h3>
                                {isLarge && (
                                    <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1 mt-1">{item.description}</p>
                                )}
                            </div>
                            <div className={`absolute top-3 right-3 bg-white/10 backdrop-blur-md ${isLarge ? 'p-2' : 'p-1.5'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}>
                                <Camera size={isLarge ? 16 : 12} className="text-white" />
                            </div>
                            {/* Image count badge */}
                            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white/70">
                                {item.images.length} <span className="opacity-50">pics</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex flex-col"
                        onClick={() => setSelectedGallery(null)}
                    >
                        <div className="p-6 flex justify-between items-center bg-black/50">
                            <div>
                                <h3 className="text-2xl font-bold text-white">{selectedGallery.title}</h3>
                                <p className="text-sm text-gray-400">{selectedGallery.description}</p>
                            </div>
                            <button onClick={() => setSelectedGallery(null)} className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                                <X size={24} className="text-white" />
                            </button>
                        </div>

                        <div className="flex-1 relative flex flex-col items-center justify-center p-4 md:p-10" onClick={(e) => e.stopPropagation()}>
                            <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        src={`${import.meta.env.BASE_URL}${selectedGallery.images[currentImageIdx]}`}
                                        alt={`${selectedGallery.title} ${currentImageIdx + 1}`}
                                        className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl shadow-white/5"
                                    />
                                </AnimatePresence>

                                {selectedGallery.images.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-4 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all z-20"
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIdx((prev) => (prev - 1 + selectedGallery.images.length) % selectedGallery.images.length); }}
                                        >
                                            <ChevronLeft size={32} />
                                        </button>
                                        <button
                                            className="absolute right-4 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all z-20"
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIdx((prev) => (prev + 1) % selectedGallery.images.length); }}
                                        >
                                            <ChevronRight size={32} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {selectedGallery.images.length > 1 && (
                                <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {selectedGallery.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIdx(idx); }}
                                            className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIdx ? theme.borderBold : 'border-transparent opacity-40'}`}
                                        >
                                            <img src={`${import.meta.env.BASE_URL}${img}`} className="w-full h-full object-cover" alt="thumb" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default EventGallery;
