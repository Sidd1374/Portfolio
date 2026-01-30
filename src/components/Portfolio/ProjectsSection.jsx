import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { getTheme } from '../../utils/theme';

const ProjectsSection = memo(({ theme, persona, onShowAll }) => {
    const filteredProjects = PROJECTS_DATA.filter(p => !persona || p.personas.includes(persona));
    const displayProjects = filteredProjects.slice(0, 3);
    const hasMore = filteredProjects.length > 3;

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
                            className={`group relative bg-gray-900 border ${itemTheme.borderMedium} rounded-2xl overflow-hidden hover:${itemTheme.borderBold} transition-all duration-300 shadow-lg ${itemTheme.shadowSoft}`}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.image}`}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded ${itemTheme.badgeBg} ${itemTheme.accent} border ${itemTheme.borderSoft}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-2 text-sm font-bold ${itemTheme.accent} hover:underline`}
                                >
                                    View Project <ExternalLink size={14} />
                                </a>
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
