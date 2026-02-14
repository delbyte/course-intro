
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
            <AnimatePresence mode="popLayout">
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 1.05 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full max-w-6xl mx-auto h-full flex flex-col"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
