
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideProps {
    children: ReactNode;
    isActive: boolean;
    className?: string;
}

export function Slide({ children, isActive, className }: SlideProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden",
                !isActive && "pointer-events-none",
                className
            )}
            aria-hidden={!isActive}
        >
            {/* Global Abstract Background - Consistent across all slides */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[1000px] h-[1000px] bg-[#5E6AD2] rounded-full blur-[160px] opacity-[0.06] pointer-events-none" />

            <AnimatePresence mode="popLayout">
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full max-w-6xl mx-auto h-full flex flex-col relative z-10"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
