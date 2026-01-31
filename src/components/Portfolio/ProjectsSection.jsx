import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { PROJECTS_DATA, PROJECT_SORTING } from '../../data/portfolioData';
import { getTheme } from '../../utils/theme';

const ProjectImage = ({ logo, images, title }) => {
    // Display logo if available, otherwise fallback to the first image
    const displayImage = logo || (Array.isArray(images) ? images[0] : images);

    return (
        <div className="aspect-video w-full overflow-hidden bg-black/40 relative group/img flex items-center justify-center">
            <img
                src={`${import.meta.env.BASE_URL}${displayImage}`}
                alt={title}
                loading="lazy"
                className={`max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ${logo ? 'p-8' : ''}`}
            />
        </div>
    );
};

const ProjectsSection = memo(({ theme, persona, onShowAll, onProjectClick }) => {
    const filteredProjects = [...PROJECTS_DATA]
        .sort((a, b) => {
            const priorityArr = PROJECT_SORTING[persona] || [];
            const aIdx = priorityArr.indexOf(a.id);
            const bIdx = priorityArr.indexOf(b.id);

            const aVal = aIdx !== -1 ? aIdx : 999 + (a.order || a.id);
            const bVal = bIdx !== -1 ? bIdx : 999 + (b.order || b.id);
            return aVal - bVal;
        })
        .filter(p => !persona || p.personas.includes(persona));
    const displayProjects = filteredProjects.slice(0, 3);
    const hasMore = PROJECTS_DATA.length > displayProjects.length;

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-800">
            <div className="text-center mb-16">
                <span className={`${theme.accent} text-sm font-bold uppercase tracking-wider mb-2 block`}>Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className={`h-1 w-16 mx-auto ${theme.bgSolid} rounded-full`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayProjects.map((project, idx) => {
                    const itemTheme = getTheme(project.personas[0]);
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative bg-gray-900 border ${itemTheme.borderMedium} rounded-2xl overflow-hidden hover:${itemTheme.borderBold} transition-all duration-300 shadow-lg ${itemTheme.shadowSoft} h-full flex flex-col cursor-pointer`}
                            onClick={() => onProjectClick?.(project)}
                        >
                            <ProjectImage logo={project.logo} images={project.images || [project.image]} title={project.title} />
                            <div className="p-6 flex flex-col flex-1 gap-4">
                                <div className="flex flex-wrap gap-2 h-14 overflow-hidden content-start">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded ${itemTheme.badgeBg} ${itemTheme.accent} border ${itemTheme.borderSoft} whitespace-nowrap h-fit`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors line-clamp-1 flex items-center justify-between">
                                        {project.title}
                                        <Eye size={16} className={`${itemTheme.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 min-h-[60px]">{project.description}</p>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`inline-flex items-center gap-2 text-sm font-bold ${itemTheme.accent} hover:underline`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View Source Code <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {hasMore && (
                <div className="mt-12 text-center">
                    <button
                        onClick={() => onShowAll('projects')}
                        className={`px-8 py-3 rounded-full border ${theme.borderMedium} ${theme.accent} font-bold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg ${theme.shadowSoft}`}
                    >
                        Show All Projects
                    </button>
                </div>
            )}
        </section>
    );
});

export default ProjectsSection;
