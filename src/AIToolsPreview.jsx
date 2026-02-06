import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain,
    Sparkles,
    Code2,
    Image,
    MessageSquare,
    Wand2,
    ChevronLeft,
    ExternalLink,
    Zap,
    Bot
} from 'lucide-react';

// AI Tools Data
const AI_TOOLS_DATA = [
    {
        id: 1,
        name: "ChatGPT",
        category: "Chat AI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        color: "#10A37F",
        proficiency: 95,
        description: "Advanced conversational AI for brainstorming, writing, and problem-solving",
        usage: "Daily driver for research, code explanations, and content drafting"
    },
    {
        id: 2,
        name: "Claude AI",
        category: "Chat AI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
        color: "#CC785C",
        proficiency: 90,
        description: "Anthropic's AI assistant known for nuanced, thoughtful responses",
        usage: "Complex reasoning tasks and long-form content creation"
    },
    {
        id: 3,
        name: "GitHub Copilot",
        category: "Coding",
        icon: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
        color: "#000000",
        proficiency: 92,
        description: "AI pair programmer that suggests code in real-time",
        usage: "Accelerating development with intelligent code completions"
    },
    {
        id: 4,
        name: "Gemini",
        category: "Chat AI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
        color: "#4285F4",
        proficiency: 85,
        description: "Google's multimodal AI for text, code, and image understanding",
        usage: "Research, multimodal queries, and Google ecosystem integration"
    },
    {
        id: 5,
        name: "Cursor",
        category: "Coding",
        icon: "https://cursor.sh/brand/icon.svg",
        color: "#7C3AED",
        proficiency: 88,
        description: "AI-first code editor built for pair programming with AI",
        usage: "AI-powered code editing, refactoring, and project understanding"
    },
    {
        id: 6,
        name: "V0 by Vercel",
        category: "Design",
        icon: "https://v0.dev/icon-rounded.png",
        color: "#000000",
        proficiency: 80,
        description: "Generative UI tool that creates React components from prompts",
        usage: "Rapid UI prototyping and component generation"
    },
    {
        id: 7,
        name: "Midjourney",
        category: "Image Gen",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
        color: "#FF6B6B",
        proficiency: 75,
        description: "AI art generator known for stunning, artistic imagery",
        usage: "Creating concept art, thumbnails, and visual inspiration"
    },
    {
        id: 8,
        name: "DALL·E",
        category: "Image Gen",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        color: "#10A37F",
        proficiency: 78,
        description: "OpenAI's image generation model for creating visuals from text",
        usage: "Generating custom graphics and visual content"
    },
    {
        id: 9,
        name: "Perplexity AI",
        category: "Research",
        icon: "https://assets.website-files.com/6606b0fb1eba97c07dcb4ceb/66160b7ecc741a7e1f5db0a5_pplx-default-favicon.png",
        color: "#20B8CD",
        proficiency: 82,
        description: "AI-powered search engine with cited, real-time answers",
        usage: "Quick research with verified sources and citations"
    }
];

const CATEGORIES = ["All", "Chat AI", "Coding", "Image Gen", "Design", "Research"];

// Theme (using builder theme by default)
const theme = {
    accent: 'text-cyan-400',
    accentBright: 'text-cyan-500',
    bgSolid: 'bg-cyan-500',
    borderMedium: 'border-cyan-500/30',
    gradientDeep: 'from-cyan-600 to-cyan-400',
    shadowSoft: 'shadow-cyan-500/25',
    rgb: '6, 182, 212',
};

// Proficiency Ring Component
const ProficiencyRing = ({ value, color, size = 60 }) => {
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        strokeDasharray: circumference,
                        filter: `drop-shadow(0 0 6px ${color})`
                    }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{value}%</span>
            </div>
        </div>
    );
};

