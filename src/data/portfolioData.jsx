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

export const PROFILE_IMAGE = `${import.meta.env.BASE_URL}siddharth.jpg`;
export const RESUME_PATH = `${import.meta.env.BASE_URL}siddharth_resume.pdf`;

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
        title: "Veil - Anonymous Chat",
        description: "Multi-platform chat app with interest-based matching and multi-level verification.",
        image: "chat.png",
        tech: ["Flutter", "Firebase", "FCM"],
        link: "https://github.com/Sidd1374",
        personas: ["builder"]
    },
    {
        id: 2,
        title: "Care Utility",
        description: "Production line management app improving operational efficiency by 40%.",
        image: "careutility1.jpeg",
        tech: ["Flutter", "Firestore", "Auth"],
        link: "https://github.com/Sidd1374",
        personas: ["builder", "leader"]
    },
    {
        id: 3,
        title: "Insight Universe",
        description: "Podcast series production focusing on student stories and tech trends.",
        image: "kk3.jpeg",
        tech: ["Podcast", "Editing", "Strategy"],
        link: "https://www.youtube.com/@insightuniverse.official/",
        personas: ["creator", "leader"]
    },
    {
        id: 4,
        title: "Lottery App",
        description: "Secure lottery management system with UPI integration and real-time state.",
        image: "lottery1.jpg",
        tech: ["Java", "Firebase", "UPI"],
        link: "https://github.com/Sidd1374",
        personas: ["builder"]
    }
];

export const CERTIFICATES_DATA = [
    {
        id: 1,
        title: "Cyberthon.ai Winner",
        issuer: "Chandigarh Police",
        explanation: "Secured runner-up position in the national level AI & Cybersecurity hackathon.",
        image: "cyberthonai4.jpeg",
        link: "#",
        personas: ["builder", "leader"]
    },
    {
        id: 2,
        title: "Video Editing Specialist",
        issuer: "WictroniX",
        explanation: "Certified excellence in high-end video production and client project management.",
        image: "kk2.jpeg",
        link: "#",
        personas: ["creator"]
    },
    {
        id: 3,
        title: "Operations Management",
        issuer: "MS Club",
        explanation: "Recognition for outstanding leadership and operational coordination at MSC CU.",
        image: "secretary.jpg",
        link: "#",
        personas: ["leader"]
    },
    {
        id: 4,
        title: "Machine Learning Training",
        issuer: "CETPA Infotech",
        explanation: "Completed professional training in Python, Scikit-learn, and Predictive Modeling.",
        image: "siddhathml.jpg",
        link: "#",
        personas: ["builder"]
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
    { id: 1, title: "Tech Fest 2024", role: "Core Organizer", stats: "5000+ Attendees", image: "techfest.jpeg" },
    { id: 2, title: "Microsoft Summit", role: "Event Lead", stats: "30+ Speakers", image: "kk1.jpeg" },
    { id: 3, title: "Campus Hackathon", role: "Logistics Head", stats: "48 Hours Non-stop", image: "tricity3.jpeg" },
];

export const FULL_DATA = [
    {
        id: 1,
        year: "June 2026 (Expected)",
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
            images: ["kk3.jpeg"]
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
            images: ["chat.png", "chat2.png", "chat3.png", "chat4.png", "chat5.png", "chat6.png", "chat7.png"]
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
            images: ["cyberthonai4.jpeg", "cyberthonai2.jpeg", "cyberthonai3.jpeg", "cyberthonai1.jpeg"]
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
            images: ["tricity1.jpeg", "tricity2.jpeg", "tricity3.jpeg"]
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
            images: ["careutility1.jpeg", "careutility2.jpeg", "careutility3.jpeg", "careutility4.jpeg", "careutility5.jpeg"]
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
            images: ["kk2.jpeg", "kk1.jpeg"]
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
        organization: "Academics@CU",
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
            images: ["siddhathml.jpg"]
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
            images: ["lottery1.jpg", "lottery2.jpg"]
        }
    }
];
