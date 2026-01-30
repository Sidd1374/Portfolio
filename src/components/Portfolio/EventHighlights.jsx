import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { EVENTS_HIGHLIGHTS } from '../../data/portfolioData';

const EventHighlights = memo(({ theme, onOpenGallery }) => {
    return (
        <div className="bg-black">
            <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-800">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Event Highlights</h2>
                        <p className="text-gray-400">Leading from the front.</p>
                    </div>
                    <div className="flex gap-3">
                        {/* Gallery button intentionally hidden per user request */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {EVENTS_HIGHLIGHTS.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-xl aspect-video bg-gray-900 border border-gray-800"
                        >
                            {event.image ? (
                                <div className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${event.image})` }} />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80 group-hover:scale-105 transition-transform duration-500" />
                            )}

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className={`${theme.accent} text-xs font-bold uppercase tracking-wider mb-1`}>{event.role}</span>
                                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                <p className="text-gray-200 text-sm">{event.stats}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
});

export default EventHighlights;