// AI Tool Card Component
const AIToolCard = ({ tool, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative w-full h-[280px] cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    rotateX: isHovered && !isFlipped ? -5 : 0,
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div
                    className="absolute inset-0 rounded-2xl p-6 border border-white/10 backdrop-blur-xl overflow-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                        boxShadow: isHovered
                            ? `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${tool.color}33`
                            : `0 10px 30px rgba(0,0,0,0.3)`
                    }}
                >
                    {/* Glow Effect */}
                    <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                        style={{ backgroundColor: tool.color }}
                        animate={{ opacity: isHovered ? 0.3 : 0.1 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Category Badge */}
                    <div className="flex justify-between items-start mb-4">
                        <span
                            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                            style={{
                                backgroundColor: `${tool.color}20`,
                                color: tool.color
                            }}
                        >
                            {tool.category}
                        </span>
                        <ProficiencyRing value={tool.proficiency} color={tool.color} />
                    </div>

                    {/* Icon */}
                    <div className="flex items-center gap-4 mb-4">
                        <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center p-2"
                            style={{ backgroundColor: `${tool.color}15` }}
                        >
                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-10 h-10 object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2306b6d4"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>';
                                }}
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {tool.description}
                    </p>

                    {/* Flip Indicator */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-gray-500">
                        <span>Click to flip</span>
                        <motion.div
                            animate={{ rotateY: [0, 180, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles size={12} />
                        </motion.div>
                    </div>
                </div>

                {/* Back of Card */}
                <div
                    className="absolute inset-0 rounded-2xl p-6 border border-white/10 backdrop-blur-xl overflow-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                        boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${tool.color}22`
                    }}
                >
                    <div className="h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: tool.color }}
                            >
                                <Wand2 size={20} className="text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white">How I Use It</h4>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                            {tool.usage}
                        </p>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-xs">Proficiency Level</span>
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-2 w-24 rounded-full bg-white/10 overflow-hidden"
                                    >
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: tool.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${tool.proficiency}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                    <span className="text-white font-bold text-sm">{tool.proficiency}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Preview Page Component
export default function AIToolsPreview() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const filteredTools = activeCategory === "All"
        ? AI_TOOLS_DATA
        : AI_TOOLS_DATA.filter(tool => tool.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/20 overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ChevronLeft size={20} />
                        <span className="text-sm font-medium">Back to Portfolio</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <Bot size={20} className="text-cyan-400" />
                        <span className="text-sm font-bold text-white">AI Tools Preview</span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 pt-24 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Brain className="text-cyan-400" size={18} />
                            <span className="text-cyan-400 text-sm font-medium">AI-Powered Workflow</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Tools That{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                                Amplify
                            </span>{" "}
                            My Work
                        </h1>

                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            I leverage the latest AI tools to enhance productivity, accelerate development,
                            and bring creative ideas to life faster than ever.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {CATEGORIES.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                onMouseEnter={() => setHoveredCategory(category)}
                                onMouseLeave={() => setHoveredCategory(null)}
                                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === category
                                    ? 'text-black'
                                    : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500"
                                        style={{ zIndex: -1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative flex items-center gap-2">
                                    {category === "All" && <Zap size={14} />}
                                    {category === "Chat AI" && <MessageSquare size={14} />}
                                    {category === "Coding" && <Code2 size={14} />}
                                    {category === "Image Gen" && <Image size={14} />}
                                    {category === "Design" && <Wand2 size={14} />}
                                    {category === "Research" && <Brain size={14} />}
                                    {category}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Tools Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredTools.map((tool, index) => (
                                <AIToolCard key={tool.id} tool={tool} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Stats Section */}
                    <motion.div
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {[
                            { label: "AI Tools Mastered", value: "9+", icon: <Bot size={24} /> },
                            { label: "Daily AI Usage", value: "8hrs", icon: <Zap size={24} /> },
                            { label: "Productivity Boost", value: "3x", icon: <Sparkles size={24} /> },
                            { label: "AI Experience", value: "2+ yrs", icon: <Brain size={24} /> }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.3)' }}
                            >
                                <div className="text-cyan-400 mb-3 flex justify-center">{stat.icon}</div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>

            {/* Footer Note */}
            <footer className="relative z-10 text-center py-8 border-t border-white/5">
                <p className="text-gray-600 text-sm">
                    Preview Page • Click cards to flip •
                    <span className="text-cyan-400 ml-1">Ready to merge when approved</span>
                </p>
            </footer>
        </div>
    );
}
