
"use client";

import { usePresentation } from "@/components/PresentationMode";
import { ArrowRight, Terminal, Globe, Brain, DollarSign, Zap, Code, ExternalLink } from "lucide-react";
import { Slide } from "@/components/Slide";

// Helper components for consistency
function SlideTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-10 tracking-tight">{children}</h2>;
}

function SlideContent({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`max-w-6xl w-full ${className}`}>{children}</div>;
}

function ExternalLinkItem({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5"
            onClick={(e) => e.stopPropagation()} // Prevent slide navigation if clickable
        >
            {children}
            <ExternalLink className="w-3 h-3 opacity-50" />
        </a>
    )
}

export function HeroSlide() {
    const { goToSlide } = usePresentation();

    return (
        <Slide isActive={true} className="text-left">
            <div className="flex flex-col items-start justify-center h-full max-w-7xl mx-auto w-full">

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                    How to make<br /> a lot of money
                    <span className="block text-2xl md:text-4xl font-mono text-neutral-500 mt-6 font-normal tracking-wide">
                        (through Webdev)
                    </span>
                </h1>

                <p className="max-w-3xl text-xl md:text-3xl text-neutral-400 leading-relaxed mb-16 font-light">
                    A zero-to-one curriculum to bypass local competition and compete globally.
                    From Tier 3 to World Class through <span className="text-white font-medium">Systems</span>, <span className="text-white font-medium">Software</span>, and <span className="text-white font-medium">High-Agency</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button
                        onClick={() => goToSlide(2)} // Jump to Curriculum (Phase 1)
                        className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-full transition-all group"
                    >
                        Start The Protocol
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => goToSlide(1)} // Jump to Philosophy
                        className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-neutral-400 hover:text-white transition-colors"
                    >
                        Read Manifesto
                    </button>
                </div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[1000px] h-[1000px] bg-[#5E6AD2] rounded-full blur-[160px] opacity-[0.06] pointer-events-none" />
        </Slide>
    );
}

export function PhilosophySlide() {
    return (
        <Slide isActive={true}>
            <SlideContent>
                <SlideTitle>The Filter</SlideTitle>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10 text-2xl md:text-3xl text-neutral-400 leading-snug font-light">
                        <p><strong className="text-white font-medium">Brittle for the lazy.</strong> <br /> Antifragile for the ambitious.</p>
                        <p>I won&apos;t just teach code. I will teach you guys how to engineer outcomes. <span className="text-red-400">Deadlines are lethal.</span> 1 minute late = 0.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                            <Terminal className="w-8 h-8 text-neutral-300 mb-4" />
                            <div className="text-xl font-medium text-white mb-2">Systems First</div>
                            <div className="text-neutral-500 text-lg">Linux, HTTP, DNS</div>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                            <Globe className="w-8 h-8 text-neutral-300 mb-4" />
                            <div className="text-xl font-medium text-white mb-2">Global Standard</div>
                            <div className="text-neutral-500 text-lg">Earn USD, Spend INR</div>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                            <Brain className="w-8 h-8 text-neutral-300 mb-4" />
                            <div className="text-xl font-medium text-white mb-2">High Agency</div>
                            <div className="text-neutral-500 text-lg">No saviors coming</div>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                            <DollarSign className="w-8 h-8 text-neutral-300 mb-4" />
                            <div className="text-xl font-medium text-white mb-2">Economics</div>
                            <div className="text-neutral-500 text-lg">Code is leverage</div>
                        </div>
                    </div>
                </div>
            </SlideContent>
        </Slide>
    )
}

