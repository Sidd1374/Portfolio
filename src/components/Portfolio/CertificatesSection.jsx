import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { CERTIFICATES_DATA, CERTIFICATE_SORTING } from '../../data/portfolioData';
import { getTheme } from '../../utils/theme';

const CertificatesSection = memo(({ theme, persona, onCertificateClick, onShowAll }) => {
    const filteredCerts = [...CERTIFICATES_DATA]
        .sort((a, b) => {
            const priorityArr = CERTIFICATE_SORTING[persona] || [];
            const aIdx = priorityArr.indexOf(a.id);
            const bIdx = priorityArr.indexOf(b.id);

            const aVal = aIdx !== -1 ? aIdx : 999 + (a.order || a.id);
            const bVal = bIdx !== -1 ? bIdx : 999 + (b.order || b.id);
            return aVal - bVal;
        })
        .filter(c => !persona || c.personas.includes(persona));
    const displayCerts = filteredCerts.slice(0, 3);
    const hasMore = CERTIFICATES_DATA.length > displayCerts.length;

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-800">
            <div className="text-center mb-16">
                <span className={`${theme.accent} text-sm font-bold uppercase tracking-wider mb-2 block`}>Credentials</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                <div className={`h-1 w-16 mx-auto ${theme.bgSolid} rounded-full`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayCerts.map((cert, idx) => {
                    const itemTheme = getTheme(cert.personas[0]);
                    return (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => onCertificateClick(cert)}
                            className="group cursor-pointer h-full"
                        >
                            <div className={`relative bg-gray-900 border ${itemTheme.borderMedium} p-4 rounded-2xl hover:${itemTheme.borderBold} transition-all duration-300 shadow-lg ${itemTheme.shadowSoft} h-full flex flex-col`}>
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-black/40 flex items-center justify-center relative">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${cert.image}`}
                                        alt={cert.title}
                                        loading="lazy"
                                        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    {cert.date && (
                                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-[10px] font-bold ${itemTheme.badgeBg} ${itemTheme.accent} border ${itemTheme.borderSoft} backdrop-blur-md`}>
                                            {cert.date}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="font-bold text-gray-200 group-hover:text-white transition-colors text-center line-clamp-2 min-h-[3rem] flex items-center justify-center">{cert.title}</h3>
                                    <p className={`${itemTheme.accent} text-xs text-center mt-2 font-medium opacity-80 uppercase tracking-wider`}>{cert.issuer}</p>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                    <div className={`bg-black/60 backdrop-blur-sm p-3 rounded-full border ${itemTheme.borderMedium} ${itemTheme.accent}`}>
                                        <Eye size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {hasMore && (
                <div className="mt-12 text-center">
                    <button
                        onClick={() => onShowAll('certificates')}
                        className={`px-8 py-3 rounded-full border ${theme.borderMedium} ${theme.accent} font-bold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg ${theme.shadowSoft}`}
                    >
                        Show All Certificates
                    </button>
                </div>
            )}
        </section>
    );
});

export default CertificatesSection;
