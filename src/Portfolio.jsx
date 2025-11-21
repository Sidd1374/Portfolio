import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Users, 
  Trophy, 
  Cpu, 
  Smartphone, 
  ChevronRight, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  Calendar,
  Award,
  Video,
  Mic,
  PenTool,
  Clapperboard,
  Layers,
  Camera,
  Music,
  Gamepad2,
  Plane,
  Zap,
  Star,
  Instagram,
  Download,
  Coffee,
  Brain,
  Megaphone,
  Lightbulb,
  Globe,
  Monitor
} from 'lucide-react';

const PROFILE_IMAGE = '/siddharth.jpg';
const RESUME_PATH = '/public/siddharth_resume.pdf';

const createTheme = (color, rgb) => ({
  color,
  accent: `text-${color}-400`,
  accentLight: `text-${color}-300`,
  accentBg: `bg-${color}-500/10`,
  accentGlowBg: `bg-${color}-500/30`,
  mutedBg: `bg-${color}-900/10`,
  badgeBg: `bg-${color}-900/20`,
  badgeBgDark: `bg-${color}-900/30`,
  borderSoft: `border-${color}-500/20`,
  borderMedium: `border-${color}-500/30`,
  borderBold: `border-${color}-500/50`,
  borderSolid: `border-${color}-500`,
  gradient: `from-${color}-400 to-${color}-500`,
  gradientDeep: `from-${color}-600 to-${color}-400`,
  gradientText: `from-${color}-400 to-white`,
  gradientOverlay: `from-${color}-500/20`,
  viaLine: `via-${color}-500`,
  bgSolid: `bg-${color}-500`,
  hoverBg: `hover:bg-${color}-500/10`,
  hoverFrom: `hover:from-${color}-500`,
  hoverTo: `hover:to-${color}-400`,
  shadowStrong: `shadow-${color}-500/20`,
  shadowSoft: `shadow-${color}-500/25`,
  accentBright: `text-${color}-500`,
  groupHoverAccent: `group-hover:text-${color}-400`,
  groupHoverBorder: `group-hover:border-${color}-500/50`,
  glowShadow: `0 0 20px rgba(${rgb}, 0.55)`,
  progressShadow: `0 0 10px rgba(${rgb}, 0.8)`,
});

// Theme mapping to avoid dynamic Tailwind class generation issues
const THEME = {
  builder: createTheme('cyan', '6, 182, 212'),
  leader: createTheme('orange', '249, 115, 22'),
  creator: createTheme('purple', '168, 85, 247'),
};

const t = (personaKey) => THEME[personaKey] || THEME.builder;

// --- DATA ---

const PERSONA_SUMMARIES = {
  builder: [
    { label: "Professional Exp", value: "1.5+ Years", icon: <Briefcase size={18} /> },
    { label: "Clients Catered", value: "3+ Clients", icon: <Users size={18} /> },
    { label: "Total Projects", value: "8+ Shipped", icon: <Code size={18} /> },
    { label: "Tech Stack", value: "Flutter/AI", icon: <Cpu size={18} /> }
  ],
  leader: [
    { label: "Leadership Roles", value: "3 Positions", icon: <Award size={18} /> },
    { label: "Events Managed", value: "30+ Events", icon: <Calendar size={18} /> },
    { label: "Team Size", value: "50+ Members", icon: <Users size={18} /> },
    { label: "Impact", value: "University Level", icon: <Globe size={18} /> }
  ],
  creator: [
    { label: "Editing Exp", value: "2+ Years", icon: <Video size={18} /> },
    { label: "Content Pieces", value: "15+ Created", icon: <Clapperboard size={18} /> },
    { label: "Campaigns", value: "5+ Led", icon: <Megaphone size={18} /> },
    { label: "Software", value: "Adobe Suite", icon: <Monitor size={18} /> }
  ]
};