function CurriculumCard({ week, title, description, tags, links }: { week: string; title: string; description: string; tags: string[], links?: { label: string, url: string }[] }) {
    return (
        <div className="group relative border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-8 xl:p-10 flex flex-col h-full">
            <div className="absolute top-8 right-8 text-sm font-mono text-neutral-500">{week}</div>
            <h3 className="text-2xl font-medium text-neutral-200 mb-4 group-hover:text-white transition-colors">{title}</h3>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed flex-grow">{description}</p>

            <div className="flex flex-col gap-4 mt-auto">
                {links && links.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#5E6AD2]">
                        {links.map(link => (
                            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1" onClick={e => e.stopPropagation()}>
                                {link.label} <ExternalLink className="w-3 h-3" />
                            </a>
                        ))}
                    </div>
                )}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs uppercase tracking-wider font-mono text-neutral-500 bg-white/5 px-3 py-1.5 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Phase1Slide() {
    return (
        <Slide isActive={true}>
            <SlideContent className="max-w-7xl">
                <div className="mb-12">
                    <span className="text-sm font-mono text-[#5E6AD2] uppercase tracking-widest mb-4 block">Phase 01</span>
                    <SlideTitle>The Foundation</SlideTitle>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <CurriculumCard
                        week="Week 01"
                        title="The Black Box"
                        description="Everything is a file. Host a static site on a bare metal Linux server using NGINX. Understand the plumbing of the internet."
                        tags={["Linux", "Bash", "Net"]}
                        links={[
                            { label: "Linux Journey", url: "https://linuxjourney.com/" },
                            { label: "DigitalOcean", url: "https://www.digitalocean.com/" }
                        ]}
                    />
                    <CurriculumCard
                        week="Week 02"
                        title="HTML/CSS Architecture"
                        description="Recreate Linear.app pixel-perfectly without looking at source code. Understand the box model and layout engines deeply."
                        tags={["Semantic HTML", "CSS"]}
                        links={[
                            { label: "Linear.app", url: "https://linear.app/" },
                            { label: "MDN Box Model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" }
                        ]}
                    />
                    <CurriculumCard
                        week="Week 03"
                        title="JavaScript & The Metal"
                        description="The Event Loop visualized. Build a vanilla JS dashboard with no frameworks. Learn how JS actually runs on V8."
                        tags={["Async/Await", "DOM"]}
                        links={[
                            { label: "What the heck is the event loop?", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" },
                            { label: "V8 Engine", url: "https://v8.dev/" }
                        ]}
                    />
                    <CurriculumCard
                        week="Week 04"
                        title="The First Gate: Git"
                        description="Collaborate on a repo with deliberate merge conflicts. Learn rebase, cherry-pick, and bisect."
                        tags={["Git", "Rebase"]}
                        links={[
                            { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
                            { label: "Oh Shit, Git!", url: "https://ohshitgit.com/" }
                        ]}
                    />
                </div>
            </SlideContent>
        </Slide>
    )
}

export function Phase2Slide() {
    return (
        <Slide isActive={true}>
            <SlideContent className="max-w-7xl">
                <div className="mb-12">
                    <span className="text-sm font-mono text-[#5E6AD2] uppercase tracking-widest mb-4 block">Phase 02</span>
                    <SlideTitle>Engineering Rigor</SlideTitle>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <CurriculumCard
                        week="Weeks 05-06"
                        title="React Mental Model"
                        description="UI as a function of state. Build a functional Trello clone with Drag & Drop. Learn reconciliation."
                        tags={["React", "State"]}
                        links={[
                            { label: "React.dev", url: "https://react.dev/" },
                            { label: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" }
                        ]}
                    />
                    <CurriculumCard
                        week="Weeks 07-08"
                        title="Next.js Systems"
                        description="SSR vs CSR. Build a blazing fast Markdown blog engine with caching and ISR."
                        tags={["Next.js", "SSR", "Vercel"]}
                        links={[
                            { label: "Next.js Docs", url: "https://nextjs.org/docs" },
                            { label: "Vercel SDK", url: "https://vercel.com/docs" }
                        ]}
                    />
                    <CurriculumCard
                        week="Weeks 09-10"
                        title="Backend & Data"
                        description="Postgres, Prisma, and database normalization. Designing for multi-tenancy and row-level security."
                        tags={["Postgres", "SQL", "ORM"]}
                        links={[
                            { label: "Supabase", url: "https://supabase.com/" },
                            { label: "Prisma", url: "https://www.prisma.io/" }
                        ]}
                    />
                    <CurriculumCard
                        week="Weeks 11-12"
                        title="Large Codebases"
                        description="Reading code is harder than writing. Grepping, tracing, and understanding ASTs."
                        tags={["Sourcegraph", "Reading"]}
                        links={[
                            { label: "Sourcegraph", url: "https://sourcegraph.com/" },
                            { label: "AST Explorer", url: "https://astexplorer.net/" }
                        ]}
                    />
                </div>
            </SlideContent>
        </Slide>
    )
}

export function RalphSwitchSlide() {
    return (
        <Slide isActive={true}>
            <SlideContent>
                <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-[#5E6AD2]/20 to-purple-900/20 border border-[#5E6AD2]/20 p-12 md:p-20">
                    <div className="absolute top-0 right-0 p-12 opacity-30">
                        <Terminal className="w-64 h-64 text-white/5" />
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5E6AD2]/20 text-[#5E6AD2] text-sm font-mono font-medium mb-8">
                            Week 14 — Special Module
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight">The Ralph Wiggum Technique</h2>
                        <p className="text-neutral-200 text-2xl leading-relaxed mb-6 font-light">
                            &quot;I&apos;m helping!&quot; — A brute-force agentic workflow to cure AI context rot.
                        </p>
                        <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
                            Popularized by <ExternalLinkItem href="https://ghuntley.com/">Geoffrey Huntley</ExternalLinkItem>, this technique embraces the &quot;loop&quot; — automating the iteration process to force AI to correct its own mistakes until success.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-white font-mono text-lg mb-4">Step 1: The Brain</div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">Write a rigid, overly detailed PRD. The AI is the hands, you are the brain.</p>
                                <ExternalLinkItem href="https://github.com/ghuntley/work-scraps">View Huntley&apos;s Scraps</ExternalLinkItem>
                            </div>
                            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-white font-mono text-lg mb-4">Step 2: The Loop</div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">A Bash script that runs the AI, executes tests, and feeds stderr back into the context.</p>
                                <ExternalLinkItem href="https://ralph-wiggum.ai/">Ralph-Wiggum.ai</ExternalLinkItem>
                            </div>
                            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-white font-mono text-lg mb-4">Step 3: Hard Reset</div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">Wipe the chat memory every cycle. Prevent hallucination spirals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideContent>
        </Slide>
    )
}

export function SolopreneurSlide() {
    return (
        <Slide isActive={true}>
            <SlideContent>
                <div className="flex items-center justify-between mb-16">
                    <SlideTitle>Zero to MRR</SlideTitle>
                    <div className="flex flex-col items-center justify-center bg-green-500/10 border border-green-500/20 px-10 py-6 rounded-2xl text-green-400">
                        <span className="text-sm uppercase tracking-wider font-mono mb-2">Target Goal</span>
                        <span className="text-4xl font-bold tracking-tight">$1,000 / mo</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lg font-mono text-neutral-500 mb-6">1</div>
                        <h4 className="text-2xl text-white font-medium mb-4">Pain Audit</h4>
                        <p className="text-lg text-neutral-500 mb-8 flex-grow">Stop thinking. Solve your own problems. If you don&apos;t use it, don&apos;t build it.</p>
                        <div className="mt-auto">
                            <ExternalLinkItem href="https://twitter.com/levelsio">@levelsio</ExternalLinkItem>
                        </div>
                    </div>
                    <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lg font-mono text-neutral-500 mb-6">2</div>
                        <h4 className="text-2xl text-white font-medium mb-4">Weekend Build</h4>
                        <p className="text-lg text-neutral-500 mb-8 flex-grow">48 hours. One feature. Stripe integration. Ship it before you&apos;re ready.</p>
                        <div className="mt-auto">
                            <ExternalLinkItem href="https://stripe.com">Stripe Docs</ExternalLinkItem>
                        </div>
                    </div>
                    <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lg font-mono text-neutral-500 mb-6">3</div>
                        <h4 className="text-2xl text-white font-medium mb-4">Viral Engine</h4>
                        <p className="text-lg text-neutral-500 mb-8 flex-grow">Vertical video arbitrage. 100k views for $0. Marketing is not optional.</p>
                        <div className="mt-auto">
                            <ExternalLinkItem href="https://marclou.com">Marc Lou</ExternalLinkItem>
                        </div>
                    </div>
                </div>
            </SlideContent>
        </Slide>
    )
}

export function ResourcesSlide() {
    return (
        <Slide isActive={true}>
            <SlideContent>
                <SlideTitle>The Library</SlideTitle>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-white flex items-center gap-3">
                            <Code className="w-6 h-6 text-[#5E6AD2]" /> Foundation
                        </h4>
                        <ul className="space-y-4 text-lg text-neutral-500">
                            <li><ExternalLinkItem href="https://linuxjourney.com/">Linux Journey</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://missing.csail.mit.edu/">The Missing Semester</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://howdns.works/">How DNS Works</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://roadmap.sh/backend">Backend Roadmap</ExternalLinkItem></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-white flex items-center gap-3">
                            <Zap className="w-6 h-6 text-[#5E6AD2]" /> Modern Stack
                        </h4>
                        <ul className="space-y-4 text-lg text-neutral-500">
                            <li><ExternalLinkItem href="https://eloquentjavascript.net/">Eloquent JavaScript</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://react.dev/learn">React.dev</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://nextjs.org/learn">Next.js Learn</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://ui.shadcn.com/">shadcn/ui</ExternalLinkItem></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-white flex items-center gap-3">
                            <Brain className="w-6 h-6 text-[#5E6AD2]" /> High Agency
                        </h4>
                        <ul className="space-y-4 text-lg text-neutral-500">
                            <li><ExternalLinkItem href="https://highagency.com">HighAgency.com</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://github.com/donnemartin/system-design-primer">System Design Primer</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://www.kalzumeus.com/standing-invitation/">Patrick McKenzie</ExternalLinkItem></li>
                            <li><ExternalLinkItem href="https://paulgraham.com/articles.html">Paul Graham Essays</ExternalLinkItem></li>
                        </ul>
                    </div>
                </div>
            </SlideContent>
        </Slide>
    )
}
