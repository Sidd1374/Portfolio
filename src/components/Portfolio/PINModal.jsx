import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, Check, AlertCircle } from 'lucide-react';

const CORRECT_PIN = "1374"; // Can be changed

export default function PINModal({ isOpen, onClose, onSuccess }) {
    const [pin, setPin] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (pin.length === 4) {
            if (pin === CORRECT_PIN) {
                setSuccess(true);
                setError(false);
                setTimeout(() => {
                    onSuccess();
                }, 1000);
            } else {
                setError(true);
                setTimeout(() => {
                    setPin("");
                    setError(false);
                }, 800);
            }
        }
    }, [pin, onSuccess]);

    const handleNumberClick = (num) => {
        if (pin.length < 4 && !success) {
            setPin(pin + num);
        }
    };

    const handleClear = () => {
        setPin("");
        setError(false);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{
                        scale: error ? [1, 1.05, 0.95, 1.02, 1] : 1,
                        opacity: 1,
                        y: 0,
                        x: error ? [0, -10, 10, -5, 0] : 0
                    }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{
                        duration: error ? 0.5 : 0.3,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/10 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                    >
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${success ? 'bg-green-500/20' : error ? 'bg-red-500/20' : 'bg-cyan-500/20'
                                }`}
                            animate={{
                                scale: success || error ? [1, 1.2, 1] : 1,
                                rotate: success ? [0, 360] : 0
                            }}
                        >
                            {success ? (
                                <Check className="text-green-400" size={32} />
                            ) : error ? (
                                <AlertCircle className="text-red-400" size={32} />
                            ) : (
                                <Lock className="text-cyan-400" size={32} />
                            )}
                        </motion.div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            {success ? "Access Granted!" : "Enter PIN"}
                        </h2>
                        <p className="text-gray-400 text-sm">
                            {success
                                ? "Redirecting to AI Tools Dashboard..."
                                : error
                                    ? "Incorrect PIN. Try again."
                                    : "Enter 4-digit PIN to access AI Tools"}
                        </p>
                    </div>

                    {/* PIN Display */}
                    <div className="flex justify-center gap-3 mb-8">
                        {[0, 1, 2, 3].map((index) => (
                            <motion.div
                                key={index}
                                className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 ${success
                                        ? 'border-green-500 bg-green-500/20'
                                        : error
                                            ? 'border-red-500 bg-red-500/20'
                                            : pin.length > index
                                                ? 'border-cyan-500 bg-cyan-500/20'
                                                : 'border-white/10 bg-white/5'
                                    }`}
                                animate={{
                                    scale: pin.length === index ? [1, 1.1, 1] : 1,
                                }}
                            >
                                {pin.length > index && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className={`w-3 h-3 rounded-full ${success ? 'bg-green-400' : error ? 'bg-red-400' : 'bg-cyan-400'
                                            }`}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Number Pad */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <motion.button
                                key={num}
                                onClick={() => handleNumberClick(num.toString())}
                                disabled={success}
                                className={`h-14 rounded-xl font-bold text-lg transition-all ${success
                                        ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/50'
                                    }`}
                                whileHover={!success ? { scale: 1.05 } : {}}
                                whileTap={!success ? { scale: 0.95 } : {}}
                            >
                                {num}
                            </motion.button>
                        ))}
                    </div>

                    {/* Bottom Row: Clear and 0 */}
                    <div className="grid grid-cols-3 gap-3">
                        <motion.button
                            onClick={handleClear}
                            disabled={success}
                            className={`h-14 rounded-xl font-bold text-sm transition-all ${success
                                    ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                                    : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10'
                                }`}
                            whileHover={!success ? { scale: 1.05 } : {}}
                            whileTap={!success ? { scale: 0.95 } : {}}
                        >
                            Clear
                        </motion.button>

                        <motion.button
                            onClick={() => handleNumberClick("0")}
                            disabled={success}
                            className={`h-14 rounded-xl font-bold text-lg transition-all ${success
                                    ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/50'
                                }`}
                            whileHover={!success ? { scale: 1.05 } : {}}
                            whileTap={!success ? { scale: 0.95 } : {}}
                        >
                            0
                        </motion.button>

                        <div className="h-14" /> {/* Spacer */}
                    </div>

                    {/* Hint */}
                    <p className="text-center text-gray-600 text-xs mt-6">
                        Hint: Check username 😉
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
