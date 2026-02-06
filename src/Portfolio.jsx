import React, { useState, useEffect, useRef, Suspense, lazy, memo } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion';
import {
  Code,
  Users,
  Video,
  ChevronRight,
  ChevronUp,
  Instagram,
  Github,
  Linkedin,
  Mail,
  Download
} from 'lucide-react';
import SplashLoader from './components/Portfolio/SplashLoader';
import PINModal from './components/Portfolio/PINModal';

// Data & Utils
import {
  PROFILE_IMAGE,
  RESUME_PATH,
  FULL_DATA,
  EVENTS_HIGHLIGHTS
} from './data/portfolioData';
import { getTheme } from './utils/theme';

// Direct Components
import ContactPage from './Contact';
import TimelineNode from './components/Portfolio/TimelineNode';
import PersonaSummary from './components/Portfolio/PersonaSummary';
import CharacterStats from './components/Portfolio/CharacterStats';

// Lazy Components for better performance
const SkillsSection = lazy(() => import('./components/Portfolio/SkillsSection'));
const AchievementsSection = lazy(() => import('./components/Portfolio/AchievementsSection'));
const ProjectsSection = lazy(() => import('./components/Portfolio/ProjectsSection'));
const CertificatesSection = lazy(() => import('./components/Portfolio/CertificatesSection'));
const LogoMarquee = lazy(() => import('./components/Portfolio/LogoMarquee'));
const EventGallery = lazy(() => import('./components/Portfolio/EventGallery'));
const Modal = lazy(() => import('./components/Portfolio/Modal'));
const SkillsModal = lazy(() => import('./components/Portfolio/SkillsModal'));
const CertificateDetailModal = lazy(() => import('./components/Portfolio/CertificateDetailModal'));
const ProjectDetailModal = lazy(() => import('./components/Portfolio/ProjectDetailModal'));
const AllItemsModal = lazy(() => import('./components/Portfolio/AllItemsModal'));
const GalleryModal = lazy(() => import('./components/Portfolio/GalleryModal'));

