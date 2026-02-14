
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    from?: string;
    to?: string;
}

export function GradientText({ children, className, from = "from-neutral-200", to = "to-neutral-500" }: GradientTextProps) {
    return (
        <span className={cn("bg-clip-text text-transparent bg-gradient-to-b", from, to, className)}>
            {children}
        </span>
    );
}
