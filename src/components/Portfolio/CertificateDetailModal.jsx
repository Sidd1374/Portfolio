import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const CertificateDetailModal = ({ isOpen, onClose, cert, theme }) => {
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

    if (!isOpen || !cert) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center p-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-0 -right-2 md:-right-10 p-2 rounded-full hover:bg-white/10 text-white transition-colors z-[71]"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-black/20 border border-white/5 shadow-2xl">
                            <img
                                src={`${import.meta.env.BASE_URL}${cert.image}`}
                                alt={cert.title}
                                className="max-w-full max-h-full object-contain shadow-2xl"
                            />
                        </div>

                        <div className="mt-6 text-center">
                            <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{cert.title}</h2>
                            <p className={`${theme?.accent || 'text-cyan-400'} font-bold text-sm md:text-lg opacity-90`}>{cert.issuer}</p>
                            <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-xs md:text-sm line-clamp-3 md:line-clamp-none">
                                {cert.explanation}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CertificateDetailModal;