// Loading Placeholder
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-gray-800 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [persona, setPersona] = useState('builder'); // 'builder', 'leader', 'creator'
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // PIN Modal & Tap Counter States
  const [tapCount, setTapCount] = useState(0);
  const [showPINModal, setShowPINModal] = useState(false);
  const [aiToolsAccess, setAiToolsAccess] = useState(false);
  const tapTimerRef = useRef(null);

  // New states for Projects & Certificates
  const [selectedCert, setSelectedCert] = useState(null);
  const mainSwitcherRef = useRef(null);
  const isSwitcherInView = useInView(mainSwitcherRef, { margin: "-80px 0px 0px 0px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllType, setShowAllType] = useState(null); // 'projects' or 'certificates'

  // Filter Data
  const filteredData = FULL_DATA.filter(item => item.personas.includes(persona));

  const theme = getTheme(persona);
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

  // Timeline glow animation range
  const timelineRef = useRef(null);
  const [glowRange, setGlowRange] = useState([-300, 1000]);

  useEffect(() => {
    const measure = () => {
      const h = timelineRef.current?.clientHeight || window.innerHeight || 800;
      setGlowRange([-Math.round(h * 0.6), Math.round(h * 1.2)]);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowTop(y > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Splash Screen Timer
  useEffect(() => {
    // Hide loader after minimum 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact-page') setContactOpen(true);
      else setContactOpen(false);

      // Handle AI tools access
      if (window.location.hash === '#ai-tools' && aiToolsAccess) {
        // AI tools page will be handled by App.jsx routing
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [aiToolsAccess]);

  // Handle Profile Image Tap
  const handleProfileTap = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);

    // Clear existing timer
    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }

    // Reset tap count after 3 seconds of inactivity
    tapTimerRef.current = setTimeout(() => {
      setTapCount(0);
    }, 3000);

    // Show PIN modal after 5 taps
    if (newCount >= 5) {
      setShowPINModal(true);
      setTapCount(0);
      if (tapTimerRef.current) {
        clearTimeout(tapTimerRef.current);
      }
    }
  };

  // Handle successful PIN entry
  const handlePINSuccess = () => {
    setAiToolsAccess(true);
    setShowPINModal(false);
    window.location.hash = '#ai-tools';
  };

  if (contactOpen) {
    return <ContactPage theme={theme} PROFILE_IMAGE={PROFILE_IMAGE} onBack={() => { setContactOpen(false); window.location.hash = ''; }} />;
  }

  const openGallery = (category) => {
    if (category) {
      let imgs = [];
      if (category === 'College Events') {
        imgs = EVENTS_HIGHLIGHTS.map(e => e.image).filter(Boolean);
      } else if (category === 'Insight Universe') {
        imgs = FULL_DATA.filter(d => d.organization && d.organization.toLowerCase().includes('insight universe')).flatMap(d => d.details?.images || []);
        if (imgs.length === 0) {
          const fallback = FULL_DATA.find(d => d.id === 201);
          imgs = fallback?.details?.images || [];
        }
      } else if (category === 'Projects') {
        imgs = FULL_DATA.filter(d => d.category === 'project').flatMap(d => d.details?.images || []);
      } else {
        imgs = FULL_DATA.flatMap(d => d.details?.images || []).filter(Boolean);
      }
      setGalleryImages(imgs);
      setGalleryCategory(category);
    } else {
      setGalleryImages([]);
      setGalleryCategory(null);
    }
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setGalleryCategory(null);
    setGalleryImages([]);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-x-hidden">
      {/* Splash Loader */}
      <SplashLoader isVisible={isLoading} />

      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 ${theme.bgSolid} z-50 origin-left`}
        style={{ scaleX: scaleY, boxShadow: progressShadow }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        {/* Shimmer Line */}
        {scrolled && (
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${theme.rgb === '34, 211, 238' ? 'cyan-500' : theme.rgb === '251, 146, 60' ? 'orange-500' : 'purple-500'} to-transparent opacity-50`}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}

        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between relative h-12 md:h-14">
          {/* Logo - Left */}
          <div className="flex items-center gap-2">
            <img
              src="/media/Logo_Wht.png"
              alt="Logo"
              className="h-6 md:h-7 w-auto object-contain"
            />
            <div className="font-extrabold text-lg md:text-xl tracking-tighter group cursor-default whitespace-nowrap">
              <span className="text-white">iam</span>
              <span className={accentColorClass}>Sidd</span>
              <span className="text-gray-500">.Tech</span>
            </div>
          </div>

          {/* Persona Switcher - Center (Absolute) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center">
            <AnimatePresence>
              {!isSwitcherInView && scrolled && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-xl flex items-center shadow-2xl"
                >
                  {['builder', 'leader', 'creator'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPersona(p)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-2 ${persona === p ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                      {persona === p && (
                        <motion.div
                          layoutId="nav-persona-bg"
                          className={`absolute inset-0 rounded-lg bg-gradient-to-r ${persona === 'builder' ? 'from-cyan-400 to-cyan-500' : persona === 'leader' ? 'from-orange-400 to-orange-500' : 'from-purple-400 to-pink-500'} z-0`}
                        />
                      )}
                      <span className="relative z-10 hidden lg:inline capitalize">{p}</span>
                      <span className="relative z-10 lg:hidden capitalize">{p[0]}</span>
                      <div className="relative z-10">
                        {p === 'builder' && <Code size={12} />}
                        {p === 'leader' && <Users size={12} />}
                        {p === 'creator' && <Video size={12} />}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Socials + Contact - Right */}
          <div className="flex items-center gap-1 sm:gap-2 flex-nowrap">
            <motion.a
              href="https://instagram.com/_ig__skull_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.15, rotate: 5, color: "#E1306C" }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/Sidd1374"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/siddharthsharma1374"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.15, rotate: 5, color: "#0A66C2" }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <button
              onClick={() => { setContactOpen(true); window.location.hash = '#contact-page'; window.scrollTo(0, 0); }}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${theme.gradientDeep} text-white text-xs font-bold hover:scale-105 transition-all shadow-lg ${theme.shadowSoft}`}
            >
              <Mail size={14} /> Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`fixed left-1/2 -translate-x-1/2 top-12 md:top-16 z-50 transition-all duration-300 px-2 sm:px-3 md:px-4 ${scrolled ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); else window.location.hash = '#contact'; }}
          className={`inline-flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium bg-gray-900/90 border border-gray-700 text-gray-200 backdrop-blur-sm shadow-lg hover:bg-gray-800 transition-colors whitespace-nowrap ${!scrolled ? 'animate-pulse' : ''}`}
          style={{ zIndex: 9999 }}
        >
          Available for New Opportunities
        </a>
      </div>

      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-28 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${bgGradientClass} opacity-40 transition-colors duration-500`} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-5 items-center gap-10">
          <div className="text-center md:text-left order-2 md:order-1 md:col-span-3">
            <motion.h1
              key={persona}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight"
            >
              I don't just write code.<br />
              I build <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText} transition-all duration-500`}>journeys.</span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto md:mx-0">
              Hi, I'm <span className="text-white font-semibold">Siddharth Sharma</span>.
              <br />
              Depending on who you ask,
              <br />
              I'm a Flutter Developer, Operations Manager, or Creative Director.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <motion.a
                href="mailto:sidd13704@gmail.com"
                className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} className="group-hover:text-white" /> Email
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/siddharthsharma1374"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group"
                whileHover={{ scale: 1.05, y: -2, rotate: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin size={16} className="group-hover:text-blue-400" /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Sidd1374"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group"
                whileHover={{ scale: 1.05, y: -2, rotate: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} className="group-hover:text-white" /> GitHub
              </motion.a>
              <button
                onClick={() => {
                  window.open(RESUME_PATH, '_blank');
                  const link = document.createElement('a');
                  link.href = RESUME_PATH;
                  link.download = 'Siddharth_Sharma_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`px-4 py-2 rounded-lg bg-gray-900/80 border ${theme.borderMedium} ${theme.accent} ${theme.hoverBg} transition-all flex items-center gap-2 text-sm font-medium cursor-pointer hover:scale-105`}
              >
                <Download size={16} /> CV
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start order-1 md:order-2 mt-8 md:mt-0">
            <div className="relative">
              <motion.div
                aria-hidden
                className={`absolute -inset-6 rounded-full pointer-events-none`}
                style={{ filter: 'blur(80px)', zIndex: 0 }}
                animate={{
                  backgroundColor: [
                    `rgba(${theme.rgb}, 0.12)`,
                    `rgba(${theme.rgb}, 0.30)`,
                    `rgba(${theme.rgb}, 0.12)`
                  ],
                  opacity: [0.65, 0.9, 0.65],
                  scale: [1, 1.04, 1]
                }}
                transition={{ duration: 1.4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onClick={handleProfileTap}
                className={`relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 ${theme.borderMedium} overflow-hidden shadow-2xl ${theme.shadowStrong} z-10 cursor-pointer select-none`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={PROFILE_IMAGE}
                  alt="Siddharth Sharma - Professional Portfolio"
                  loading="eager"
                  fetchpriority="high"
                  decoding="sync"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 relative"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradientOverlay} to-transparent pointer-events-none`} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Persona Selector */}
        <div ref={mainSwitcherRef} className="mt-10 flex justify-center">
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

        <PersonaSummary theme={theme} persona={persona} />

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-gray-500 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        </motion.div>
      </header>

      <CharacterStats theme={theme} persona={persona} />

      <Suspense fallback={null}>
        <LogoMarquee theme={theme} persona={persona} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SkillsSection theme={theme} persona={persona} onSkillClick={(category) => setSelectedSkillCategory(category)} />
      </Suspense>

      {/* Timeline Section */}
      <section className="relative py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
          <p className="text-gray-400">My timeline as a {persona === 'builder' ? 'Developer' : persona === 'leader' ? 'Manager' : 'Creator'}.</p>
        </div>

        <div className="relative">
          <div ref={timelineRef} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className={`absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent ${theme.viaLine} to-transparent opacity-70`}
              animate={{ y: glowRange }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
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

      <Suspense fallback={<SectionLoader />}>
        <AchievementsSection theme={theme} />
        <ProjectsSection theme={theme} persona={persona} onShowAll={setShowAllType} onProjectClick={setSelectedProject} />
        <CertificatesSection theme={theme} persona={persona} onCertificateClick={setSelectedCert} onShowAll={setShowAllType} />
        <EventGallery theme={theme} />
      </Suspense>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className={`w-16 h-16 mx-auto ${theme.accentBg} rounded-full flex items-center justify-center ${theme.accent} mb-6`}>
            <Mail size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4">Ready for the next chapter?</h3>
          <p className="text-gray-400 mb-8">
            I am currently looking for full-time opportunities and challenging projects.
          </p>
          <button onClick={() => { setContactOpen(true); if (window.location.hash !== '#contact-page') window.location.hash = '#contact-page'; window.scrollTo(0, 0); }} className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${theme.gradientDeep} ${theme.hoverFrom} ${theme.hoverTo} rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${theme.shadowSoft}`}>
            Start a Conversation <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <footer className="py-16 relative overflow-hidden text-center bg-black/40 backdrop-blur-md border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme?.bgSolid || 'bg-cyan-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${theme?.bgSolid || 'bg-cyan-500'}`}></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Systems Operational • Ready for Hire</span>
          </div>

          <div className="font-black text-2xl tracking-tighter mb-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
            iam<span className={accentColorClass}>Sidd.</span>Tech
          </div>

          <p className="text-gray-600 text-[11px] font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} — Hand-coded with precision
          </p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 right-4 z-50 p-3 sm:p-4 rounded-full bg-gray-900/80 border border-gray-700 text-gray-200 shadow-lg transition-all transform ${showTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        <ChevronUp size={20} />
      </button>

      {/* Modals */}
      <Suspense fallback={null}>
        <Modal isOpen={!!selectedNode} onClose={() => setSelectedNode(null)} data={selectedNode} theme={theme} />
        <SkillsModal
          isOpen={selectedSkillCategory !== null}
          onClose={() => setSelectedSkillCategory(null)}
          category={selectedSkillCategory?.category}
          skills={selectedSkillCategory?.items}
          theme={theme}
        />
        <CertificateDetailModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          cert={selectedCert}
          theme={theme}
        />
        <ProjectDetailModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
          theme={theme}
        />
        <AllItemsModal
          isOpen={!!showAllType}
          onClose={() => setShowAllType(null)}
          type={showAllType}
          persona={persona}
          theme={theme}
          onCertificateClick={setSelectedCert}
          onProjectClick={setSelectedProject}
        />
        <GalleryModal isOpen={galleryOpen} onClose={closeGallery} images={galleryImages} category={galleryCategory} theme={theme} />
        <PINModal
          isOpen={showPINModal}
          onClose={() => setShowPINModal(false)}
          onSuccess={handlePINSuccess}
        />
      </Suspense>
    </div>
  );
}
