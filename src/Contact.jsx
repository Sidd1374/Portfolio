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

    // Professional subject line
    const subject = encodeURIComponent(
      project
        ? `🚀 New Project Inquiry: ${project}`
        : `👋 New Opportunity - Portfolio Contact`
    );

    // Well-formatted email body
    const body = encodeURIComponent([
      `Hi Siddharth,`,
      ``,
      `I found your portfolio and would love to discuss a potential collaboration!`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📋 CONTACT DETAILS`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💼 PROJECT DETAILS`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Project Type: ${project || 'Not specified'}`,
      ``,
      `Context & Requirements:`,
      `${context || 'No additional details provided.'}`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Looking forward to hearing from you!`,
      ``,
      `Best regards,`,
      `${name}`,
      ``,
      `---`,
      `📧 Sent via iamSidd.Tech Portfolio`
    ].join('\n'));

    setTimeout(() => {
      const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_self');
      setIsSubmitting(false);
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <div
      className="h-screen text-white overflow-hidden relative"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute -top-20 -left-20 w-[500px] h-[500px] ${theme.accentGlowBg} rounded-full blur-3xl`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute -bottom-20 -right-20 w-[500px] h-[500px] ${theme.accentGlowBg} rounded-full blur-3xl`}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.08) 25%, rgba(255,255,255,.08) 26%, transparent 27%), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.08) 25%, rgba(255,255,255,.08) 26%, transparent 27%)',
        backgroundSize: '60px 60px'
      }} />

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-white rounded-full pointer-events-none"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="fixed top-5 left-5 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all font-medium"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <ArrowLeft size={18} /> Back
      </motion.button>

      {/* Page Content - Full Width Layout */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* LEFT SIDE - Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            {/* Header */}
            <motion.div className="mb-6" variants={floatVariants} animate="animate">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold flex items-center gap-2 mb-3">
                <motion.span
                  className={`w-2 h-2 rounded-full ${theme.bgSolid}`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                SIGNAL BOOST
                <Sparkles size={12} className={theme.accent} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Let's build{' '}
                <motion.span
                  className={`bg-gradient-to-r ${theme.gradientDeep} bg-clip-text text-transparent`}
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: '200%' }}
                >
                  together
                </motion.span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mt-4 max-w-lg leading-relaxed">
                Builder, leader, creator — I ship pragmatic systems, guide teams on product strategy, and craft expressive user experiences.
              </p>
            </motion.div>

            {/* Contact Cards - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Phone */}
              <motion.a
                href="tel:+918988568859"
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all cursor-pointer block"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2 flex items-center gap-2">
                  <Phone size={14} className="group-hover:text-cyan-400 transition-colors" /> PHONE
                </div>
                <p className="text-lg font-bold text-white">+91 8988568859</p>
                <p className="text-xs text-gray-500 mt-1">Available 9am – 8pm IST</p>
              </motion.a>

              {/* Email */}
              <motion.div
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all cursor-pointer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2 flex items-center gap-2">
                  <Mail size={14} className="group-hover:text-orange-400 transition-colors" /> EMAIL
                </div>
                <a href="mailto:sidd13704@gmail.com" className="text-lg font-bold text-white hover:opacity-80 block truncate">sidd13704@gmail.com</a>
                <p className="text-xs text-gray-500 mt-1">Replies within 12 hours</p>
              </motion.div>

              {/* Response Time */}
              <motion.div
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">⚡ RESPONSE TIME</div>
                <p className="text-2xl font-black text-white">~6 hrs</p>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.05] hover:border-green-500/30 transition-all"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">📅 OFFICE HOURS</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Mon–Fri</span><span className="text-white font-bold">9–22 IST</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Sat–Sun</span><span className="text-white font-bold">On-call</span></div>
                </div>
              </motion.div>
            </div>

            {/* Social Cards - Horizontal Row */}
            <div className="grid grid-cols-3 gap-3">
              <motion.a
                href="https://linkedin.com/in/siddharthsharma1374"
                target="_blank"
                rel="noreferrer"
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-blue-500/10 hover:border-blue-500/40 transition-all text-center"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                  <Linkedin size={24} className="mx-auto mb-2 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">LinkedIn</p>
              </motion.a>
              <motion.a
                href="https://github.com/Sidd1374"
                target="_blank"
                rel="noreferrer"
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-white/10 hover:border-gray-500/40 transition-all text-center"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                  <Github size={24} className="mx-auto mb-2 text-gray-400 group-hover:text-white transition-colors" />
                </motion.div>
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">GitHub</p>
              </motion.a>
              <motion.a
                href="https://instagram.com/_ig__skull_"
                target="_blank"
                rel="noreferrer"
                className="group border border-gray-700/50 rounded-2xl p-4 backdrop-blur-md bg-white/[0.02] hover:bg-pink-500/10 hover:border-pink-500/40 transition-all text-center"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                  <Instagram size={24} className="mx-auto mb-2 text-gray-400 group-hover:text-pink-400 transition-colors" />
                </motion.div>
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Instagram</p>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Form */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">PROJECT INTAKE</div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Tell me about your build</h2>
              <p className="text-base text-gray-400 mt-2">Timelines, stack, constraints — I read everything.</p>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); sendMail(); }}
              className="space-y-4"
            >
              {/* Name & Email Row */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">NAME</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className={`w-full bg-gray-900/60 border-2 ${focusedField === 'name' ? 'border-cyan-500/60' : 'border-gray-700/50'} rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium`}
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">EMAIL</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="you@company.com"
                    className={`w-full bg-gray-900/60 border-2 ${focusedField === 'email' ? 'border-cyan-500/60' : 'border-gray-700/50'} rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium`}
                  />
                </motion.div>
              </div>

              {/* Project */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">PROJECT TYPE</label>
                <input
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  onFocus={() => setFocusedField('project')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="SaaS dashboard, marketing site, automation..."
                  className={`w-full bg-gray-900/60 border-2 ${focusedField === 'project' ? 'border-purple-500/60' : 'border-gray-700/50'} rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none transition-all font-medium`}
                />
              </div>

              {/* Context */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">CONTEXT & DETAILS</label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  onFocus={() => setFocusedField('context')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Goals, timeline, existing stack, links..."
                  rows={4}
                  className={`w-full bg-gray-900/60 border-2 ${focusedField === 'context' ? 'border-pink-500/60' : 'border-gray-700/50'} rounded-xl px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none transition-all resize-none font-medium`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl bg-gradient-to-r ${theme.gradientDeep} text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 0.8, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.span>
                <motion.div
                  animate={!isSubmitting ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={20} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
