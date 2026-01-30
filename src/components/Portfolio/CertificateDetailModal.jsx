import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const CertificateDetailModal = ({ isOpen, onClose, cert, theme }) => {
    if (!isOpen || !cert) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className={`relative w-full max-w-xl bg-gray-900 border ${theme.borderMedium} rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-black border border-gray-800">
                        <img
                            src={`${import.meta.env.BASE_URL}${cert.image}`}
                            alt={cert.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{cert.title}</h2>
                    <p className={`${theme.accent} font-bold mb-4`}>{cert.issuer}</p>
                    <p className="text-gray-400 mb-8 leading-relaxed">{cert.explanation}</p>

                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${theme.gradient} text-white font-bold hover:scale-[1.02] transition-transform`}
                    >
                        Verify Credential <ExternalLink size={18} />
                    </a>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CertificateDetailModal;
