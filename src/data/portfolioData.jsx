import React from 'react';
import {
    Code,
    Briefcase,
    Users,
    Trophy,
    Cpu,
    Smartphone,
    Calendar,
    Globe,
    Video,
    Clapperboard,
    Megaphone,
    Monitor,
    Brain,
    Coffee,
    Zap,
    Layers,
    Star,
    Lightbulb,
    PenTool,
    Mic,
    Camera,
    Music,
    Gamepad2,
    Plane,
    Terminal,
    Award
} from 'lucide-react';


export const PROFILE_IMAGE = `${import.meta.env.BASE_URL}media/siddharth.webp`;
export const RESUME_PATH = `${import.meta.env.BASE_URL}media/Siddharth_Sharma_Resume.pdf`;

export const PERSONA_SUMMARIES = {
    builder: [
        { label: "Professional Exp", value: "6 Months", icon: <Briefcase size={18} /> },
        { label: "Clients Catered", value: "3+ Clients", icon: <Users size={18} /> },
        { label: "Total Projects", value: "5+ Shipped", icon: <Code size={18} /> },
        { label: "Tech Stack", value: "Flutter/AI", icon: <Cpu size={18} /> }
    ],
    leader: [
        { label: "Leadership Roles", value: "3 Positions", icon: <Award size={18} /> },
        { label: "Events Managed", value: "50+ Events", icon: <Calendar size={18} /> },
        { label: "Team Size", value: "40+ Members", icon: <Users size={18} /> },
        { label: "Impact", value: "University Level", icon: <Globe size={18} /> }
    ],
    creator: [
        { label: "Editing Exp", value: "4+ Years", icon: <Video size={18} /> },
        { label: "Content Pieces", value: "20+ Created", icon: <Clapperboard size={18} /> },
        { label: "Campaigns", value: "5+ Led", icon: <Megaphone size={18} /> },
        { label: "Software", value: "Adobe Suite", icon: <Monitor size={18} /> }
    ]
};