const RPG_STATS = {
  builder: [
    { label: "Logic & Reasoning", value: 95, icon: <Brain size={16} /> },
    { label: "Caffeine Tolerance", value: 100, icon: <Coffee size={16} /> },
    { label: "Bug Fix Speed", value: 85, icon: <Zap size={16} /> },
    { label: "System Architecture", value: 90, icon: <Layers size={16} /> }
  ],
  leader: [
    { label: "Charisma", value: 90, icon: <Star size={16} /> },
    { label: "Crisis Management", value: 95, icon: <Briefcase size={16} /> },
    { label: "Public Speaking", value: 88, icon: <Megaphone size={16} /> },
    { label: "Team Synergy", value: 92, icon: <Users size={16} /> }
  ],
  creator: [
    { label: "Creativity", value: 98, icon: <Lightbulb size={16} /> },
    { label: "Attention to Detail", value: 90, icon: <PenTool size={16} /> },
    { label: "Storytelling", value: 94, icon: <Mic size={16} /> },
    { label: "Visual Aesthetics", value: 88, icon: <Video size={16} /> }
  ]
};

// Updated SKILLS_DATA with expertise levels for the bar charts
const SKILLS_DATA = {
  builder: [
    { 
      category: "Languages", 
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Dart", level: 88 },
        { name: "SQL", level: 75 },
        { name: "C++", level: 70 }
      ] 
    },
    { 
      category: "Frameworks", 
      items: [
        { name: "Flutter", level: 95 },
        { name: "React", level: 80 },
        { name: "Firebase", level: 90 },
        { name: "Node.js", level: 65 }
      ] 
    },
    { 
      category: "Tools", 
      items: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 85 },
        { name: "Postman", level: 80 }
      ] 
    },
    { 
      category: "Core", 
      items: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "OOPs", level: 90 },
        { name: "DBMS", level: 75 }
      ] 
    }
  ],
  leader: [
    { 
      category: "Management", 
      items: [
        { name: "Team Leadership", level: 95 },
        { name: "Conflict Resolution", level: 90 },
        { name: "Event Planning", level: 95 }
        ] 
    },
    { 
      category: "Operations", 
      items: [
        { name: "Process Mapping", level: 85 },
        { name: "Resource Allocation", level: 88 },
        { name: "Logistics", level: 90 }
      ] 
    },
    { 
      category: "Business Tools", 
      items: [
        { name: "MS Excel", level: 85 },
        { name: "PowerPoint", level: 95 },
        { name: "Documentation", level: 90 }
      ] 
    },
    { 
      category: "Communication", 
      items: [
        { name: "Client Relations", level: 85 },
        { name: "Public Speaking", level: 92 },
        { name: "Negotiation", level: 80 }
      ] 
    }
  ],
  creator: [
    { 
      category: "Video Editing", 
      items: [
        { name: "Premiere Pro", level: 90 },
        { name: "After Effects", level: 75 },
        { name: "DaVinci Resolve", level: 60 },
        { name: "CapCut", level: 95 }
      ] 
    },
    { 
      category: "Content", 
      items: [
        { name: "Storyboarding", level: 85 },
        { name: "Scriptwriting", level: 80 },
        { name: "Podcast Production", level: 90 }
      ] 
    },
    { 
      category: "Design", 
      items: [
        { name: "Canva", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Thumbnail Design", level: 85 }
      ] 
    },
    { 
      category: "Strategy", 
      items: [
        { name: "YouTube Analytics", level: 85 },
        { name: "Social Growth", level: 80 },
        { name: "Engagement", level: 85 }
      ] 
    }
  ]
};

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Runner-Up, Cyberthon.ai 2025",
    org: "Chandigarh Police Hackathon",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    desc: "Secured 2nd place solving complex cybersecurity challenges."
  },
  {
    id: 2,
    title: "2nd Runner-Up, Hack with Tricity",
    org: "North Zone Hackathon",
    icon: <Award className="w-8 h-8 text-cyan-400" />,
    desc: "Built an innovative solution for local governance issues."
  },
  {
    id: 3,
    title: "30+ Events Organized",
    org: "University & National Level",
    icon: <Users className="w-8 h-8 text-orange-400" />,
    desc: "Successfully managed logistics and operations for large-scale events."
  }
];

