import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashLoader({ isVisible }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    {/* Animated Background Gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Grain Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        {/* Logo with Scale and Fade Animation */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.16, 1, 0.3, 1], // Custom easing for smooth effect
                            }}
                            className="relative"
                        >
                            {/* Glow Effect */}
                            <motion.div
                                className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Logo Image */}
                            <motion.img
                                src="/media/Logo_Wht.png"
                                alt="IamSidd.Tech Logo"
                                className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))",
                                        "drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))",
                                        "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))",
                                        "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))",
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </motion.div>

                        {/* Text Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="text-center"
                        >
                            <motion.h1
                                className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-2"
                                animate={{
                                    backgroundImage: [
                                        "linear-gradient(to right, #06b6d4, #8b5cf6)",
                                        "linear-gradient(to right, #8b5cf6, #ec4899)",
                                        "linear-gradient(to right, #ec4899, #06b6d4)",
                                        "linear-gradient(to right, #06b6d4, #8b5cf6)",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                IamSidd.Tech
                            </motion.h1>

                            <motion.p
                                className="text-gray-400 text-sm md:text-base"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Loading Experience...
                            </motion.p>
                        </motion.div>

                        {/* Loading Dots */}
                        <motion.div
                            className="flex gap-2 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