export const RPG_STATS = {
    builder: [
        { label: "Logic & Reasoning", value: 95, icon: <Brain size={16} /> },
        { label: "Caffeine Tolerance", value: 100, icon: <Coffee size={16} /> },
        { label: "Bug Fix Speed", value: 90, icon: <Zap size={16} /> },
        { label: "Database", value: 90, icon: <Layers size={16} /> }
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

export const SKILLS_DATA = {
    builder: [
        {
            category: "Languages",
            items: [
                { name: "Python", level: 90 },
                { name: "Java", level: 85 },
                { name: "Dart", level: 90 },
                { name: "SQL", level: 90 },
                { name: "C++", level: 70 }
            ]
        },
        {
            category: "Frameworks",
            items: [
                { name: "Flutter", level: 90 },
                { name: "Firebase", level: 90 }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Git/GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "Android Studio", level: 85 }
            ]
        },
        {
            category: "Core",
            items: [
                { name: "Data Structures", level: 85 },
                { name: "Algorithms", level: 80 },
                { name: "OOPs", level: 90 },
                { name: "DBMS", level: 95 },
                { name: "Data Analytics", level: 80 }
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
                { name: "Digital Marketing", level: 85 },
                { name: "Add Campaigns(Meta/Google)", level: 80 },
                { name: "Engagement", level: 85 }
            ]
        }
    ]
};

export const ACHIEVEMENTS_DATA = [
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

export const PROJECTS_DATA = [
    {
        id: 1,
        order: 1,
        title: "Veil Chat",
        description: "An anonymous messaging application focusing on privacy and real-time interaction.",
        images: [
            "media/projects/VeilChat/chat.webp",
            "media/projects/VeilChat/chat2.webp",
            "media/projects/VeilChat/chat3.webp",
            "media/projects/VeilChat/chat4.webp",
            "media/projects/VeilChat/chat5.webp"
        ],
        logo: "media/projects/VeilChat/logo-veil.webp",
        tech: ["Flutter", "Firebase", "Firestore", "Cloudinary", "Cloud Functions"],
        link: "https://github.com/Sidd1374/Anonymous_Chat_Application",
        details: {
            challenge: "Maintaining anonymity while ensuring real-time performance and preventing spam.",
            solution: "Serverless architecture using Firebase & Cloud Functions for metadata-stripped routing.",
            features: [
                "Real-time Anonymous Chat",
                "Metadata-Stripped Content",
                "Dynamic ID Generation",
                "Cloudinary Media Integration",
                "Increased Speed by 35%"
            ]
        },
        personas: ["builder"]
    },
    {
        id: 2,
        order: 2,
        title: "CPMS - Comprehensive Production Management System Application",
        description: "Consolidates essential daily tools into one centralized, user-friendly platform.",
        images: [
            "media/projects/CPMS/careutility1.webp",
            "media/projects/CPMS/careutility2.webp",
            "media/projects/CPMS/careutility3.webp",
            "media/projects/CPMS/careutility4.webp",
            "media/projects/CPMS/careutility5.webp"
        ],
        logo: "media/projects/CPMS/github_logo.svg",
        tech: ["Flutter", "Firebase"],
        link: "https://github.com/Sidd1374/care_utility",
        details: {
            challenge: "Inefficient production line operations due to manual data entry.",
            solution: "Developed a real-time Firestore-backed app for unified inventory tracking.",
            features: [
                "Centralized Utility Services",
                "Minimalist Material UI",
                "Firebase Real-time Sync",
                "Cross-platform Stability",
                "Boosted efficiency by 40%"
            ]
        },
        personas: ["builder"]
    },
    {
        id: 3,
        order: 3,
        title: "Lottery Application",
        description: "Android-based app that presents lottery information and results digitally.",
        images: [
            "media/projects/LotteryApp/lottery1.webp",
            "media/projects/LotteryApp/lottery2.webp"
        ],
        logo: "media/projects/LotteryApp/logo_kl.webp",
        tech: ["Java", "XML", "Firebase"],
        link: "https://github.com/Sidd1374/Kerela_lottery_app/",
        details: {
            challenge: "Providing fast, accurate lottery data on diverse, low-resource hardware.",
            solution: "Lightweight Android application with optimized Firebase real-time data delivery.",
            features: [
                "Centralized Data Display",
                "Real-time Data Delivery",
                "Optimized for Low-end Hardware",
                "Offline-capable Caching",
                "Reduced load times by 45%"
            ]
        },
        personas: ["builder"]
    },
    {
        id: 4,
        order: 4,
        title: "Insight Universe Podcast",
        description: "Content-driven initiative delivering knowledge and discussions through pro audio/video.",
        images: [
            "media/projects/Podcast/PD_ep_3_1.webp",
            "media/projects/Podcast/PD_ep_1_1.webp",
            "media/projects/Podcast/PD_ep_2_1.webp",
            "media/projects/Podcast/PD_ep_4_1.webp",
            "media/projects/Podcast/PD_ep_5_1.webp"
        ],
        tech: ["Adobe Premiere Pro", "Camera", "Color Grading", "Audio Design"],
        link: "https://www.youtube.com/@insightuniverse.official/",
        personas: ["leader", "creator"]
    }
];

// Priority sorting for each persona
export const PROJECT_SORTING = {
    builder: [2, 1, 3],
    leader: [4],
    creator: [4]
};

export const CERTIFICATE_SORTING = {
    builder: [10, 5, 4, 6, 7, 2, 8, 3],
    leader: [12, 3, 11, 13],
    creator: [12, 9, 1]
};

export const CERTIFICATES_DATA = [
    {
        id: 1,
        order: 1,
        title: "Letter of Appointment – Multimedia Executive",
        issuer: "Chandigarh University (Connecting All Circles Club)",
        explanation: "Handling visual content, media assets, and creative support for club activities and events.",
        image: "media/certificates/CAC_Internship_Certificate.webp",
        date: "Jun 24",
        link: "#",
        personas: ["leader", "creator"]
    },
    {
        id: 2,
        order: 2,
        title: "Internship Completion Certificate – Machine Learning",
        issuer: "CETPA Infotech Pvt. Ltd.",
        explanation: "Successfully completed a 6-week internship focused on Machine Learning implementation.",
        image: "media/certificates/Cetpa_Internship_Certificate.webp",
        date: "Aug 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 3,
        order: 3,
        title: "Project Completion – Social Media Reach Analysis",
        issuer: "CETPA Infotech Pvt. Ltd.",
        explanation: "Machine learning project involving data analysis and prediction of social media reach.",
        image: "media/certificates/CETPA_Project_certicficate.webp",
        date: "Sep 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 4,
        order: 4,
        title: "Six Weeks Training – Machine Learning",
        issuer: "CETPA Infotech Pvt. Ltd.",
        explanation: "Completed structured training covering machine learning fundamentals and algorithms.",
        image: "media/certificates/Cetpa_traning_cert.webp",
        date: "Jul 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 5,
        order: 5,
        title: "Cloud Computing",
        issuer: "NPTEL (IIT Kharagpur)",
        explanation: "Completed a 12-week course covering cloud architecture and service models.",
        image: "media/certificates/Cloud Computing.webp",
        date: "Dec 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 6,
        order: 6,
        title: "Foundation of Cloud IoT Edge ML",
        issuer: "NPTEL (IIT Kanpur)",
        explanation: "Advanced course focusing on cloud computing, IoT systems, and edge-based ML.",
        image: "media/certificates/Foundation of Cloud IoT Edge ML.webp",
        date: "Nov 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 7,
        order: 7,
        title: "Internet of Things – Design Concepts",
        issuer: "SWAYAM (NITTTR Chandigarh)",
        explanation: "Covering IoT architecture, real-world use cases, and system design principles.",
        image: "media/certificates/Internet of Things.webp",
        date: "Jan 25",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 8,
        order: 8,
        title: "Internship Completion – Flutter Developer",
        issuer: "Wictronix Infotech Pvt. Ltd.",
        explanation: "Professional internship as a Flutter Developer Intern, contributing to application development.",
        image: "media/certificates/Siddharth Sharma Completion letter.webp",
        date: "Oct 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 9,
        order: 9,
        title: "Internship Certificate – Video Editing Intern",
        issuer: "Chandigarh University (VLR Studio)",
        explanation: "Handling video editing tasks with professionalism and creative expertise.",
        image: "media/certificates/VLRI_Internship_Certificate.webp",
        date: "Aug 24",
        link: "#",
        personas: ["creator"]
    },
    {
        id: 10,
        order: 10,
        title: "Certificate of Internship – Flutter Developer",
        issuer: "Wictronix Infotech Pvt. Ltd.",
        explanation: "Demonstrating commitment, technical skills, and consistent performance in Flutter development.",
        image: "media/certificates/WX_Certificate.webp",
        date: "Oct 24",
        link: "#",
        personas: ["builder"]
    },
    {
        id: 11,
        order: 11,
        title: "Certificate of Recognition – All India 5th Cyberthon.AI 2025",
        issuer: "Chandigarh Police (in collaboration with Infosys & HDFC Bank)",
        explanation: "Recognized for active participation in the All India 5th Cyberthon.AI 2025, contributing to awareness and engagement in cybersecurity and AI-driven problem-solving.",
        image: "media/certificates/cyberthon_participation.webp",
        date: "2025",
        link: "#",
        personas: ["builder", "leader"]
    },
    {
        id: 12,
        order: 12,
        title: "Letter of Appreciation – Director Multimedia",
        issuer: "Chandigarh University (Central Event Management, Academic Affairs)",
        explanation: "Awarded in recognition of dedication, leadership, and impactful contributions as Director Multimedia, enhancing outreach, visibility, and execution of university events.",
        image: "media/certificates/LOR_CAC.webp",
        date: "2025",
        link: "#",
        personas: ["leader", "creator"]
    },
    {
        id: 13,
        order: 13,
        title: "Certificate of Appointment – Secretary",
        issuer: "Chandigarh University (Microsoft Student Chapter)",
        explanation: "Appointed as Secretary for the Microsoft Student Chapter, contributing to technical community building, coordination, and student-led initiatives.",
        image: "media/certificates/Microsoft student chapter sectarety.webp",
        date: "2024–25",
        link: "#",
        personas: ["leader"]
    }
];

export const INTERESTS_DATA = [
    { id: 1, name: "Photography", icon: <Camera size={20} />, desc: "Capturing moments & street photography" },
    { id: 2, name: "Sci-Fi & Tech", icon: <Zap size={20} />, desc: "Following AI trends & futuristic tech" },
    { id: 3, name: "Music Production", icon: <Music size={20} />, desc: "Lo-fi beat making & audio mastering" },
    { id: 4, name: "Gaming", icon: <Gamepad2 size={20} />, desc: "FPS & Strategy games enthusiast" },
    { id: 5, name: "Traveling", icon: <Plane size={20} />, desc: "Exploring new cultures and cuisines" }
];

export const EVENTS_HIGHLIGHTS = [
    { id: 1, title: "Tech Fest 2024", role: "Core Organizer", stats: "5000+ Attendees", image: "media/Events/EV_CAC_1_1.webp" },
    { id: 2, title: "Microsoft Student Chapter", role: "Event Lead", stats: "30+ Speakers", image: "media/Events/EV_KC_1.webp" },
    { id: 3, title: "Campus Hackathon", role: "Logistics Head", stats: "48 Hours Non-stop", image: "media/Events/HWT_3.webp" },
];

export const FULL_DATA = [
    {
        id: 1,
        year: "June 2026 (Expected)",
        title: "B.E. Computer Science",
        organization: "Chandigarh University",
        description: "Specializing in CSE with a CGPA of 7.24. Building the foundation of my technical career.",
        category: "education",
        personas: ["builder", "leader"],
        icon: <Code className="w-6 h-6" />,
        details: {
            challenge: "Balancing academics with 30+ events.",
            solution: "Learned ruthless time management.",
            tech: ["Data Structures", "Algorithms", "OS"],
        }
    },
    {
        id: 2,
        year: "Oct 2025 - Present",
        title: "Operations Manager",
        organization: "WictroniX",
        description: "Managing team operations, ensuring smooth internal workflows and handling client communication.",
        category: "experience",
        personas: ["leader"],
        icon: <Briefcase className="w-6 h-6" />,
        status: "paid",
        details: {
            challenge: "Coordinating cross-team efforts for timely delivery.",
            solution: "Implemented new workflow protocols reducing bottlenecks.",
            tech: ["Management", "Client Relations", "Process Mapping"],
        }
    },
    {
        id: 201,
        year: "Sep 2024 - March 2025",
        title: "Project Lead (Podcasts)",
        organization: "Insight Universe",
        description: "Directed podcast series production, managing audio/video quality and content strategy.",
        category: "media",
        personas: ["creator", "leader"],
        icon: <Mic className="w-6 h-6" />,
        youtubeLink: "https://www.youtube.com/@insightuniverse.official/",
        details: {
            challenge: "Creating engaging long-form content for a university audience.",
            solution: "Revamped editing style and improved audio mastering.",
            tech: ["Audio Editing", "Podcast Production", "Content Strategy"],
            images: ["media/projects/InsightUniverse/kk3.webp"]
        }
    },
    {
        id: 3,
        year: "May 2025 - Aug 2025",
        title: "Flutter Developer",
        organization: "Kampus Konnect",
        description: "Frontend development for a client project — implemented pixel-perfect Flutter UI, collaborated with designers and delivered a production-ready mobile app within sprint deadlines.",
        category: "experience",
        personas: ["builder"],
        icon: <Smartphone className="w-6 h-6" />,
        status: "paid",
        details: {
            challenge: "Delivering a pixel-perfect UI matching detailed client specifications within a tight timeline and frequent change requests.",
            solution: "Built reusable widget libraries, set up rapid feedback demos with the client, and iterated quickly to meet UI/UX expectations ahead of schedule.",
            tech: ["Flutter", "Dart", "Mobile Dev"],
        }
    },
    {
        id: 4,
        year: "March 2025 - Present",
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
            images: [
                "media/projects/VeilChat/chat.webp",
                "media/projects/VeilChat/chat2.webp",
                "media/projects/VeilChat/chat3.webp",
                "media/projects/VeilChat/chat4.webp",
                "media/projects/VeilChat/chat5.webp",
                "media/projects/VeilChat/chat6.webp",
                "media/projects/VeilChat/chat7.webp"
            ]
        }
    },
    {
        id: 5,
        year: "June 2025",
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
            images: [
                "media/Events/CY_25_1.webp",
                "media/Events/CY_25_2.webp",
                "media/Events/CY_25_3.webp",
                "media/Events/CY_25_4.webp"
            ]
        }
    },
    {
        id: 9,
        year: "April 2025",
        title: "2nd Runner-Up, Hack with Tricity",
        organization: "North Zone Hackathon",
        description: "Built an innovative solution for local governance challenges and secured 2nd Runner-Up.",
        category: "achievement",
        personas: ["builder", "leader"],
        icon: <Award className="w-6 h-6" />,
        details: {
            challenge: "Design a scalable, modular prototype under tight time constraints.",
            solution: "Focused on an MVP that demonstrated core functionality and impact.",
            tech: ["Flutter", "Firebase", "Rapid Prototyping"],
            images: [
                "media/Events/HWT_1.webp",
                "media/Events/HWT_2.webp",
                "media/Events/HWT_3.webp",
                "media/Events/HWT_4.webp"
            ]
        }
    },
    {
        id: 7,
        year: "Feb 2024 - June 2024",
        title: "Care Utility (Production Line App)",
        organization: "Project",
        description: "Streamlined production line operations, improving efficiency by 40%.",
        category: "project",
        personas: ["builder"],
        icon: <Briefcase className="w-6 h-6" />,
        status: "paid",
        details: {
            challenge: "Manual data entry was slowing down production.",
            solution: "Built a real-time Firestore app for inventory tracking.",
            tech: ["Flutter", "Firestore", "Role-based Auth"],
            images: [
                "media/projects/CPMS/careutility1.webp",
                "media/projects/CPMS/careutility2.webp",
                "media/projects/CPMS/careutility3.webp",
                "media/projects/CPMS/careutility4.webp",
                "media/projects/CPMS/careutility5.webp"
            ]
        }
    },
    {
        id: 302,
        year: "Feb 2025 - Jun 2025",
        title: "Secretary",
        organization: "Microsoft Student Chapter, Chandigarh University",
        description: "Served as Secretary, coordinating chapter operations, communication, and event logistics across teams.",
        category: "leadership",
        personas: ["leader"],
        icon: <Users className="w-6 h-6" />,
        details: {
            challenge: "Coordinating schedules and communications across multiple sub-teams during a busy semester.",
            solution: "Introduced structured documentation, weekly syncs, and a shared calendar which reduced conflicts and improved on-time deliveries.",
            tech: ["Event Coordination", "Slack", "Google Workspace"],
            images: ["media/certificates/kk2.webp", "media/Events/kk1.webp"]
        }
    },
    {
        id: 303,
        year: "Jan 2025 - Jun 2025",
        title: "Multimedia Director",
        organization: "Connecting All Circles (C.A.C.)",
        description: "Promoted to Director - Multimedia to oversee the club's entire media strategy, production pipelines and mentor the media team.",
        category: "media",
        personas: ["creator", "leader"],
        icon: <Clapperboard className="w-6 h-6" />,
        details: {
            challenge: "Scaling production to cover 20+ events while maintaining consistent quality.",
            solution: "Defined a shoot-to-edit pipeline, created templates for faster edits, and ran mentorship sessions for junior members.",
            tech: ["Premiere Pro", "After Effects", "Team Management"],
        }
    },
    {
        id: 306,
        year: "Nov 2024 - May 2025",
        title: "Video Editor (Client Projects)",
        organization: "WictroniX",
        description: "Handled multiple client projects, producing tailored video content and managing client communication end-to-end.",
        category: "experience",
        personas: ["creator"],
        icon: <Briefcase className="w-6 h-6" />,
        status: "paid",
        details: {
            challenge: "Balancing client expectations across several concurrent projects.",
            solution: "Maintained clear client feedback cycles, used versioned deliverables, and standardized export presets.",
            tech: ["Premiere Pro", "Client Relations", "Project Management"],
        }
    },
    {
        id: 304,
        year: "Aug 2024 - Dec 2024",
        title: "Multimedia Executive",
        organization: "Connecting All Circles (C.A.C.)",
        description: "Managed media production and event promotion material across university and regional events.",
        category: "media",
        personas: ["creator"],
        icon: <Video className="w-6 h-6" />,
        details: {
            challenge: "Delivering high-quality promotional content under tight deadlines.",
            solution: "Prioritized key deliverables, reused templates, and organized small edit pods to speed up delivery.",
            tech: ["Premiere Pro", "DaVinci Resolve", "Content Strategy"],
        }
    },
    {
        id: 305,
        year: "Jul 2024 - Aug 2024",
        title: "Video Editor",
        organization: "Connecting All Circles (C.A.C.)",
        description: "Primary video editor responsible for event highlights, promos and timely deliverables during peak event periods.",
        category: "media",
        personas: ["creator"],
        icon: <Video className="w-6 h-6" />,
        details: {
            challenge: "Quick turnarounds with limited crew and tight event schedules.",
            solution: "Created modular sequences and presets to speed up edits and approvals.",
            tech: ["Premiere Pro", "After Effects"],
        }
    },
    {
        id: 307,
        year: "Sep 2024 - Dec 2024",
        title: "Multimedia Director",
        organization: "E-Cell, Chandigarh University",
        description: "Led the multimedia team to produce promotional assets and video content for entrepreneurship events.",
        category: "media",
        personas: ["creator"],
        icon: <Monitor className="w-6 h-6" />,
        details: {
            challenge: "Creating high-impact promotional content aligned with event messaging.",
            solution: "Collaborated closely with event leads, designed content calendars and optimized promotional pipelines.",
            tech: ["Figma", "Premiere Pro", "Campaign Planning"],
        }
    },
    {
        id: 308,
        year: "Jun 2024 - Jul 2024",
        title: "Video Editor Intern",
        organization: "Academics Affairs@CU",
        description: "Supported the Video Lecture Recording (VLR) studio by editing lectures and departmental videos to quality standards.",
        category: "experience",
        personas: ["creator"],
        icon: <Video className="w-6 h-6" />,
        status: "paid",
        details: {
            challenge: "Editing lecture recordings quickly while ensuring clarity and departmental compliance.",
            solution: "Implemented standardized templates and a review checklist which reduced rework.",
            tech: ["Premiere Pro", "Audio Editing"],
        }
    },
    {
        id: 309,
        year: "May 2024 - Jun 2024",
        title: "Summer Training - Machine Learning",
        organization: "CETPA Infotech Pvt. Ltd.",
        description: "Completed a focused summer training on machine learning, building a social media reach prediction model.",
        category: "training",
        personas: ["builder"],
        icon: <Terminal className="w-6 h-6" />,
        details: {
            challenge: "Working with noisy social media datasets and extracting features for prediction.",
            solution: "Applied preprocessing pipelines, feature engineering and model validation to improve accuracy.",
            tech: ["Python", "scikit-learn", "Pandas"],
            images: ["media/certificates/siddhathml.webp"]
        }
    },
    {
        id: 310,
        year: "Jan 2025 - Jun 2025",
        title: "Multimedia Executive",
        organization: "Connecting All Circles (C.A.C.)",
        description: "Operated as Multimedia Executive, coordinating production teams and ensuring consistent, on-time delivery of media across university and regional events.",
        category: "leadership",
        personas: ["leader"],
        icon: <Users className="w-6 h-6" />,
        details: {
            challenge: "Aligning schedules across camera crews, editors and event leads while keeping high production quality under tight deadlines.",
            solution: "Introduced a central production calendar, delegated shift leads, standardized export presets and QA checklists which reduced turnaround time and improved consistency.",
            tech: ["Project Management", "Premiere Pro", "DaVinci Resolve", "Team Coordination"],
        }
    },
    {
        id: 311,
        year: "Sep 2024 - Dec 2024",
        title: "Multimedia Director",
        organization: "E-Cell, Chandigarh University",
        description: "Led the multimedia team to produce promotional assets and video content for entrepreneurship events.",
        category: "leadership",
        personas: ["leader"],
        icon: <Monitor className="w-6 h-6" />,
        details: {
            challenge: "Creating high-impact promotional content aligned with event messaging.",
            solution: "Collaborated closely with event leads, designed content calendars and optimized promotional pipelines.",
            tech: ["Figma", "Premiere Pro", "Campaign Planning"],
        }
    },
    {
        id: 312,
        year: "Sep 2023",
        title: "Lottery Application",
        organization: "Personal Project",
        description: "Created a secure lottery app with Firebase Realtime Database for live ticket management and UPI payment integration.",
        category: "project",
        personas: ["builder"],
        icon: <Smartphone className="w-6 h-6" />,
        status: "paid",
        details: {
            challenge: "Securely managing live tickets and payments within an Android environment.",
            solution: "Integrated Firebase Realtime Database for live ticket state and implemented UPI transaction validation to prevent fraud. Built an XML-based Android UI for smooth user experience.",
            tech: ["Java", "XML", "Firebase Realtime Database", "UPI Integration"],
            images: ["media/projects/LotteryApp/lottery1.webp"]
        }
    }
];


