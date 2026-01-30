import React, { useState, useEffect, useRef, Suspense, lazy, memo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
const EventHighlights = lazy(() => import('./components/Portfolio/EventHighlights'));
const ProjectsSection = lazy(() => import('./components/Portfolio/ProjectsSection'));
const CertificatesSection = lazy(() => import('./components/Portfolio/CertificatesSection'));
const Modal = lazy(() => import('./components/Portfolio/Modal'));
const SkillsModal = lazy(() => import('./components/Portfolio/SkillsModal'));
const CertificateDetailModal = lazy(() => import('./components/Portfolio/CertificateDetailModal'));
const AllItemsModal = lazy(() => import('./components/Portfolio/AllItemsModal'));
const GalleryModal = lazy(() => import('./components/Portfolio/GalleryModal'));

// Loading Placeholder
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-gray-800 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

export default function Portfolio() {
  const [persona, setPersona] = useState('builder'); // 'builder', 'leader', 'creator'
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // New states for Projects & Certificates
  const [selectedCert, setSelectedCert] = useState(null);
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

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact-page') setContactOpen(true);
      else setContactOpen(false);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
              <a href="mailto:sidd13704@gmail.com" className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group">
                <Mail size={16} className="group-hover:text-white" /> Email
              </a>
              <a href="https://linkedin.com/in/siddharthsharma1374" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group">
                <Linkedin size={16} className="group-hover:text-blue-400" /> LinkedIn
              </a>
              <a href="https://github.com/Sidd1374" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm font-medium group">
                <Github size={16} className="group-hover:text-white" /> GitHub
              </a>
              <button
                onClick={() => {
                  window.open(RESUME_PATH, '_blank');
                  const link = document.createElement('a');
                  link.href = RESUME_PATH;
                  link.download = 'siddharth_resume.pdf';
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
                className={`relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 ${theme.borderMedium} overflow-hidden shadow-2xl ${theme.shadowStrong} z-10`}
              >
                <img
                  src={PROFILE_IMAGE}
                  alt="Siddharth Sharma"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 relative"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradientOverlay} to-transparent pointer-events-none`} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Persona Selector */}
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

        <PersonaSummary theme={theme} persona={persona} />

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-gray-500 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        </motion.div>
      </header>

      <CharacterStats theme={theme} persona={persona} />

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
        <ProjectsSection theme={theme} persona={persona} onShowAll={setShowAllType} />
        <CertificatesSection theme={theme} persona={persona} onCertificateClick={setSelectedCert} onShowAll={setShowAllType} />
        <EventHighlights theme={theme} onOpenGallery={openGallery} />
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

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-gray-900 bg-black">
        <p>© 2025 Siddharth Sharma. Crafted with React & Framer Motion.</p>
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
        <AllItemsModal
          isOpen={!!showAllType}
          onClose={() => setShowAllType(null)}
          type={showAllType}
          persona={persona}
          theme={theme}
        />
        <GalleryModal isOpen={galleryOpen} onClose={closeGallery} images={galleryImages} category={galleryCategory} theme={theme} />
      </Suspense>
    </div>
  );
}
