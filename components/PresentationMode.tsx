
"use client";

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PresentationContextType {
    currentSlide: number;
    totalSlides: number;
    goToNext: () => void;
    goToPrev: () => void;
    goToSlide: (index: number) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export function usePresentation() {
    const context = useContext(PresentationContext);
    if (!context) {
        throw new Error("usePresentation must be used within a PresentationProvider");
    }
    return context;
}

interface PresentationProps {
    children: ReactNode[];
}

export function Presentation({ children }: PresentationProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = children.length;

    const goToNext = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    }, [totalSlides]);

    const goToPrev = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, []);

    const goToSlide = useCallback((index: number) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    }, [totalSlides]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent default scrolling for arrow keys
            if (["ArrowRight", "ArrowLeft", " "].includes(e.key)) {
                e.preventDefault();
            }

            if (e.key === "ArrowRight" || e.key === " ") {
                goToNext();
            } else if (e.key === "ArrowLeft") {
                goToPrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrev]);

    return (
        <PresentationContext.Provider value={{ currentSlide, totalSlides, goToNext, goToPrev, goToSlide }}>
            <div className="relative w-full h-screen overflow-hidden bg-[#08090A] text-white">
                {/* Slides Container */}
                <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {children[currentSlide]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
                    <span className="text-neutral-500 font-mono text-xs">
                        {currentSlide + 1} / {totalSlides}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={goToPrev}
                            disabled={currentSlide === 0}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={currentSlide === totalSlides - 1}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div
                    className="fixed bottom-0 left-0 h-1 bg-[#5E6AD2] transition-all duration-300 ease-out z-50"
                    style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                />
            </div>
        </PresentationContext.Provider>
    );
}
