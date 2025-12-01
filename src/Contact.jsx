import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Linkedin, Github, Instagram, Send, Sparkles } from 'lucide-react';

export default function ContactPage({ theme, PROFILE_IMAGE, onBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [context, setContext] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMail = () => {
    setIsSubmitting(true);
    const to = 'sidd13704@gmail.com';
    const subject = encodeURIComponent(`Portfolio inquiry: ${project || 'New opportunity'}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      `Project / Opportunity: ${project}`,
      '',
      `Context / Details:\n${context}`,
      '',
      '— Sent from portfolio contact page'
    ].join('\n'));

    setTimeout(() => {
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: { y: [-10, 10, -10], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
  };

  return (
    <div
      className="min-h-screen text-white overflow-hidden relative"
      style={{
        /* Mixed persona background (commented per request) - keep for reference
        backgroundImage: `radial-gradient(circle at 12% 18%, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0.06) 30%, transparent 50%), radial-gradient(circle at 80% 72%, rgba(249,115,22,0.28) 0%, rgba(249,115,22,0.06) 45%, transparent 70%), radial-gradient(circle at 55% 40%, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0.05) 35%, transparent 55%), linear-gradient(to bottom, #000000, #0f172a)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundBlendMode: 'screen, screen, screen, overlay'
        */
        backgroundColor: '#000000'
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 left-10 w-96 h-96 ${theme.accentGlowBg} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 ${theme.accentGlowBg} rounded-full blur-3xl`}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }} />

      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ x: -5 }}
      >
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <ArrowLeft size={18} /> Back
        </button>
      </motion.div>

      {/* Sparkles Background */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-white rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Page Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-start px-3 sm:px-4 md:px-6 lg:px-6 pt-20 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[90vw] lg:max-w-none mx-auto grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-1"
        >
          {/* LEFT SIDE - Signal Boost & Description */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between col-span-1 lg:col-span-7 min-h-auto lg:min-h-screen"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 w-fit"
            >
              <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${theme.bgSolid}`} />
                SIGNAL BOOST
              </div>
            </motion.div>

            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                Let's scope the next build{' '}
                <motion.span
                  className={`bg-gradient-to-r ${theme.gradientDeep} bg-clip-text text-transparent`}
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  together
                </motion.span>
              </h1>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[40rem] sm:max-w-[48rem] md:max-w-[56rem] lg:max-w-[64rem]"
              >
                I blend builder, leader, and creator sensibilities — shipping pragmatic systems, guiding teams on product strategy, and crafting expressive user experiences. Whether it's a founder-led product, marketing moment, or automation for ops, I usually respond the same day with a Loom walkthrough or clear steps.
              </motion.p>
            </div>

            {/* Contact Details - Left Side */}
            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group border border-gray-700/40 rounded-3xl shadow-sm shadow-black/30 p-4 sm:p-5 md:p-6 h-full max-w-none sm:max-w-sm md:max-w-md lg:max-w-lg w-full backdrop-blur-md bg-transparent hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3 flex items-center gap-2">
                      <Phone size={12} className="md:size-[14px] lg:size-[16px] group-hover:text-cyan-400 transition-colors" />
                      PHONE
                    </div>
                    <p className="text-base sm:text-xl md:text-xl lg:text-2xl font-bold text-white break-words">+91 8988568859</p>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 mt-1 sm:mt-1 md:mt-2 lg:mt-2">Available 9am – 8pm IST</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="group border border-gray-700/40 rounded-3xl shadow-sm shadow-black/30 p-4 sm:p-5 md:p-6 h-full max-w-none sm:max-w-sm md:max-w-md lg:max-w-lg w-full backdrop-blur-md bg-transparent hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3 flex items-center gap-2">
                      <Mail size={12} className="md:size-[14px] lg:size-[16px] group-hover:text-orange-400 transition-colors" />
                      EMAIL
                    </div>
                    <a href="mailto:sidd13704@gmail.com" className="text-xs sm:text-base md:text-base lg:text-xl font-bold text-white hover:opacity-80 transition-opacity break-words">
                      sidd13704@gmail.com
                    </a>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 mt-1 sm:mt-1 md:mt-2 lg:mt-2">Replies within 12 hours</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-2 sm:pt-2 md:pt-4 lg:pt-4 items-stretch"
              >
                <a
                  href="https://linkedin.com/in/siddharthsharma1374"
                  target="_blank"
                  rel="noreferrer"
                  className="group border border-gray-700/40 rounded-3xl shadow-sm shadow-black/30 p-4 sm:p-5 md:p-6 h-full max-w-none sm:max-w-sm md:max-w-md lg:max-w-lg w-full backdrop-blur-md bg-transparent hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3 flex items-center gap-2">
                      <Linkedin size={12} className="md:size-[14px] lg:size-[16px] group-hover:text-purple-400 transition-colors" />
                      LINKEDIN
                    </div>
                    <p className="text-xs sm:text-base md:text-base lg:text-lg font-semibold text-white hover:text-purple-300 transition-colors break-words">linkedin.com/in/siddharth1374</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Sidd1374"
                  target="_blank"
                  rel="noreferrer"
                  className="group border border-gray-700/40 rounded-3xl shadow-sm shadow-black/30 p-4 sm:p-5 md:p-6 h-full max-w-none sm:max-w-sm md:max-w-md lg:max-w-lg w-full backdrop-blur-md bg-transparent hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3 flex items-center gap-2">
                      <Github size={12} className="md:size-[14px] lg:size-[16px] group-hover:text-cyan-400 transition-colors" />
                      GITHUB
                    </div>
                    <p className="text-xs sm:text-base md:text-base lg:text-lg font-semibold text-white hover:text-cyan-300 transition-colors break-words">github.com/sidd1374</p>
                  </div>
                </a>
              </motion.div>

              {/* Response Stats & Office Hours */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-2 sm:pt-2 md:pt-6 lg:pt-6 items-stretch"
              >
                {/* Response Stats Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group border border-gray-700/40 rounded-3xl shadow-sm shadow-black/30 p-4 sm:p-5 md:p-6 h-full md:max-w-none max-w-none w-full backdrop-blur-md bg-transparent hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-4 flex items-center gap-2">
                      ⚡ RESPONSE STATS
                    </div>
                    <p className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-1 md:mb-2 lg:mb-2">~6 hrs</p>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 mb-2 sm:mb-2 md:mb-4 lg:mb-4 break-words">Avg. reply window for new briefs</p>
                    <div className="w-full bg-gray-800 rounded-full h-1 sm:h-1.5 md:h-2 lg:h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 via-orange-400 to-purple-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 0.8, duration: 1 }}
                      />
                    </div>
                    <p className="text-xs sm:text-xs md:text-xs lg:text-sm text-gray-500 mt-1 sm:mt-1 md:mt-2 lg:mt-2">fast lane</p>
                  </div>
                </motion.div>

                {/* Office Hours Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group border border-gray-700/40 rounded-3xl shadow-sm shadow-black/30 p-4 sm:p-5 md:p-6 h-full md:max-w-none max-w-none w-full backdrop-blur-md bg-transparent hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="text-xs sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-gray-400 font-semibold mb-3 sm:mb-3 md:mb-4 lg:mb-4">📅 OFFICE HOURS</div>
                    <div className="space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 text-xs sm:text-sm md:text-sm lg:text-base">
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-300">Mon – Fri</span>
                        <span className="font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-purple-400 bg-clip-text text-transparent group-hover:text-transparent transition-colors text-right">09:00 – 22:00 IST</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-300">Sat</span>
                        <span className="font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-purple-400 bg-clip-text text-transparent group-hover:text-transparent transition-colors text-right">10:00 – 18:00 IST</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-gray-300">Sun</span>
                        <span className="font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-purple-400 bg-clip-text text-transparent group-hover:text-transparent transition-colors text-right">On-call for launches</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-xs md:text-xs lg:text-sm text-gray-500 mt-2 sm:mt-2 md:mt-3 lg:mt-4 break-words">Launch-week or production fire? Ping me "⚡ priority" in the subject.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Divider Column */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex lg:col-span-1 items-center justify-center"
            aria-hidden
          >
            <motion.div
              className="w-[2px] h-full rounded-full"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.28), rgba(255,255,255,0.08))' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* RIGHT SIDE - Form */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col col-span-1 lg:col-span-4 min-h-auto lg:min-h-screen py-8 lg:py-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 flex flex-col items-center text-center"
            >
              <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">PROJECT INTAKE</div>
              <h2 className="text-3xl font-bold mt-8">Tell me about your build</h2>
              <p className="text-gray-400 mt-3 max-w-[30rem]">Share context about timelines, stack, or constraints — I read everything.</p>
            </motion.div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMail();
              }}
              className="space-y-8"
            >
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative group/field"
                >
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3">NAME</label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-focus-within/field:opacity-10 rounded-lg transition-opacity duration-300" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Alex Founder"
                      className={`relative w-full bg-gray-900/50 border ${focusedField === 'name' ? 'border-cyan-500/50' : `${theme.borderMedium}`} rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="relative group/field"
                >
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3">EMAIL</label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-focus-within/field:opacity-10 rounded-lg transition-opacity duration-300" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="you@startup.co"
                      className={`relative w-full bg-gray-900/50 border ${focusedField === 'email' ? 'border-cyan-500/50' : `${theme.borderMedium}`} rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Project Type */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative group/field"
              >
                <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3">PROJECT</label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-focus-within/field:opacity-10 rounded-lg transition-opacity duration-300" />
                  <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    onFocus={() => setFocusedField('project')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Marketing site, SaaS dashboard, automation..."
                    className={`relative w-full bg-gray-900/50 border ${focusedField === 'project' ? 'border-purple-500/50' : `${theme.borderMedium}`} rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                  />
                </div>
              </motion.div>

              {/* Context */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="relative group/field"
              >
                <label className="block text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3">CONTEXT</label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-focus-within/field:opacity-10 rounded-lg transition-opacity duration-300" />
                  <textarea
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    onFocus={() => setFocusedField('context')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Goals, timeline, existing stack, links..."
                    rows={4}
                    className={`relative w-full bg-gray-900/50 border ${focusedField === 'context' ? 'border-pink-500/50' : `${theme.borderMedium}`} rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 text-xs sm:text-sm md:text-base lg:text-base text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm`}
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`w-full px-3 sm:px-4 md:px-6 lg:px-6 py-2 sm:py-3 md:py-4 lg:py-4 rounded-lg bg-gradient-to-r ${theme.gradientDeep} text-white font-semibold flex items-center justify-center gap-2 overflow-hidden relative group mt-8 text-xs sm:text-sm md:text-base lg:text-base`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={isSubmitting ? { x: [0, 20, 0] } : { x: 0 }}
                  transition={{ duration: 0.6, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </motion.span>
                <motion.div
                  animate={!isSubmitting ? { x: [0, 5, 0] } : { x: 0 }}
                  transition={{ duration: 2, repeat: !isSubmitting ? Infinity : 0 }}
                >
                  <Send size={18} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