// Persona-Specific Tech Logos
export const LOGOS_DATA = {
    builder: [
        { id: 1, name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { id: 2, name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { id: 3, name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { id: 4, name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { id: 5, name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { id: 6, name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { id: 7, name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" },
        { id: 8, name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { id: 9, name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { id: 10, name: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { id: 11, name: "Pandas", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { id: 12, name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { id: 13, name: "Android Studio", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { id: 14, name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
    leader: [
        { id: 1, name: "Microsoft Excel", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
        { id: 2, name: "PowerPoint", image: "https://cdn.worldvectorlogo.com/logos/powerpoint-2.svg" },
        { id: 3, name: "Google Workspace", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { id: 4, name: "Slack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
        { id: 5, name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { id: 6, name: "Trello", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
        { id: 7, name: "Notion", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
        { id: 8, name: "GitHub", image: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
        { id: 9, name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        // Project Management & Collaboration
        { id: 10, name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { id: 11, name: "Zoom", image: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg" },
        // Marketing & CRM
        { id: 12, name: "HubSpot", image: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
        { id: 13, name: "LinkedIn", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
        { id: 14, name: "Meta Business", image: "https://cdn.worldvectorlogo.com/logos/meta-3.svg" },
        { id: 15, name: "Google Analytics", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
    ],
    creator: [
        { id: 1, name: "Premiere Pro", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
        { id: 2, name: "After Effects", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
        { id: 3, name: "Photoshop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
        { id: 4, name: "Illustrator", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
        { id: 5, name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { id: 6, name: "Canva", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { id: 7, name: "CapCut", image: "https://cdn.worldvectorlogo.com/logos/capcut-3.svg" },
        { id: 8, name: "YouTube", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
        { id: 9, name: "Audacity", image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Audacity_Logo.svg" },
        // AI Creative Tools
        { id: 10, name: "ChatGPT", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { id: 11, name: "DALL-E", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { id: 12, name: "Midjourney", image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" },
        { id: 13, name: "Sora AI", image: "https://sora.chatgpt.com/sora-icon.webp" },
        { id: 14, name: "ElevenLabs", image: "https://elevenlabs.io/icon.svg" },
        // Analytics & Platforms
        { id: 15, name: "YouTube Analytics", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
        { id: 16, name: "Pinterest", image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" },
        { id: 17, name: "Google Analytics", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
    ]
};



export const GALLERY_DATA = [
    {
        id: "insight-universe",
        title: "Insight Universe Podcast",
        category: "Media Production",
        role: "Project Lead",
        images: [
            "media/projects/Podcast/PD_ep_1_1.webp",
            "media/projects/Podcast/PD_ep_1_2.webp",
            "media/projects/Podcast/PD_ep_2_1.webp",
            "media/projects/Podcast/PD_ep_2_2.webp",
            "media/projects/Podcast/PD_ep_2_3.webp",
            "media/projects/Podcast/PD_ep_3_1.webp",
            "media/projects/Podcast/PD_ep_4_1.webp",
            "media/projects/Podcast/PD_ep_4_2.webp",
            "media/projects/Podcast/PD_ep_5_1.Webp"
        ],
        description: "Full podcast series production — from concept to final cut."
    },
    {
        id: "startup-mahakumbh",
        title: "Startup Mahakumbh 2025",
        category: "Event",
        role: "Attendee",
        images: [
            "media/Events/SMK_1.webp",
            "media/Events/SMK_2.webp",
            "media/Events/SMK_3.webp",
            "media/Events/SMK_4.webp",
            "media/Events/SMK_5.webp"
        ],
        description: "India's largest startup ecosystem event — networking, pitches, and innovation."
    },
    {
        id: "cyberthon-25",
        title: "Cyberthon.ai 2025",
        category: "Competition",
        role: "Winner",
        images: [
            "media/Events/CY_25_1.webp",
            "media/Events/CY_25_2.webp",
            "media/Events/CY_25_3.webp",
            "media/Events/CY_25_4.webp"
        ],
        description: "Chandigarh Police hackathon — secured Runner-Up solving cybersecurity challenges."
    },
    {
        id: "cac-club",
        title: "CAC Club Events",
        category: "Organized",
        role: "Organizer",
        images: [
            "media/Events/EV_Achiver_1.webp",
            "media/Events/EV_Achiver_2.webp",
            "media/Events/EV_Achiver_3.webp",
            "media/Events/EV_CAC_1_1.webp",
            "media/Events/EV_CAC_1_2.webp",
            "media/Events/EV_CAC_2_1.webp"
        ],
        description: "Leading the multimedia team for Connecting All Circles club activities."
    },
    {
        id: "director-meet",
        title: "Director Meet Event",
        category: "Organized",
        role: "Organizer",
        images: [
            "media/Events/EV_KC_1.webp",
            "media/Events/EV_KC_2.webp"
        ],
        video: "media/Events/EV_KC_3.mp4",
        description: "Knowledge City director sessions — high-impact industry talks and seminars."
    },
    {
        id: "microsoft-chapter",
        title: "Microsoft Student Chapter",
        category: "Leadership",
        role: "Secretary",
        images: [
            "media/Events/EV_MS_SEC_1.webp",
            "media/Events/EV_MS_1.webp"
        ],
        description: "Coordinated chapter operations as Secretary — events, communication, and logistics."
    },
    {
        id: "events-competitions",
        title: "Events & Competitions",
        category: "Mixed",
        role: "Organizer",
        images: [
            "media/Events/HWT_1.webp",
            "media/Events/HWT_2.webp",
            "media/Events/HWT_3.webp",
            "media/Events/HWT_4.webp",
            "media/Events/Project_Expo.webp",
            "media/Events/VD_cl_1.webp"
        ],
        description: "Hack with Tricity, Project Expo, and other tech events and competitions."
    }
];