const INTERESTS_DATA = [
  { id: 1, name: "Photography", icon: <Camera size={20} />, desc: "Capturing moments & street photography" },
  { id: 2, name: "Sci-Fi & Tech", icon: <Zap size={20} />, desc: "Following AI trends & futuristic tech" },
  { id: 3, name: "Music Production", icon: <Music size={20} />, desc: "Lo-fi beat making & audio mastering" },
  { id: 4, name: "Gaming", icon: <Gamepad2 size={20} />, desc: "FPS & Strategy games enthusiast" },
  { id: 5, name: "Traveling", icon: <Plane size={20} />, desc: "Exploring new cultures and cuisines" }
];

const EVENTS_HIGHLIGHTS = [
  { id: 1, title: "Tech Fest 2024", role: "Core Organizer", stats: "5000+ Attendees" },
  { id: 2, title: "Microsoft Summit", role: "Event Lead", stats: "30+ Speakers" },
  { id: 3, title: "Campus Hackathon", role: "Logistics Head", stats: "48 Hours Non-stop" },
];

const FULL_DATA = [
  {
    id: 1,
    year: "2026 (Expected)",
    title: "B.E. Computer Science",
    organization: "Chandigarh University",
    description: "Specializing in CSE with a CGPA of 7.17. Building the foundation of my technical career.",
    category: "education",
    personas: ["builder", "leader"], 
    icon: <Code className="w-6 h-6" />,
    details: {
      challenge: "Balancing academics with 30+ events.",
      solution: "Learned ruthless time management.",
      tech: ["Data Structures", "Algorithms", "OS"],
      images: ["University Campus", "Graduation Hat"]
    }
  },
  {
    id: 2,
    year: "Oct 2025 - Present",
    title: "Operations Manager",
    organization: "WictroniX",description: "Managing team operations, ensuring smooth internal workflows and handling client communication.",
    category: "experience",
    personas: ["leader"], 
    icon: <Briefcase className="w-6 h-6" />,
    details: {
      challenge: "Coordinating cross-team efforts for timely delivery.",
      solution: "Implemented new workflow protocols reducing bottlenecks.",
      tech: ["Management", "Client Relations", "Process Mapping"],
      images: ["Team Meeting", "Workflow Diagram"]
    }
  },
  {
    id: 201, 
    year: "2024 - 2025",
    title: "Project Lead (Podcasts)",
    organization: "Insight Universe",
    description: "Directed podcast series production, managing audio/video quality and content strategy.",
    category: "media",
    personas: ["creator", "leader"],
    icon: <Mic className="w-6 h-6" />,
    details: {
      challenge: "Creating engaging long-form content for a university audience.",
      solution: "Revamped editing style and improved audio mastering.",
      tech: ["Audio Editing", "Podcast Production", "Content Strategy"],
      images: ["Studio Setup", "Podcast Thumbnail"]
    }
  },
  {
    id: 202,
    year: "2024",
    title: "Multimedia Director",
    organization: "Connecting All Circles Club",
    description: "Led content creation for events and campaigns. Edited promos, after-movies, and reels.",
    category: "media",
    personas: ["creator"],
    icon: <Clapperboard className="w-6 h-6" />,
    details: {
      challenge: "Delivering high-quality event coverage with tight deadlines.",
      solution: "Streamlined the 'shoot-to-edit' workflow for same-day uploads.",
      tech: ["Premiere Pro", "Videography", "Team Management"],
      images: ["Editing Timeline", "Event Aftermovie"]
    }
  },
  {
    id: 3,
    year: "May 2025 - Aug 2025",
    title: "Flutter Developer",
    organization: "Kampus Konnect",
    description: "Frontend development for a client project, delivering a fully functional mobile application.",
    category: "experience",
    personas: ["builder"],
    icon: <Smartphone className="w-6 h-6" />,
    details: {
      challenge: "Meeting strict client requirements for UI/UX.",
      solution: "Delivered a pixel-perfect Flutter frontend ahead of schedule.",
      tech: ["Flutter", "Dart", "Mobile Dev"],
      images: ["App Mockup", "Code Snippet"]
    }
  },
  {
    id: 4,
    year: "2025",
    title: "Veil - Anonymous Chat App",
    organization: "Personal Project",
    description: "A multi-platform chat app with interest-based matching and multi-level verification.",
    category: "project",
    personas: ["builder"],
    icon: <Cpu className="w-6 h-6" />,
    details: {
      challenge: "Ensuring user privacy and real-time messaging.",
      solution: "Integrated Firebase Cloud Messaging & encryption protocols.",
      tech: ["Flutter", "Firebase", "FCM", "Security"],
      images: ["Chat UI", "Security Diagram"]
    }
  },
  {
    id: 5,
    year: "2025",
    title: "Cyberthon.ai Runner-Up",
    organization: "Chandigarh Police Hackathon",
    description: "Recognized for innovative problem solving in a high-pressure hackathon environment.",
    category: "achievement",
    personas: ["builder", "leader"],
    icon: <Trophy className="w-6 h-6" />,
    details: {
      challenge: "Solving a complex cyber-security problem in 24 hours.",
      solution: "Developed a prototype that impressed the judges.",
      tech: ["Problem Solving", "Rapid Prototyping"],
      images: ["Award Ceremony", "Hackathon Team"]
    }
  },
  {
    id: 6,
    year: "Leadership & Events",
    title: "Secretary & Director",
    organization: "Microsoft Student Chapter & C.A.C. Club",
    description: "Managed 30+ university events. Directed podcast production for Insight Universe.",
    category: "leadership",
    personas: ["leader"],
    icon: <Users className="w-6 h-6" />,
    details: {
      challenge: "Leading diverse teams and managing large-scale events.",
      solution: "Organized 30+ successful events and led content campaigns.",
      tech: ["Leadership", "Event Management", "Content Creation"],
      images: ["Event Crowd", "Podcast Set"]
    }
  },
  {
    id: 7,
    year: "2024",
    title: "Production Line App",
    organization: "Project",
    description: "Streamlined production line operations, improving efficiency by 40%.",
    category: "project",
    personas: ["builder"],
    icon: <Briefcase className="w-6 h-6" />,
    details: {
      challenge: "Manual data entry was slowing down production.",
      solution: "Built a real-time Firestore app for inventory tracking.",
      tech: ["Flutter", "Firestore", "Role-based Auth"],
      images: ["Dashboard UI", "Efficiency Chart"]
    }
  },
  {
    id: 8,
    year: "June 2024 - July 2024",
    title: "ML Intern",
    organization: "CETPA Infotech Pvt. Ltd.",
    description: "Developed social media reach analysis and prediction models using Python.",
    category: "experience",
    personas: ["builder"],
    icon: <Terminal className="w-6 h-6" />,
    details: {
      challenge: "Analyzing unstructured social media data.",
      solution: "Created a predictive model for reach analysis.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      images: ["Data Graph", "Prediction Model"]
    }
  }
];

// --- COMPONENT: Persona Summary Card ---
const PersonaSummary = ({ theme, persona }) => {
  const summaryData = PERSONA_SUMMARIES[persona];

  return (
    <motion.div 
      key={persona}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 w-full max-w-3xl mx-auto"
    >
      <div className={`${theme.mutedBg} border ${theme.borderSoft} rounded-xl p-4 md:p-6 backdrop-blur-sm`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {summaryData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`mb-2 ${theme.accent} ${theme.accentBg} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENT: Skills Modal (Popup) ---
const SkillsModal = ({ isOpen, onClose, category, skills, theme }) => {
  if (!isOpen || !skills) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className={`relative w-full max-w-lg bg-gray-900 border ${theme.borderMedium} rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8`}
            onClick={(e) => e.stopPropagation()}
          >
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className={theme.accent}>//</span> {category}
            </h2>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-300">
                    <span>{skill.name}</span>
                    <span className={theme.accent}>{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                      className={`h-full bg-gradient-to-r ${theme.gradientDeep}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENT: Character Stats (RPG Style) ---
const CharacterStats = ({ theme, persona }) => {
  const stats = RPG_STATS[persona];

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className={`absolute top-0 right-0 w-32 h-32 ${theme.accentBg} blur-3xl rounded-full`} />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className={theme.accent}>
                {persona === 'builder' && <Code size={24} />}
                {persona === 'leader' && <Users size={24} />}
                {persona === 'creator' && <Video size={24} />}
              </span>
              Character Stats
            </h3>
            <p className="text-gray-400 text-sm">Current attributes based on selected persona.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-lg">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span className="text-gray-300 flex items-center gap-2">
                    <span className={theme.accent}>{stat.icon}</span>
                    {stat.label}
                  </span>
                  <span className={theme.accent}>{stat.value}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                    className={`h-full bg-gradient-to-r ${theme.gradientDeep}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// --- COMPONENT: Skills Section (Interactive) ---
const SkillsSection = ({ theme, persona, onSkillClick }) => {
  const skills = SKILLS_DATA[persona];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-2">Technical Arsenal</h2>
        <p className="text-gray-400 text-sm">Click on a category to see expertise</p>
        <div className={`h-1 w-24 mx-auto ${theme.bgSolid} rounded-full mt-2`} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSkillClick(group)}
            className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-gray-900/50 cursor-pointer group"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`${theme.accent} font-bold text-lg group-hover:text-white transition-colors`}>{group.category}</h3>
              <ChevronRight className={`${theme.accentBright} opacity-0 group-hover:opacity-100 transition-opacity`} size={18} />
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENT: Achievements Section ---
const AchievementsSection = ({ theme }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className={`${theme.accent} text-sm font-bold uppercase tracking-wider mb-2 block`}>Hall of Fame</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className={`h-1 w-16 mx-auto ${theme.bgSolid} rounded-full`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 ${theme.accentBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:border-gray-600 transition-all h-full flex flex-col items-center">
                <div className={`p-4 bg-black rounded-full mb-6 shadow-lg border border-gray-800 group-hover:scale-110 ${theme.groupHoverBorder} transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className={`${theme.accent} text-sm font-medium mb-4`}>{item.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Event Highlights & Interests ---
const PostTimelineSection = ({ theme }) => {
  return (
    <div className="bg-black">
      {/* Events Highlight */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Event Highlights</h2>
            <p className="text-gray-400">Leading from the front.</p>
          </div>
          <button className={`px-6 py-2 border ${theme.borderBold} ${theme.accent} rounded-full ${theme.hoverBg} transition-colors text-sm font-medium`}>
            View Gallery
          </button>
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
              {/* Placeholder for Event Image - Using Gradient for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80 group-hover:scale-105 transition-transform duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className={`${theme.accent} text-xs font-bold uppercase tracking-wider mb-1`}>{event.role}</span>
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Beyond the Code</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {INTERESTS_DATA.map((interest, idx) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 ${theme.groupHoverAccent} ${theme.groupHoverBorder} group-hover:-translate-y-2 transition-all duration-300 shadow-lg`}>
                {interest.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- COMPONENT: Modal ---
const Modal = ({ isOpen, onClose, data, theme }) => {
  if (!isOpen || !data) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className={`relative w-full max-w-2xl bg-gray-900 border ${theme.borderMedium} rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${theme.gradientDeep}`} />
            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"><X size={24} /></button>
              <div className="flex items-center gap-3 mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                <span>{data.year}</span><span>•</span><span>{data.organization}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">{data.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                  <h3 className={`${theme.accent} font-semibold mb-2 flex items-center gap-2`}><span className="text-xl">🔥</span> The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{data.details.challenge}</p>
                </div>
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                  <h3 className={`text-green-400 font-semibold mb-2 flex items-center gap-2`}><span className="text-xl">🚀</span> The Solution</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{data.details.solution}</p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Tech Stack & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.details.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${theme.badgeBgDark} ${theme.accentLight} border ${theme.borderMedium}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENT: Timeline Node with Glow Effect ---
const TimelineNode = ({ data, index, theme, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-20 last:mb-0 w-full flex group cursor-pointer"
      onClick={() => onClick(data)}
    >
      {/* The Dot / Node */}
      <div
        className={`absolute left-4 md:left-1/2 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border-2 flex items-center justify-center z-10 md:-translate-x-1/2 transition-all duration-500 ${isInView ? `${theme.borderSolid} scale-110` : 'border-gray-700 scale-100'}`}
        style={isInView ? { boxShadow: theme.glowShadow } : undefined}
      >
        <div className={`transition-colors duration-300 ${isInView ? theme.accent : 'text-gray-600'}`}>
          {data.icon}
        </div>
        {/* Sparkles/Glow behind */}
        {isInView && (
          <div className={`absolute inset-0 -z-10 ${theme.accentGlowBg} blur-xl rounded-full animate-pulse`} />
        )}
      </div>

      {/* Content Card */}
      <div className={`flex w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}>
        <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
          <div 
            className={`p-6 rounded-2xl border transition-all duration-500 ${isInView ? `bg-gray-900/80 ${theme.borderMedium} shadow-[0_0_30px_rgba(0,0,0,0.3)] transform -translate-y-1` : 'bg-gray-900/30 border-gray-800'} hover:bg-gray-800/80`}>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${theme.badgeBg} ${theme.accent} border ${theme.borderSoft}`}>{data.year}</span>
            <h3 className={`text-xl font-bold mb-1 transition-colors ${isInView ? 'text-white' : 'text-gray-300'}`}>{data.title}</h3>
            <p className="text-gray-400 text-sm mb-3 font-medium">{data.organization}</p>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{data.description}</p>
            <div className={`mt-4 flex items-center gap-2 text-xs font-medium ${theme.accent} uppercase tracking-wider ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} opacity-0 group-hover:opacity-100 transition-opacity`}>
              View Details <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN APP COMPONENT ---

export default function Portfolio() {
  const [persona, setPersona] = useState('builder'); // 'builder', 'leader', 'creator'
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Filter Data
  const filteredData = FULL_DATA.filter(item => item.personas.includes(persona));

  const theme = t(persona);
  const accentColorClass = theme.accent;
  const progressShadow = theme.progressShadow;
  
  const getGradient = () => {
    if (persona === 'builder') return 'from-cyan-500/10 via-blue-500/5 to-purple-500/10';
    if (persona === 'leader') return 'from-orange-500/10 via-red-500/5 to-yellow-500/10';
    return 'from-purple-500/10 via-pink-500/5 to-indigo-500/10';
  };
  const bgGradientClass = getGradient();

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Timeline glow animation range (computed from container height)
  const timelineRef = useRef(null);
  const [glowRange, setGlowRange] = useState([-300, 1000]);

  useEffect(() => {
    const measure = () => {
      const h = timelineRef.current?.clientHeight || window.innerHeight || 800;
      // start slightly above and move well past the container for continuous loop
      setGlowRange([-Math.round(h * 0.6), Math.round(h * 1.2)]);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 ${theme.bgSolid} z-50 origin-left`}
        style={{ scaleX: scaleY, boxShadow: progressShadow }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            Siddharth<span className={accentColorClass}>.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/_ig__skull_" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/Sidd1374" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/siddharthsharma1374" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${bgGradientClass} opacity-40 transition-colors duration-500`} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-10">
          {/* Content Side (Text) */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex justify-center md:justify-start"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gray-900/80 border border-gray-700 text-gray-300 backdrop-blur-sm shadow-lg">
                Available for New Opportunities
              </span>
            </motion.div>
            
            <motion.h1 
              key={persona} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight"
            >
              I don't just write code.<br />
              I build <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText} transition-all duration-500`}>journeys.</span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Hi, I'm <span className="text-white font-semibold">Siddharth Sharma</span>. 
              Depending on who you ask, I'm a Flutter Developer, an Operations Manager, or a Creative Director.
            </p>

            {/* Social & Contact Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
            >
              <a href="mailto:sidd13704@gmail.com" className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group">
                <Mail size={16} className="group-hover:text-white" /> Email
              </a>
              <a href="https://linkedin.com/in/siddharthsharma1374" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group">
                <Linkedin size={16} className="group-hover:text-blue-400" /> LinkedIn
              </a>
              <a href="https://github.com/siddharthsharma1374" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group">
                <Github size={16} className="group-hover:text-white" /> GitHub
              </a>
              <a href={RESUME_PATH} className={`px-4 py-2 rounded-lg bg-gray-900/80 border ${theme.borderMedium} ${theme.accent} ${theme.hoverBg} transition-all flex items-center gap-2 text-sm font-medium`}>
                <Download size={16} /> CV
              </a>
            </motion.div>

          </div>

          {/* Image Side - Center on mobile, Right on Desktop */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
              className={`relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 ${theme.borderMedium} overflow-hidden shadow-2xl ${theme.shadowStrong}`}
            >
              <img 
                src="/public/siddharth.jpg"
                alt="Siddharth Sharma" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
               {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradientOverlay} to-transparent pointer-events-none`} />
            </motion.div>
          </div>
        </div>

        {/* Persona Selector - Centered below hero */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-1 rounded-xl relative">
            {['builder', 'leader', 'creator'].map((p) => (
              <button 
                key={p}
                onClick={() => setPersona(p)} 
                className={`relative z-10 px-4 py-2 md:px-5 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${persona === p ? 'text-black' : 'text-gray-400 hover:text-white'}`}
              >
                {p === 'builder' && <Code size={14} />}
                {p === 'leader' && <Users size={14} />}
                {p === 'creator' && <Video size={14} />}
                <span className="hidden sm:inline capitalize">The {p}</span>
              </button>
            ))}
            
            <div className={`absolute top-1 bottom-1 rounded-lg bg-gradient-to-r transition-all duration-300 ease-out w-[calc(33.33%-3px)] ${persona === 'builder' ? 'left-1 from-cyan-400 to-cyan-500' : ''} ${persona === 'leader' ? 'left-[calc(33.33%+2px)] from-orange-400 to-orange-500' : ''} ${persona === 'creator' ? 'left-[calc(66.66%+3px)] from-purple-400 to-pink-500' : ''}`} />
          </div>
        </div>
        
        {/* Persona Summary Card - Full Width Below Grid */}
        <PersonaSummary theme={theme} persona={persona} />

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-gray-500 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        </motion.div>
      </header>

      {/* Character Stats Section */}
      <CharacterStats theme={theme} persona={persona} />

      {/* Skills Section - Above Timeline */}
      <SkillsSection theme={theme} persona={persona} onSkillClick={(category) => setSelectedSkillCategory(category)} />

      {/* Timeline Section */}
      <section className="relative py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
          <p className="text-gray-400">My timeline as a {persona === 'builder' ? 'Developer' : persona === 'leader' ? 'Manager' : 'Creator'}.</p>
        </div>

        <div className="relative">
          {/* Circuit Board Glow Line */}
          <div ref={timelineRef} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className={`absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent ${theme.viaLine} to-transparent opacity-70`}
              animate={{ y: glowRange }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
             {/* Sparkles */}
            <motion.div 
              className={`absolute top-1/4 left-0 right-0 h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]`}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
             <motion.div 
              className={`absolute top-3/4 left-0 right-0 h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]`}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            />
          </div>
          {filteredData.map((item, index) => (
            <TimelineNode
              key={item.id}
              data={item}
              index={index}
              theme={theme}
              onClick={setSelectedNode}
            />
          ))}
        </div>
      </section>

      {/* Achievements & Extras Section */}
      <AchievementsSection theme={theme} />
      
      <PostTimelineSection theme={theme} />

      {/* Contact Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className={`w-16 h-16 mx-auto ${theme.accentBg} rounded-full flex items-center justify-center ${theme.accent} mb-6`}>
             <Mail size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4">Ready for the next chapter?</h3>
           <p className="text-gray-400 mb-8">
            I am currently looking for full-time opportunities and challenging projects.
          </p>
          <a href="mailto:sidd13704@gmail.com" className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${theme.gradientDeep} ${theme.hoverFrom} ${theme.hoverTo} rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${theme.shadowSoft}`}>
            Start a Conversation <ChevronRight size={20} />
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900 bg-black">
        <p>© 2025 Siddharth Sharma. Crafted with React & Framer Motion.</p>
      </footer>

      {/* Modals */}
      <Modal isOpen={!!selectedNode} onClose={() => setSelectedNode(null)} data={selectedNode} theme={theme} />
      
      <SkillsModal 
          isOpen={selectedSkillCategory !== null} 
        onClose={() => setSelectedSkillCategory(null)} 
        category={selectedSkillCategory?.category}
        skills={selectedSkillCategory?.items}
        theme={theme} 
      />
    </div>
  );
}